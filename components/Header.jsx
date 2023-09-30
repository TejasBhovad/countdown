"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

import SignIn from "@/components/SignIn";
import Relevance from "@/components/Relevance";
import Searchbar from "@/components/Searchbar";
import SignOut from "@/components/SignOut";
import { useSession } from "next-auth/react";

const Header = () => {
  const { data: session } = useSession();
  const [image, setImage] = useState("/images/discord.png");
  useEffect(() => {
    if (session?.user?.image) {
      setImage(session.user.image);
    }
  }, [session]);

  return (
    <div className="py-3 flex w-full h-18 bg-transparent flex justify-between px-3">
      <div className="bg-util flex w-full h-full justify-between py-2 px-4 rounded-md">
        <div className="left flex gap-4 sm:justify-center justify-between">
          <Searchbar />
          <Relevance />
        </div>
        <div className="right sm:block hidden">
          {session?.user ? (
            <div className="flex items-center gap-5">
              <Link href="/admin">
                <span className="font-semibold">Dashboard</span>
              </Link>

              <SignOut />
              <Link href="/settings" className="text-xl font-semibold">
                <Image
                  src={image}
                  width={30}
                  height={30}
                  alt="profile picture"
                  className="object-contain rounded-full"
                />
              </Link>
            </div>
          ) : (
            <SignIn />
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
