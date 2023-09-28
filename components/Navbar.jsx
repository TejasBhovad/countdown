import React from "react";
import Menu from "@/components/logos/Menu";

const Navbar = () => {
  return (
    <div className="px-8 w-full h-12 rounded-sm bg-secondary flex items-center justify-center text-white">
      <div className="menu w-1/3">
        <Menu />
      </div>
      <div className="title w-1/3 text-center font-semibold">DownCount</div>
      <div className="clock w-1/3 text-right">clock</div>
    </div>
  );
};

export default Navbar;
