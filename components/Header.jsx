import React from "react";

import SignIn from "@/components/SignIn";
import Relevance from "@/components/Relevance";

const Header = () => {
  return (
    <div className="flex w-full h-full bg-green-300 flex justify-between">
      <div className="left">
        <Relevance />
      </div>
      <div className="right">
        <SignIn />
      </div>
    </div>
  );
};

export default Header;
