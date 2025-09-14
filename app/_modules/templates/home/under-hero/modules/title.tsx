import React from "react";

const Title = ({ title }: { title?: string }) => {
  return <h4 className="md:text-[40px] text-[28px] font-Inter-Medium!">
    {title}
  </h4>;
};

export default Title;
