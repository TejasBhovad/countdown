"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { signIn, getProviders } from "next-auth/react";
import { useEffect, useState } from "react";

const SignIn = () => {
  const [providers, setProviders] = useState(null);
  useEffect(() => {
    const setProvidersList = async () => {
      const response = await getProviders();
      setProviders(response);
    };
    setProvidersList();
  }, []);
  return (
    <div className="">
      {providers &&
        Object.values(providers).map((provider) => (
          <Button
            className="bg-primary h-8"
            type="button"
            key={provider.name}
            onClick={() => signIn(provider.id)}
          >
            <div className="flex items-center justify-center">Sign in</div>
          </Button>
        ))}
    </div>
  );
};

export default SignIn;
