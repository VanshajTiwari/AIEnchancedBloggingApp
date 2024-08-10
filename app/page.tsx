import Corousel3D from "./_Components/corousel3D";
import Footer from "./_Components/footer";
import ArticleTemplate from "./_Components/articleTemplate";
import SideStories from "./_Components/sideStories";
import HomeNavbar from "./_Components/navbar";
export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <div className="fixed w-screen h-screen z-[-1]">
        <div className="h-[30%]"></div>
        <div className="h-[70%] bg-black"></div>
      </div>
      <HomeNavbar/>
      <header className="w-full flex flex-col items-center">
          <div className="w-3/4 flex justify-center">
            <Corousel3D/>
          </div>
      </header>
      <section className="flex bg-white mt-12 w-[95%] rounded-md overflow-hidden">
          <div className="bg-yellow-400 w-[75%]">
              <h1 className="text-[35px] relative left-12 top-6" style={{fontFamily:"Bebas Neue"}}>Latest articles</h1>
              <div className="relative left-12 top-6 flex flex-col gap-y-4">
                <ArticleTemplate/>
                <ArticleTemplate/>
              </div>
          </div>
          <SideStories/>
      </section>
      <Footer/>
    </main>
  );
}
