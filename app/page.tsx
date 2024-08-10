import Image from "next/image";
import { HiOutlinePaintBrush } from "react-icons/hi2";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import Corousel3D from "./_Components/corousel3D";
import Footer from "./_Components/footer";
import Link from "next/link";
export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <div className="fixed w-screen h-screen z-[-1]">
        <div className="h-[30%]"></div>
        <div className="h-[70%] bg-black"></div>
      </div>
      <nav className="p-3 w-full">
        <div className="flex justify-between">
            <ol className="flex gap-x-2">
              <li><FaFacebookF className="swalling"/></li>
              <li><FaXTwitter className="swalling"/></li>
              <li><FaInstagram className="swalling"/></li>
              <li><FaLinkedinIn className="swalling"/></li>
            </ol>
            <div className="flex text-[30px] justify-center items-center relative left-[-50px] --main--logo"><HiOutlinePaintBrush/><span>BloggerS.io</span></div>
            <form action="" className="flex relative p-3">
              <input type="text" placeholder="Search..." className="absolute hidden" />
              <button type="submit" className="text-[25px]"><IoSearchOutline className="swalling"/></button>
            </form>
        </div>
        <div className="w-full">
          <ol className="flex justify-center gap-x-10 --sub-heading">
            <li className=" nav-sub-heading"><Link href="/">HOME</Link></li>
            <li className="flex gap-x-1   nav-sub-heading  items-center drop-down"><span>PAGES</span><IoIosArrowDown className="font-light icon-drop-down"/></li>
            <li className="flex gap-x-1   nav-sub-heading  items-center drop-down"><span>CATEGORIES</span><IoIosArrowDown className="font-light icon-drop-down"/></li>
            <li className=" nav-sub-heading">CONTACT</li>
            <li className=" nav-sub-heading"><Link href="#footer">SUBSCRIBE</Link></li>
          </ol>
        </div>
      </nav>
      <header className="w-full flex flex-col items-center">
          <div className="w-3/4 flex justify-center">
            <Corousel3D/>
          </div>
      </header>
      <section className="flex bg-white">
          <div className="bg-yellow-400 w-3/4">
              <h1>Latest articles</h1>
              <div>
                articles
              </div>
          </div>
          <div className="flex flex-col w-1/4 p-3">
              <h1 className="flex items-center text-[30px]  --main--logo" ><HiOutlinePaintBrush/>BloggerS.io</h1>
              <div>
                <p className="min-w-[200px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus impedit, dicta aspernatur suscipit doloribus maiores tempore totam veritatis minima commodi!</p>
                <form action="" className="w-11/12 flex justify-center items-center border-2 border-gray-200 rounded-lg m-3">
                  <input type="text" placeholder="Search articles" className="p-2"/>
                  <button type="submit" className="swalling"><IoSearchOutline className="text-[20px]"/></button>
                </form>
                <div className="h-1 bg-gray-200"></div>
                <section>
                  <span className="text-[30px]" style={{fontFamily:"Bebas Neue , sans-serif"}}>Top trending 🔥</span>
                  <div className="flex flex-wrap gap-x-2 ">
                    <button className="px-2 py-1 bg-gray-200 rounded-md m-1">Science</button>
                    <button className="px-2  py-1 bg-gray-200 rounded-md m-1">Health</button>
                    <button className="px-2  py-1 bg-gray-200 rounded-md m-1">Politics</button>
                    <button className="px-2 py-1 bg-gray-200 rounded-md m-1">General Awareness</button>
                    <button className="px-2 py-1 bg-gray-200 rounded-md m-1">Sports</button>
                  </div>
                </section>
                <section className="flex flex-col items-center">
                  <span className="text-[30px]" style={{fontFamily:"Bebas Neue"}}>Recommended articles</span>
                  <article className="flex max-w-[330px]">
                    <div className="w-full flex justify-center items-center">
                      <div className="w-2/5 h-[130px] bg-red-200 rounded-lg"></div>
                      <p className="w-3/5 text-[20px] text-gray-600 ml-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, quae?</p>
                    </div>
                  </article>
                </section>
              </div>
          </div>
      </section>
      <Footer/>
    </main>
  );
}
