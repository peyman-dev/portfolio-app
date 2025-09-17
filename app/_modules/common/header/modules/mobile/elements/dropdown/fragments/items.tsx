import { navigation } from "@/app/_modules/common/header/settings";
import Link from "next/link";
import React from "react";
import LocationTime from "../../../../windows/elements/location-time";
import LocalTime from "./local-time";
import { X } from "lucide-react";

const Items = () => {
  return (
    <main className="*:block!  block!">
    
      {navigation.map((item, i) => (
        <Link className="text-black! h-14!" href={item.href} key={i}>
          {item.title}
        </Link>
      ))}
      <LocalTime />
    </main>
  );
};

export default Items;
