import React from "react";
import Navigation from "./elements/navigation";
import Buttons from "./elements/buttons";
import LocationTime from "./elements/location-time";

const WindowsNavbar = () => {
  return (
    <nav className="flex-between h-25 container lg:flex lg:visible hidden invisible">
      <Navigation />
      <div className="flex-ic gap-7">
        <LocationTime />
        <Buttons />
      </div>
    </nav>
  );
};

export default WindowsNavbar;
