"use client";
import { useEffect, useState } from "react";
import BackgroundStyleFixed from "../_Components/backgroundStyle";
import { data } from "./data";
import { BiTrash } from "react-icons/bi";

function ShuffleArr(data:string[]){
    let shuffleArr:string[]=[];
    for (let i = 0; i < 10; i++) {
        const randomNum = Math.floor(Math.random() * 50) + 1; // Generates a random number between 1 and 50
        shuffleArr.push(data[randomNum]);
      }
    return shuffleArr;

}
export default function Page(){
    const [gender,setGender]=useState(0);
    const [avatars,setAvatars]=useState<string[]>([]);
    const [selectImg,setImg]=useState("");
    let itemsArr:string[]=[];
     function genderSelectionFunction(e:any){
        console.log(e.target.value);;
        if(e.target.value==1){
            let arrayoftem=ShuffleArr(data.boys)
            setAvatars(arrayoftem);
        }
        else if(e.target.value==2){
            let arrayoftem=ShuffleArr(data.girls)
            setAvatars(arrayoftem);
        }
    }
    function SelectProfile(val:any){
        // console.log(val.src);
        setImg(val.src);
    }
    return (
            <main className="flex flex-col items-center">
              <BackgroundStyleFixed/>
        <div className="relative top-4 w-[750px] flex flex-col items-center gap-y-4 z-1 bg-white rounded-md pb-4">
            <h2 className="mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-600 md:text-4xl">USER PROFILE</h2>

                        <div className="flex items-center ">
                            <label htmlFor="username" className="text-gray-800 text-lg mr-4">Username</label>
                            <input type="text" name="username" id="username"  className="bg-gray-50 border border-gray-300 text-gray-800 text-sm rounded-lg focus:outline-none focus:border-blue-500 block w-full p-2.5" placeholder="Username" tabIndex={0}/>
                        </div>
               <div className="flex gap-x-4 border border-gray-300 max-w-[800px] p-4 rounded-md">
                        <div className="flex justify-center items-center">
                            <div className="w-[250px] h-[250px] flex items-center justify-center rounded-full bg-yellow-300 overflow-hidden">
                                {selectImg==""?<h1 className="text-white p-2 bg-black w-full text-center text-lg">Select Image</h1>:<img src={selectImg} alt=""  className="w-full h-full object-cover"/>}
                            </div>
                        </div>
                        <div>
                            <div className="max-w-[200px] my-4">
                                <label htmlFor="countries_disabled" className="block mb-2 text-sm font-medium text-gray-900">Select an option</label>
                                <select id="countries_disabled" defaultChecked defaultValue={0} nonce="0"  onChange={genderSelectionFunction} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-blue-500 block w-full p-2.5">
                                    <option value="0" disabled>Choose your gender</option>
                                    <option value="1">Male</option>
                                    <option value="2">Female</option>
                                </select>
                            </div>
                            <div className="flex items-center ml-0 flex-wrap gap-2">
                                {avatars.map((e,index)=><img key={index} src={e} tabIndex={0} className="max-w-20 max-h-20 focus:p-1 focus:border-2  border-black hover:border-2 hover:p-1 rounded-full duration-100 " onClick={(e)=>SelectProfile(e.target)}/>)}
                            </div>

                        </div>
               </div>
               <h2 className="mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-600 md:text-4xl">INTEREST</h2>
               <CategorySelector/>
               <button className="text-green-400 border border-green-400 rounded-md text-lg px-4 py-1 hover:bg-green-400 hover:text-white duration-500 hover:scale-125 active:scale-75">SAVE</button>
        </div>

        </main>
    )
}



const CategorySelector = () => {
  const [interests, setInterests] = useState([]);
  
  const categories = [
    "Science",
    "Cyber",
    "Health",
    "God",
    "Culture",
    "Lifestyle",
    "Kids",
    "Awareness",
    "Politics",
  ];

  // Handle adding a category to the selected list
  const handleSelectCategory = (category:never) => {
    if (!interests.includes(category)) {
      setInterests([...interests, category]);
    }
  };

  // Handle removing a category from the selected list
  const handleRemoveCategory = (category:string) => {
    setInterests(interests.filter((interest) => interest !== category));
  };

  // Filter out selected categories from suggestions
  const availableCategories = categories.filter(category => !interests.includes(category));

  return (
    <div className="w-[700px] mx-auto p-6 border rounded-lg ">
      <ul className="flex flex-wrap items-center justify-center gap-1">
        {availableCategories.map((category) => (
          <li
            key={category}
            className="p-2 border bg-gray-200 rounded-md cursor-pointer transition-all duration-300 ease-in-out hover:bg-gray-200 hover:scale-105 hover:font-semibold"
            onClick={() => handleSelectCategory(category)}
          >
            {category}
          </li>
        ))}
      </ul>

      {interests.length>0 && <div className="mt-6">
        <h3 className="text-lg font-semibold">Selected Interests:</h3>
        <ul className="flex flex-wrap items-center justify-center gap-1">
          {interests.map((interest, index) => (
            <li
              key={index}
              className="bg-gray-200 p-2 rounded-md flex justify-between items-center"
            >
              <span>{interest}</span>
              <button
                className="ml-4 text-red-500 hover:text-red-700"
                onClick={() => handleRemoveCategory(interest)}
              >
                <BiTrash/>
              </button>
            </li>
          ))}
        </ul>
      </div>}
    </div>
  );
};
