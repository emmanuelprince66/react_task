import React from "react";
import Dot from "./Dot";

const Header = () => {
  return (
    <div className="w-full flex items-center  justify-between">
      <p className="font-[100] text-[40px] text-white leading-[48px]">
        Today's Leaderboard
      </p>

      <div className="w-[418px] h-[56px] rounded-2xl px-3 bg-[#1D1D1D] flex items-center justify-between">
        <p className="font-[100] text-[16px] leading-[20px] text-white">
          30 May 2022
        </p>
        <Dot width={4} height={4} fill="#696969" />
        <div className="py-[4px] px-[10px] w-[156px] h-[25px] rounded-[8px] flex items-center justify-center bg-[#9BFF00]">
          <p className="font-thin text-[14px] leading-[16.94px]">
            SUBMISSIONS OPEN
          </p>
        </div>
        <Dot width={4} height={4} fill="#696969" />
        <p className="font-[100] text-[16px] leading-[20px] text-white">
          11.34
        </p>
      </div>
    </div>
  );
};

export default Header;
