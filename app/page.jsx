"use client";
import { useState, useEffect } from "react";
import Header from "@/components/Header";
import EventFrame from "@/components/EventFrame";
import Sortby from "@/components/Sortby";
import Code from "@/components/logos/Code";
import Science from "@/components/logos/Science";
import Smile from "@/components/logos/Smile";
import Navbar from "@/components/Navbar";
import { getHomeData } from "@/components/query/HomeHandler";

const page = () => {
  const [homeData, setHomeData] = useState([]);

  const [isMounted, setIsMounted] = useState(false); // Track component mounting

  useEffect(() => {
    setIsMounted(true); // Component is mounted
    return () => {
      setIsMounted(false); // Component is unmounted
    };
  }, []);
  const fetchHomeData = async () => {
    const data = await getHomeData();
    setHomeData(data);
    console.log(data);
  };
  useEffect(() => {
    if (isMounted) {
      fetchHomeData();
    }
  }, [isMounted]);

  return (
    <div className="bg-background w-full h-full flex-col">
      <Header />
      <div className="py-3 flex w-full h-18 bg-transparent flex justify-between px-3">
        <div className="gap-2 bg-util flex w-full h-full justify-between py-2 px-4 rounded-md flex-col">
          <h1 className="font-bold text-2xl text-primary">Counts for you...</h1>
          <div className="flex gap-5"></div>
        </div>
      </div>
      <div className="py-3 flex w-full h-18 bg-transparent flex justify-between px-3">
        <div className="gap-5 bg-util flex w-full h-full py-2 px-4 rounded-md ">
          <Sortby cName="code" link="code" logo={<Code />} />
          <Sortby cName="science" link="science" logo={<Science />} />
          <Sortby cName="smile" link="smile" logo={<Smile />} />
        </div>
      </div>
      {/* <div className="fixed bottom-0 left-0 z-50 bg-white shadow-md w-full">
        <Navbar />
      </div> */}
      <div className="py-3 flex w-full h-18 bg-transparent flex justify-between px-3">
        <div className="gap-5 bg-util flex w-full h-full py-2 px-4 rounded-md">
          {homeData.map((item) => (
            <EventFrame
              brandId={item.brand_id}
              countId={item.id}
              edit={false}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
