import { Request,Response,NextFunction, response } from "express";
export default function CatchAsync(fun:Function){
      return async (req:Request,res:Response,next:NextFunction)=>await fun(req,res,next).catch((err:any)=>res.status(500).json({status:"failed",error:err.message}));
}