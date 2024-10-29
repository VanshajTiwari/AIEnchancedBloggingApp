import { NextRequest } from "next/server";
import { editExistedBlog } from "../../../blogController";



export async function PATCH(req:NextRequest,context:any){
    return editExistedBlog(req,context);
}