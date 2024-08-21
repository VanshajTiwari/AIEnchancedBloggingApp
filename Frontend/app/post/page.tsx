"use client";
import { useSearchParams } from "next/navigation";
import BackgroundStyleFixed from "../_Components/backgroundStyle";
import Footer from "../_Components/footer";
import HomeNavbar from "../_Components/navbar";
import { useEffect, useState } from "react";
import ArticleTemplate from "../_Components/articleTemplate";
import Pagination from "../_Components/pagination";

export default function Page(){
    const searchParams=useSearchParams();
    const [Cate,setcat]=useState(searchParams.get("category")!==null?searchParams.get("category"):"all");

    useEffect(()=>{
        setcat(searchParams.get('category'));
    },[searchParams.get("category")]);
    
    return(
        <main className="flex flex-col items-center">
            <BackgroundStyleFixed/>
            <HomeNavbar/>
            <section className="mt-3 w-[1000px] bg-yellow-400 p-4 rounded-md">
                <h1 className="text-[35px] m-auto uppercase w-[400px] font-bold border-2 border-black px-2 swalling cursor-default mb-4 text-center">{Cate!="all"?Cate:""}</h1>
                <ArticleTemplate/>
                <Pagination/>
            </section>

            <Footer/>
        </main>
    )
}