"use client";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { toast } from 'react-hot-toast';
import { BiTrash } from "react-icons/bi";
import { addnewBlog } from "../_lib/action";
import ImagePreviewPlusLoader from "./imagePreviewPlusLoader";
import { redirect } from "next/navigation";
import SubmitButton from "./submitButton";

export default function PostEditor() {
  const { data: Session, status } = useSession();
  const user = Session?.user;
  const [content, setContent] = useState<any>([]);
  const [nextId, setNextId] = useState(1);
  const [title, setTitle] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [desc, setDesc] = useState("");
  const [category, setCategory] = useState("");
  const [draggingIndex, setDraggingIndex] = useState<null | number>(null);

  const addComponent = (con_type: string, event: React.MouseEvent) => {
    event.preventDefault(); // ✅ Prevent page refresh
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

  const handleDragStart = (index: number) => {
    setDraggingIndex(index);
  };

  const handleDragOver = (event: React.DragEvent, index: number) => {
    event.preventDefault();
    if (draggingIndex === null || draggingIndex === index) return;

    const updatedContent = [...content];
    const [draggedItem] = updatedContent.splice(draggingIndex, 1);
    updatedContent.splice(index, 0, draggedItem);

    setDraggingIndex(index);
    setContent(updatedContent);
  };

  const handleDragEnd = () => {
    setDraggingIndex(null);
  };

  // 🛠 Fixed form submission logic
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const postData: any = {
      title,
      description: desc,
      category,
      content: JSON.stringify(content), // ✅ Ensure JSON is formatted correctly
      thumbnail,
      email:Session?.user.email
    };

    console.log("Submitting Post Data:", postData);

    try {
      const status=await addnewBlog(postData);
    } catch (error) {
      console.error("Error adding post:", error);
      toast.error("Error adding post");
    }
  };

  useEffect(() => {
    console.log("Updated Content:", content);
  }, [content]);

  return (
    <form onSubmit={handleSubmit} className="w-full p-4 bg-white rounded-md shadow-md duration-400">
      {/* Category, Title, Thumbnail, Description Inputs */}
      <div className="mb-4">
        <label htmlFor="category" className="block mb-2 font-bold">Category:</label>
        <select
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full p-2 border rounded-md"
          required
        >
          <option value="" disabled>Select a category</option>
          <option value="science">Science</option>
        </select>
      </div>

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
          required
        />
      </div>

      {/* Add Components (Heading, Paragraph, Image) */}
      <div className="mb-4">
        <button type="button" onClick={(e) => addComponent("heading", e)} className="mr-2 bg-yellow-500 text-white p-2 rounded-md">Add Heading</button>
        <button type="button" onClick={(e) => addComponent("paragraph", e)} className="mr-2 bg-yellow-500 text-white p-2 rounded-md">Add Paragraph</button>
        <button type="button" onClick={(e) => addComponent("file", e)} className="bg-yellow-500 text-white p-2 rounded-md">Add Image</button>
      </div>

      <div className="mb-4">
        {content.map((item: any, index: number) => (
          <div
            key={item.id}
            draggable
            onDragStart={() => handleDragStart(index)}
            onDragOver={(e) => handleDragOver(e, index)}
            onDragEnd={handleDragEnd}
            className="mb-2 border p-4"
          >
            <h4 className="text-lg font-semibold">Component {item.id}</h4>
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

            <button
              type="button"
              onClick={() => removeComponent(item.id)}
              className="text-red-500"
            >
              <BiTrash /> Remove
            </button>
          </div>
        ))}
      </div>

      <div className="text-center">
        <SubmitButton successMsg="Data sent!" label="Uploading...">Submit Post</SubmitButton>
      </div>
    </form>
  );
}
