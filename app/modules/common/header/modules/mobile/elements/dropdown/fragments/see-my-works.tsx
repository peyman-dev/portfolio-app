"use client"
import { Button } from "@radix-ui/themes";
import {  Images } from "lucide-react";
import React from "react";

const SeeMyWorks = () => {
  return (
    <Button className="h-10! gap-2! bg-[#F5F5F0]! text-black! w-full! rounded-md!">
        <Images className="size-4" />
      See my works
    </Button>
  );
};

export default SeeMyWorks;
