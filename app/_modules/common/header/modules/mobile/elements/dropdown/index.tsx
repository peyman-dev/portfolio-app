import Dialog from "@/app/_modules/ui/dialog";
import { Menu } from "lucide-react";
import React from "react";
import Header from "./fragments/header";
import Items from "./fragments/items";
import LocationTime from "../../../windows/elements/location-time";
import TalkToMe from "./fragments/talk-to-me";
import SeeMyWorks from "./fragments/see-my-works";

const DropdownMenu = () => {
  const Trigger = (
    <button>
      <Menu />
    </button>
  );
  return (
    <div>
      <Dialog closeTrigger className="*:flex-col-between  *:-h-full!" Trigger={Trigger}>
        <div>
          <Header />
          <Items />
        </div>
        <div className="grid grid-cols-2 gap-3">
          <TalkToMe />
          <SeeMyWorks />
        </div>
      </Dialog>
    </div>
  );
};

export default DropdownMenu;
