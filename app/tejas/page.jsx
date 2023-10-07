"use client";
import React from "react";

import { useState } from "react";
import BasicInfo from "@/components/BasicInfo";
import ClickDiv from "@/components/ClickDiv";
import ClickArea from "@/components/ClickArea";
import CategoryList from "@/components/CategoryList";
import DragAndDrop from "@/components/DragAndDrop";
const page = () => {
  const [countName, setCountName] = useState("count name");
  const [countDescription, setCountDescription] = useState("count description");
  const [category, setCategory] = useState("none");

  // image
  const [image, setImage] = useState("");
  const [file, setFile] = useState(null);
  const [URL, setURL] = useState("default");

  // handle Image
  const handleImageUpload = async () => {
    try {
      const data = new FormData();
      data.append("file", image);
      data.append("upload_preset", "event_image");
      data.append("cloud_name", process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME);
      // data.append("public_id", userId);
      fetch(
        `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,
        {
          method: "POST",
          body: data,
        }
      )
        .then((res) => res.json())
        .then((data) => {
          // console.log(data);
          setURL(data.url);
          setImage(data.url);
          // uploadUserData(data.url);
          // console.log("Image:", data.url);
        });
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };
  return (
    <div className="w-full h-full">
      <BasicInfo />
      {/* <ClickDiv placeholder={countName} onChange={setCountName} />
      {countName}
      <ClickArea placeholder={countName} onChange={setCountDescription} />
      {countDescription}
      <CategoryList setCategory={setCategory} category={category} />
      {category}
      <DragAndDrop setFiles={setFile} setImage={setImage} />
      <img src={image} width={200}></img>
      <button
        // onClick={handleImageUpload}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer"
      >
        Upload
      </button>
      {URL} */}
    </div>
  );
};

export default page;
