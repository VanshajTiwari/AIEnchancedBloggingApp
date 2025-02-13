"use client";
import { getBlogs } from "@/app/_lib/action";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import Link from "next/link";

function Cards() {
    const [blogs, setBlogs] = useState<any[]>([]);
    const { data: session } = useSession(); 
    const _id = session?.user?._id; 

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const fetchedBlogs = await getBlogs("", _id);
                setBlogs(fetchedBlogs);
            } catch (error) {
                setBlogs([]); // Prevent crash
            }
        };

        if (_id) fetchBlogs();
    }, [_id]);
    return (
        <div className="mx-auto sm:p-10 md:p-16">
            <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-10">
                {blogs.map((blog: any) => (
                    <div 
                        key={blog.id} 
                        className="border-r border-b border-l border-gray-400 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal"
                    >
                        <img src={blog.thumbnail} className="w-full mb-3" alt={blog.title} />
                        <div className="p-4 pt-2">
                            <div className="mb-8">
                                <p className="text-sm text-gray-600 flex items-center">
                                    <svg className="fill-current text-gray-500 w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                        <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z"></path>
                                    </svg>
                                    Members only
                                </p>
                                <Link href={`/post/${blog.id}`} className="text-gray-900 font-bold text-lg mb-2 hover:text-indigo-600 inline-block">
                                    {blog.title}
                                </Link>
                                <p className="text-gray-700 text-sm">{blog.desc}</p>
                            </div>
                            <div className="flex items-center">
                                <Link href="#">
                                    <img 
                                        className="w-10 h-10 rounded-full mr-4" 
                                        src={session?.user.image}
                                        alt={`Avatar of ${session?.user.image}`}
                                    />
                                </Link>
                                <div className="text-sm">
                                    <Link href="#" className="text-gray-900 font-semibold leading-none hover:text-indigo-600">
                                        {session?.user.name}
                                    </Link>
                                    <p className="text-gray-600">{blog.lastUpdated}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export { Cards };
