import React, { useRef } from "react";
import GreenArrow from "./GreenArrow";
import { useDrag, useDrop } from "react-dnd";

const LIstItem = ({ video, index, moveCard }) => {
  const ref = useRef();
  const [{ handlerId }, drop] = useDrop({
    accept: "Card",
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      };
    },
    hover(item, monitor) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;

      if (dragIndex === hoverIndex) {
        return;
      }

      const hoverBoundingRect = ref.current?.getBoundingClientRect();

      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

      const clientOffset = monitor.getClientOffset();

      const hoverClientY = clientOffset.y - hoverBoundingRect.top;

      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }

      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }

      moveCard(dragIndex, hoverIndex);

      item.index = hoverIndex;
    },
  });

  const [{ isDragging }, drag] = useDrag({
    type: "Card",
    item: () => {
      return { index };
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  drag(drop(ref));

  return (
    <div
      ref={ref}
      data-handler-id={handlerId}
      className="w-full flex items-center px-5 justify-between h-[96px] border-white rounded-[16px] border-[1px]"
    >
      <div className="flex items-center justify-between gap-2">
        <div className="flex gap-2 items-center">
          <p className="font-thin text-[14px leading-[16.94px] text-[#666666]">
            {video.id}
          </p>
          <img
            src={video.photo}
            className="w-20 h-10 rounded-md truncate"
            alt={video.title}
          />
        </div>
        <div className="flex flex-wrap max-w-[364px] ">
          <p className="text-[20px] leading-[28px] font-thin text-white">
            {video.title}
          </p>
        </div>
      </div>
      {/*  */}

      <div className="flex gap-2 items-center">
        {/* <img src="/images/sm.png" className="size-6 rounded-full absolute" alt="" /> */}
        <p className="text-[#DBFD51] font-thin text-[16px] leading-[20px]">
          {video.username}
        </p>
      </div>
      {/*  */}

      <div className="flex gap-2 items-center">
        <p className="font-thin text-[16px] leading-[20px] text-white ">
          {video.like}
        </p>
        <GreenArrow width={20} height={20} fill="white" />
      </div>
    </div>
  );
};

export default LIstItem;
