import React from "react";
import Title from "./elements/title";
import Description from "./elements/description";
import Buttons from "./elements/buttons";

const Content = () => {
  return (
    <div className="flex flex-col gap-y-12">
      <div className="space-y-6">
        <Title />
        <Description />
      </div>
      <Buttons />
    </div>
  );
};

export default Content;
