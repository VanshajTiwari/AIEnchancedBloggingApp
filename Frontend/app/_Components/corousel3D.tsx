"use client";

import { useEffect, useRef, useState } from "react";
import style from "./corousel3D.module.css";
import img1 from "./../../public/img/landscape/landscape (1).jpg";
import img2 from "./../../public/img/landscape/landscape (2).jpg";
import img3 from "./../../public/img/landscape/landscape (3).jpg";
import img4 from "./../../public/img/landscape/landscape (4).jpg";
import img5 from "./../../public/img/landscape/landscape (5).jpg";

export default function Corousel3D() {
  const [selectedOption, setOption] = useState(3);
  const carouselRef = useRef<HTMLDivElement>(null);

  function restrictFunction(value: number) {
    if (value === -1) value = 4;
    setOption(value % 5);
  }

  function handleNext() {
    restrictFunction(selectedOption + 1);
  }

  function handlePrev() {
    restrictFunction(selectedOption - 1);
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
      },
      { threshold: 0.1 }
    );

    if (carouselRef.current) {
      observer.observe(carouselRef.current);
    }

    return () => {
      if (carouselRef.current) {
        observer.unobserve(carouselRef.current);
      }
    };
  }, []);

  return (
    <div ref={carouselRef} className="w-full flex">
      <button
        className="text-white text-4xl bg-gray-500 px-2 rounded-md"
        onClick={handlePrev}
      >
        &larr;
      </button>

      <section id={style.slider} className="w-full items-center justify-center">
        <input
          type="radio"
          name="slider"
          value={0}
          id={style.s1}
          checked={selectedOption === 0}
          onClick={() => restrictFunction(1)}
          onChange={() => {}}
          className="hidden"
        />
        <input
          type="radio"
          name="slider"
          value={1}
          id={style.s2}
          checked={selectedOption === 1}
          onClick={() => restrictFunction(2)}
          onChange={() => {}}
          className="hidden"
        />
        <input
          type="radio"
          name="slider"
          value={2}
          id={style.s3}
          checked={selectedOption === 2}
          onClick={() => restrictFunction(3)}
          onChange={() => {}}
          className="hidden"
        />
        <input
          type="radio"
          name="slider"
          value={3}
          id={style.s4}
          checked={selectedOption === 3}
          onClick={() => restrictFunction(4)}
          onChange={() => {}}
          className="hidden"
        />
        <input
          type="radio"
          name="slider"
          value={4}
          id={style.s5}
          checked={selectedOption === 4}
          onClick={() => restrictFunction(5)}
          onChange={() => {}}
          className="hidden"
        />
        <label htmlFor="s1" id={style.slide1} className="rounded-sm">
          <div
            className={`${style.image} w-full h-full flex justify-center`}
            style={{ backgroundImage: `url("${img1.src}")` }}
          >
            <p className="px-[200px]">100 Different Tamoto Recipe.</p>
          </div>
        </label>
        <label htmlFor="s2" id={style.slide2} className="rounded-sm">
          <div
            className={`${style.image} w-full h-full flex item-center justify-center`}
            style={{ backgroundImage: `url("${img2.src}")` }}
          >
            <p className="px-[200px]">New Generation Cyber Alert</p>
          </div>
        </label>
        <label htmlFor="s3" id={style.slide3} className="rounded-sm">
          <div
            className={`${style.image} w-full h-full flex item-center justify-center`}
            style={{ backgroundImage: `url("${img3.src}")` }}
          >
            <p className="px-[200px]">Secrets of Bhagwan Jagannath</p>
          </div>
        </label>
        <label htmlFor="s4" id={style.slide4} className="rounded-sm">
          <div
            className={`${style.image} w-full h-full flex item-center justify-center`}
            style={{ backgroundImage: `url("${img4.src}")` }}
          >
            <p className="px-[200px]">Taj Mahal or Shiv Mandir</p>
          </div>
        </label>
        <label htmlFor="s5" id={style.slide5} className="rounded-sm">
          <div
            className={`${style.image} w-full h-full flex item-center justify-center`}
            style={{ backgroundImage: `url("${img5.src}")` }}
          >
            <p className="px-[200px]">Benefits of Reading Books</p>
          </div>
        </label>
      </section>

      <button
        className="text-white text-4xl bg-gray-500 px-2 rounded-md"
        onClick={handleNext}
      >
        &rarr;
      </button>
    </div>
  );
}
