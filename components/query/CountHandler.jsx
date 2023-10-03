"use client";
import React from "react";

// Upload brand data to the database
const uploadCountData = async (dataToUpload) => {
  try {
    console.log("uploading count data");
    const response = await fetch(`/api/counts/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataToUpload),
    });
    if (!response.ok) {
      throw new Error("Something went wrong");
    }
  } catch (error) {
    console.error("Failed to upload count data", error);
  }
};

// Function to get the user's Data by email
const getCountData = async (targetId) => {
  try {
    console.log("getting count data");

    const response = await fetch(`/api/counts/fetch`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: targetId,
      }),
    });
    if (!response.ok) {
      throw new Error("Something went wrong");
    }
    const countData = await response.json();
    return countData;
  } catch (error) {
    console.error("Failed to fetch count data", error);
  }
};

const Count = () => {
  return <div></div>;
};
export { uploadCountData, getCountData };
export default Count;
