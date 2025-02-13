import BackgroundStyleFixed from "@/app/_Components/backgroundStyle";
import { auth } from "@/app/_lib/auth";
import { EditorContextProvider } from "./Context/editUserContent";
import { AboutSection, EditButtons, ExperienceList, FollowStats, InterestsList, ProfileHeader, ThreeButton } from "./modular";
import { Cards } from "./cards";
import { Suspense } from "react";
import Loading from "@/app/_Components/loading";

export default async function Page(){
  const Session=await auth();
  return (
    <>
      <BackgroundStyleFixed />
      <div className="bg-gray-200 mx-auto relative md:w-10/12 w-full shadow-xl overflow-hidden">
        <EditorContextProvider>
        <div className=" h-[140px] bg-black"></div>
        <div className="px-4 flex flex-col gap-3 pb-6">
          <ProfileHeader user={Session?.user!} />
          <EditButtons/>
          <FollowStats />
          <InterestsList/>
          <ThreeButton />
          <AboutSection />
          <ExperienceList />
          <h4 className="text-lg font-medium pt-4 uppercase leading-3">Trending Blogs</h4>
          <Suspense fallback={<Loading/>}>
            <Cards />
          </Suspense>
        </div>
        </EditorContextProvider>
      </div>
    </>
  )
}