"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { uploadCountData } from "@/components/query/CountHandler.jsx";
import { getBrandDataEmail } from "@/components/query/BrandHandler.jsx";
import { uploadBrandData } from "@/components/query/BrandHandler.jsx";
import ClickArea from "@/components/ClickArea";
import ClickDiv from "@/components/ClickDiv";
import CategoryList from "@/components/CategoryList";
import DragAndDrop from "@/components/DragAndDrop";
import Info from "@/components/logos/Info";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useSession } from "next-auth/react";
import DatePicker from "@/components/DatePicker.jsx";

const BasicInfo = () => {
  const { data: session } = useSession();
  const [countName, setCountName] = useState("count name");
  const [countID, setID] = useState("count-id");
  const [category, setCategory] = useState("none");
  const [image, setImage] = useState("");
  const [file, setFile] = useState(null);
  const [date, setDate] = useState(null);
  const [time, setTime] = useState("12:00");
  const [countDescription, setCountDescription] = useState("count description");
  const [URL, setURL] = useState(
    "https://res.cloudinary.com/dgfwo4qvg/image/upload/v1696678572/temp_ic3aa1.jpg"
  );
  const [brandID, setBrandID] = useState("brand-id");
  const [countData, setCountData] = useState({
    name: "PlaceHolder",
    id: "dummy",
    desc: "description",
    image:
      "https://res.cloudinary.com/dgfwo4qvg/image/upload/v1696678572/temp_ic3aa1.jpg",
    time: "12:00",
    date: "2021-09-01",
    brand_id: "brand",
    categories: "none",
    count: [{ name: "dummy", id: "dummy", count: 0 }],
  });
  //
  const [isMounted, setIsMounted] = useState(false); // Track component mounting

  useEffect(() => {
    setIsMounted(true); // Component is mounted
    return () => {
      setIsMounted(false); // Component is unmounted
    };
  }, []);

  useEffect(() => {
    if (isMounted && session) {
      const email = session.user.email;
      console.log(email);
      try {
        getBrandDataEmail(email).then((data) => {
          // console.log(data);
          setBrandID(JSON.stringify(data.id));
          console.log(brandID);
        });
      } catch (error) {
        console.log(email);
      }
    }
  }, [session, isMounted]);

  // useEffect to update countData
  useEffect(() => {
    setCountData({
      name: countName,
      id: countID,
      categories: category,
      desc: countDescription,
      image: URL,
      time: time,
      date: date,
      brand_id: brandID.replace(/"/g, ""),
      count: [{ name: "dummy", id: "dummy", count: 0 }],
    });
  }, [
    countName,
    countID,
    category,
    countDescription,
    URL,
    brandID,
    date,
    time,
  ]);

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
          setURL(data.url);
          setImage(data.url);
          setCountData({
            name: countName,
            id: countID,
            categories: category,
            desc: countDescription,
            image: data.url,
            time: time,
            date: date,
            brand_id: brandID,
            count: [{ name: "dummy", id: "dummy", count: 0 }],
          });
        });
      await uploadData();
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };
  const router = useRouter();
  const uploadData = async () => {
    console.log("uploading data");
    console.log(countData);
    await uploadCountData(countData);
    await updateBrandCountdowns();
    const link = `/${brandID.replace(/"/g, "")}/${countID}/edit`;
    // create timeout to wait for data to be uploaded
    setTimeout(() => {
      router.push(link);
    }, 2000);
  };

  // function to update brand's countdowns array with new countdown_id
  const updateBrandCountdowns = async () => {
    const brandData = await getBrandDataEmail(session.user.email);
    const brandCountdowns = brandData.countdowns;
    brandCountdowns.push(countID);
    console.log(brandCountdowns);

    // update brand's countdowns array
    await uploadBrandData({
      id: brandData.id,
      name: brandData.name,
      email: brandData.email,
      countdowns: brandCountdowns,
      image: brandData.image,
      date: date,
    });
  };

  return (
    <div className=" flex-col w-full h-full px-5 gap-5 flex py-4">
      <div className="title font-bold text-5xl py-3 w-18">Basic Info</div>

      <div className="sm:flex px-2">
        <div className="font-semibold text-xl w-32">Count Name</div>
        <ClickDiv placeholder={countName} onChange={setCountName} />
      </div>

      <div className="sm:flex px-2 gap-4">
        <div className="font-semibold text-xl w-28">Count ID</div>
        <ClickDiv placeholder={countID} onChange={setID} />
        <div className="gap-2 justify-center items-center text-secondary text-semibold bg-util rounded-sm w-56 text-center flex h-7 p-2">
          <Info />
          can't be changed later
        </div>
      </div>

      <div className="sm:flex px-2">
        <div className="font-semibold text-xl w-32">Description</div>
        <ClickArea
          placeholder={countDescription}
          onChange={setCountDescription}
        />
      </div>

      <div className="sm:flex px-2">
        <div className="font-semibold text-xl w-32">Category</div>
        <CategoryList setCategory={setCategory} category={category} />
      </div>

      <div className="flex px-2 flex-col gap-4">
        <div className="font-semibold text-xl">Upload Event Image</div>
        <DragAndDrop setFiles={setFile} setImage={setImage} />
      </div>
      <div className="flex px-2 gap-4 items-center">
        <div className="font-semibold text-xl">Event Date</div>
        <DatePicker setDate={setDate} date={date} />
      </div>
      <div className="flex px-2 gap-4 items-center">
        <div className="font-semibold text-xl">Event Time</div>
        <input
          type="time"
          id="appt"
          name="appt"
          min="00:00"
          max="23:59"
          required
          onChange={(e) => setTime(e.target.value)}
          className="bg-primary text-white rounded-md px-2 py-1"
        />
      </div>
      <div className="w-full">
        <Button onClick={() => handleImageUpload()} className="w-32 ml-2">
          Next
        </Button>
        {JSON.stringify(countData)}
      </div>
    </div>
  );
};

export default BasicInfo;
