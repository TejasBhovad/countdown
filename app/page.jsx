"use client";
// import statements go here REMOVE UNNECESSARY IMPORTS
import { React, useState } from "react";
import EventFrame from "@/components/EventFrame.jsx";
import Header from "@/components/Header";

const page = () => {
  return (
    <div className="bg-background w-full h-full">
      <div className="header w-full h-20 bg-red-400 flex justify-center items-center px-5 py-5">
        <Header />
      </div>
    </div>
  );
};

export default page;
