import React from "react";
import Title from "./elements/title";

const HeroDetails = () => {
  return (
    <section
      id="article-hero"
      className="flex-between *:w-1/2 gap-[60px] my-[100px] mb-[120px] container"
    >
      <Title />
      <div>
        <p className="text-[40px] font-Inter-SemiBold!">Peyman Ahmadi</p>
        <p className="text-[24px] text-[#808080] font-Inter-Medium!">
          Thursday, 18 September 2025
        </p>
      </div>
    </section>
  );
};

export default HeroDetails;
