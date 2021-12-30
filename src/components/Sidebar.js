import React from "react";
import { RiSpotifyLine } from "@react-icons/all-files/ri/RiSpotifyLine";
import { BsPlusSquare } from "@react-icons/all-files/bs/BsPlusSquare";
import { FiHeart } from "@react-icons/all-files/fi/FiHeart";
import Menu from "./Sidebar/Menu";
import PlayLists from "./Sidebar/PlayLists";
import DownloadApp from "./Sidebar/DownloadApp";
import { useSelector } from "react-redux";
import SidebarCover from "./Sidebar/SidebarCover";

const Sidebar = () => {
  const sidebar = useSelector((state) => state.player.sidebar);
  return (
    <aside className="w-60 pt-6 flex flex-shrink-0 flex-col bg-black">
      <a className="mb-7 px-5 flex items-center">
        <RiSpotifyLine className="w-7 h-7" />
        <span className="px-1 font-bold ">Spotify</span>
      </a>
      <Menu />

      <nav className="mt-6">
        <ul>
          <li className="py-2 px-6 flex items-center group text-sm text-link font-semibold hover:text-white bg-opacity-80">
            <span className="w-6 h-6 flex items-center group-hover:bg-opacity-100 justify-center mr-2 rounded-sm ">
              <BsPlusSquare className="w-5 h-5" />
            </span>
            <span className="px-1 text-s group-hover:bg-opacity-100 ">
              Çalma Listesi Oluştur
            </span>
          </li>
          <li className="py-2 px-6 flex items-center group text-sm text-link font-semibold hover:text-white bg-opacity-80">
            <span className="w-6 h-6 flex items-center justify-center mr-2 rounded-sm ">
              <FiHeart className="w-5 h-5 " />
            </span>
            <span className="px-1 text-s ">Beğenilen Şarkılar</span>
          </li>
        </ul>
      </nav>

      <PlayLists />
      <DownloadApp />

      {sidebar && <SidebarCover />}
    </aside>
  );
};

export default Sidebar;
