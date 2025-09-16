import ContainerWithParent from "@/app/_modules/common/container/container-with-parent";
import HeroSection from "@/app/_modules/templates/services/hero-section";
import React from "react";
import ServicesSection from "@/app/_modules/templates/services/services";
import Clients from "@/app/_modules/templates/about-me/clients";
import Testimonial from "@/app/_modules/templates/home/testimonial";
import HaveAProject from "@/app/_modules/templates/home/have-a-project";

const Services = () => {
  return (
    <>
      <HeroSection />
      <ContainerWithParent>
        <ServicesSection />
      </ContainerWithParent>
      <Clients />
      <div className="my-20">
        <Testimonial />
      </div>
      <HaveAProject />
    </>
  );
};

export default Services;
