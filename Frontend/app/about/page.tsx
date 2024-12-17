import BackgroundStyleFixed from "../_Components/backgroundStyle";
import Footer from "../_Components/footer";
import HomeNavbar from "../_Components/navbar";
import user from "./../../public/img/users/developer.png";
export default function Page(){
    return(
        <main className="flex flex-col items-center">
            <BackgroundStyleFixed/>
            <HomeNavbar/>
            <section className="pt-10 rounded-md overflow-hidden bg-gray-50 dark:bg-gray-800 md:pt-0 sm:pt-16 2xl:pt-16">
                <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                    <div className="grid items-center grid-cols-1 md:grid-cols-2 p-4">

                        <div>
                            <h2 className="text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl lg:text-5xl">Hey 👋 we are
                                <br className="lg:block sm:hidden" /> Team Project IGI
                            </h2>
                            <p className="max-w-lg mt-3 text-xl leading-relaxed text-gray-600 dark:text-gray-300 md:mt-8">
                                Amet minim mollit non deserunt
                                ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
                                Exercitation veniam consequat sunt nostrud amet.
                            </p>

                            <p className="mt-4 text-xl text-gray-600 dark:text-gray-300 md:mt-8">
                                <span className="relative inline-block">
                                    <span className="absolute inline-block w-full bottom-0.5 h-2 bg-yellow-300 dark:bg-gray-900"></span>
                                <span className="relative"> Have a question? </span>
                                </span>
                                <br className="block sm:hidden" />Ask me on <a href="#" title=""
                                    className="transition-all duration-200 text-sky-500 dark:text-sky-400 hover:text-sky-600 dark:hover:text-sky-500 hover:underline">LinkedIn</a>
                            </p>
                        </div>

                        <div className="relative">
                            <img className="absolute inset-x-0 bottom-0 -mb-48 -translate-x-1/2 left-1/2" src="https://cdn.rareblocks.xyz/collection/celebration/images/team/1/blob-shape.svg" alt="" />

                            <img className="relative w-full xl:max-w-lg xl:mx-auto 2xl:origin-bottom 2xl:scale-120 rounded-md" src={`https://th.bing.com/th/id/OIP.lbNwtS5QHxECLgBVO2ZLzAHaEK?rs=1&pid=ImgDetMain`} alt="" />
                        </div>

                    </div>
                </div>
            </section>
            <Footer/>
        </main>
    )
}