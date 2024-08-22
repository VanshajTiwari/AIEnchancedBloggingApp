"use client";
import { useState } from "react";
import { BiTrash } from "react-icons/bi";
import { FaEdit } from "react-icons/fa";
import { addnewBlog } from "../_lib/action";
import { toast } from 'react-hot-toast';
export default function PostEditor() {
    const [content, setContent] = useState([]);
    const [nextId, setNextId] = useState(1);
    const [title, setTitle] = useState("");
    const [thumbnail, setThumbnail] = useState("");
    const [desc, setDesc] = useState("");  // New state for description
    const [category, setCategory] = useState("");  // New state for category

    const addComponent = (con_type) => {
        setContent([...content, { id: nextId, con_type, data: "" }]);
        setNextId(nextId + 1);
    };

    const removeComponent = (id) => {
        setContent(content.filter((item) => item.id !== id));
    };

    const updateComponentValue = (id, data) => {
        setContent(content.map(item => item.id === id ? { ...item, data } : item));
    };

    const handleSubmit =async () => {
        const blogData = {
            thumbnail,
            title,
            desc,
            category,
            content,
        };
        if(await addnewBlog(blogData)==="ok"){
            toast.success('Successfully uploaded!'); // Displays a success message
        }
        else{
            console.log("toaaer Faile");
            toast.error("Some Error Occur");
        }
        // Add your API call logic here to send `blogData` to the backend
    };

    return (
        
        <div className="w-full p-2 bg-yellow-400 rounded-md shadow-md">
            <div className="mb-4">
                <label htmlFor="title" className="block mb-2 font-bold">Title:</label>
                <input
                    id="title"
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Enter your title"
                    className="w-full p-2 border rounded-md"
                    required
                />
            </div>

            <div className="mb-4">
                <label htmlFor="thumbnail" className="block mb-2 font-bold">Thumbnail URL:</label>
                <input
                    id="thumbnail"
                    type="text"
                    value={thumbnail}
                    onChange={(e) => setThumbnail(e.target.value)}
                    placeholder="Enter thumbnail URL"
                    className="w-full p-2 border rounded-md"
                    required
                />
            </div>

            <div className="mb-4">
                <label htmlFor="desc" className="block mb-2 font-bold">Description:</label>
                <textarea
                    id="desc"
                    value={desc}
                    onChange={(e) => setDesc(e.target.value)}
                    placeholder="Enter a brief description..."
                    className="w-full p-2 border rounded-md"
                />
            </div>

            <div className="mb-4">
                <label htmlFor="category" className="block mb-2 font-bold">Category:</label>
                <select
                    id="category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full p-2 border rounded-md"
                    required
                >
                    <option value="">Select a category</option>
                    <option value="science">Science</option>
                    <option value="cyber">Cyber</option>
                    <option value="health">Health</option>
                    <option value="god">God</option>
                    <option value="culture">Culture</option>
                    <option value="lifestyle">Lifestyle</option>
                    <option value="kids">Kids</option>
                    <option value="awareness">Awareness</option>
                    <option value="politics">Politics</option>
                    <option value="other">Other</option>
                </select>
            </div>

            <div className="mb-4">
                <button onClick={() => addComponent("heading")} className="mr-2 bg-blue-500 text-white p-2 rounded-md">Add Heading</button>
                <button onClick={() => addComponent("paragraph")} className="mr-2 bg-blue-500 text-white p-2 rounded-md">Add Paragraph</button>
                <button onClick={() => addComponent("image")} className="bg-blue-500 text-white p-2 rounded-md">Add Image</button>
            </div>

            {content.map((item) => (
                <div key={item.id} className="mb-4 p-2 border rounded-md">
                    <div className="flex justify-between items-center">
                        <label className="font-bold">{item.con_type}</label>
                        <div className="flex space-x-2">
                            <FaEdit className="text-green-500 cursor-pointer" onClick={() => {/* Implement edit logic */}} />
                            <BiTrash className="text-red-500 cursor-pointer" onClick={() => removeComponent(item.id)} />
                        </div>
                    </div>
                    <input
                        type="text"
                        value={item.data}
                        onChange={(e) => updateComponentValue(item.id, e.target.value)}
                        placeholder={`Enter ${item.type} content`}
                        className="w-full mt-2 p-2 border rounded-md"
                    />
                </div>
            ))}

            <div className="mt-6">
                <button onClick={handleSubmit} className="bg-green-500 text-white p-2 rounded-md">Submit Post</button>
            </div>
        </div>
    );
}
