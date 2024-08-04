'use client';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import image from '../../public/post1.png';

export default function Navbar() {
    const navRef = useRef<HTMLOListElement>(null);
    const [isIntersect, setIntersect] = useState(true);

    useEffect(() => {
        const val: any = navRef.current;
        const observer = new IntersectionObserver((entries) => {
            setIntersect(entries[0].isIntersecting);
        }, {
            root: null,
            threshold: 0.8
        });

        if (val) {
            observer.observe(val);
        }

        return () => {
            if (val) {
                observer.unobserve(val);
            }
        };
    }, [isIntersect]);

    return (
        <>
            <ol className={`flex justify-around transition-all duration-500 items-center p-3 gap-x-2 w-full z-10 top-0 ${isIntersect ? 'absolute' : 'fixed bg-[#E17E26]'}`}>
                <div>Logo</div>
                <div className="flex gap-x-2">
                    <li className="duration-400 font-bold cursor-pointer rounded-md hover:text-gray-300 p-2">
                        <Link href="/">Home</Link>
                    </li>
                    <li className="duration-400 font-bold cursor-pointer rounded-md hover:text-gray-300 p-2">
                        <Link href="/about">About</Link>
                    </li>
                    <li className="duration-400 font-bold cursor-pointer rounded-md hover:text-gray-300 p-2">
                        <Link href="/contact">Contact</Link>
                    </li>
                    <li className="duration-400 font-bold cursor-pointer rounded-lg flex justify-center items-center">
                        <input
                            type="text"
                            name="search"
                            id="search"
                            className="shadow-sm focus:ring-indigo-500 p-2 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                            placeholder="Search..."
                        />
                    </li>
                    <li className="duration-400 font-bold cursor-pointer rounded-md hover:text-gray-300 p-2">
                        <Link href="/services">Service</Link>
                    </li>
                </div>
                <div className="flex gap-x-3">
                    <Link href="/signup" className="p-2 rounded-md">SignUp</Link>
                    <Link href="/login" className="p-2 rounded-md">LogIn</Link>
                </div>
            </ol>
            <section ref={navRef} className="w-full h-[600px] overflow-hidden flex justify-center items-center relative">
                <Image src={image} alt="hero" className="w-full object-cover relative top-[-100px]" />
                <div className="w-full h-[200px] rounded-md top-1/2 left-6 absolute text-white">
                    <h1 className="text-6xl font-bold max-w-[450px]">Explore the world of Living</h1>
                    <p className="font-semibold text-xl max-w-[450px]">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt, nostrum.
                    </p>
                </div>
            </section>
        </>
    );
}
