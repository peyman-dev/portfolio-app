import React from "react";
import Title from "./fragments/title";
import Caption from "./fragments/caption";
import Achievements from "./fragments/achievements";

const Headline = () => {
  return (
    <div className="space-y-12">
      <div className="space-y-5">
        <Title />
        <Caption />
      </div>
      <Achievements />  
    </div>
  );
};

export default Headline;
