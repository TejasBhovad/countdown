"use client";
import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import Counts from "@/components/pages/Counts";
import Settings from "@/components/pages/Settings";

const page = () => {
  const [sidebar, setSidebar] = useState("counts");
  return (
    <div className="bg-background w-full h-full flex">
      <div className="sidebar bg-util w-24 h-full flex flex-col justify-between">
        <Sidebar sidebar={sidebar} setSidebar={setSidebar} />
      </div>
      <div className="w-full h-full pl-8 flex justify-center items-center">
        {sidebar === "counts" ? <Counts /> : <Settings />}
      </div>
    </div>
  );
};

export default page;
