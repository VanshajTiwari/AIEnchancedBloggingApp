"use client";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { getBlogs } from "../_lib/action";
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
        :articles.map((article:any,index:number)=>{
          const date=new Date(article.createdAt);
          const formattedDate = date.toLocaleDateString('en-GB', {
            day: '2-digit',
            month: 'long',
            year: 'numeric',
          });
       return <>
       <div className="flex flex-col justify-center" key={index}>
       <div className="relative w-full max-h-[400px] flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-lg p-2 mx-auto border border-white bg-white">
         <div className="w-2/5 rounded-xl overflow-hidden max-h-[400px] rounded-xl bg-white">
           <img
             src={article.thumbnail} 
             alt="article" 
             title={article.title}
             className="h-full w-full object-cover --article--pic"
           />
         </div>
         <div className="w-full md:3/5 bg-white flex flex-col space-y-2 py-2">
           <div className="flex justify-between items-center">
             <Link href={`/post?category=${article.category}`} className="text-gray-500 font-medium hidden md:block uppercase">{article.category}</Link>
             <div className="flex items-center">
               <svg
                 xmlns="http://www.w3.org/2000/svg"
                 className="h-5 w-5 text-yellow-500"
                 viewBox="0 0 20 20"
                 fill="currentColor"
               >
                 <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
               </svg>
               <p className="text-gray-600 font-bold text-sm ml-1">
                 4.96
                 <span className="text-gray-500 font-normal">(76 reviews)</span>
               </p>
             </div>
             <div>
               <svg
                 xmlns="http://www.w3.org/2000/svg"
                 className="h-5 w-5 text-pink-500"
                 viewBox="0 0 20 20"
                 fill="currentColor"
               >
                 <path
                   fillRule="evenodd"
                   d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                   clipRule="evenodd"
                 />
               </svg>
             </div>
             <div className="bg-gray-200 px-3 py-1 rounded-full text-xs font-medium text-gray-800 hidden md:block">
               Superhost
             </div>
          <ReportButton/>
           </div>
           <Link   href={`post/${article._id}`} className="hover:underline font-black capitalize text-gray-800 md:text-3xl text-xl">
             {article.title}            
           </Link>
           <p className="md:text-lg text-gray-500 text-base line-clamp-3">
             {article.desc}
           </p>
           <Link href="/user/vanshajt01" className="hover:underline text-md font-black flex gap-x-2 items-center text-gray-800">
            <div className="relative w-[40px] h-[40px] rounded-full overflow-hidden">
                <Image fill src={article.author.profile_img} alt="avatar" quality={80} className="object-cover"/>
            </div>
             <span className="font-medium text-gray-600 capitalize">{`${article.author.given_name} ${article.author.family_name}`}</span>
           </Link>
            <LikersButton/>
         </div>
       </div>
 
     </div>
   </>
        })}
    </>
    )
}
function LikersButton(){
  const [downvote,setDownvote]=useState(false);
  const [upvote,setUpvote]=useState(false);
  const [share,setShare]=useState(false);
  return (
    <div className="relative top-2 flex justify-around max-w-[220px] rounded-full overflow-hidden border border-gray-300">
    <button className="focus:bg-pink-400 focus:text-white flex text-sm items-center justify-center border-r border-gray-300 pr-2 py-2 w-1/2 h-full hover:bg-gray-300">
        <svg 
        width={"20px"} 
        height={"20px"} 
        viewBox="0 0 24 24" 
        xmlns="http://www.w3.org/2000/svg">
          <path d="M12.781 2.375c-.381-.475-1.181-.475-1.562 0l-8 10A1.001 1.001 0 0 0 4 14h4v7a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-7h4a1.001 1.001 0 0 0 .781-1.625l-8-10zM15 12h-1v8h-4v-8H6.081L12 4.601 17.919 12H15z"/></svg>
        <h4>UP</h4>
    </button>
    <button className="focus:bg-red-400 focus:text-white flex text-sm items-center justify-center  border-r border-gray-300 pr-2 py-2 w-1/2 h-full hover:bg-gray-300">
        <svg
         className="rotate-180" 
         width={"20px"} 
         height={"20px"} 
         viewBox="0 0 24 24" 
         xmlns="http://www.w3.org/2000/svg">
          <path d="M12.781 2.375c-.381-.475-1.181-.475-1.562 0l-8 10A1.001 1.001 0 0 0 4 14h4v7a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-7h4a1.001 1.001 0 0 0 .781-1.625l-8-10zM15 12h-1v8h-4v-8H6.081L12 4.601 17.919 12H15z"/>
        </svg>
        <h4>DoWn</h4>
    </button>
    <button className="focus:bg-blue-400 focus:text-white flex text-sm items-center justify-center pr-2 py-2 w-1/2 h-full hover:bg-gray-300">
    <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="SVGRepo_bgCarrier" strokeWidth="0"/>
            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/>
            <g id="SVGRepo_iconCarrier"> <path d="M4 12C4 13.3807 5.11929 14.5 6.5 14.5C7.88071 14.5 9 13.3807 9 12C9 10.6193 7.88071 9.5 6.5 9.5" stroke="#000000" strokeWidth="1.5" strokeLinecap="round"/> <path d="M14 6.5L9 10" stroke="#000000" strokeWidth="1.5" strokeLinecap="round"/> <path d="M14 17.5L9 14" stroke="#000000" strokeWidth="1.5" strokeLinecap="round"/> <path d="M16.5 21C17.8807 21 19 19.8807 19 18.5C19 17.1193 17.8807 16 16.5 16C15.1193 16 14 17.1193 14 18.5" stroke="#000000" strokeWidth="1.5" strokeLinecap="round"/> <path d="M18.665 6.74993C17.9746 7.94566 16.4457 8.35535 15.2499 7.66499C14.0542 6.97464 13.6445 5.44566 14.3349 4.24993C15.0252 3.0542 16.5542 2.64451 17.7499 3.33487" stroke="#000000" strokeWidth="1.5" strokeLinecap="round"/> </g>
    </svg>              
    <h4>Share</h4>
    </button>
</div>
  )
}
function ReportButton(){
  const [toggle,setToggle]=useState(true);
  function handleToggle(){
    setToggle(!toggle);
  }
  return <div className=" reltive flex flex-col items-end">
               <button onClick={handleToggle} className="bg-gray-200 relative text-center font-bold  p-2 rounded-md hover:bg-gray-300 active:bg-gray-300">
             <svg xmlns="http://www.w3.org/2000/svg" width="12px" height="12px" viewBox="0 0 24 24" fill="none" className="">
                 <circle cx="5" cy="12" r="2" stroke="#1C274C" strokeWidth="1.5"/>
                 <circle cx="12" cy="12" r="2" stroke="#1C274C" strokeWidth="1.5"/>
                 <circle cx="19" cy="12" r="2" stroke="#1C274C" strokeWidth="1.5"/>
             </svg>
             </button>
             <ReportMenu show={toggle}/>
  </div>
}

function ReportMenu({show}:{show:boolean}){
  return <div className={`absolute top-9 shadow-lg  p-2 ${show?"hidden":""}` }  >
    <button className="text-red-500 border-t-2 border-red-400">Report!</button>
  </div>
}