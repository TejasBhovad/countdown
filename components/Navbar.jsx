"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import React from "react";
import Link from "next/link";
import SignIn from "@/components/SignIn";
import SignOut from "@/components/SignOut";
import { useSession } from "next-auth/react";

const Navbar = () => {
  const { data: session } = useSession();
  const [image, setImage] = useState("/images/discord.png");
  useEffect(() => {
    if (session?.user?.image) {
      setImage(session.user.image);
    }
  }, [session]);
  return (
    <div className="absolute px-8 w-full h-12 bg-util flex items-center justify-center text-white">
      <Link
        href="/"
        className="title w-1/2 text-left font-semibold text-secondary text-lg"
      >
        <div className="title text-left font-semibold">DownCount</div>
      </Link>
      <div className="title w-1/2 text-left font-semibold">
        <div className="clock  text-right flex items-center justify-end">
          {session?.user ? (
            <div className="flex items-center gap-5 ">
              <Link href="/admin" className=" sm:block hidden">
                <span className="font-semibold text-primary ">Dashboard</span>
              </Link>

              <SignOut className="" />
              <Link href="/admin" className="text-xl font-semibold">
                <Image
                  src={image}
                  width={30}
                  height={30}
                  alt="profile picture"
                  className="pfp object-contain rounded-full"
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

export default Navbar;
