import { NextRequest as req, NextResponse, NextRequest } from "next/server";
import { login } from "../userControllers";
import CatchAsync from "../../utils/AsyncCatch";

export async function POST(req:NextRequest){
    return CatchAsync(login(req));
}

export async function GET(){
    return NextResponse.json({message:"route for message is working now"});
}
