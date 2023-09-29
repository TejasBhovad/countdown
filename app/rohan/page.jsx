"use client";
// import statements go here REMOVE UNNECESSARY IMPORTS
import { React, useState } from "react";


import Countdown from "@/components/Countdown";

const page = () => {
  return (
    <div className="bg-background w-full h-full">
      {/* Added element for testing purposes, after testing should be removed from here */}
      
      <Countdown />
    </div>
  );
};

export default page;
