"use client";
import React from "react";
import { getBrandDataEmail } from "@/components/query/BrandHandler";
import { useSession } from "next-auth/react";
import { useState, useEffect } from "react";
import Countdown from "@/components/Countdown";
import EmailList from "@/components/EmailList";
import Heading from "@/components/Heading";
import BrandCard from "@/components/BrandCard";
import ColorPickerPane from "@/components/ColorPickerPane";
import HeadingEdit from "@/components/HeadingEdit";
import { Button } from "@/components/ui/button";
import { set } from "mongoose";
import { getEventData } from "@/components/query/CountHandler.jsx";

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

  // State variables for colors
  const [primaryColor, setPrimaryColor] = useState("#061826");
  const [secondaryColor, setSecondaryColor] = useState("#2C4053");
  const [textColor, setTextColor] = useState("#ffffff");
  const [startTime, setStartTime] = useState("2023-10-31T00:00:00Z");
  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());
  const [backgroundColor, setBackgroundColor] = useState("#E7F4FD");
  const [inputColor, setInputColor] = useState("#0b090a");
  const [brandIDCheck, setBrandIDCheck] = useState(params.brand_id);
  const [countID, setCountID] = useState(params.count_id);
  const [headingColor, setHeadingColor] = useState("061826");
  const [borderColor, setBorderColor] = useState("#061826");
  const [buttonColor, setButtonColor] = useState("#061826");
  const [heading, setHeading] = useState("");
  const [countData, setCountData] = useState({
    name: "PlaceHolder",
    id: "dummy",
    desc: "description",
    image:
      "https://res.cloudinary.com/dgfwo4qvg/image/upload/v1696678572/temp_ic3aa1.jpg",
    time: "12:00",
    date: "2021-09-01",
    brand_id: "brand",
    categories: "none",
    count: [{ name: "dummy", id: "dummy", count: 0 }],
  });

  useEffect(() => {
    try {
      getEventData(params.count_id, params.brand_id).then((data) => {
        console.log(data);
        setCountData(data);
      });
    } catch (error) {
      console.log(error);
    }
  }, [countData]);
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

  // upload count data

  return (
    <div className="w-full h-full">
      {brandID.replace(/"/g, "") == params.brand_id ? (
        <div
          className="w-full h-full flex flex-col justify-center items-center gap-12"
          style={{ backgroundColor: backgroundColor }}
        >
          <BrandCard
            brandID={brandIDCheck}
            primaryColor={primaryColor}
            textColor={textColor}
          />
          {/* {params.brand_id}:{params.count_id} */}
          {/* <Heading heading="hello world" textColor={headingColor} /> */}
          <HeadingEdit
            placeholder={"Heading"}
            onChange={setHeading}
            textColor={headingColor}
          />
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
            brandID={brandIDCheck}
          />

          <ColorPickerPane
            primaryColor={primaryColor}
            secondaryColor={secondaryColor}
            textColor={textColor}
            backgroundColor={backgroundColor}
            inputColor={inputColor}
            headingColor={headingColor}
            borderColor={borderColor}
            buttonColor={buttonColor}
            setPrimaryColor={setPrimaryColor}
            setSecondaryColor={setSecondaryColor}
            setTextColor={setTextColor}
            setBackgroundColor={setBackgroundColor}
            setInputColor={setInputColor}
            setHeadingColor={setHeadingColor}
            setBorderColor={setBorderColor}
            setButtonColor={setButtonColor}
          />
          <Button className="px-8 py-2">Save</Button>
        </div>
      ) : (
        <div>
          {/* access denied */}
          <h1>Access Blocked</h1>
          <p>this isn't a count you created</p>
        </div>
      )}
    </div>
  );
};

export default page;
