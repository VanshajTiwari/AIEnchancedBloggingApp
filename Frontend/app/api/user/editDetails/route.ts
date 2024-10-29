import { NextRequest, NextResponse } from "next/server"
import { updateUserDetails } from "../userControllers";
import CatchAsync from "../../utils/AsyncCatch";

export async function POST(req:NextRequest){
    return CatchAsync(updateUserDetails(req));
};

export async function GET(){
    return NextResponse.json({message:"editDetailsRouteWorkign"});
};