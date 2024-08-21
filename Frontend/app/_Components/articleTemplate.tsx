"use client";
import { FaRegClock } from "react-icons/fa";
import articles from "./articlesData";
import { useState,useEffect } from "react";
import { getBlogs } from "../_lib/action";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
export default function ArticleTemplate(){
  const [blogs,setBlogs]=useState<string|undefined>();
  const [articles,setArticles]=useState([]);
  const queryString=useSearchParams();

  useEffect(()=>{
    (async()=>{
      if(queryString.get("category")!=null){
        setBlogs(JSON.stringify(await getBlogs(queryString.get("category"))));
      }
      else{
        setBlogs(JSON.stringify(await getBlogs()));
      }
    })();
  },[blogs,queryString.get("category")]);
  useEffect(()=>{
    if(blogs){
      setArticles((e:any[]):any=>JSON.parse(blogs).blogs);
      // console.log(JSON.parse(blogs).blogs);
      // console.log(articles);
    }
  },[blogs])
    return(
        <>
        {articles.length==0?<div className="w-full text-center swalling text-[20px]">No Blogs Found</div>
        :articles.map((article,index)=>{
          const date=new Date(article.createdAt);
          const formattedDate = date.toLocaleDateString('en-GB', {
            day: '2-digit',
            month: 'long',
            year: 'numeric',
          });
       return <div key={index} className="flex bg-white max-w-full rounded-md overflow-hidden shadow-lg --article mb-10">
        <div className="w-[250px] h-[250px] bg-blue-300 overflow-hidden">
          <img src={article.thumbnail} alt="article" className="w-full h-full overflow-cover --article--pic" />
        </div>
        <div className="flex flex-col px-4 justify-between ">
            <div className="flex flex-col">
              <h3 className="mt-4 uppercase text-gray-700 text-[20px] font-bold hover:underline cursor-pointer">{article.category}</h3>
              <Link className="text-[30px] font-bold flex flex-wrap hover:underline cursor-pointer capitalize line-clamp-1" href={`/post/${index}?artimg=${article.thumbnail}&cat=${article.category}&title=${article.title}&desc=${article.desc}&authorimg=${article.author_img}&author=${article.author.firstName+" "+article.author.familyName}&createdat=${article.createdAt}`}>{article.title}</Link>
              <p className="max-w-[690px] line-clamp-3 text-gray-600">{article.desc}</p>
            </div>
            <div className="flex justify-between px-2 mb-3">
                <div className="flex gap-x-2 cursor-pointer hover:underline">
                  <span className="w-6 h-6 rounded-full  bg-red-400 overflow-hidden">
                    <img src={article.author_img} alt="avatar" className="h-full object-cover"/>
                  </span>
                  <span className="font-normal capitalize">{article.author.firstName+" "+article.author.familyName}</span>
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