import mongoose, {Document,Mongoose,Schema} from "mongoose";

interface BlogI extends Document{
    author:string;
    createdAt:Date;
    title:string;
    content:[
        type:string|number,
        data:string
    ],
    lastupdated:string;

};

const schema=new Schema({
    author:{type:mongoose.Schema.Types.ObjectId,ref:"user"},
    createdAt:Date,
    title:{type:String},
    content:{type:[{type:String,data:String}]},
    lastUpdated:{
        type:Date,
        default:Date.now()
    }

});
schema.pre(["findOneAndUpdate","findOneAndDelete"],async function(next){
    console.log("RUnedd");
    next();
})
schema.pre("save",async function(next){
    this.lastUpdated=new Date();
});

const blogSchema=mongoose.model('blog',schema);
export default blogSchema;