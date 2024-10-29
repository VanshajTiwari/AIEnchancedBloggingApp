import { NextRequest, NextResponse } from "next/server";
import { register } from "../userControllers";
import CatchAsync from "../../utils/AsyncCatch";
export async function POST(req:NextRequest){
    return CatchAsync(register(req));
}

export async function GET(){
    return NextResponse.json({message:"working api for get register"});
}