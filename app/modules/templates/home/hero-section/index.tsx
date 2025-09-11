import Container from "@/app/modules/common/container";
import React from "react";
import Headline from "./components/headline";
import Content from "./components/content";

const HeroSection = () => {
  return (
    <section id="hero-section" className="my-20">
      <Container className="flex-between  *:w-1/2 gap-25">
        <Headline />
        <Content />
      </Container>
    </section>
  );
};

export default HeroSection;
