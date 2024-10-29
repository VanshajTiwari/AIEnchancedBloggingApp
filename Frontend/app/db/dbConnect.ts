import Mongoose from "mongoose";

async function connection(){
    await Mongoose.connect("",{family:4}).catch(e=>console.log(e.message));
    console.log("DB connected");
}
export default connection;
