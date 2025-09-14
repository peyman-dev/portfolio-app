import ContainerWithParent from "@/app/modules/common/container/container-with-parent";
import Header from "@/app/modules/common/header";
import Clients from "@/app/modules/templates/home/clients";
import HeroSection from "@/app/modules/templates/home/hero-section";
import Services from "@/app/modules/templates/home/services";
import Testimonial from "@/app/modules/templates/home/testimonial";
import UnderHeroSection from "@/app/modules/templates/home/under-hero";
import React from "react";
import CTASection from "../../modules/templates/home/cta-section/";
import HaveAProject from "@/app/modules/templates/home/have-a-project";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <UnderHeroSection />
      <Clients />
      <ContainerWithParent>
        <Testimonial />
        <CTASection />
      </ContainerWithParent>
      <HaveAProject />
    </>
  );
};

export default HomePage;
