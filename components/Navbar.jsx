import React from "react";
import Link from "next/link";
import Clock from "@/components/logos/Clock";

const Navbar = () => {
  return (
    <div className="px-8 w-full h-12 rounded-sm bg-secondary flex items-center justify-center text-white">
      {/* <div className="menu w-1/3">
        <Menu />
      </div> */}
      <Link href="landing" className="title w-1/2 text-left font-semibold">
        <div className="title text-left font-semibold">DownCount</div>
      </Link>
      <Link href="admin" className="title w-1/2 text-left font-semibold">
        <div className="clock  text-right flex items-center justify-end">
          <Clock className="w-5 h-5" />
        </div>
      </Link>
    </div>
  );
};

export default Navbar;
