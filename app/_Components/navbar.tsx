"use client";
import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";
import { HiOutlinePaintBrush } from "react-icons/hi2";
import { FaFacebookF,FaLinkedinIn,FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function HomeNavbar(){
    const pathname=usePathname();
    useEffect(()=>{
      console.log(pathname);
    },[]);
    return(
        <nav className="p-3 w-full">
        <div className="flex justify-between">
            <ol className="flex gap-x-2">
              <li><FaFacebookF className="swalling"/></li>
              <li><FaXTwitter className="swalling"/></li>
              <li><FaInstagram className="swalling"/></li>
              <li><FaLinkedinIn className="swalling"/></li>
            </ol>
            <div className="flex text-[30px] justify-center items-center relative --main--logo"><HiOutlinePaintBrush/><span>BloggerS.io</span></div>
            <div className="flex items-center">
              <form action="" className="flex relative p-3 search--tab--navbar">
                <input type="text" placeholder="Search..." className="absolute transition bg-gray-200" />
                <button type="submit" className="text-[25px]"><IoSearchOutline className="swalling"/></button>
              </form>
              <Link href={"/signup"} className="uppercase bg-black text-white rounded-lg px-3 py-1 text-[15px]">SignUp</Link>
            </div>
        </div>
        <div className="w-full">
          <ol className="flex justify-center gap-x-10 --sub-heading">
            <li className={`nav-sub-heading  ${pathname=="/"?"font-bold underline":""}`}><Link href="/">HOME</Link></li>
            <li className="">
              <div className="flex items-center  nav-sub-heading   drop-down">
                 <span>Explore</span><IoIosArrowDown className="font-light icon-drop-down"/>
              </div>
              <ol className="drop-down-options options1 flex flex-col mt-2 absolute z-[10] bg-white px-3 capitalize rounded-b-md h-0 overflow-hidden">
                  <li className="hover:bg-gray-300 hover:font-bold swalling p-2 cursor-pointer rounded-md">Post</li>
                  <li className="hover:bg-gray-300 hover:font-bold swalling p-2 cursor-pointer rounded-md">Stories</li>
                  <li className="hover:bg-gray-300 hover:font-bold swalling p-2 cursor-pointer rounded-md">About</li>
                  <li className="hover:bg-gray-300 hover:font-bold swalling p-2 cursor-pointer rounded-md">Random</li>

              </ol>
            </li>
            <li className="">
                <div className="flex items-center  nav-sub-heading   drop-down">
                    <span>CATEGORIES</span>
                    <IoIosArrowDown className="font-light icon-drop-down"/>
                </div>
                <ol className="drop-down-options options2 flex flex-col absolute z-[10] bg-white px-3 capitalize rounded-b-md h-0 overflow-hidden">
                  <li className="hover:bg-gray-300 hover:font-bold swalling p-2 cursor-pointer rounded-md">Science</li>
                  <li className="hover:bg-gray-300 hover:font-bold swalling p-2 cursor-pointer rounded-md">Cyber</li>
                  <li className="hover:bg-gray-300 hover:font-bold swalling p-2 cursor-pointer rounded-md">Health</li>
                  <li className="hover:bg-gray-300 hover:font-bold swalling p-2 cursor-pointer rounded-md">God</li>
                  <li className="hover:bg-gray-300 hover:font-bold swalling p-2 cursor-pointer rounded-md">Culture</li>
                  <li className="hover:bg-gray-300 hover:font-bold swalling p-2 cursor-pointer rounded-md">Lifestyle</li>
                  <li className="hover:bg-gray-300 hover:font-bold swalling p-2 cursor-pointer rounded-md">Kids</li>
                  <li className="hover:bg-gray-300 hover:font-bold swalling p-2 cursor-pointer rounded-md">Awareness</li>
                  <li className="hover:bg-gray-300 hover:font-bold swalling p-2 cursor-pointer rounded-md">Politics</li>
                  <li className="hover:bg-gray-300 hover:font-bold swalling p-2 cursor-pointer rounded-md">Other</li>
                </ol>
            </li>
            <li className={`nav-sub-heading ${pathname=="/contact underline"?"font-bold":""}`}><Link href={"#footer"}>CONTACT </Link></li>
            <li className={`nav-sub-heading ${pathname=="/about"?"font-bold underline":""}`}><Link href="/about">ABOUT</Link></li>
          </ol>
        </div>
      </nav>
    )
}