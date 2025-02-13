import { NextRequest, NextResponse } from "next/server";
import blogSchema from "../../db/blogModel";;
import User from "../../db/userModel";


export const getBlogByID=async (req:NextRequest,context:any)=>{
    const {id}=context.params;
    const blogs=await blogSchema.findById(id).populate("author");
    return NextResponse.json({status:"ok",result:{blogs},blogSchema});
}
export const getBlogsByIdWithReviews=async (req:NextRequest,context:any)=>{
    const {id}=context.params;
    const blogs=await blogSchema.findById(id).populate("author").populate({path:"reviews",populate: {
        path: "user",
        select: "fullname profile_img family_name given_name email",
      },
    });
    return NextResponse.json({status:"ok",result:{blogs},blogSchema});
}
export const getAllblogs=async (req:NextRequest,context:any)=>{
    const query=context.query;
    if(!query){
        const blogs=await blogSchema.find({}).populate("author");
        return NextResponse.json({status:"ok",result:{blogs}});   
    }
    const blogs=await blogSchema.find(query).populate("author");
    return NextResponse.json({status:"ok",result:{blogs}});
};

export const createNewBlog=async(req:NextRequest)=>{
    try{
        const data=await req.json();
        let user=await User.findOne({email:data.email})//author.email});
        if(!user){
            return NextResponse.json({status:false,Error:"Unauthorized"});
        }
        const {title,thumbnail,content,category,desc}=data;
        const blog=new blogSchema({title,thumbnail,desc,content:JSON.parse(content),category,author:user._id});
        await blog.save();
        console.log(blog);
        return NextResponse.json({status:true,result:{blog}}); 
    }
    catch(err:any){
        return NextResponse.json({status:false,Error:err.message});
    }
};

export const editExistedBlog=async(req:NextRequest,context:any)=>{
    const {blogid}=context.params;
    const blog=await blogSchema.findById(blogid);
    const {category,content,thumbnail,title}=await req.json();
    if(!blog){
        return NextResponse.json({status:"failed",error:"Not Found"});
    }
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
