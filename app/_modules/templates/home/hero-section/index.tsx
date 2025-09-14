import Container from "@/app/_modules/common/container";
import React from "react";
import Headline from "./components/headline";
import Content from "./components/content";

const HeroSection = () => {
  return (
    <section id="hero-section" className="my-5 md:my-20">
      <Container className="flex-between md:flex-row  flex-col *:w-full gap-y-9 md:gap-y-0 md:*:w-1/2 md:gap-25 text-center md:text-start">
        <Headline />
        <Content />
      </Container>
    </section>
  );
};

export default HeroSection;
