import React from "react";

const SectionTitle = ({ title }: { title?: string }) => {
  return (
    <h4 className="md:text-[40px] text-[28px] font-Inter-Medium!">
      {title || "Please enter the title"}
    </h4>
  );
};

export default SectionTitle;
