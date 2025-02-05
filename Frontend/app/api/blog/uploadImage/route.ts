import {NextRequest, NextResponse} from "next/server";
import fs from 'fs';
import { pipeline } from 'stream';
import { promisify } from 'util';
import path from "path";
const pump = promisify(pipeline);
function randomizer(): string {
    const timestamp = Date.now(); // Current timestamp (milliseconds)
    const randomNum = Math.floor(Math.random() * 1e9); // Random number (0 - 999999999)
    return `${timestamp}-${randomNum}`;
}
export async function POST(req:NextRequest) {
    try{
        const formData = await req.formData();
        const file :any = formData.get('file')!;
        console.log(file.name);
        const _id=randomizer();
        const filePath = path.join(process.cwd(), "public/img/post", `${_id}.${file.type.split("/")[1]}`);
        console.log("Saving file to:", filePath);
        await pump(file.stream(), fs.createWriteStream(filePath));
        return NextResponse.json({status:true,data:`/img/post/${_id}.${file.type.split("/")[1]}`})}
    catch (e:any) {
        console.log(e.message);
        return  NextResponse.json({status:false,data:e.message})
    }
}