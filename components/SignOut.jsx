"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { signOut } from "next-auth/react";
const SignOut = () => {
  return (
    <div className="">
      <Button
        className="bg-primary h-8"
        onClick={() => {
          signOut({ callbackUrl: "/" });
        }}
      >
        Sign out
      </Button>
    </div>
  );
};

export default SignOut;
