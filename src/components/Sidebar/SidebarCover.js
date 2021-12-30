import React from "react";
import { useSelector } from "react-redux";
import { IoIosArrowUp } from "@react-icons/all-files/io/IoIosArrowUp";
import { useDispatch } from "react-redux";
import { setSidebar } from "stores/player";

const SidebarCover = () => {
  const current = useSelector((state) => state.player.current);
  const dispatch = useDispatch();
  return (
    <div className="pt-[100%] bg-black relative group">
      <img
        src={current.image}
        className="w-full h-full object-cover absolute top-0 left-0"
      />
      <button
        onClick={() => dispatch(setSidebar(false))}
        className="w-6 h-6 bg-black opacity-0 group-hover:opacity-60  -rotate-180 hover:scale-[1.06] hover:!opacity-100 flex items-center justify-center rounded-full absolute top-2 right-3"
      >
        <IoIosArrowUp />
      </button>
    </div>
  );
};

export default SidebarCover;
