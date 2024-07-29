import Image from "next/image";
import Navbar from "./_components/navbar";
import image from "./../public/post1.png";
import SectionCompo from "./_components/sections";
import { FooterCompo } from "./_components/footer";
export default function Home() {
  return (
    <>
    <Navbar/>
    <main className=" w-full height-auto">
        <section className="w-full h-[600px] overflow-hidden flex justify-center items-center relative">
          <Image src={image} alt="hero" className="w-full object-cover relative top-[-100px] "/>
            <div className="w-full h-[200px] rounded-md top-1/2 left-6 absolute text-white">
                  <h1 className="text-6xl font-bold max-w-[450px]">Explore the world of Living</h1>
                  <p className="font-semibold text-xl max-w-[450px]">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt, nostrum.
                  </p>
            </div>

        </section>    
        <SectionCompo/>
        <SectionCompo/>
        <FooterCompo/>
    </main>
    </>
  );
}
