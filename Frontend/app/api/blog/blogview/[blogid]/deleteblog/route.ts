import { NextRequest } from "next/server";
import { deleteExistedBlog } from "../../../blogController";


export async function DELETE(req:NextRequest,Context:any){
    return deleteExistedBlog(req,Context);
}