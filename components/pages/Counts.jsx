import React from "react";
import { useEffect, useState } from "react";
import { getBrandDataEmail } from "@/components/query/BrandHandler";
import { useSession } from "next-auth/react";
import Link from "next/link";
import EventFrame from "@/components/EventFrame";
const Counts = () => {
  const [isMounted, setIsMounted] = useState(false); // Track component mounting
  const [brandID, setBrandID] = useState("brand-id");
  const [counts, setCounts] = useState([]);
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
          setCounts(data.countdowns);
          console.log(JSON.stringify(data.id));
        });
      } catch (error) {
        console.log(email);
      }
    }
  }, [session, isMounted]);
  return (
    <div className="flex w-full h-full py-4 gap-4">
      {/* map through the counts array and surround them my link */}
      {counts.map((count) => {
        return (
          <div key={count}>
            <EventFrame
              brandId={brandID.replace(/"/g, "")}
              countId={count}
              edit={true}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Counts;
