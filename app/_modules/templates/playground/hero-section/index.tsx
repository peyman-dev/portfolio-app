import Container from "@/app/_modules/common/container";
import React from "react";
import MiniTitle from "./elements/headline/fragments/mini-title";
import Title from "./elements/headline/fragments/title";
import Headline from "./elements/headline";
import Body from "./elements/body";

const HeroSection = () => {
  return (
    <Container className="flex-between md:flex-row flex-col md:mt-[80px] mb-10 md:mb-25 md:*:w-1/2 gap-y-10 text-center md:text-start">
      <Headline />
      <Body />
    </Container>
  );
};

export default HeroSection;
