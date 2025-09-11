import React from "react";
import Title from "./elements/title";
import Caption from "./elements/caption";
import Actions from "./elements/actions";
import Buttons from "../../../hero-section/components/content/elements/buttons";

const Headline = () => {
  return (
    <div className="max-w-[445px] space-y-12">
      <div className="space-y-6">
        <Title />
        <Caption />
      </div>
      {/* <Actions /> */}
      
      <Buttons />
    </div>
  );
};

export default Headline;
