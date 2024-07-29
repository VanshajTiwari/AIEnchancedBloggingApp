export default function Navbar(){
    return(
        <ol className="flex justify-around items-center p-3 gap-x-2 sticky-top w-full absolute z-10">
            <div>
                    Logo
            </div>
            <div className="flex gap-x-2">
                <li className=" duration-400 font-bold cursor:pointer rounded-md hover:text-[] p-2">Home</li>
                <li className=" duration-400 font-bold cursor:pointer rounded-md hover:text-[] p-2">About</li>
                <li className=" duration-400 font-bold cursor:pointer rounded-md hover:text-[] p-2">Contact</li>
                <li className=" duration-400 font-bold cursor:pointer rounded-lg"><input type="text" className="p-2 rouned-md text-black" placeholder="Search..."/></li>
                <li className=" duration-400 font-bold cursor:pointer rounded-md hover:text-[] p-2">Service</li>      
            </div>
            <div className="flex gap-x-3">
                <button className="p-2 rounded-md">SignUp</button>
                <button className="p-2 rounded-md">LogIn</button>

            </div>
    </ol>
    )
}