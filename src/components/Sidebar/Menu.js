import React from "react";
import { AiOutlineHome } from "@react-icons/all-files/ai/AiOutlineHome";
import { GiBookshelf } from "@react-icons/all-files/gi/GiBookshelf";
import { BiSearch } from "@react-icons/all-files/bi/BiSearch";
import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <nav className="px-2">
      <ul className="flex flex-col">
        <li>
          <NavLink
            to="/"
            className={(navData) =>
              navData.isActive
                ? "bg-active text-white h-10 flex gap-x-4 items-center text-sm font-semibold hover:text-white px-4  rounded"
                : "h-10 flex gap-x-4 items-center text-sm font-semibold text-link hover:text-white px-4  rounded"
            }
          >
            <AiOutlineHome className="w-5 h-5" /> Ana sayfa
          </NavLink>
        </li>
        <li>
          <NavLink
            className={(navData) =>
              navData.isActive
                ? "bg-active text-white h-10 flex gap-x-4 items-center text-sm font-semibold hover:text-white px-4  rounded"
                : "h-10 flex gap-x-4 items-center text-sm font-semibold text-link hover:text-white px-4  rounded"
            }
            to="search"
          >
            <BiSearch className="w-5 h-5" /> Ara
          </NavLink>
        </li>
        <li>
          <NavLink
            to="collection"
            className={(navData) =>
              navData.isActive
                ? "bg-active text-white h-10 flex gap-x-4 items-center text-sm font-semibold hover:text-white px-4  rounded"
                : "h-10 flex gap-x-4 items-center text-sm font-semibold text-link hover:text-white px-4  rounded"
            }
          >
            <GiBookshelf className="w-5 h-5" /> Kitaplığın
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
