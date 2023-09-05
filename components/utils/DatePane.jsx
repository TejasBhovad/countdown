import React from "react";
// utils folder is for small components that are used in bigger components
const DatePane = () => {
  return (
    <div className="w-8 h-12 bg-white rounded-md">
      <div className="date-day text-center text-black text-xl font-bold">
        12
      </div>
      <div className="date-month text-center text-secondary text-xs font-normal">
        JAN
      </div>
    </div>
  );
};

export default DatePane;
