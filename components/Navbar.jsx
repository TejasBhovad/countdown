import React from "react";
import Menu from "@/components/logos/Menu";
import Clock from "@/components/logos/Clock";

const Navbar = () => {
  return (
    <div className="px-8 w-full h-12 rounded-sm bg-secondary flex items-center justify-center text-white">
      <div className="menu w-1/3">
        <Menu />
      </div>
      <div className="title w-1/3 text-center font-semibold">DownCount</div>
      <div className="clock w-1/3 text-right flex items-center justify-end">
        <Clock className="w-5 h-5"/>
      </div>
    </div>
  );
};

export default Navbar;
