import React from "react";
import { useLocation } from "react-router";
import Auth from "./Navbar/Auth";
import Navigation from "./Navbar/Navigation";

const Navbar = () => {
  const searchLocation = useLocation();
  console.log(searchLocation);
  return (
    <nav className="h-[3.75rem] flex items-center justify-between px-8">
      <Navigation />
      {searchLocation.pathname === "/search" && <div>search location</div>}
      <Auth />
    </nav>
  );
};

export default Navbar;
