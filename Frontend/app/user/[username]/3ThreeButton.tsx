import { useSession } from "next-auth/react";
import { useParams } from "next/navigation"
import { useState } from "react";
import { TiTick } from "react-icons/ti";
export default function ThreeButton(){
    const {username}=useParams();
    const {data:Session}=useSession();
    const [isConnectbuttonclick,setisConnectbuttonclick]=useState(false);
    const [isFollowbuttonclick,setisFollowbuttonclick]=useState(false);
    function handleClick(setter:Function,getter:boolean){
        setter(!getter);
      }
    return <>
            <div className="md:w-1/2">

            {Session?.user.email==username && <><button type='button' className={`active:scale-90 duration-200 rounded-sm bg-gray-200 px-3 py-1 text-xs font-medium ${!isConnectbuttonclick?"bg-green-100 border":"bg-gray-300 border-0"} border-black shadow flex items-center `} onClick={()=>{handleClick(setisConnectbuttonclick,isConnectbuttonclick)}}>Connect{isConnectbuttonclick && <TiTick />}</button>
            <button type='button' className={`active:scale-90 duration-200 rounded-sm bg-gray-200 px-3 py-1 text-xs font-medium  ${!isFollowbuttonclick?"bg-rose-100 border":"bg-gray-300 border-0"} border-black shadow flex items-center`} onClick={()=>{handleClick(setisFollowbuttonclick,isFollowbuttonclick)}}>Follow{isFollowbuttonclick && <TiTick />}</button></>}
            <button type='button' className='active:scale-90 duration-200 rounded-sm bg-gray-200 px-3 py-1 text-xs font-medium bg-purple-100 border border-black shadow flex items-center'>Send Message</button>
            </div>
          </>
}