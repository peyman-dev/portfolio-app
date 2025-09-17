import React from "react";
import Title from "./elements/title";

const HeroDetails = () => {
  return (
    <section id="article-hero" className="flex-between *:w-1/2 gap-[60px] container">
      <Title />
      <div>
        <p>
          Peyman Ahmadi
        </p>
      </div>
    </section>
  );
};

export default HeroDetails;
