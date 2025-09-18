"use client";
import { useTabsStore } from "./store";

export const createArrayForTabs = (nums: number) =>
  Array.from(Array(nums).keys());

export const isValidTabLength = (currentTabIndex: number) => {
  try {
    if (currentTabIndex > 0) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    throw new Error("Something went wrong");
  }
};

export const thisTabIsActive = (tabIndex: number) => {

   if(tabIndex == useTabsStore.getState().currentTab) {
    return true
   } else {
    return false
   }
};
