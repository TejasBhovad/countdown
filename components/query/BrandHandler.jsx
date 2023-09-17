"use client";
import React from "react";

// Upload brand data to the database
const uploadBrandData = async (dataToUpload) => {
  try {
    console.log("uploading brand data");
    const response = await fetch(`/api/brands/create`, {
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
    console.error("Failed to upload brand data", error);
  }
};

// Function to get the user's Data by email
const getBrandData = async (targetId) => {
  try {
    console.log("getting user data");

    const response = await fetch(`/api/brands/fetch`, {
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
    const brandData = await response.json();
    return brandData;
  } catch (error) {
    console.error("Failed to fetch user data", error);
  }
};

const Brand = () => {
  return (
    <div>
      {/* <button
        onClick={() => {
          uploadBrandData(brandData); // Pass the brandData object as a parameter
        }}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Upload Brand Data
      </button> */}
    </div>
  );
};
export { uploadBrandData, getBrandData };
export default Brand;
