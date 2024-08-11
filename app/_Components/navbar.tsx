import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";
import { HiOutlinePaintBrush } from "react-icons/hi2";
import { FaFacebookF,FaLinkedinIn,FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function HomeNavbar(){
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
            <li className=" nav-sub-heading"><Link href="/">HOME</Link></li>
            <li className="flex gap-x-1   nav-sub-heading  items-center drop-down"><span>PAGES</span><IoIosArrowDown className="font-light icon-drop-down"/></li>
            <li className="flex gap-x-1   nav-sub-heading  items-center drop-down"><span>CATEGORIES</span><IoIosArrowDown className="font-light icon-drop-down"/></li>
            <li className=" nav-sub-heading"><Link href={"#footer"}>CONTACT </Link></li>
            <li className=" nav-sub-heading"><Link href="#footer">SUBSCRIBE</Link></li>
          </ol>
        </div>
      </nav>
    )
}