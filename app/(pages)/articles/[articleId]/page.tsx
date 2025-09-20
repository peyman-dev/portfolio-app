import Container from "@/app/_modules/common/container";
import ContainerWithParent from "@/app/_modules/common/container/container-with-parent";
import Banner from "@/app/_modules/templates/articles/article/banner";
import ArticleBody from "@/app/_modules/templates/articles/article/body";
import Comments from "@/app/_modules/templates/articles/article/comments";
import HeroDetails from "@/app/_modules/templates/articles/article/hero-details";
import CTASection from "@/app/_modules/templates/home/cta-section";
import HaveAProject from "@/app/_modules/templates/home/have-a-project";
import Testimonial from "@/app/_modules/templates/home/testimonial";
import WrapInComingSoon from "@/app/_modules/ui/coming-soon";
import React from "react";

interface PageProps {
  params: {
    articleId: string;
  };
}

const Page = async ({ params }: PageProps) => {
  const { articleId } = params;

  return (
    <>
      <Banner />
      <HeroDetails />
      <ContainerWithParent>
        <ArticleBody />
        {/* <Testimonial /> */}
      </ContainerWithParent>
      <Container className="mt-[120px]">
        <WrapInComingSoon>
          <Comments />
        </WrapInComingSoon>
        <CTASection />
      </Container>
      <HaveAProject />
    </>
  );
};

export default Page;
