import React from "react";
import DNavbar from "../_components/DNav";
import Sidebar from "../_components/sidebar";
import Post from "../_components/cardsPost";
import DetailPost from "../_components/post";

export default function Page(){
    return(
        <React.Fragment>        
            <DNavbar/>
            <main>
             <Sidebar/>
             <div className="flex justify-center relative top-20 rounded-md">

                <div className="bg-white w-[60%] min-h-[500px]">
                    <DetailPost/>
                    <Post/>
                </div>
             </div>
            </main>

        </React.Fragment>
    )
}