"use client";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { getBlogs } from "../_lib/action";
import Loading from "./loading";
import ReactionButtons from "./reactionButtons";
import { useSession } from "next-auth/react";
import { FaPencil, FaTrash } from "react-icons/fa6";
export default function ArticleTemplate(){
  const {data:Session}=useSession();
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
        setBlogs(JSON.stringify(await getBlogs(cat)));
      }
      else{
        setBlogs(JSON.stringify(await getBlogs()));
      }
    })();
  },[blogs,queryString.get("category")]);
  useEffect(()=>{
    // setArticles(data);
    if(blogs){
      setArticles((e:any[]):any=>JSON.parse(blogs));
      // console.log(JSON.parse(blogs).blogs);
      // console.log(articles);
      if(!articles || articles.length==0){
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
        :articles.map((article:any)=>{
          const date=new Date(article.createdAt);
          const formattedDate = date.toLocaleDateString('en-GB', {
            day: '2-digit',
            month: 'long',
            year: 'numeric',
          });
       return <>
       <div className="flex flex-col justify-center h-auto" key={article._id}>
       <div className="relative w-full max-h-[400px] flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-lg p-2 mx-auto border-0 bg-white dark:bg-gray-800">
         <div className="w-2/5 rounded-xl overflow-hidden max-h-[400px] rounded-xl">
           <img
             src={article.thumbnail} 
             alt="article" 
             title={article.title}
             className="h-full w-full object-cover --article--pic "
           />
         </div>
         <div className="w-full md:3/5 flex flex-col space-y-2 py-2">
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
          {Session?.user && <ReportButton user={article.author} Session={Session?.user}/>}
           </div>
           <Link   href={`post/${article._id}`} className="dark:text-gray-400 hover:underline template--title capitalize text-gray-800 md:text-3xl text-xl">
             {article.title}            
           </Link>
           <p className="md:text-lg text-gray-500 font-medium text-base line-clamp-3">
             {article.desc}
           </p>
           <Link href="#" className="hover:underline text-md flex gap-x-2 items-center text-gray-800">
            <div className="relative w-[30px] h-[30px] rounded-full overflow-hidden">
                <img src={article.author.profile_img} alt="avatar" className="w-full h-full object-cover"/>
            </div>
             <span className="font-medium text-gray-600 capitalize">{`${article.author.fullname}`}</span>
           </Link>
            {Session?.user && <ReactionButtons key={article._id} blogId={article._id} classes={"w-[250px] rounded-full"}/>}
         </div>
       </div>
 
     </div>
   </>
        })}
    </>
    )
}

function ReportButton({user,Session}:{Session:any;user:any}){
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
            <ReportMenu user={user} Session={Session} show={toggle}/>
  </div>
}

function ReportMenu({show,user,Session}:{Session:any;user:any;show:boolean}){
  return <div className={`absolute flex flex-col items-center top-11 border border-gray-500 shadow-lg ${show?"hidden":""}` }  >
    {user.email==Session.email && <button className="edit--btn hover:bg-gray-400 p-6 dark:text-white flex text-center flex gap-x-2 border-gray-400 border-t-2 border-black py-2"><FaPencil/>Edit</button>}
    {user.email==Session.email && <button className="edit--btn hover:bg-gray-400 p-4 text-red-500 flex text-center flex gap-x-2 border-gray-400 border-t-2 border-black py-2"><FaTrash/>Delete</button>}
    <button className="bg-gray-300 px-2 dark:bg-black text-red-500 hover:bg-gray-400 border-t-2 border-red-400 py-2"><span className="rounded-full border-red-400 border mr-2 h-1 w-1 px-3 py-1">!</span>Report</button>
    
  </div>
}