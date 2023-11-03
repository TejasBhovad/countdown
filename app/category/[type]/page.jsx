"use client";
import React from "react";
import Navbar from "@/components/Navbar";
// import Header from "@/components/Header";
import EventFrame from "@/components/EventFrame";
import Sortby from "@/components/Sortby";
import Code from "@/components/logos/Code";
import Science from "@/components/logos/Science";
import Smile from "@/components/logos/Smile";
import { useState,useEffect } from "react";
import { getHomeCategoryData } from "@/components/query/HomeHandler";
const page = ({ params }) => {
  const [isMounted, setIsMounted] = useState(false); // Track component mounting
  const [filteredData, setFilteredData] = useState([]);
  //  use mount effect
  useEffect(() => {
    setIsMounted(true); // Component is mounted
    return () => {
      setIsMounted(false); // Component is unmounted
    };
  }, []);
  const fetchHomeData = async () => {
    const data = await getHomeCategoryData(params.type);
    setFilteredData(data);
    // console.log(data);
  }; 
  useEffect(() => {
    if (isMounted) {
      fetchHomeData();
    }
  }, [isMounted]);
  return <div className="w-full h-full flex-col">
  <Navbar />
  <div className="w-full h-full pt-12 ">
<div>
<div className="bg-background w-full h-full flex-col">
  <div className="py-3 flex w-full h-18 bg-transparent flex justify-between px-3">
    <div className="gap-2 bg-util flex w-full h-full justify-between py-2 px-4 rounded-md flex-col">
      <h1 className="font-bold text-2xl text-primary">{params.type}</h1>
      <div className="flex gap-5"></div>
    </div>
  </div>

  <div className="py-3 flex w-full h-18 bg-transparent flex justify-between px-3">
    <div className="gap-5 bg-util flex w-full h-full py-2 px-4 rounded-md">
      {filteredData.map((item) => (
        <EventFrame
          brandId={item.brand_id}
          countId={item.id}
          edit={false}
        />
      ))}
    </div>
  </div>
</div>

</div>
  </div>
</div>
};

export default page;
