"use client";

import { ReactNode } from "react";
import { useFormStatus } from "react-dom";

export default function SubmitButton({label,children}:{label:string,children:ReactNode}){
    const {pending}=useFormStatus();
    return <>
    <button 
    className={`${pending?"bg-gray-500":"bg-black"} p-2 trasition-all text-[14px] duration-300 text-white rounded-lg hover:scale-110`}
    disabled={pending} 
     >
        {pending?label:children}
    </button>
    </>
}