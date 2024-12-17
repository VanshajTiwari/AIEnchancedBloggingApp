"use client";
import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";
import { HiOutlinePaintBrush } from "react-icons/hi2";
import { FaFacebookF,FaLinkedinIn,FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { getBlogs } from "../_lib/action";
import { useAuth, useClerk, useUser } from "@clerk/nextjs";

export default function HomeNavbar(){
  const {isLoaded,isSignedIn,userId}=useAuth();
  const {signOut} =useClerk();
  const {user} =useUser();
    const pathname=usePathname();
    return(
        <nav className="p-3 w-full">
        <div className="flex justify-between">
            <ol className="flex gap-x-2">
              <li><FaFacebookF className="swalling"/></li>
              <li><FaXTwitter className="swalling"/></li>
              <li><FaInstagram className="swalling"/></li>
              <li><FaLinkedinIn className="swalling"/></li>
            </ol>
            <div className="flex text-[30px] justify-center items-center relative --main--logo"><HiOutlinePaintBrush/><span>AI Enchance blogging</span></div>
            <div className="flex items-center">
              <form action="" className="flex relative p-3 search--tab--navbar">
                <input type="text" placeholder="Search..." className="absolute transition bg-gray-200" />
                <button type="submit" className="text-[25px]"><IoSearchOutline className="swalling"/></button>
              </form>
              {isSignedIn && user?
              <div className="flex justify-center items-center ">
                  <img src={user.imageUrl} className="w-6 h-6 rounded-full mr-1"></img>
                  <span className="hover:underline">{user.fullName}</span>
                  <button onClick={() => signOut({ redirectUrl: '/' })} className="border-2 border-black py-2 px-1 mx-2 rounded-md soft hover:bg-black hover:text-white">Logout</button>
              </div>:
              <Link href={"/sign-up"} className="uppercase bg-black text-white rounded-lg px-3 py-1 text-[15px] swalling">SignUp</Link>}
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
                  {<li className="hover:bg-gray-300 hover:font-bold swalling p-2 cursor-pointer rounded-md"><Link href="/post">Post</Link></li>}
                  <li className="hover:bg-gray-300 hover:font-bold swalling p-2 cursor-pointer rounded-md">Stories</li>
                  <li className="hover:bg-gray-300 hover:font-bold swalling p-2 cursor-pointer rounded-md">About</li>
                  <li className="hover:bg-gray-300 hover:font-bold swalling p-2 cursor-pointer rounded-md">Random</li>

              </ol>
            </li>
            {isSignedIn && <li><Link href="/post/addpost" className="px-4 py-2  rounded-md hover:border-2 border-black hover:bg-white hover:text-black bg-black text-white font-bold">Post</Link></li>}
            <li className="">
                <div className="flex items-center  nav-sub-heading   drop-down">
                    <span>CATEGORIES</span>
                    <IoIosArrowDown className="font-light icon-drop-down"/>
                </div>
                <ol className="drop-down-options options2 flex flex-col absolute z-[10] bg-white px-3 capitalize rounded-b-md h-0 overflow-hidden">
                  <li className="hover:bg-gray-300 hover:font-bold swalling p-2 cursor-pointer rounded-md"><Link href="/post?category=science">Science</Link></li>
                  <li className="hover:bg-gray-300 hover:font-bold swalling p-2 cursor-pointer rounded-md"><Link href="/post?category=cyber">Cyber</Link></li>
                  <li className="hover:bg-gray-300 hover:font-bold swalling p-2 cursor-pointer rounded-md"><Link href="/post?category=health">Health</Link></li>
                  <li className="hover:bg-gray-300 hover:font-bold swalling p-2 cursor-pointer rounded-md"><Link href="/post?category=god">God</Link></li>
                  <li className="hover:bg-gray-300 hover:font-bold swalling p-2 cursor-pointer rounded-md"><Link href="/post?category=culture">Culture</Link></li>
                  <li className="hover:bg-gray-300 hover:font-bold swalling p-2 cursor-pointer rounded-md"><Link href="/post?category=lifestyle">Lifestyle</Link></li>
                  <li className="hover:bg-gray-300 hover:font-bold swalling p-2 cursor-pointer rounded-md"><Link href="/post?category=kids">Kids</Link></li>
                  <li className="hover:bg-gray-300 hover:font-bold swalling p-2 cursor-pointer rounded-md"><Link href="/post?category=awareness">Awareness</Link></li>
                  <li className="hover:bg-gray-300 hover:font-bold swalling p-2 cursor-pointer rounded-md"><Link href="/post?category=politics">Politics</Link></li>
                  <li className="hover:bg-gray-300 hover:font-bold swalling p-2 cursor-pointer rounded-md"><Link href="/post?category=other">Other</Link></li>
                </ol>
            </li>
            <li className={`nav-sub-heading ${pathname=="/contact underline"?"font-bold":""}`}><Link href={"#footer"}>CONTACT </Link></li>
            <li className={`nav-sub-heading ${pathname=="/about"?"font-bold underline":""}`}><Link href="/about">ABOUT</Link></li>
          </ol>
        </div>
      </nav>
    )
}