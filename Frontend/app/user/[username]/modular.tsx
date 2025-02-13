"use client";
import React, { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import BackgroundStyleFixed from '@/app/_Components/backgroundStyle';
import { Cards } from './cards';
import ThreeButton from "./3ThreeButton";
import { useEditor } from './Context/editUserContent';
import { useParams } from 'next/navigation';
import { findUserByEmail } from '@/app/_lib/action';

const ProfileHeader = ({ user }:{user:any}) => {
  const {username}:{username:any}=useParams();
  const {useremail,handleEmail}=useEditor();
  const decodedUsername = decodeURIComponent(username);
  useEffect(()=>{
      handleEmail(decodedUsername);
      (async ()=>{
        console.log(decodedUsername);
        const usersData=await findUserByEmail(decodedUsername);
        console.log(usersData);
      })();
  },[username]);
  return (
  <div className="relative">

    <div className="min-h-[150px] min-w-[150px] shadow-md w-[90px] rounded-full border-4 overflow-hidden -mt-20 border-white">
      <img src={user?.image || ''} alt="Avatar" className="w-full h-full object-cover" />
    </div>
    <div>
      <h3 className="text-xl text-slate-900 font-bold leading-6">{user?.name}</h3>
      <p className="text-sm text-gray-600">@{user?.username}</p>
    </div>
  </div>
)};

const FollowStats = () => (
  <div className='font-bold uppercase text-[12px] flex border border-gray-10'>
    <span className='border-r bg-white p-2 shadow-b'>12k+ Fellows</span>
    <span className='bg-black text-white p-2 shadow-b'>14k+ Follows</span>
  </div>
);

const InterestsList = () => {
  const interests:string[]=["Science","Project","Arts","Lifestyle"];
  const {isEdit}=useEditor();
  const colors = ["bg-yellow-100", "bg-red-100", "bg-green-100", "bg-blue-100"];
  return (
    <div className="flex gap-3 flex-wrap">
      {interests.map((interest:any, index:number) => (
        <span key={index} className={`${colors[index % colors.length]} rounded-sm px-3 py-1 text-xs font-medium text-gray-800 shadow`}>
          {interest}
        </span>
      ))}
      {isEdit && <button className='rounded-sm border border-black text-black px-1 text-xs active:scale-90 duration-200'>Edit</button>}
    </div>
  );
};

const AboutSection = () =>{ 
    const {isEdit,about,handleAbout}=useEditor();
    return (
            <div>
                <h4 className="text-lg font-medium pt-4 uppercase leading-3">About</h4>
                <p className="text-sm text-stone-500 mt-4">
                {isEdit ? (
                    <><textarea className='min-w-[500px]' value={about} onChange={(e) => handleAbout(e.target.value)} />
                    <button className='ml-2 rounded-sm border border-black text-black px-1 text-xs active:scale-90 duration-200' onClick={()=>{}}>Edit</button></>
                ) : (
                    <>{about}</>
                )}
                </p>
            </div>
)};

const ExperienceList = () => {
    const {experience}=useEditor();
    return (
        <div>
            <h4 className="text-lg font-medium pt-4 uppercase leading-3">Experiences</h4>
            <div className="flex flex-col gap-3 mt-2">
            {experience.map((exp:any, index:number) => (
                <div key={index} className="flex items-center gap-3 px-2 py-3 bg-white rounded border w-full">
                    <p className="text-sm font-bold text-slate-700">{exp.title}</p>
                    <span className="text-xs text-slate-600">
                    {exp.startDate instanceof Date ? exp.startDate.getFullYear() : "Present"} -
                    {exp.endDate === "present" ? "Present" : exp.endDate instanceof Date ? exp.endDate.getFullYear() : ""}
                    </span>
                    <p className="text-sm text-slate-500 self-start ml-auto">{exp.description}</p>
                </div>
                ))}

            </div>
        </div>
)};

const EditButtons = () => {
  const {isEdit,handleEdit:toggleEdit}=useEditor();   
 return (<span className='absolute right-4'>
    <button className='rounded-sm border border-black text-black px-1 text-xs active:scale-90 duration-200' onClick={toggleEdit}>
      {isEdit ? 'Cancel' : 'Edit Details'}
    </button>
    {isEdit && <button className='rounded-sm border border-black text-black px-1 text-xs active:scale-90 duration-200'>Save</button>}
  </span>
)};

const ProfileCard = () => {
  const { data: session } = useSession();
  const user = session?.user;
  const [isEditing, setIsEditing] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [about, setAbout] = useState(user?.name || '');
  const [experience, setExperience] = useState([
    { title: 'UI Designer', years: '5 years', description: 'As UI Designer on Front Page' },
    { title: 'Frontend Developer', years: '3 years', description: 'Worked on various projects' },
    { title: 'Project Manager', years: '2 years', description: 'Led multiple teams' }
  ]);
  const [interests, setInterests] = useState(['Developer', 'Design', 'Management', 'Projects']);

  return (
    <>

      
        
        
          <ProfileHeader user={user} />
          <FollowStats />
          <InterestsList/>
          <ThreeButton />
          <AboutSection />
          <ExperienceList />

    </>
  );
};

export {EditButtons,InterestsList,ExperienceList,FollowStats,ThreeButton,ProfileHeader,ProfileCard,AboutSection};
