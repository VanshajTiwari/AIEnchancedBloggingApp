import axios from "axios";

const baseURL=process.env.NEXT_PUBLIC_BACKEND_URL;
// console.log(baseURL)
const axiosInstance=axios.create({
    baseURL:baseURL
})
export async function getBlogs(category:string|null=""){
    try{
        console.log("called");
        const blogs=await axiosInstance({
            method:"GET",
            url:category==""?"/blog":`/blog?category=${category}`,
        });
        console.log(blogs);
        return blogs.data.result; 
    }
    catch(err){
        // console.error("server error");
        return "";
    }
}
export async function addnewBlog(data:Object,author:unknown){
    try{
        const blogs=await axiosInstance({
            method:"POST",
            url:"/blog/addnew",
            data:{data,author}
        });
        return blogs.data.status;
    }
    catch(err:any|Error){
        console.log(err);
    }
}
export async function getBlogById(id:string|string[]){
    try{
        const blogs=await axiosInstance({
            method:"GET",
            url:`/blog/byid/${id}`,
        });
        return blogs.data.result.blogs;
    }
    catch(err:any|Error){
        console.log(err);
    }
}