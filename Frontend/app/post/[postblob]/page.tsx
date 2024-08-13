"use client";
import BackgroundStyleFixed from "../../_Components/backgroundStyle";
import Footer from "../../_Components/footer";
import HomeNavbar from "../../_Components/navbar";
import { FaRegClock } from "react-icons/fa";
import { Suspense, useEffect,useState } from "react";
import { useParams, useSearchParams } from "next/navigation";
import Loading from "@/app/_Components/loading";
export default function Page(){
    const {postblob}=useParams();
    const query=useSearchParams();
    const [article,setArticle]=useState({});
    useEffect(()=>{
        console.log(postblob);
        setArticle({
        articleImg:query.get("artimg"),
        Cate:query.get("cat"),
        title:query.get("title"),
        desc:query.get("desc"),
        authorImg:query.get("authorimg"),
        author:query.get("author"),
        createdAt:query.get("createdat")});
        console.log(article);
    },[postblob]);
    if(Object.keys(article).length==0){
        return <div className="w-screen h-screen flex justify-center items-center"><Loading/></div>
    }

    return(
        <main className="flex flex-col items-center ">
         <BackgroundStyleFixed/>
         <HomeNavbar/>
         <section className="max-w-[1000px] bg-white p-3 rounded-lg shadow-2xl mt-4">
                <Suspense fallback={<Loading/>}>
                <div>
                    <h1 className="text-[30px] font-extrabold uppercase text-center swalling">{article.title}</h1>
                    <div className="flex justify-between px-2 mb-3">
                        <div className="flex gap-x-2 cursor-pointer hover:underline">
                            <span className="w-6 h-6 rounded-full  bg-red-400 overflow-hidden">
                                <img src={article.authorImg} alt="avatar" className="h-full object-cover"/>
                            </span>
                            <span className="font-normal capitalize">{article.author}</span>
                            </div>
                            <div className="flex gap-x-2 items-center">
                            <FaRegClock/>
                            <span>{article.createdAt}</span>
                        </div>
                    </div>
                    <h1 className="capitalize relative font-bold left-4 text-[28px] my-4">sub heading1</h1>
                    <div className="w-full min-h-[200px] max-h-[400px] flex justify-center ">
                            <img src={article.articleImg} alt="author" className="object-cover" />
                    </div>
                    <p className="mt-12 text-[18px] mb-4 text-gray-700 px-6">
                        {article.desc}
                    </p>
                </div>
                </Suspense>
         </section>
         <Footer/>
        </main>
    )
}