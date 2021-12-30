import React from "react";
import { IoIosArrowBack } from "@react-icons/all-files/io/IoIosArrowBack";
import { IoIosArrowForward } from "@react-icons/all-files/io/IoIosArrowForward";
import { useNavigate } from "react-router";

const Navigation = () => {
  let navigate = useNavigate();
  return (
    <nav className="flex items-center gap-x-4">
      <button
        onClick={() => navigate(-1)}
        className="w-8 h-8 flex items-center justify-center rounded-full bg-black bg-opacity-70"
      >
        <IoIosArrowBack />
      </button>
      <button
        onClick={() => navigate(1)}
        className="w-8 h-8 flex items-center justify-center rounded-full bg-black bg-opacity-70"
      >
        <IoIosArrowForward />
      </button>
    </nav>
  );
};

export default Navigation;
