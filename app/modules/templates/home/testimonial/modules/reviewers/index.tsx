"use client";
import React, { SetStateAction } from "react";
import { activeUserStyles, isThisUserActive, items } from "../../settings";
import Image from "next/image";
import Item from "./item";
import { useTestimonialStore } from "../../settings/store";

const Reviewers = () => {
  const { activeIndex, setActiveIndex } = useTestimonialStore();
  const handleClick = (index: number) => {
    setActiveIndex(index);
  };
  return (
    <div className="flex-center gap-6 md:gap-10">
      {items.map((user, i) => (
        <Item 
          key={i}
          {...user}
          handleClick={() => {
            handleClick(i);
          }}
          isUserActive={isThisUserActive(i, activeIndex)}
        />
      ))}
    </div>
  );
};

export default Reviewers;
