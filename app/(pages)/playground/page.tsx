import ContainerWithParent from "@/app/_modules/common/container/container-with-parent";
import HaveAProject from "@/app/_modules/templates/home/have-a-project";
import HeroSection from "@/app/_modules/templates/playground/hero-section";
import React from "react";

const page = () => {
  return (
    <>
      <HeroSection />
      <ContainerWithParent>
        <div className="text-center">
            <p className="text-3xl text-center md:text-5xl">
                Coming soon ...
            </p>
        </div>
      </ContainerWithParent>
      <HaveAProject />
    </>
  );
};

export default page;
