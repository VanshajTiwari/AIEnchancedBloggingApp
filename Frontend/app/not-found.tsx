
import Link from "next/link";
import BackgroundStyleFixed from "./_Components/backgroundStyle";

export default function Page() {
  return (
    <div>
      <div className="lg:px-24 dark:bg-gray-900 h-screen lg:py-24 md:py-20 md:px-44 px-4 py-24 items-center flex justify-center flex-col-reverse lg:flex-row md:gap-28 gap-16">
            <div className="xl:pt-24 w-full xl:w-1/2 relative pb-12 lg:pb-0">
                <div className="relative">
                    <div className="absolute">
                        <div className="flex flex-col gap-y-4">
                            <h1 className="my-2 dark:text-gray-500 text-gray-800 font-bold text-2xl">
                                Looks like you&apos;ve found the
                                doorway to the great nothing
                            </h1>
                            <p className="dark:text-gray-500 my-2 text-gray-800">Sorry about that! Please visit our hompage to get where you need to go.</p>
                            <Link href="/" className="sm:w-full lg:max-w-[250px] my-2  rounded md py-4 px-8 text-center bg-black text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-opacity-50">Take me there!</Link>
                        </div>
                    </div>
                    <div>
                        <img src="https://i.ibb.co/G9DC8S0/404-2.png" />
                    </div>
                </div>
            </div>
            <div>
                <img src="https://i.ibb.co/ck1SGFJ/Group.png" />
            </div>
        </div>
    </div>
  );
}
