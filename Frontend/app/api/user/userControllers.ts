import {sign,decode,verify,JwtPayload} from "jsonwebtoken";
import { NextRequest, NextResponse as res } from "next/server";
import {cookies} from "next/headers";
import User from "../../db/userModel";


function isEmail(username: string): boolean {
    const arr = username.split(/[@.]/);
    // console.log(arr);
    return arr.length == 3;
}
async function generateToken(_id:string|Object):Promise<string>{
    return sign({_id},process.env.SECRET?process.env.SECRET:"",{expiresIn:"1h",issuer:"projectigi"});
}

export async function register(req:NextRequest){
        const { username, firstName, familyName, email, password, confirmpassword } = await req.json();
        const userInstance = new User({ username, firstName, familyName, email, password, confirmpassword });
        await userInstance.save();
        res.json({ status: "ok", data: userInstance });
}

export async function login(req:NextRequest){
    const { username, password } =await  req.json();
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
        // res.user = userData;
        cookies().set("jwt", token, { httpOnly: true, secure: true });
        res.json({ status: "ok", data: userData });
    } else {
        // Invalid credentials
        res.json({ status: "error", message: "Invalid username or password" });
    }
}

export async function updateUserDetails(req:NextRequest){
    const {username,firstName,familyName}=await req.json();
    // const updatedData=await User.findByIdAndUpdate(res.user._id,{username,firstName,familyName},{new:true});
    return res.json({status:"ok",result:"updatedData"});
}