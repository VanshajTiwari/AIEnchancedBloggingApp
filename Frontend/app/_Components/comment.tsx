"use client";
import { useState } from "react"

export default function MakeComment(){
    return(
            <div className="flex flex-col justify-center items-center">
                <div className="h-[24em] px-4 w-full rounded-[12px] bg-white border">
                    <Rating/>
                    <p className="text-xl pt-2 font-semibold text-gray-900 cursor-pointer transition-all hover:text-black">
                        Add Comment
                    </p> 
                    <textarea className="h-40 px-3 text-sm py-1 mt-5 outline-none border-gray-300 w-full resize-none border rounded-lg placeholder:text-sm" placeholder="Add your comments here"></textarea>  
                    
                    <div className="flex justify-between mt-2"> 
                        <p className="text-sm text-gray-900 ">Enter atleast 15 characters</p>
                        <button className="h-12 w-[150px] bg-black text-sm text-white rounded-lg transition-all cursor-pointer hover:bg-gray-600">
                            Submit comment
                        </button>
                    </div>   
                </div>   
            </div>
    )
}


function Rating() {
    const [rate, setRate] = useState<number>(4);

    function handleRating(newRate:number) {
        setRate(newRate); // Update the rating state
        console.log(`Selected rating: ${newRate}`);
    }

    return (
        <>
            <h1 className="text-xl pt-2 font-semibold text-gray-900 cursor-pointer transition-all hover:text-black">
                Rating
            </h1>
            <div className="flex items-center pb-2">
                {[1, 2, 3, 4, 5].map((value) => (
                    <svg
                        key={value}
                        onClick={() => handleRating(value)}
                        className={`w-6 h-6 text-gray-300 me-1 ${
                            rate >= value ? "text-yellow-300" : "text-gray-500"
                        }`}
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                ))}
            </div>
        </>
    );
}

