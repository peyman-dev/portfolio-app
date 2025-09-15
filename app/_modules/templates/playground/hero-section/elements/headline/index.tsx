import React from "react";
import MiniTitle from "./fragments/mini-title";
import Title from "./fragments/title";

const Headline = () => {
  return (
    <div className="space-y-2! md:space-y-5">
      <MiniTitle />
      <Title />
    </div>
  );
};

export default Headline;
