"use client";
// import data from "./../_Components/articlesData";
import { FaRegClock } from "react-icons/fa";
import articles from "./articlesData";
import { useState,useEffect } from "react";
import { getBlogs } from "../_lib/action";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import Loading from "./loading";
export default function ArticleTemplate(){
  const [blogs,setBlogs]=useState<string|undefined>();
  const [articles,setArticles]=useState<any>([]);
  const queryString=useSearchParams();
  const [ErrorMessage,setError]=useState("");

  useEffect(()=>{
    (async()=>{
      if(queryString.get("category")!=null){
        let cat=queryString.get("category");
        if(cat===undefined){
          cat=null;
        }
        console.log("catrolller");
        setBlogs(JSON.stringify(await getBlogs(cat)));
      }
      else{
        console.log("all");
        setBlogs(JSON.stringify(await getBlogs()));
      }
    })();
  },[blogs,queryString.get("category")]);
  useEffect(()=>{
    console.log("blogs", blogs);
    // setArticles(data);
    if(blogs){
    
      setArticles((e:any[]):any=>JSON.parse(blogs).blogs);
      // console.log(JSON.parse(blogs).blogs);
      console.log(articles);
      if(articles && articles.length==0){
        setError("Internal Server Error");
      }
      else{
        setError("");
      }
    }
  },[blogs,ErrorMessage])
    return(
        <>
        {(ErrorMessage!="" || articles.length==0)?<div className="w-full flex justify-center items-center text-[20px] ">{ErrorMessage==""?<Loading/>:<h1 className="text-red-600 font-bold relative  top-4">{`Internal Sever ERROR :(`}</h1>}</div>
        :articles.map((article:any,index)=>{
          const date=new Date(article.createdAt);
          const formattedDate = date.toLocaleDateString('en-GB', {
            day: '2-digit',
            month: 'long',
            year: 'numeric',
          });
       return <div key={index} className="flex bg-white max-w-full rounded-md overflow-hidden shadow-lg --article mb-10">
        <div className="w-[340px] h-[250px] bg-blue-300 overflow-hidden">
          <img src={article.thumbnail} alt="article" className="h-full w-full object-cover --article--pic" />
        </div>

        <div className="flex flex-col px-4 justify-between ">
            <div className="flex flex-col">
              <h3 className="mt-4 uppercase text-gray-700 text-[20px] font-bold hover:underline cursor-pointer">{article.category}</h3>
              <Link className="text-[30px] font-bold hover:underline cursor-pointer capitalize line-clamp-1" href={`post/${article._id}`}>{article.title}</Link>

              <p className="max-w-[690px] line-clamp-3 text-gray-600">{article.desc}</p>
            </div>
            <div className="flex justify-between px-2 mb-3">
                <div className="flex gap-x-2 cursor-pointer hover:underline">
                  <span className="w-6 h-6 rounded-full  bg-red-400 overflow-hidden">
                    <img src={article.author.profile_img} alt="avatar" className="h-full object-cover"/>
                  </span>
                  <span className="font-normal capitalize">{`${article.author.firstName} ${article.author.familyName}`}</span>
                </div>
                <div className="flex gap-x-2 items-center">
                  <FaRegClock/>
                  <span>{formattedDate}</span>
                </div>
            </div>
        </div>
    </div>
        })}
    </>
    )
}