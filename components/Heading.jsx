import React from "react";

const Heading = ({ heading, textColor }) => {
  return (
    <div>
      <h1 className="text-5xl font-bold" style={{ color: textColor }}>
        {heading}
      </h1>
    </div>
  );
};

export default Heading;
