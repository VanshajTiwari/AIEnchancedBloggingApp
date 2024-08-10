"use client";
import { useEffect,useState, useRef } from "react";
import style from "./corousel3D.module.css";
import img1 from "./../../public/img/landscape/landscape (1).jpg";
import img2 from "./../../public/img/landscape/landscape (2).jpg";
import img3 from "./../../public/img/landscape/landscape (3).jpg";
import img4 from "./../../public/img/landscape/landscape (4).jpg";
import img6 from "./../../public/img/landscape/landscape (6).jpg";
import img5 from "./../../public/img/landscape/landscape (5).jpg";
export default function Corousel3D(){
    const [selectedOption,setOption]=useState(1);
    function handleSelectionfunction(number:any){
            setOption(number);
    }
    useEffect(()=>{
        const interval=setInterval(()=>{
            setOption((selectedOption+1)%5+1);
            clearInterval(interval);
        },3000);         
    },[selectedOption]);
    return( 
        <section id={style.slider} className="w-full">
            <input type="radio" name="slider" value={1} id={style.s1} checked={selectedOption==1} onClick={()=>handleSelectionfunction(1)} onChange={()=>{}}/>
            <input type="radio" name="slider" value={2} id={style.s2} checked={selectedOption==2} onClick={()=>handleSelectionfunction(2)} onChange={()=>{}}/>
            <input type="radio" name="slider" value={3} id={style.s3} checked={selectedOption==3} onClick={()=>handleSelectionfunction(3)} onChange={()=>{}}/>
            <input type="radio" name="slider" value={4} id={style.s4} checked={selectedOption==4} onClick={()=>handleSelectionfunction(4)} onChange={()=>{}}/>
            <input type="radio" name="slider" value={5} id={style.s5} checked={selectedOption==5} onClick={()=>handleSelectionfunction(5)} onChange={()=>{}}/>
            <label htmlFor="s1" id={style.slide1} className="">
                <img src={`${img1.src}`} alt="img1" className="w-full h-full object-cover"/>
            </label>
            <label htmlFor="s2" id={style.slide2}>
                <img src={`${img2.src}`} alt="img1" className="w-full h-full object-cover"/>
            </label>
            <label htmlFor="s4" id={style.slide4} className="object-fill">
                <img src={`${img3.src}`} alt="img1" className="w-full h-full object-cover"/>
            </label>
            <label htmlFor="s3" id={style.slide3}>
                <img src={`${img4.src}`} alt="img1" className="w-full h-full object-cover"/>
            </label>
            <label htmlFor="s5" id={style.slide5}>
                <img src={`${img5.src}`} alt="img1" className="w-full h-full object-cover"/>
            </label>
      </section>
    )
}