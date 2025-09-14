import clsx from "clsx";
import React, { HTMLAttributes } from "react";

const Container = ({ ...rest }: HTMLAttributes<HTMLDivElement>) => {
    // children will get destructve from [...rest]
  return <div {...rest} className={clsx("container mx-auto", rest?.className)} />;
};

export default Container;
