import Image from "next/image";
import React from "react";
import Cover from "@/images/banner.jpg";
import Title from "./elements/title";
import Description from "./elements/description";
import Author from "./elements/author";
import PublishDate from "./elements/publish-date";
import ProfilePicture from "./elements/author/elements/profile-picture";

const ArticleCard = () => {
  return (
    <article className="w-full relative rounded-2xl border border-gray-100 space-y-5 bg-white shadow-2xl/5 p-2">
      <header className="rounded-2xl grow h-[176px]! overflow-hidden">
        <Image
          src={Cover.src}
          width={1000}
          height={1000}
          objectFit="cover"
          alt="Example"
          className="size-full!"
        />
      </header>
      <main className="space-y-2">
        <Title title="The future of Front-End (React.js - 2026)" />
        <Description content="Lorem ipsum dolor sit amet consectetur adipisicing elit. In pariatur obcaecati voluptatum dolorem expedita eligendi neque cupiditate dolor maiores alias possimus, excepturi beatae, tempore ut minima deserunt aut. Veniam dolores, doloribus assumenda vitae harum consectetur perspiciatis ipsam voluptatem suscipit accusamus, qui rem." />
      </main>
      <footer className="mt-auto! pb-5">
        <div className="space-y-1">
          <Author />
          <PublishDate />
        </div>
        <div className="flex-between mt-2">
          <ProfilePicture />
        </div>
      </footer>
    </article>
  );
};

export default ArticleCard;
