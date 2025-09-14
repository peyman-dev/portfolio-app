import React from "react";
import Title from "./elements/title";
import Description from "./elements/description";
import Buttons from "./elements/buttons";

const Content = () => {
  return (
    <div className="flex flex-col gap-y-8 md:gap-y-12">
      <div className="md:space-y-6 space-y-5">
        <Title />
        <Description />
      </div>
      <Buttons />
    </div>
  );
};

export default Content;
