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
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [sort, setSort] = useState("recent");
  const [sortResults, setSortResults] = useState([]);
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
    // console.log(data);
  };
  useEffect(() => {
    if (isMounted) {
      fetchHomeData();
    }
  }, [isMounted]);

  useEffect(() => {
    const results = homeData.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  }, [searchTerm, homeData]);

  useEffect(() => {
    if (sort === "recent") {
      const results = homeData.sort((a, b) => {
        return new Date(b.date) - new Date(a.date);
      });
      setSortResults(results);
    } else if (sort === "upcoming") {
      const today = new Date();
      const results = homeData.sort((a, b) => {
        const timeDifferenceA = Math.abs(new Date(a.date) - today);
        const timeDifferenceB = Math.abs(new Date(b.date) - today);
        return timeDifferenceA - timeDifferenceB;
      });
      setSortResults(results);
    }
  }, [sort, homeData]);

  return (
    <div className="bg-background w-full h-full flex-col">
      <Header setSearchTerm={setSearchTerm} setSort={setSort} />
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
          <Sortby cName="social" link="social" logo={<Smile />} />
        </div>
      </div>
      {/* <div className="fixed bottom-0 left-0 z-50 bg-white shadow-md w-full">
        <Navbar />
      </div> */}
      <div className="py-3 flex w-full h-18 bg-transparent flex justify-between px-3">
        <div className="event-grid gap-5 bg-util flex w-full h-full py-2 px-4 rounded-md grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
          {sort == "recent" &&
            homeData.map((item) => (
              <EventFrame
                brandId={item.brand_id}
                countId={item.id}
                edit={false}
              />
            ))}
          {sort == "upcoming" &&
            sortResults
              .reverse()
              .map((item) => (
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
