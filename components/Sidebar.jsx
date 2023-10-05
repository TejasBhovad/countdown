import Link from "next/link";
import { Toggle } from "@/components/ui/toggle";
import { Button } from "@/components/ui/button";
import Clock from "@/components/logos/Clock";
import Settings from "@/components/logos/Settings";
import Plus from "@/components/logos/Plus";
// import { useState } from "react";

const Sidebar = ({ sidebar, setSidebar }) => {
  //   const [sidebar, setSidebar] = useState("counts");
  const handleToggle = (toggleText) => {
    setSidebar(toggleText);
  };
  return (
    <div className="sidebar bg-util w-24 h-full flex flex-col justify-between">
      <div className="h-40">
        <div className="title-c h-16 px-5 py-4">
          <Link href="/">
            <span className="font-semibold text-2xl">DownCount</span>
          </Link>
        </div>
        <div className="flex flex-col">
          <Toggle
            className="text-md w-full rounded-none justify-start data-[state=on]:border-r-2 data-[state=on]:border-primary"
            onClick={() => handleToggle("counts")}
            aria-pressed={sidebar === "counts"}
            data-state={sidebar === "counts" ? "on" : "off"}
          >
            <Clock />
            <span className="pl-2">Counts</span>
          </Toggle>
          <Toggle
            className="text-md w-full rounded-none justify-start data-[state=on]:border-r-2 data-[state=on]:border-primary"
            onClick={() => handleToggle("settings")}
            aria-pressed={sidebar === "settings"}
            data-state={sidebar === "settings" ? "on" : "off"}
          >
            <Settings />
            <span className="pl-2">Settings</span>
          </Toggle>
        </div>
      </div>
      <Link href="/create">
        {" "}
        <div className="flex justify-center items-center h-20">
          <Button className="w-3/4">
            <Plus />
            <span className="pl-2 text-md">new count</span>
          </Button>
        </div>
      </Link>
    </div>
  );
};

export default Sidebar;
