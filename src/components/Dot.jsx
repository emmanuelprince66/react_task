import React from "react";

const Dot = ({ width, height, fill }) => {
  return (
    <div>
      <svg
        width={width}
        height={height}
        viewBox="0 0 4 4"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="2" cy="2" r="2" fill="#696969" />
      </svg>
    </div>
  );
};

export default Dot;
