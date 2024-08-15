import User from "../model/userModel";
import { Router,Request,Response, NextFunction } from "express";
import {sign,decode,verify,JwtPayload} from "jsonwebtoken";
import dotenv from "dotenv";
import CatchAsync from "../utils/AsyncCatch";
dotenv.config();

function isEmail(username: string): boolean {
    const arr = username.split(/[@.]/);
    // console.log(arr);
    return arr.length == 3;
}
async function generateToken(_id:string|Object):Promise<string>{
    return sign({_id},process.env.SECRET?process.env.SECRET:"",{expiresIn:"1h",issuer:"projectigi"});
}
function decodeFunction(token:string){
    return verify(token,process.env.SECRET?process.env.SECRET:"") as JwtPayload;
}

const Route = Router();

Route.post("/register",CatchAsync(async (req:Request, res:Response) => {
        const { username, firstName, familyName, email, password, confirmpassword } = req.body;
        const userInstance = new User({ username, firstName, familyName, email, password, confirmpassword });
        await userInstance.save();
        res.status(201).json({ status: "ok", data: userInstance });
}));

Route.post("/login",CatchAsync(async (req:Request, res:Response) => {
        const { username, password } = req.body;
        let userData:any;
        if (isEmail(username)) {
            userData = await User.findOne({ email: username });
        } else {
            userData = await User.findOne({ username });
        }
        // console.log(userData);
        if (userData && await userData.comparePassword(password)) {
            // Successful login
            const token=await generateToken(userData._id);
            res.locals.user=userData;
            res.cookie("jwt",token,{httpOnly:true,secure:true});
            res.status(200).json({ status: "ok", data: userData });
        } else {
            // Invalid credentials
            res.status(401).json({ status: "error", message: "Invalid username or password" });
        }
}));

Route.post("/editDetails",protect,CatchAsync(async (req:Request, res:Response) => {
    // console.log(req);
    const {username,firstName,familyName}=req.body;
    const updatedData=await User.findByIdAndUpdate(res.locals.user._id,{username,firstName,familyName},{new:true});
    res.status(201).json({status:"ok",updatedData});
}));

async function protect(req:Request,res:Response,next:NextFunction){
    try{
        if(req.cookies && req.cookies.jwt){
            const payload =decodeFunction(req.cookies.jwt);
            const _id=payload._id;
            res.locals.user=await User.findById(_id);
        }
    }
    catch(err:any){
        res.status(500).json({status:"failed",error:err.message});
    }
    finally{
        next();
    }
}
export default Route;
