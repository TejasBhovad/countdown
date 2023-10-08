"use client";
import React from "react";
import Countdown from "@/components/Countdown";
import EmailList from "@/components/EmailList";
import Heading from "@/components/Heading";
import BrandCard from "@/components/BrandCard";
import { useState, useEffect } from "react";

const page = ({ params }) => {
  // State variables for colors
  const [primaryColor, setPrimaryColor] = useState("#061826");
  const [secondaryColor, setSecondaryColor] = useState("#2C4053");
  const [textColor, setTextColor] = useState("#ffffff");
  const [startTime, setStartTime] = useState("2023-10-31T00:00:00Z");
  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());
  const [backgroundColor, setBackgroundColor] = useState("#E7F4FD");
  const [inputColor, setInputColor] = useState("#0b090a");
  const [brandID, setBrandID] = useState(params.brand_id);
  const [countID, setCountID] = useState(params.count_id);
  const [headingColor, setHeadingColor] = useState("#000000");
  const [borderColor, setBorderColor] = useState("#000000");
  const [buttonColor, setButtonColor] = useState("#000000");
  // Function to calculate time remaining
  function calculateTimeRemaining() {
    const now = new Date();
    const eventDate = new Date(startTime);

    const timeDifference = eventDate - now;

    if (timeDifference <= 0) {
      // Event has already started or ended
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
      (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    return {
      days,
      hours,
      minutes,
      seconds,
    };
  }

  // Update time remaining every second
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  // create a function to get the brand data TODO

  return (
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
      <Heading heading="hello world" textColor={headingColor} />
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
    // URL: http://localhost:3000/brand_name/count_id
  );
};

export default page;
