import Express from "express";
import morgan from "morgan";
import User from "./model/userModel";
import dotenv from "dotenv";
import Mongoose  from "mongoose";
import userRoute from "./routes/userRoute";
import Parser from "cookie-parser";
const App=Express();
dotenv.config();
App.use(morgan("dev")); 
App.use(Express.json());
App.use(Parser());
const dbString:string=process.env.LOCAL_CONN || "";
App.use("/",userRoute);



Mongoose.connect(dbString).then(e=>console.log("DB connected"));
App.listen(8080,()=>{
    console.log("http://localhost:8080");
})