"use client";
import { React, useState } from "react";
import EventFrame from "@/components/EventFrame.jsx";
import {
  uploadBrandData,
  getBrandData,
} from "@/components/query/BrandHandler.jsx";

const page = () => {
  // Test data
  const [id, setId] = useState("brand-id");
  const [data, setData] = useState("data will be displayed here");
  const [brandData, setBrandData] = useState({
    id: "brand-3",
    name: "Test Event 4",
    email: "test@gmail.com4",
    image: "https://www.w3schools.com/w3css/img_lights.jpg",
    countdowns: [
      {
        id: "test-id",
        name: "Test Countdown 3",
        date: "34/12/2021",
        time: "13:00",
        description: "Test Description 3",
        image: "https://www.w3schools.com/w3css/img_lights.jpg",
      },
    ],
  });

  return (
    <div className="bg-background w-full h-full">
      {/* Added element for testing purposes, after testing should be removed from here */}
      <EventFrame />
      {/* LINES BELOW ARE COMMENTED AND ARE FOR REFERENCE FOR API CALLS */}
      {/* <button
        onClick={() => {
          uploadBrandData(brandData);
        }}
      >
        Upload Data
      </button>
      <br />
      <button
        onClick={() => {
          console.log("fetching data");
          getBrandData(id).then((data) => {
            console.log(data);
            setData(JSON.stringify(data));
          });
        }}
      >
        Fetch
      </button> */}
    </div>
  );
};

export default page;
