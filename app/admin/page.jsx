"use client";
import { useSession } from "next-auth/react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Sidebar from "@/components/Sidebar";
import Counts from "@/components/pages/Counts";
import Settings from "@/components/pages/Settings";

const page = () => {
  const router = useRouter();
  const { data: session } = useSession();
  const [isMounted, setIsMounted] = useState(false); // Track component mounting

  useEffect(() => {
    setIsMounted(true); // Component is mounted
    return () => {
      setIsMounted(false); // Component is unmounted
    };
  }, []);

  if (!session && isMounted) {
    // User is not authenticated, so redirect to the "Access Denied" page
    // router.push("/404"); // Replace with the actual URL of your "Access Denied" page
    // return null; // You can return null or show a loading indicator here
  }

  const [sidebar, setSidebar] = useState("counts");

  return (
    <div className="bg-background w-full h-full flex">
      <div className="sidebar bg-util w-24 h-full flex flex-col justify-between">
        <Sidebar sidebar={sidebar} setSidebar={setSidebar} />
      </div>
      <div className="w-full h-full pl-8 flex justify-center items-center">
        {sidebar === "counts" ? <Counts /> : <Settings />}
      </div>
    </div>
  );
};

export default page;
