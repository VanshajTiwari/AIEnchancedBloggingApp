import { useState } from "react";
import { uploadImage } from "../_lib/action";

function ImagePreviewPlusLoader({ item, updateComponentValue }: { item: any; updateComponentValue: Function }) {
  const [image, setImage] = useState<string>("");

  function handleImagePreview(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
    }
  }

  async function handleOnChange(event: React.ChangeEvent<HTMLInputElement>) {
    const file: any = event.target.files?.[0];
    if (!file) return;

    handleImagePreview(event); // Show preview

    try {
        const formData=new FormData();
        formData.append("file",file);
        const imgUrl=await uploadImage(formData); // Upload image & get URL
        // console.log("uploadedImageUrl");
        updateComponentValue(item.id,imgUrl);
    
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  }

  return (
    <div className="flex items-center justify-around">
      {image && <img src={image} alt="Preview" className="max-h-[200px]" />}
      
      <label
        htmlFor={item.con_type + "_" + item.id}
        className="flex flex-col items-center justify-center pt-5 pb-6 hover:bg-white hover:cursor-pointer rounded-md duration-300"
      >
        <svg
          className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 16"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
          />
        </svg>
        <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
          <span className="font-semibold">Click to upload</span> or drag and drop
        </p>
        <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG, or GIF (MAX. 800x400px)</p>
      </label>

      <input
        id={item.con_type + "_" + item.id}
        type="file"
        name="file"
        className="hidden"
        accept="image/*"
        onChange={handleOnChange}
      />
    </div>
  );
}

export default ImagePreviewPlusLoader;
