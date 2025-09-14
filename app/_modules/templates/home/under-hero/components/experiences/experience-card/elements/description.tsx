import React from "react";

const Description = ({ content }: { content: string }) => {
  return <div className="text-sm md:text-base text-[#7F7F7F]  ">{content}</div>;
};

export default Description;
