import Image from "next/image";
import Navbar from "./_components/navbar";
import SectionCompo from "./_components/sections";
import { FooterCompo } from "./_components/footer";
export default function Home() {
  return (
    <>
    <Navbar/>
    <main className=" w-full height-auto">  
        <SectionCompo/>
        <SectionCompo/>
        <FooterCompo/>
    </main>
    </>
  );
}
