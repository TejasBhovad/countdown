"use client";
import React from "react";
import { useState } from "react";
import BasicInfo from "@/components/BasicInfo";
import ClickDiv from "@/components/ClickDiv";
const page = () => {
  const [countName, setCountName] = useState("count name");
  return (
    <div className="w-full h-full">
      {/* <BasicInfo /> */}
      <ClickDiv placeholder={countName} onChange={setCountName} />
      {countName}
    </div>
  );
};

export default page;
