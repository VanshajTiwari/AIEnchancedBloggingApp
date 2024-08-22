import axios from "axios";
import dotenv from "dotenv";
dotenv.config();
const axiosInstance=axios.create({
    baseURL:process.env.BACKEND_URL||"http://localhost:8080"
})
export async function getBlogs(category:string=""){
    try{

        const blogs=await axiosInstance({
            method:"GET",
            url:category==""?"/blog":`/blog?category=${category}`,
        });
        return blogs.data.result; 
    }
    catch(err){
        console.log("axios failed");
    }
}
export async function addnewBlog(data:Object){
    try{
        const blogs=await axiosInstance({
            method:"POST",
            url:"/blog/addnew",
            data
        });
        return blogs.data.status;
    }
    catch(err:any|Error){
        console.log(err);
    }
}