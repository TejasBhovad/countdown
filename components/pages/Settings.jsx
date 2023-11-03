"use client";
import React from "react";
import { useSession } from "next-auth/react";
import { uploadBrandData } from "@/components/query/BrandHandler";
import ClickDiv from "@/components/ClickDiv";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { getBrandDataEmail } from "@/components/query/BrandHandler";
const Settings = () => {
  const [brandData, setBrandData] = useState({
    id: "brand-id",
    name: "brand name",
    email: "brand email",
    countdowns: [],
    image: "",
    date: "",
  });

  const [brandNameInput, setBrandNameInput] = useState("brand name");
  const [brandEmailInput, setBrandEmailInput] = useState("brand email");
  const [brandIDInput, setBrandIDInput] = useState("brand-id");
  const [isMounted, setIsMounted] = useState(false); // Track component mounting

  useEffect(() => {
    setIsMounted(true); // Component is mounted
    return () => {
      setIsMounted(false); // Component is unmounted
    };
  }, []);

  const { data: session } = useSession();
  useEffect(() => {
    if (isMounted && session) {
      const email = session.user.email;
      // console.log(email);
      try {
        getBrandDataEmail(email).then((data) => {
          // console.log(data);
          setBrandData(data);
          setBrandIDInput(JSON.stringify(data.id).replace(/"/g, ""));
          setBrandNameInput(JSON.stringify(data.name).replace(/"/g, ""));
          setBrandEmailInput(JSON.stringify(data.email).replace(/"/g, ""));
          // console.log(JSON.stringify(data.id));
        });
      } catch (error) {
        // console.log(email);
      }
    }
  }, [session, isMounted]);

  // use effect to update the brand data
  useEffect(() => {
    setBrandData({
      id: brandIDInput,
      name: brandNameInput,
      email: brandData.email,
      countdowns: brandData.countdowns,
      image: brandData.image,
      date: brandData.date,
    });
  }, [brandIDInput, brandNameInput]);
  const saveBrandData = async () => {
    await uploadBrandData(brandData);
};
  return (
    <div className="w-full h-full px-5 py-3 flex flex-col gap-5">
      <div className="title text-3xl font-bold py-5">Brand Information</div>
      <div className="name flex">
        {/* {
          // name
          brandEmailInput + "" + brandIDInput + "" + brandNameInput
        } */}
        <div className="label text-xl font-semibold w-24">Name</div>
        <ClickDiv placeholder={brandNameInput} onChange={setBrandNameInput} />
      </div>
      {/* id */}
      <div className="id flex">
        <div className="label text-xl font-semibold w-24">ID</div>
        <ClickDiv placeholder={brandIDInput} onChange={setBrandIDInput} />
      </div>
      {/* EMAIL */}
      <div className="email flex">
        <div className="label text-xl font-semibold w-24">Email</div>
        <div className="value text-lg">{brandEmailInput}</div>
      </div>
      {/* BUTTON */}
      <div className="button flex">
        <Button
          onClick={() => {
            // console.log(brandNameInput);
            // console.log(brandIDInput);
            // console.log(brandEmailInput);
            saveBrandData();
          }}
          className="w-24 mt-4"
        >
          Save
        </Button>
      </div>
    </div>
  );
};

export default Settings;
