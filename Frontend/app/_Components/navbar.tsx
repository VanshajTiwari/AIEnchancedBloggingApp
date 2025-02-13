"use client"; // Ensures it's a client component

import Link from "next/link";
import { useState, useEffect } from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { HiOutlinePaintBrush } from "react-icons/hi2";
import { IoIosArrowDown } from "react-icons/io";
import { IoSearchOutline, IoMenu, IoClose } from "react-icons/io5";
import SignOutBtn from "./signOutButton";
import { useSession } from "next-auth/react";

export default function HomeNavbar() {
  const {data:Session}=useSession();
  const user=Session?.user;
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="p-3 h-25 w-full">
      <div className="flex justify-between items-center">
        {/* Left - Social Links */}
        <ol className="hidden md:flex gap-x-2">
          <li><FaFacebookF className="swalling" /></li>
          <li><FaXTwitter className="swalling" /></li>
          <li><FaInstagram className="swalling" /></li>
          <li><FaLinkedinIn className="swalling" /></li>
        </ol>

        {/* Center - Logo */}
        <Logo />

        {/* Right - Search & Authentication */}
        <div className="flex items-center">
          <form action="" className="hidden md:flex relative p-3 search--tab--navbar">
            <input type="text" placeholder="Search..." className="absolute transition bg-gray-200" />
            <button type="submit" className="text-[25px]">
              <IoSearchOutline className="swalling" />
            </button>
          </form>

          {user ? (
            <>
              <Link href={`/user/${user.email}`} className="flex items-center">
                <img src={user.image ?? ""} alt={`${user.name} profile`} className="w-6 h-6 rounded-full mr-1" />
                <span className="hover:underline">{user.name}</span>
              </Link>
              <SignOutBtn />
            </>
          ) : (
            <Link href="/signin" className="uppercase bg-black text-white rounded-lg px-3 py-1 text-[15px] swalling">
              SignUp
            </Link>
          )}

          {/* Mobile Menu Button */}
          <button className="md:hidden ml-3" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <IoClose size={25} /> : <IoMenu size={25} />}
          </button>
        </div>
      </div>

      {/* Navigation Links */}
      <div className={`w-full ${menuOpen ? "block" : "hidden"} md:flex justify-center dark:text-gray-300`}>
        <ol className="relative top-2 bg-gray-800 md:bg-transparent py-2 flex flex-col md:flex-row items-center gap-y-2 justify-center gap-x-10 --sub-heading text-gray-600">
          {user && (
            <li className="relative">
              <Link href="/post/addpost" className="px-4 py-2 max-w-[150px] flex items-center justify-center rounded-md border border-gray-300 hover:shadow-md border-black text-black font-bold">
                <HiOutlinePaintBrush /> Post
              </Link>
            </li>
          )}
          {user && <li className="nav-sub-heading uppercase hover:scale-125"><Link href="/">For You</Link></li>}
          {user && <li className="nav-sub-heading uppercase"><Link href="/">Trending</Link></li>}
          {user && <li className="nav-sub-heading uppercase"><Link href="/">Following</Link></li>}

          {!user && <li className="nav-sub-heading font-bold underline"><Link href="/">HOME</Link></li>}
          {!user && (
            <li>
              <div className="flex items-center nav-sub-heading drop-down">
                <span>Explore</span><IoIosArrowDown className="icon-drop-down" />
              </div>
              <ol className="drop-down-options options1 flex flex-col mt-2 absolute z-[10] bg-white px-3 capitalize rounded-b-md h-0 overflow-hidden">
                <li className="hover:bg-gray-300 hover:font-bold swalling p-2 cursor-pointer rounded-md"><Link href="/post">Post</Link></li>
                <li className="hover:bg-gray-300 hover:font-bold swalling p-2 cursor-pointer rounded-md">Stories</li>
                <li className="hover:bg-gray-300 hover:font-bold swalling p-2 cursor-pointer rounded-md">About</li>
                <li className="hover:bg-gray-300 hover:font-bold swalling p-2 cursor-pointer rounded-md">Random</li>
              </ol>
            </li>
          )}
          <li>
            <div className="flex items-center nav-sub-heading drop-down">
              <span>CATEGORIES</span>
              <IoIosArrowDown className="icon-drop-down" />
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
          <li className="nav-sub-heading"><Link href="#footer">CONTACT</Link></li>
          <li className="nav-sub-heading"><Link href="/about">ABOUT</Link></li>
        </ol>
      </div>
    </nav>
  );
}

export function Logo() {
  return (
    <div className="flex text-[25px] justify-center items-center relative px-2">
      <Link href="/" className="--main--logo px-2 border md:border-0 rounded-md md:rounded-sm md:-rotate-6">
        <HiOutlinePaintBrush className=""/>
        <span className="flex gap-x-2 flex-wrap">
          <span className="hidden md:block">AI</span> 
          <span className="hidden md:block">Enhanced</span>
          <span>Blogging</span>
        </span>
      </Link>
    </div>
  );
}
