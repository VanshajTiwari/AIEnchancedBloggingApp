import { NextRequest } from "next/server";
import { createNewBlog } from "../blogController";


export async function POST(NextRequest:NextRequest){
    return createNewBlog(NextRequest);
}