"use client";
// import statements go here REMOVE UNNECESSARY IMPORTS
import { React, useState } from "react";
import Textbar from "@/components/Textbar";
import Designbar from "@/components/Designbar";
import Countdown from "@/components/Countdown";




const page = () => {
  return (
    <div className=" bg-white w-full h-full grid-cols-1 flex gap-2 ">
      <div className="w-1/4  pb-10">
      <Designbar/>
      </div>

      <div className="  h-50 justify-end pt-80 pr-20 w-3/4">
        
      <Textbar/>
 
  
      </div>
    </div>
  );
};

export default page;
