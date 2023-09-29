import React from "react";

import SignIn from "@/components/SignIn";
import Relevance from "@/components/Relevance";
import Searchbar from "@/components/Searchbar";

const Header = () => {
  return (
    <div className="py-3 flex w-full h-18 bg-transparent flex justify-between px-3">
      <div className="bg-util flex w-full h-full justify-between py-2 px-4 rounded-md">
        <div className="left flex gap-4 sm:justify-center justify-between">
          <Searchbar />
          <Relevance />
        </div>
        <div className="right sm:block hidden">
          <SignIn />
        </div>
      </div>
    </div>
  );
};

export default Header;
