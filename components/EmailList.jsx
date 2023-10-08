import React from "react";

const EmailList = ({ borderColor, buttonColor, textColor, inputColor,brandID }) => {
  return (
    <div
      className="flex w-6/12 bg-transparent rounded-sm count border-2 border-primary"
      style={{
        borderColor: borderColor,
      }}
    >
      <div className="w-3/4">
        <input
          type="text"
          placeholder="Email Address"
          className="w-full h-full outline-none px-4 rounded-sm bg-transparent"
          style={{
            color: inputColor,
          }}
        />
      </div>
      <div
        className="w-1/4 bg-primary text-xl font-medium text-white flex justify-center items-center py-2 px-4"
        style={{
          backgroundColor: buttonColor,
          color: textColor,
          borderLeftWidth: 2,
          borderColor: borderColor,
        }}
      >
        send
      </div>
    </div>
  );
};

export default EmailList;
