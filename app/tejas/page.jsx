"use client";
import React from "react";
import { useState,useEffect } from "react";
import { getHomeCategoryData } from "@/components/query/HomeHandler";
const page = () => {
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
    const data = await getHomeCategoryData("code");
    setFilteredData(data);
    console.log(data);
  }; 
  useEffect(() => {
    if (isMounted) {
      fetchHomeData();
    }
  }, [isMounted]);
  return <div>
    {JSON.stringify(filteredData)}
  </div>;
};

export default page;
