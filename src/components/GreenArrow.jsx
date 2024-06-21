import React from "react";

const GreenArrow = ({ width, fill, height }) => {
  return (
    <div>
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_7692_97)">
          <path
            d="M10.0085 3.75833V16.25"
            stroke="#9BFF00"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M5.01929 8.76167L10.0001 3.74834L14.981 8.76167"
            stroke="#9BFF00"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_7692_97">
            <rect width={width} height={height} fill={fill} />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};

export default GreenArrow;
