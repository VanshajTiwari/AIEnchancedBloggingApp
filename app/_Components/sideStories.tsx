import Image from "next/image";
import { HiOutlinePaintBrush } from "react-icons/hi2";
import { IoSearchOutline } from "react-icons/io5";
import RecommendedArticle from "./recommededArticle";
export default function SideStories(){
    return(
        <div className="flex flex-col w-[30%] p-3">
        <h1 className="flex items-center text-[30px]  --main--logo" ><HiOutlinePaintBrush/>BloggerS.io</h1>
        <div>
          <p className="min-w-[200px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus impedit, dicta aspernatur suscipit doloribus maiores tempore totam veritatis minima commodi!</p>
          <form action="" className="w-11/12 flex justify-center items-center border-2 border-gray-200 rounded-lg m-3">
            <input type="text" placeholder="Search articles" className="p-2"/>
            <button type="submit" className="swalling"><IoSearchOutline className="text-[20px]"/></button>
          </form>
          <div className="border-b-[1px] bg-gray-200"></div>
          <section className="flex flex-col items-center">
            <span className="text-[30px]" style={{fontFamily:"Bebas Neue , sans-serif"}}>Top trending 🔥</span>
            <div className="flex flex-wrap gap-x-2 justify-center ">
              <button className="px-2 py-1 bg-gray-200 rounded-md m-1">Science</button>
              <button className="px-2  py-1 bg-gray-200 rounded-md m-1">Health</button>
              <button className="px-2  py-1 bg-gray-200 rounded-md m-1">Politics</button>
              <button className="px-2 py-1 bg-gray-200 rounded-md m-1">General Awareness</button>
              <button className="px-2 py-1 bg-gray-200 rounded-md m-1">Sports</button>
            </div>
          </section>
          <section className="flex flex-col items-center mt-2">
            <span className="text-[30px]" style={{fontFamily:"Bebas Neue"}}>Recommended articles</span>
            <div className="flex flex-col items-center gap-y-4">
                <RecommendedArticle/>
                <RecommendedArticle/>
                <RecommendedArticle/>
            </div>
          </section>
        </div>
    </div>
    )
}