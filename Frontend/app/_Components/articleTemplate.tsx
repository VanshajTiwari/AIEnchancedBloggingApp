import { FaRegClock } from "react-icons/fa";
import articles from "./articlesData";
import Link from "next/link";
export default function ArticleTemplate(){
    return(
        <>
        {articles.map((article,index)=>{
       return <div key={index} className="flex bg-white max-w-full rounded-md overflow-hidden shadow-lg --article mb-10">
        <div className="w-[250px] h-[250px] bg-blue-300 overflow-hidden">
          <img src={article.img} alt="article" className="w-full h-full overflow-cover --article--pic" />
        </div>
        <div className="flex flex-col px-4 justify-between ">
            <div className="flex flex-col">
              <h3 className="mt-4 uppercase text-gray-700 text-[20px] font-bold hover:underline cursor-pointer">{article.category}</h3>
              <Link className="text-[30px] font-bold flex flex-wrap hover:underline cursor-pointer capitalize line-clamp-1" href={`/post/${index}?artimg=${article.img}&cat=${article.category}&title=${article.title}&desc=${article.desc}&authorimg=${article.author_img}&author=${article.author}&createdat=${article.createdAt}`}>{article.title}</Link>
              <p className="max-w-[690px] line-clamp-3 text-gray-600">{article.desc}</p>
            </div>
            <div className="flex justify-between px-2 mb-3">
                <div className="flex gap-x-2 cursor-pointer hover:underline">
                  <span className="w-6 h-6 rounded-full  bg-red-400 overflow-hidden">
                    <img src={article.author_img} alt="avatar" className="h-full object-cover"/>
                  </span>
                  <span className="font-normal capitalize">{article.author}</span>
                </div>
                <div className="flex gap-x-2 items-center">
                  <FaRegClock/>
                  <span>{article.createdAt}</span>
                </div>
            </div>
        </div>
    </div>
        })}
    </>
    )
}