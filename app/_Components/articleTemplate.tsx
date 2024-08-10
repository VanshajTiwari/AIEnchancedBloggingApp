import { FaRegClock } from "react-icons/fa";
export default function ArticleTemplate(){
    return(
        <div className="flex bg-white max-w-[900px] rounded-md overflow-hidden shadow-lg --article">
        <div className="w-[250px] h-[250px] bg-blue-300 overflow-hidden">
          <img src="https://i.pinimg.com/564x/ee/70/c9/ee70c96779eaf11d345a6592bbde6314.jpg" alt="article" className="w-full h-full overflow-cover --article--pic" />
        </div>
        <div className="flex flex-col px-4 justify-between ">
            <div className="flex flex-col">
              <h3 className="mt-4 uppercase text-gray-700 text-[20px] font-bold hover:underline cursor-pointer">Anime</h3>
              <h1 className="text-[30px] font-bold flex flex-wrap hover:underline cursor-pointer">5 Most favourite Naruto traits</h1>
              <p className="max-w-[690px] line-clamp-3">Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Maiores, incidunt sint! Ratione quod a quo! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas excepturi, voluptatem rem hic reprehenderit enim ad neque voluptates. Reiciendis quisquam laborum, nostrum mollitia eius aperiam modi voluptate consectetur dolor et.</p>
            </div>
            <div className="flex justify-between px-2 mb-3">
                <div className="flex gap-x-2 cursor-pointer hover:underline">
                  <span className="w-6 h-6 rounded-full  bg-red-400 overflow-hidden">
                    <img src="https://thumbs.dreamstime.com/b/friendly-cartoon-style-icon-smiling-grandfather-white-hair-round-glasses-298479685.jpg" alt="avatar" className="object-cover"/>
                  </span>
                  <span className="font-normal">John Doe</span>
                </div>
                <div className="flex gap-x-2 items-center">
                  <FaRegClock/>
                  <span>June 19, 2024</span>
                </div>
            </div>
        </div>
    </div>
    )
}