import React from "react";
import ContainerWithParent from "../../../common/container/container-with-parent";
import Experiences from "./components/experiences";
import Awards from "./components/awards";
import Services from "../services";

const UnderHeroSection = () => {
  return (
    <ContainerWithParent>
      <section className="flex-between gap-5 md:*:w-1/2 items-start! lg:flex-row flex-col *:max-h-max! gap-y-20 md:gap-y-0">
        <Experiences />
        <Awards />
      </section>
      <Services />
    </ContainerWithParent>
  );
};

export default UnderHeroSection;
