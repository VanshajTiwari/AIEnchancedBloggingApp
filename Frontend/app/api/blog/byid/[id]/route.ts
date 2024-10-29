import { NextRequest } from "next/server"
import {  getBlogByID } from "../../blogController"



export async function GET(req:NextRequest,context:any){
    return getBlogByID(req,context);
}