import React from "react";

const ArrowDown = ({ width, height, fill }) => {
  return (
    <div>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_7692_388)">
          <path
            d="M8 10L12 14L16 10"
            stroke="#696969"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_7692_388">
            <rect width={width} height={height} fill={fill} />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};

export default ArrowDown;
