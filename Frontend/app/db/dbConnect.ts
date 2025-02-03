import Mongoose from "mongoose";

async function connection(){
    const instance=await Mongoose.connect(process.env.LOCAL_CONN?process.env.LOCAL_CONN:"",{family:4}).catch(e=>console.log("db ERROR",e.message));
    console.log("DB connected");
}


export default connection;
