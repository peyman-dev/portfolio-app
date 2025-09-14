import ContainerWithParent from "@/app/_modules/common/container/container-with-parent";
import Header from "@/app/_modules/common/header";
import Clients from "@/app/_modules/templates/home/clients";
import HeroSection from "@/app/_modules/templates/home/hero-section";
import Services from "@/app/_modules/templates/home/services";
import Testimonial from "@/app/_modules/templates/home/testimonial";
import UnderHeroSection from "@/app/_modules/templates/home/under-hero";
import React from "react";
import CTASection from "../../_modules/templates/home/cta-section";
import HaveAProject from "@/app/_modules/templates/home/have-a-project";

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
