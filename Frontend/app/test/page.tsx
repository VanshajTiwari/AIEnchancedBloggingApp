"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useSession } from "next-auth/react";
import { IoIosArrowBack,IoIosArrowForward } from "react-icons/io";

interface Blog {
  id: number;
  title: string;
  date: string;
  image: string;
  content: string;
}

const blogs: Blog[] = [
  {
    id: 1,
    title: "Raj Mysteries",
    date: "12 November 2025",
    image: "/img/landscape/landscape (1).jpg",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi magni ex illum a, consequatur neque?",
  },
  {
    id: 2,
    title: "The Hidden Truth",
    date: "25 December 2025",
    image: "/img/landscape/landscape (2).jpg",
    content:
      "Another deep mystery unfolds. Discover the truth hidden behind the veil of secrets...",
  },
  {
    id: 3,
    title: "Unsolved Enigma",
    date: "1 January 2026",
    image: "/img/landscape/landscape (3).jpg",
    content:
      "A case that defies all logic. Will you be able to uncover what truly happened?",
  },
];

export default function BlogSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const { data: session } = useSession();

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPaused) {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % blogs.length);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % blogs.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + blogs.length) % blogs.length);
  };

  return (
    <div
      className="relative w-full flex flex-col items-center gap-6 py-6"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={blogs[currentIndex].id}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="w-full flex md:flex-row flex-col justify-center mx-auto max-w-5xl bg-white shadow-md rounded-md overflow-hidden"
        >
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-[70%] h-60 md:h-full"
          >
            <Image
              src={blogs[currentIndex].image}
              alt="Blog Image"
              width={800}
              height={400}
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative pb-14 pl-4 pt-3 w-full md:w-[30%] bg-blue-900 text-gray-200 rounded-md md:rounded-l-none md:rounded-r-md"
          >
            <h1 className="text-3xl font-bold" style={{ fontFamily: "Bebas" }}>
              {blogs[currentIndex].title}
            </h1>
            <span className="text-gray-300">{blogs[currentIndex].date}</span>
            <p className="lg:line-clamp-[6] md:line-clamp-[4] line-clamp-3 w-11/12 text-gray-300 font-light">
              {blogs[currentIndex].content}
            </p>

            {/* User Section */}
            <div className="absolute bottom-4 flex items-center gap-x-2">
              <div className="w-[30px] h-[30px] rounded-full overflow-hidden">
                <img
                  src={session?.user?.image || "/default-avatar.png"}
                  alt="User Avatar"
                  width={30}
                  height={30}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="font-medium text-gray-200 capitalize">
                {session?.user?.name || "Guest"}
              </span>
            </div>
          </motion.div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600 transition"
      >
        <IoIosArrowBack size={24} />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600 transition"
      >
        <IoIosArrowForward size={24} />
      </button>
    </div>
  );
}
