import { NextRequest } from "next/server";
import { getAllblogs } from "../blogController";



export async function GET(req:NextRequest,Context:any){
    return getAllblogs(req,Context);
}