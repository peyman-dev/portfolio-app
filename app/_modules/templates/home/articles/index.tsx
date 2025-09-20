import SectionTitle from "@/app/_modules/ui/section-title";
import React from "react";
import SeeMore from "./elements/see-more";
import ArticleCard from "@/app/_modules/common/cards/article-card";

const Articles = () => {
  return (
    <section id="recent-articles" className="container my-[200px]">
      <header className="flex-between">
        <SectionTitle title="Recent articles" />
        <SeeMore />
      </header>
      <main className="grid grid-cols-4 mt-10 gap-5">
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
      </main>
    </section>
  );
};

export default Articles;
