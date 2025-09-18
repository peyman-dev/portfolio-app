import { create } from "zustand";
import { createArrayForTabs } from ".";
import { ReactNode } from "react";

interface TabsProps {
  tabs: number;
  createNewTab: () => void;
  currentTab: number;
  setCurrentTab: (tabIndex: number) => void;
  removeTab: (tabIndex: number) => void;
  contents: ReactNode[];
  pushNewContent: (Content: ReactNode) => void;
}

export const useTabsStore = create<TabsProps>((set, get) => ({
  tabs: 0,
  currentTab: 0,
  createNewTab: () => {
    const currentTabsCount = get().tabs;
    set({ tabs: currentTabsCount + 1 });
    set({ currentTab: currentTabsCount });
  },
  setCurrentTab: (tabIndex: number) => {
    const tabs = get().tabs;
    if (tabIndex >= 0 && tabIndex < tabs) {
      set({ currentTab: tabIndex });
    }
  },
  removeTab: (tabIndex: number) => {
    const tabs = get().tabs;
    const currentTab = get().currentTab;

    if (tabIndex < 0 || tabIndex >= tabs || tabs === 0) return;

    set({ tabs: tabs - 1 });

    if (currentTab === tabIndex) {
      const nextTab = tabIndex === tabs - 1 ? Math.max(0, tabIndex - 1) : tabIndex;
      set({ currentTab: nextTab });
    } else if (currentTab > tabIndex) {
      set({ currentTab: currentTab - 1 });
    }
  },
  contents: [<></>],
  pushNewContent: (Content: ReactNode) => {
    const contentList = get().contents;
    set({ contents: [...contentList, Content] });
  },
}));