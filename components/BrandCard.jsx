"use client";
import React from "react";
import { useState, useEffect } from "react";
import { getBrandData } from "@/components/query/BrandHandler";
import Image from "next/image";

const BrandCard = ({ brandID, primaryColor, textColor }) => {
  const [brandName, setBrandName] = useState("Loading...");
  const [brandLogo, setBrandLogo] = useState();

  useEffect(() => {
    try {
      getBrandData(brandID).then((data) => {
        setBrandName(data.name);
        setBrandLogo(data.image);
      });
    } catch (error) {
      // console.log(error);
    }
  }, [brandID]);
  return (
    <div className="absolute top-12 right-0">
      <div className="w-72 h-12  flex justify-end items-center gap-3 px-4">
        <div
          className="bg-red-400 flex justify-center items-center gap-3 px-4 py-1 rounded-md"
          style={{ backgroundColor: primaryColor }}
        >
          <Image
            src={brandLogo}
            alt="Brand Logo"
            width={30}
            height={30}
            className="rounded-full"
          />
          <h1 className="text-xl font-regular" style={{ color: textColor }}>
            {brandName}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default BrandCard;
