import Image from "next/image";
import React, { ReactNode } from "react";

interface IProps {
  title: string;
  description: string;
  icon?: ReactNode;
  images: string[];
}

const Item = ({ description, images, title, icon }: IProps) => {
  return (
    <article className="grow grid grid-cols-2 gap-5 items-start gap-y-10">
      <div>
        <h5 className="text-[32px]">{title}</h5>
      </div>
      <div>
        <p className="text-[#808080]">{description}</p>
      </div>
      {images.map((src) => (
        <div className="h-[320px] overflow-hidden rounded-3xl">
          <Image alt={title} width={1000} height={320} objectFit="cover" className="rounded-3xl" src={src} />
        </div>
      ))}
    </article>
  );
};

export default Item;
