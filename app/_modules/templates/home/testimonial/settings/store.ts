import { create } from "zustand";

interface IProps {
    activeIndex: number,
    setActiveIndex: (activeIndex: number) => void;
}

export const useTestimonialStore = create<IProps>((set) => ({
  activeIndex: 0,
  setActiveIndex: (activeIndex: number) => set({ activeIndex }),
}));
