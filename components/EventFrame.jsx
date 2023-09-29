import Link from "next/link";

import Image from "next/image";
import DatePane from "@/components/utils/DatePane.jsx";
const EventFrame = ({
  eventDate,
  eventTime,
  eventTitle,
  eventImage,
  brandName,
  brandImage,
  brandId,
  countId,
}) => {
  const LINK = brandId + "/" + countId;
  // size is set to constant to avoid repetition and easy modification
  const IMG_SIZE = 20;
  const EVN_SIZE = 300;
  return (
    <Link href={LINK}>
      <div className="bg-primary w-52 h-64 rounded-md overflow-auto flex-col">
        <div className="event-header w-full bg-red-100 h-3/5">
          <div className="event-date absolute py-2 px-2">
            {/* Component imported inside component */}
            <DatePane eventDate={eventDate} />
          </div>
          <div className="event-image w-full h-full">
            <Image
              src={eventImage}
              width={EVN_SIZE}
              height={EVN_SIZE}
              className="object-cover rounded-t-md event-image"
              alt="Event Image"
            />
          </div>
        </div>
        <div className="brand-section pt-1.5 h-2/5 border-t-4 border-secondary">
          <div className="brand-details flex h-1/4">
            <div className="w-3/5">
              <div className="container px-2 flex items-center gap-1">
                <div className="brand-logo">
                  <Image
                    // src="/images/discord.png"
                    src={brandImage}
                    width={IMG_SIZE}
                    height={IMG_SIZE}
                    className="rounded-sm"
                    alt="Brand Logo"
                  />
                </div>
                <div className="brand-name text-sm text-gray text-center">
                  {brandName}
                </div>
              </div>
            </div>
            <div className="w-2/5 flex justify-center text-center items-center mr-1">
              <div className="event-time text-xs bg-secondary text-center items-center py-0.5 px-1 text-gray rounded-md">
                {eventTime}
              </div>
            </div>
          </div>
          <div className="event-details w-full h-3/4 py-1 px-2 font-semibold text-lg text-white">
            {eventTitle}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default EventFrame;
