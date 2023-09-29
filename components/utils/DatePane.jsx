import React from "react";
// utils folder is for small components that are used in bigger components
const DatePane = ({ eventDate }) => {
  const date = new Date(eventDate);
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const month = date.getMonth();
  const day = date.getDate();
  const monthName = monthNames[month];
  return (
    <div className="w-8 h-12 bg-white rounded-md">
      <div className="date-day text-center text-black text-xl font-bold">
        {day}
      </div>
      <div className="date-month text-center text-secondary text-xs font-normal">
        {monthName}
      </div>
    </div>
  );
};

export default DatePane;
