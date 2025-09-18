"use client";
import { Plus } from "lucide-react";
import React from "react";
import { useTabsStore } from "../../settings/store";

const CreateNewTab = () => {
  const { createNewTab } = useTabsStore();
  return (
    <div>
      <button
        onClick={createNewTab}
        className="size-8 flex-center rounded duration-300 hover:bg-[#808080]/10"
      >
        <Plus className="size-6" />
      </button>
    </div>
  );
};

export default CreateNewTab;
