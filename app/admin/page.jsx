"use client";
import { uploadBrandData } from "@/components/query/BrandHandler.jsx";
import { uploadCountData } from "@/components/query/CountHandler.jsx";
import { getHomeData } from "@/components/query/HomeHandler";
import { useState } from "react";
const page = () => {
  const [homeData, setHomeData] = useState({});
  // functiom to fetch home data
  const fetchHomeData = async () => {
    const data = await getHomeData();
    setHomeData(data);
    console.log(data);
  };
  // Create a new brand
  const [countData, setCountData] = useState({
    name: "Sale google",
    id: "sale",
    desc: "Count",
    image: "https://picsum.photos/200",
    time: "2200",
    date: "2021-09-09",
    brand_id: "google",
    categories: ["category-id", "category-id"],
    count: [
      {
        name: "Count",
        id: "count-id",
        desc: "Count",
      },
    ],
  });

  return (
    <div>
      <h1>Admin page</h1>
      <button
        onClick={() => {
          fetchHomeData();
        }}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        fetch home data
      </button>
      {JSON.stringify(homeData)}
      <button
        onClick={() => {
          uploadCountData(countData);
        }}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Upload Count Data
      </button>
    </div>
  );
};

export default page;
