import Corousel3D from "./_Components/corousel3D";
import Footer from "./_Components/footer";
import ArticleTemplate from "./_Components/articleTemplate";
import SideStories from "./_Components/sideStories";
import HomeNavbar from "./_Components/navbar";
import BackgroundStyleFixed from "./_Components/backgroundStyle";
export default function Home() {
  return (

    <main className="flex flex-col items-center">
      <BackgroundStyleFixed/>
      <HomeNavbar/>
      <header className="w-full flex flex-col items-center">
          <div className="w-3/4 md:h-[500px] md:h-[500px] flex justify-center">
            <Corousel3D/>
          </div>
      </header>
      <section className="lg:flex bg-white mt-24 lg:mt-12 w-[95%] h-auto rounded-md overflow-hidden">
          <div className="bg-yellow-400 w-full dark:bg-gray-500 pb-10 h-auto lg:w-[75%]">
              <h1 className="text-[35px] relative left-12 top-6" style={{fontFamily:"Bebas"}}>Latest articles</h1>
              <div className="relative top-6 flex flex-col gap-y-4 mx-[5%] soft">
                    <ArticleTemplate />
              </div>
          </div>
          <SideStories/>
      </section>
      <Footer/>
    </main>
  );
}
