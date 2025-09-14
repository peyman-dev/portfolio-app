import { items } from ".";
import { useTestimonialStore } from "./store";

export const getContent = () => {
  const { activeIndex } = useTestimonialStore.getState();

  return items.find((item, i) => i == activeIndex);
};
