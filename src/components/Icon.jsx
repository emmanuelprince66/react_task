import React from "react";

export const Icon = ({ width, height, fill }) => {
  return (
    <div>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_7692_333)">
          <path
            d="M5 20C5 17.544 6.991 15.553 9.447 15.553H14.553C17.009 15.553 19 17.544 19 20"
            stroke="#696969"
            stroke-width="1.4824"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M15.0052 5.2448C16.6649 6.90453 16.6649 9.59548 15.0052 11.2552C13.3455 12.9149 10.6545 12.9149 8.9948 11.2552C7.33507 9.59548 7.33507 6.90453 8.9948 5.2448C10.6545 3.58507 13.3455 3.58507 15.0052 5.2448"
            stroke="#696969"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_7692_333">
            <rect width={width} height={height} fill={fill} />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};
