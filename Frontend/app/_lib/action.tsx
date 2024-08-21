import axios from "axios";
import dotenv from "dotenv";
dotenv.config();
const axiosInstance=axios.create({
    baseURL:process.env.BACKEND_URL||"http://localhost:8080"
})
export async function getBlogs(category:string=""){
    const blogs=await axiosInstance({
        method:"GET",
        url:category==""?"/blog":`/blog?category=${category}`,
    });
    return blogs.data.result; 
}