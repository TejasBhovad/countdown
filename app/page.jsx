"use client";
// import statements go here REMOVE UNNECESSARY IMPORTS
import { React, useState } from "react";
import EventFrame from "@/components/EventFrame.jsx";

const page = () => {
  return (
    <div className="bg-background w-full h-full">
      {/* Added element for testing purposes, after testing should be removed from here */}
      <EventFrame />
    </div>
   
  );
};

export default page;
