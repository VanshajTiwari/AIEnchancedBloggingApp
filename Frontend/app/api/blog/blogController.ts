import { NextRequest, NextResponse } from "next/server";
import blogSchema from "../../db/blogModel";;
import User from "../../db/userModel";

export const getBlogByID=async (req:NextRequest,context:any)=>{
    const {id}=context.params;
    const blogs=await blogSchema.findById(id).populate("author");
    return NextResponse.json({status:"ok",result:{blogs}});
}
export const getAllblogs=async (req:NextRequest,context:any)=>{
    const query=context.query;
    const blogs=await blogSchema.find(query).populate("author");
    return NextResponse.json({status:"ok",result:{blogs}});
};

export const createNewBlog=async(req:NextRequest)=>{
    const {data}=await req.json();
    // console.log(data);
    let {author}=await req.json();
    let user=await User.findOne({email:author.email});
    if(user){
        author=user;
    }
    else{
         author=await User.create(author);
         await author.save();
    }
    const {title,thumbnail,content,category,desc}=data;
    const blog=new blogSchema({title,thumbnail,desc,content,category,author});
    // console.log(blog);
    await blog.save();
    return NextResponse.json({status:"ok",result:{blog}});
};

export const editExistedBlog=async(req:NextRequest,context:any)=>{
    const {blogid}=context.params;
    const blog=await blogSchema.findById(blogid);
    const {category,content,thumbnail,title}=await req.json();
    if(!blog){
        return NextResponse.json({status:"failed",error:"Not Found"});
    }
    // if(NextResponse==null || blog.author!=NextResponse.id){
    //     return NextResponse.json({status:"failed",error:"Unauthorized"});
    // }
    blog.category=category;
    blog.content=content;
    blog.thumbnail=thumbnail;
    blog.title=title;
    await blog.save();
    return NextResponse.json({status:"ok",result:{blog}});
};

export const deleteExistedBlog=async(req:NextRequest,context:any)=>{
    const {blogid}=context.params;
    const blog=await blogSchema.findById(blogid);
    if(!blog){
        return NextResponse.json({status:"failed",error:"Not Found"});
    }
    // if(NextResponse==null || blog.author!=NextResponse.id){
    //     return NextResponse.json({status:"failed",error:"Unauthorized"});
    // }
    await blogSchema.deleteOne({_id:blog._id});
    return NextResponse.json({status:"ok",result:{blog}});
};  
