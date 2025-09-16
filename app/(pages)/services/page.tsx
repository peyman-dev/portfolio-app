import ContainerWithParent from "@/app/_modules/common/container/container-with-parent";
import HeroSection from "@/app/_modules/templates/services/hero-section";
import React from "react";
import ServicesSection from "@/app/_modules/templates/services/services"

const Services = () => {
  return (
    <>
      <HeroSection />
      <ContainerWithParent>
        <ServicesSection />
      </ContainerWithParent>
    </>
  );
};

export default Services;
