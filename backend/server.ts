import Express from "express";
import morgan from "morgan";
import User from "./model/userModel";
import dotenv from "dotenv";
import Mongoose  from "mongoose";
const App=Express();
dotenv.config();
App.use(morgan("dev"));
App.use(Express.json());
App.post("/registe",(req,res)=>{
   const {username,firstName,familyName,email,password,currentpassword}= req.body;
   const userInstance=new User({username,firstName,familyName,email,password,currentpassword});
   userInstance.save();
   res.status(201).json({status:"ok",data:userInstance});
});
const dbString:string=process.env.LOCAL_CONN || "";
Mongoose.connect(dbString).then(e=>console.log("DB connected"));
App.listen(8080,()=>{
    console.log("http://localhost:8080");
})