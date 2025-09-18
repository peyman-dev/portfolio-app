"use client";
import React from "react";
import WindowsNavbar from "./modules/windows";
import MobileNavbar from "./modules/mobile";
import { usePathname } from "next/navigation";
import { isDashboardRoute } from "./settings";

const Header = () => {
  const pathname = usePathname();

  if (isDashboardRoute(pathname)) {
    return null;
  }
  return (
    <header>
      <WindowsNavbar />
      <MobileNavbar />
    </header>
  );
};

export default Header;
