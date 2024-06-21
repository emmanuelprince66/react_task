import React, { useCallback } from "react";
import ArrowDown from "./ArrowDown";
import LIstItem from "./LIstItem";
import { useVideos } from "../hooks/useVideos";

const Content = () => {
  const { videos, noPrevPage, nextPage, noNextPage, prevPage, rearrangeList } =
    useVideos();

  const onDrop = (item1, item2) => {
    rearrangeList(item1, item2);
  };

  return (
    <div className="w-full flex flex-col items-start gap-2">
      <div className="w-full flex items-center justify-between mt-[5%]">
        <p className="flex text-[#666666] gap-3 items-center font-thin text-[16px] leading-[9.36px]">
          <span>#</span>
          Title
        </p>
        <p className=" text-[#666666] font-thin text-[16px] leading-[9.36px]">
          Author
        </p>
        <p className="flex text-[#666666] gap-2 items-center font-thin text-[16px] leading-[9.36px]">
          Most Liked
          <ArrowDown width={24} height={24} fill="white" />
        </p>
      </div>
      {videos.list.map((v, index) => (
        <LIstItem index={index} video={v} moveCard={onDrop} key={v.id} />
      ))}

      <div className="flex items-center justify-between w-full mt-6">
        {!noPrevPage && (
          <button onClick={prevPage} className="text-white">
            Previous
          </button>
        )}
        {!noNextPage && (
          <button onClick={nextPage} className="text-white ml-auto">
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default Content;
