import React from "react";

function Clock() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 60 60"
    >
      <path
        stroke="#061826"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="6"
        d="M30 20v10l6.25 6.25"
      ></path>
      <path
        stroke="#061826"
        strokeWidth="6"
        d="M5 30C5 18.215 5 12.322 8.661 8.661 12.322 5 18.215 5 30 5c11.785 0 17.678 0 21.339 3.661 3.66 3.661 3.66 9.554 3.66 21.339 0 11.785 0 17.678-3.66 21.339-3.661 3.66-9.554 3.66-21.339 3.66-11.785 0-17.678 0-21.339-3.66C5 47.678 5 41.785 5 30z"
      ></path>
    </svg>
  );
}

export default Clock;
