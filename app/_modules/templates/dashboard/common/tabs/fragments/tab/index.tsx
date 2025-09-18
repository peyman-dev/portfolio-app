"use client";
import React from "react";
import { useTabsStore } from "../../settings/store";
import { X } from "lucide-react";
import clsx from "clsx";
import { thisTabIsActive } from "../../settings";

const Tab = ({ tabIndex }: { tabIndex: number }) => {
  const { removeTab, currentTab, setCurrentTab, tabs } = useTabsStore();


  return (
    <div
      className={clsx(
        "group w-[200px] duration-300 hover:bg-zinc-100 cursor-pointer h-full! flex-center relative",
        tabIndex == currentTab && "bg-blue-500! text-white!"
      )}
      onClick={() => {
        setCurrentTab(tabIndex);
      }}
    >
      New tab {tabIndex}
      { tabs > 1   ? 
        <button
          onClick={() => removeTab(tabIndex)}
          className={clsx(
            "absolute hidden invisible group-hover:visible  group-hover:block flex-center! duration-300 hover:bg-zinc-200 size-6 rounded-lg top-2! !right-2",
            thisTabIsActive(tabIndex) ? "hover:bg-blue-600/30!" : ""
          )}
        >
          <X className="size-4" />
        </button> : null
      }
    </div>
  );
};

export default Tab;
