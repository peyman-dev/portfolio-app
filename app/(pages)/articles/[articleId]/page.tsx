import Banner from "@/app/_modules/common/articles/article/banner";
import HeroDetails from "@/app/_modules/common/articles/article/hero-details";
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
    </>
  );
};

export default Page;
