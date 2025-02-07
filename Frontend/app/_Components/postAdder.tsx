"use client";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { toast } from 'react-hot-toast';
import { BiTrash } from "react-icons/bi";
import { addnewBlog } from "../_lib/action";
import ImagePreviewPlusLoader from "./imagePreviewPlusLoader";
import SubmitButton from "./submitButton";

export default function PostEditor() {
  const { data: Session } = useSession();
  const user = Session?.user;
  const [content, setContent] = useState<any>([]);
  const [nextId, setNextId] = useState(1);
  const [title, setTitle] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [desc, setDesc] = useState("");
  const [category, setCategory] = useState("");
  const [draggingIndex, setDraggingIndex] = useState<null | number>(null);

  const addComponent = (con_type: string) => {
    setContent((prevContent: any) => [...prevContent, { id: nextId, con_type, data: "" }]);
    setNextId((prevId) => prevId + 1);
  };

  const removeComponent = (id: number) => {
    setContent((prevContent: any) => prevContent.filter((item: any) => item.id !== id));
  };

  const updateComponentValue = (id: number, data: any): any => {
    setContent((prevContent: any) =>
      prevContent.map((item: any) =>
        item.id === id ? { ...item, data } : item
      )
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const postData: any = {
      title,
      desc,
      category,
      content: JSON.stringify(content),
      thumbnail,
      email: Session?.user.email,
    };

    try {
      await addnewBlog(postData);
      toast.success("Post added successfully!");
    } catch (error) {
      toast.error("Error adding post");
    }
  };

  return (
    <>
    <h1 className="text-2xl font-bold text-center mb-6 text-gray-100 dark:text-gray-500" style={{fontFamily:"Bebas"}}>Write & Publish Your Blog</h1>

    <form onSubmit={handleSubmit} className="w-full max-w-4xl mx-auto p-6 bg-gray-50 dark:bg-gray-300 rounded-lg shadow-md">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block font-bold">Category:</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full p-2 border rounded-md"
            required
          >
            <option value="" disabled>Select a category</option>
            <option value="science">Science</option>
          </select>
        </div>
        <div>
          <label className="block font-bold">Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 border rounded-md"
            required
          />
        </div>
      </div>

      <div className="mt-4">
        <label className="block font-bold">Thumbnail URL:</label>
        <input
          type="text"
          value={thumbnail}
          onChange={(e) => setThumbnail(e.target.value)}
          className="w-full p-2 border rounded-md"
          required
        />
      </div>

      <div className="mt-4">
        <label className="block font-bold">Description:</label>
        <textarea
          value={desc}
          name="desc"
          onChange={(e) => setDesc(e.target.value)}
          className="w-full p-2 border rounded-md"
          required
        />
      </div>

      <div className="flex flex-wrap gap-2 mt-4">
        <button 
          type="button" 
          onClick={() => addComponent("heading")} 
          className="bg-blue-500 text-white px-4 py-2 rounded-md transition transform active:scale-95"
        >
          Add Heading
        </button>

        <button 
          type="button" 
          onClick={() => addComponent("paragraph")} 
          className="bg-blue-500 text-white px-4 py-2 rounded-md transition transform active:scale-95"
        >
          Add Paragraph
        </button>

        <button 
          type="button" 
          onClick={() => addComponent("file")} 
          className="bg-blue-500 text-white px-4 py-2 rounded-md transition transform active:scale-95"
        >
          Add Image
        </button>
      </div>


      <div className="mt-4 space-y-4">
        {content.map((item: any) => (
          <div key={item.id} className="border p-4 rounded-md">
            <h4 className="font-semibold">Component {item.id}</h4>
            {item.con_type === "heading" && (
              <input
                type="text"
                value={item.data}
                onChange={(e) => updateComponentValue(item.id, e.target.value)}
                className="w-full p-2 border rounded-md"
              />
            )}
            {item.con_type === "paragraph" && (
              <textarea
                value={item.data}
                onChange={(e) => updateComponentValue(item.id, e.target.value)}
                className="w-full p-2 border rounded-md"
              />
            )}
            {item.con_type === "file" && (
              <ImagePreviewPlusLoader item={item} updateComponentValue={updateComponentValue} />
            )}
            <button type="button" onClick={() => removeComponent(item.id)} className="text-red-500 flex items-center gap-1 mt-2">
              <BiTrash /> Remove
            </button>
          </div>
        ))}
      </div>

      <div className="mt-6 text-center">
        <SubmitButton successMsg="Data sent!" label="Uploading...">Submit Post</SubmitButton>
      </div>
    </form>
    </>
  );
}
