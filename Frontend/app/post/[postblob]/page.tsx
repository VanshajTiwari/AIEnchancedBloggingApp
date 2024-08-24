import BackgroundStyleFixed from "../../_Components/backgroundStyle";
import Footer from "../../_Components/footer";
import HomeNavbar from "../../_Components/navbar";
import { Suspense } from "react";
import Loading from "@/app/_Components/loading";
import DetailsView from "@/app/_Components/detailView";

export default async function Page(){
    return(
        <main className="flex flex-col items-center ">
         <BackgroundStyleFixed/>
         <HomeNavbar/>
         <section className="max-w-[1000px] bg-white p-3 rounded-lg shadow-2xl mt-4 soft">
                <Suspense fallback={<Loading/>}>
                    <DetailsView/>
                </Suspense>
         </section>
         <Footer/>
        </main>
    )
}