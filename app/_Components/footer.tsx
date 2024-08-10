import { FaRegEnvelope } from "react-icons/fa";
export default function Footer(){
    return(
        <footer className="text-black w-3/4 p-4 relative top-12 bottom-0 rounded-t-lg flex bg-white flex justify-between" id="footer">
                <div className="flex flex-col p-4">
                    <h1 className="text-[45px] font-bold" style={{fontFamily:"Bebas Neue"}}>Get in touch</h1>
                    <p className="text-gray-700 max-w-[600px] mb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, assumenda.</p>
                    <p className="text-black font-bold mb-4">Contact us via:</p>
                    <a href="#"  className="text-gray-700 flex items-center hover:underline"><FaRegEnvelope className="mr-2"/>contact@bloggers.io</a>
                    <a href="#"  className="text-gray-700 flex items-center hover:underline"><FaRegEnvelope className="mr-2"/>helper@bloggers.io</a>
                    <span className="text-[10px] text-grey-700 relative top-12">&copy;2024 ProjectIGI</span>
                </div>
                <div>
                    <form action="" className="bg-white p-3 m-3 max-w-[400px] shadow-lg rounded-md" style={{fontFamily:"Arsenal SC",fontWeight:"700"}}>
                        <div className="grid grid-cols-2">
                            <div className="flex flex-col mr-2">
                                <label htmlFor="fullname">FULL NAME</label>
                                <input type="text" id="fullname" placeholder="ex. John Doe" className="p-2 rounded-md text-black shadow-sm"/>
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="email">EMAIL ADDRESS</label>
                                <input type="text" id="email" placeholder="example@gmail.com"  className="p-2 rounded-md text-black shadow-sm"/>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 relative my-4">
                            <div className="flex flex-col mr-2">
                                <label htmlFor="phone">PHONE</label>
                                <input type="text" id="phone" placeholder="+(XX) XXX XXX XXXX"  className="p-2 rounded-md text-black shadow-sm"/>
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="fullname">SUBJECT</label>
                                <input type="text" id="fullname" placeholder="ex. Subscriptions"  className="p-2 rounded-md text-black shadow-sm"/>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="message">Message</label>
                            <textarea id="message" placeholder="Message..."  className="p-2 rounded-md text-white shadow-sm relative mb-2 rounded-sm"></textarea>
                        </div>
                        <button className="bg-black p-2 trasition-all text-[14px] duration-300 text-white rounded-lg hover:scale-110">Send message</button>
                    </form>
                </div>
        </footer>
    )
}