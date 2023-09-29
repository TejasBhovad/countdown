import React from "react";
import Navbar from "@/components/Navbar";
import SignIn from "@/components/SignIn";
import Header from "@/components/Header";

const page = () => {
  return (
    <div>
      <Navbar />
      <SignIn />
      <Header />
    </div>
  );
};

export default page;
