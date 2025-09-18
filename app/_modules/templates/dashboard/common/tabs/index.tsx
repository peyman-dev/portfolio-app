"use client";
import React, { useEffect } from "react";
import { useTabsStore } from "./settings/store";
import { createArrayForTabs, isValidTabLength } from "./settings";
import Tab from "./fragments/tab";
import CreateNewTab from "./fragments/create-new-tab";

const Tabs = () => {
  const { tabs, createNewTab } = useTabsStore();

  useEffect(() => {
    if (!isValidTabLength(tabs)) {
      createNewTab();
    }
  }, [tabs]);

  return (
    <div className="h-20 select-none bg-white flex items-center gap-6">
      <div className="flex h-full items-center gap-0">
        {createArrayForTabs(tabs).map((index) => (
          <Tab tabIndex={index} key={index} />
        ))}
      </div>
      <CreateNewTab />
    </div>
  );
};

export default Tabs;
