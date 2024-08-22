"use client";
import BackgroundStyleFixed from "../../_Components/backgroundStyle";
import Footer from "../../_Components/footer";
import HomeNavbar from "../../_Components/navbar";
import { FaRegClock } from "react-icons/fa";
import { Suspense, useEffect,useState } from "react";
import { useParams, useSearchParams } from "next/navigation";
import Loading from "@/app/_Components/loading";
import PostEditor from "@/app/_Components/postAdder";
function stylishcreator(createdAt:Date):string{
    const date=new Date(createdAt);
      const formattedDate = date.toLocaleDateString('en-GB', {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
      });
    return formattedDate};
export default function Page(){
    const {postblob}=useParams();
    const query=useSearchParams();
    const [article,setArticle]=useState({});
    useEffect(()=>{
        setArticle({
        articleImg:query.get("artimg"),
        Cate:query.get("cat"),
        title:query.get("title"),
        desc:query.get("desc"),
        authorImg:query.get("authorimg"),
        author:query.get("author"),
        createdAt:stylishcreator(query.get("createdat"))});
        


    },[postblob]);
    if(Object.keys(article).length==0){
        return <div className="w-screen h-screen flex justify-center items-center"><Loading/></div>
    }

    return(
        <main className="flex flex-col items-center ">
         <BackgroundStyleFixed/>
         <HomeNavbar/>
         <section className="w-[1000px] p-3 rounded-lg shadow-2xl mt-4">
                <Suspense fallback={<Loading/>}>
                    <PostEditor/>
                </Suspense>
         </section>
         <Footer/>
        </main>
    )
}