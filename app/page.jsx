"use client";
// import statements go here REMOVE UNNECESSARY IMPORTS
import { React, useState } from "react";
import EventFrame from "@/components/EventFrame.jsx";
<<<<<<< HEAD
import { Button } from "@/components/ui/button";
import Searchbar from "@/components/Searchbar.jsx"
const page = () => {
  return (
    <div className="bg-background w-full h-full">
      {/* Added element for testing purposes, after testing should be removed from here */}
      <Searchbar/>
      <EventFrame />
=======
import Header from "@/components/Header";

const page = () => {
  return (
    <div className="bg-background w-full h-full">
      <div className="header w-full h-20 bg-red-400 flex justify-center items-center px-5 py-5">
        <Header />
      </div>
>>>>>>> f9e5cf2e4cbfdb873eeee18619e4ed2c7e7e398e
    </div>
  );
};

export default page;
