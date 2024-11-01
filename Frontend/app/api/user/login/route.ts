import { NextRequest as req, NextResponse, NextRequest } from "next/server";
import { login } from "../userControllers";
import CatchAsync from "../../utils/AsyncCatch";
import connection from "@/app/db/dbConnect";
export async function POST(req:NextRequest){
    connection();
    return CatchAsync(login(req));
}

export async function GET(){
    connection();
    return NextResponse.json({message:"route for message is working now"});
}
