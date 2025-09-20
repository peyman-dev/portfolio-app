import { ChevronRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const SeeMore = () => {
  return <Link href={"/articles"} className="flex items-center gap-1">
    <span>
      See more
    </span>
      <ChevronRight className="size-5"/>
  </Link>;
};

export default SeeMore;
