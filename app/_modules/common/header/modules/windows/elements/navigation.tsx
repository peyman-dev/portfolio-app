import Link from "next/link";
import React from "react";

const Navigation = () => {
  return (
    <div className="flex-ic gap-7">
      <Link href={"/"}>Home</Link>
      <Link href={"/playground"}>Playground</Link>
      <Link href={"/services"}>Services</Link>
      <Link href={"/case-studies"}>Case studies</Link>
      <Link href={"/about-me"}>About me</Link>
    </div>
  );
};

export default Navigation;
