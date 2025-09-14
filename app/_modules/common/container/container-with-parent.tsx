import React, { HTMLAttributes } from "react";
import Container from ".";

const ContainerWithParent = ({ ...rest }: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className="py-30 bg-[#F5F5F0]">
      <Container {...rest}>{rest.children}</Container>
    </div>
  );
};

export default ContainerWithParent;
