"use client";
import { useState } from "react";
import Add from "@/components/logos/Plus";

const DragAndDrop = ({ setImage, setFiles }) => {
  const [thumbnail, setThumbnail] = useState(null);

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    handleFile(file);
  };

  const handleFileInput = (e) => {
    const file = e.target.files[0];
    handleFile(file);
  };

  const handleFile = (file) => {
    if (file && file.type.startsWith("image/") && file.size <= 10240 * 10240) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setThumbnail(e.target.result);
        setImage(e.target.result); // Set the image data in
        setFiles(file);
      };
      reader.readAsDataURL(file);
    } else {
      alert("Please upload a valid image (maximum size: 1MB).");
    }
  };

  return (
    <div
      className="w-72 h-56 drop-zone border-2 border-dashed border-secondary p-4 text-center cursor-pointer justify-center items-center flex flex-col gap-2"
      onDrop={handleDrop}
      onDragOver={(e) => e.preventDefault()}
    >
      {thumbnail ? (
        <div className="text-secondary max-w-100 max-h-100 m-2 flex flex-col justify-center items-center gap-5">
          <img
            src={thumbnail}
            alt="Uploaded Thumbnail"
            className="w-auto h-auto max-w-100 max-h-100"
          />
          <label className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer">
            Browse
            <input
              type="file"
              className="hidden"
              accept="image/*"
              onChange={handleFileInput}
            />
          </label>
        </div>
      ) : (
        <>
          <p>Drag and drop an image here or</p>
          <Add className="logo" />
          <label className="ease-in-out duration-75 transition-all bg-secondary hover:bg-primary text-white font-semibold py-2 px-2 rounded text-md cursor-pointer">
            Browse
            <input
              type="file"
              className="hidden"
              accept="image/*"
              onChange={handleFileInput}
            />
          </label>
        </>
      )}
    </div>
  );
};

export default DragAndDrop;
