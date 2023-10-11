"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import { getBrandDataEmail } from "@/components/query/BrandHandler";
import { uploadCountData } from "@/components/query/CountHandler.jsx";
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
  const [brandIDCheck, setBrandIDCheck] = useState(params.brand_id);
  const [countID, setCountID] = useState(params.count_id);
  const [headingColor, setHeadingColor] = useState("061826");
  const [borderColor, setBorderColor] = useState("#061826");
  const [buttonColor, setButtonColor] = useState("#061826");
  const [heading, setHeading] = useState("Heading");
  const [countData, setCountData] = useState({
    name: "PlaceHolder",
    id: "dummy",
    desc: "description",
    time: "12:00",
    date: "2021-09-01",
    brand_id: "brand",
    categories: "none",
    count: [
      {
        primaryColor: primaryColor,
        secondaryColor: secondaryColor,
        textColor: textColor,
        backgroundColor: backgroundColor,
        inputColor: inputColor,
        headingColor: headingColor,
        borderColor: borderColor,
        buttonColor: buttonColor,
        heading: heading,
      },
    ],
  });
  // set countData.count[0]

  useEffect(() => {
    setCountData({
      name: countData.name,
      id: countData.id,
      categories: countData.categories,
      desc: countData.desc,
      image: countData.image,
      time: countData.time,
      date: countData.date,
      brand_id: countData.brand_id,
      count: [
        {
          primaryColor: primaryColor,
          secondaryColor: secondaryColor,
          textColor: textColor,
          backgroundColor: backgroundColor,
          inputColor: inputColor,
          headingColor: headingColor,
          borderColor: borderColor,
          buttonColor: buttonColor,
          heading: heading,
        },
      ],
    });
  }, [
    primaryColor,
    secondaryColor,
    textColor,
    backgroundColor,
    inputColor,
    headingColor,
    borderColor,
    buttonColor,
    heading,
  ]);
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
  useEffect(() => {
    try {
      getEventData(params.count_id, params.brand_id).then((data) => {
        setCountData(data);
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
  }, [isMounted]);

  return (
    <div className="w-full h-full flex-col">
      <Navbar />
      <div className="w-full h-full pt-12 ">
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
                className=""
              />
              {/* {params.brand_id}:{params.count_id} */}
              {/* <Heading heading="hello world" textColor={headingColor} /> */}
              <HeadingEdit
                placeholder={heading}
                value={heading}
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
              <Button
                className="px-8 py-2"
                onClick={() => {
                  // console.log(countData);
                  uploadCountData(countData);
                }}
              >
                Save
              </Button>
              {/* {JSON.stringify(countData)} */}
            </div>
          ) : (
            <div>
              {/* access denied */}
              <h1>Access Blocked</h1>
              <p>this isn't a count you created</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default page;
