import React from "react";
// TailwindCSS cheat-sheet: https://tailwindcomponents.com/cheatsheet/
// All dummy Data will be replaced with data from API calls
// If necessary, add custom css to global css file
// Component name start with capital letter
// run rafce to create a component

// Next image is similar to img tag but with more features
import Image from "next/image";
import DatePane from "@/components/utils/DatePane.jsx";
const EventFrame = () => {
  // size is set to constant to avoid repetition and easy modification
  const IMG_SIZE = 20;
  const EVN_SIZE = 300;
  return (
    <div className="bg-primary w-52 h-64 rounded-md overflow-auto flex-col">
      <div className="event-header w-full bg-red-100 h-3/5">
        <div className="event-date absolute py-2 px-2">
          {/* Component imported inside component */}
          <DatePane />
        </div>
        <div className="event-image w-full h-full">
          <Image
            src="/images/tmp.jpg"
            width={EVN_SIZE}
            height={EVN_SIZE}
            className="object-cover rounded-t-md event-image"
          />
        </div>
      </div>
      <div className="brand-section pt-1.5 h-2/5 border-t-4 border-secondary">
        <div className="brand-details flex h-1/4">
          <div className="w-3/5">
            <div className="container px-2 flex items-center gap-1">
              <div className="brand-logo">
                <Image
                  src="/images/discord.png"
                  width={IMG_SIZE}
                  height={IMG_SIZE}
                  className="rounded-sm"
                />
              </div>
              <div className="brand-name text-sm text-gray text-center">
                Brand Name
              </div>
            </div>
          </div>
          <div className="w-2/5 flex justify-center text-center items-center mr-1">
            <div className="event-time text-xs bg-secondary text-center items-center py-0.5 px-1 text-gray rounded-md">
              12:00-18:00
            </div>
          </div>
        </div>
        <div className="event-details w-full h-3/4 py-1 px-2 font-semibold text-lg text-white">
          Event Name works with even more text
        </div>
      </div>
    </div>
  );
};

export default EventFrame;
