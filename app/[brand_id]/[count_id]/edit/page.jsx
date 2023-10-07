"use client";
import React from "react";
import { getBrandDataEmail } from "@/components/query/BrandHandler";
import { useSession } from "next-auth/react";
import { useState, useEffect } from "react";
const page = ({ params }) => {
  const [isMounted, setIsMounted] = useState(false); // Track component mounting
  const [brandID, setBrandID] = useState("brand-id");
  useEffect(() => {
    setIsMounted(true); // Component is mounted
    return () => {
      setIsMounted(false); // Component is unmounted
    };
  }, []);

  const { data: session } = useSession();
  useEffect(() => {
    if (isMounted && session) {
      const email = session.user.email;
      console.log(email);
      try {
        getBrandDataEmail(email).then((data) => {
          setBrandID(JSON.stringify(data.id));
          console.log(JSON.stringify(data.id));
        });
      } catch (error) {
        console.log(email);
      }
    }
  }, [session, isMounted]);
  return (
    <div>
      {brandID.replace(/"/g, "") == params.brand_id ? (
        <div>
          <h1>Brand ID: {params.brand_id}</h1>
          <h1>Count ID: {params.count_id}</h1>
        </div>
      ) : (
        <div>
          {/* access denied */}
            <h1>Access Blocked</h1>
            <p>this isn't a count you created</p>
        </div>
      )}
      {brandID.replace(/"/g, "") + " " + params.brand_id}
      {/* Edit page
      <br />
      {params.brand_id}:{params.count_id} */}
    </div>
  );
  // URL: http://localhost:3000/brand_name/count_id/edit
};

export default page;
