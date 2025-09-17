import Image from "next/image";
import React from "react";
import ExampleBanner from "@/images/banner.jpg";

const Banner = () => {
  return (
    <div className="grow my-15 h-[420px] container">
      <Image
        className="size-full object-cover"
        src={ExampleBanner.src}
        alt="Example banner"
        width={1000}
        height={1000}
      />
    </div>
  );
};

export default Banner;
