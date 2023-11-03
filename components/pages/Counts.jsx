import React from "react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import {
  getBrandDataEmail,
  getBrandData,
  uploadBrandData,
} from "@/components/query/BrandHandler";
import { useSession } from "next-auth/react";
import Link from "next/link";
import EventFrame from "@/components/EventFrame";
import { deleteCount } from "@/components/query/CountHandler";
import Trash from "@/components/logos/Trash";
const Counts = () => {
  const router = useRouter();
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
      // console.log(email);
      try {
        getBrandDataEmail(email).then((data) => {
          setBrandID(JSON.stringify(data.id));
          setCounts(data.countdowns);
          // console.log(JSON.stringify(data.id));
        });
      } catch (error) {
        // console.log(email);
      }
    }
  }, [session, isMounted]);

  const deleteCountHandler = async (count_id, brand_id) => {
    // console.log("delete count");
    // console.log(count_id);
    // console.log(brand_id);
    await deleteCount(count_id, brand_id);
    setCounts((prevCounts) => prevCounts.filter((count) => count !== count_id));
    await updateBrandCountdowns(count_id, brand_id);
    router.push("/admin");
  };
  // function to update brand's countdowns array with new countdown_id
  const updateBrandCountdowns = async (count_id, brand_id) => {
    const brandData = await getBrandData(brand_id);
    const brandCountdowns = brandData.countdowns;
    // brandCountdowns.push(countID);
    brandCountdowns.splice(brandCountdowns.indexOf(count_id), 1);
    // console.log(brandCountdowns);

    // update brand's countdowns array
    await uploadBrandData({
      id: brandData.id,
      name: brandData.name,
      email: brandData.email,
      countdowns: brandCountdowns,
      image: brandData.image,
      date: brandData.date,
    });
  };
  return (
    <div className="flex w-full h-full py-4 gap-4 ">
      {/* map through the counts array and surround them my link */}
      {counts.map((count) => {
        return (
          <div key={count} className="relative">
            <Button
              className="aspect-square bg-red-500 hover:bg-red-600 absolute top-2 right-2"
              onClick={() => {
                deleteCountHandler(count, brandID.replace(/"/g, ""));
              }}
            >
              <Trash />
            </Button>
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
