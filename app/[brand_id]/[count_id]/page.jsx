"use client";
import React from "react";
import Countdown from "@/components/Countdown";
import EmailList from "@/components/EmailList";
import Heading from "@/components/Heading";
import BrandCard from "@/components/BrandCard";
import Navbar from "@/components/Navbar";
import { useState, useEffect } from "react";
import { getEventData } from "@/components/query/CountHandler";
// import { useSession } from "next-auth/react";
const page = ({ params }) => {
  // State variables for colors
  const [primaryColor, setPrimaryColor] = useState("#061826");
  const [secondaryColor, setSecondaryColor] = useState("#2C4053");
  const [textColor, setTextColor] = useState("#ffffff");
  const [startTime, setStartTime] = useState(Date.now());
  const [timeRemaining, setTimeRemaining] = useState(
    // dummy time remaining
    {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    }
  );
  const [backgroundColor, setBackgroundColor] = useState("#E7F4FD");
  const [inputColor, setInputColor] = useState("#0b090a");
  const [brandID, setBrandID] = useState(params.brand_id);
  const [countID, setCountID] = useState(params.count_id);
  const [headingColor, setHeadingColor] = useState("#000000");
  const [borderColor, setBorderColor] = useState("#000000");
  const [buttonColor, setButtonColor] = useState("#000000");
  const [heading, setHeading] = useState("");
  // const { data: session } = useSession();
  // Function to calculate time remaining
  const calculateTimeRemaining = () => {
    const timeRemaining = startTime - Date.now();
    // console.log(timeRemaining);
    return {
      days: Math.floor(timeRemaining / (1000 * 60 * 60 * 24)),
      hours: Math.floor((timeRemaining / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((timeRemaining / 1000 / 60) % 60),
      seconds: Math.floor((timeRemaining / 1000) % 60),
    };
  };

  // Update time remaining every second
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [startTime]);

  const [isMounted, setIsMounted] = useState(false); // Track component mounting
  useEffect(() => {
    setIsMounted(true); // Component is mounted
    return () => {
      setIsMounted(false); // Component is unmounted
    };
  }, []);

  useEffect(() => {
    if (isMounted) {
      try {
        getEventData(params.count_id, params.brand_id).then((data) => {
          console.log(data);
          // set colors andtext from data
          setPrimaryColor(data.count[0].primaryColor);
          setSecondaryColor(data.count[0].secondaryColor);
          setTextColor(data.count[0].textColor);
          setBackgroundColor(data.count[0].backgroundColor);
          setInputColor(data.count[0].inputColor);
          setHeadingColor(data.count[0].headingColor);
          setBorderColor(data.count[0].borderColor);
          setButtonColor(data.count[0].buttonColor);
          setHeading(data.count[0].heading);
          setStartTime(new Date(data.date));
        });
      } catch (error) {
        console.log(error);
      }
    }
  }, [isMounted]);

  return (
    <div className="w-full h-full flex-col">
      {/* <Navbar /> */}
      <div className="w-full h-full ">
        <div
          className="w-full h-full flex flex-col justify-center items-center gap-12"
          style={{ backgroundColor: backgroundColor }}
        >
          <BrandCard
            brandID={brandID}
            primaryColor={primaryColor}
            textColor={textColor}
          />
          {/* {params.brand_id}:{params.count_id} */}
          <Heading heading={heading} textColor={headingColor} />
          <Countdown
            primaryColor={primaryColor}
            secondaryColor={secondaryColor}
            textColor={textColor}
            timeRemaining={timeRemaining}
          />
          <EmailList
            borderColor={borderColor}
            buttonColor={buttonColor}
            textColor={textColor}
            inputColor={inputColor}
          />
        </div>
      </div>
    </div>
    // URL: http://localhost:3000/brand_name/count_id
  );
};

export default page;
