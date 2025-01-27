"use client";
import Loading from "@/app/_Components/loading";
import StyleDate from "@/app/_Components/styleDate";
import { getBlogById } from "@/app/_lib/action";
import Image from "next/image";
import { useParams, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { FaRegClock } from "react-icons/fa";
export default function DetailsView(){
    const {postblob}=useParams();
    
    const query=useSearchParams();
    const [article,setArticle]=useState<any>();
    useEffect(()=>{
        (async()=>{
            // console.log(await getBlogById(postblob));
            setArticle(await getBlogById(postblob));
            // console.log(article);
        })();
    },[postblob]);
    if(article===undefined){
        return <div className="m-auto w-[100px] h-[100px]"><Loading/></div>
    }
    return <>
                    <div className="pb-12">
                    <h1 className="text-[30px] font-extrabold uppercase text-center swalling">{article.title}</h1>
                    <div className="flex justify-between px-2 mb-3">
                        <div className="flex gap-x-2 cursor-pointer hover:underline">
                            <span className="w-6 h-6 rounded-full  bg-red-400 overflow-hidden relative">
                                <Image src={article.author.profile_img} alt="avatar" fill className="h-full object-cover"/>
                            </span>
                            <span className="font-normal capitalize">{article.author.firstName+" "+article.author.familyName}</span>
                            </div>
                            <div className="flex gap-x-2 items-center">
                            <FaRegClock/>
                            <span><StyleDate date={article.createdAt}/></span>
                        </div>
                    </div>
                    <div className="w-full min-h-[200px] max-h-[400px] overflow-hidden flex justify-center ">
                            <img src={article.thumbnail} alt="Article Image" className="h-full object-cover" />
                    </div>
                    <p className="text-[18px] text-gray-700 px-6">
                        {article.desc}
                    </p>
                    {(article.content).map((sub:any,index:number)=>
                        {return <div key={index}>  
                            {sub.con_type=="heading" && <h1 className="capitalize relative font-bold left-4 text-[28px]" key={Date.now()}>{sub.data}</h1>}
                            {sub.con_type=="paragraph" &&<p className="text-[18px] text-gray-700 py-2 px-4" key={Date.now()}>{sub.data}</p>}
                            {sub.con_type=="image" &&<img className="w-3/4" src={sub.data} key={Date.now()}/>}
                        </div>}
                    )
                    }
                </div>
    </>
}