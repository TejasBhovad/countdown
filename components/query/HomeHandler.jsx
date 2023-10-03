"use client";
import React from "react";

// Function to get the user's Data by email
const getHomeData = async () => {
  try {
    console.log("getting count data");

    const response = await fetch(`/api/home/fetch`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error("Something went wrong");
    }
    const countData = await response.json();
    // console.log(countData);
    return countData;
  } catch (error) {
    console.error("Failed to fetch count data", error);
  }
};

const Home = () => {
  return <div></div>;
};
export { getHomeData };
export default Home;
