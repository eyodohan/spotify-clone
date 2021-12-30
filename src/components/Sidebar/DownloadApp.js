import React from "react";
import { BsDownload } from "@react-icons/all-files/bs/BsDownload";

const DownloadApp = () => {
  return (
    <a
      href="#"
      className="h-10 flex flex-shrink-0 items-center text-sm font-semibold text-link hover:text-white px-6 gap-x-4"
    >
      <BsDownload />
      Uygulamayı yükle
    </a>
  );
};

export default DownloadApp;
