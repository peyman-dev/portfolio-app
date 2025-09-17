"use client";
import useAsyncAction from "@/app/core/hooks/use-async-action";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";

const Navigation = () => {
  const { startAsyncAction, AsyncProvider } = useAsyncAction();

  return (
    <AsyncProvider>
      <div className="flex-ic **:cursor-pointer select-none gap-7">
        <div onClick={() => startAsyncAction(async () => await redirect("/"))}>Home</div>
        <div onClick={() => startAsyncAction(async () => await redirect("/playground"))}>
          Playground
        </div>
        <div onClick={() => startAsyncAction(async () => await redirect("/services"))}>
          Services
        </div>
        <div onClick={() => startAsyncAction(async () => await redirect("/case-studies"))}>
          Case studies
        </div>
        <div onClick={() => startAsyncAction(async () => await redirect("/about-me"))}>
          About me
        </div>
      </div>
    </AsyncProvider>
  );
};

export default Navigation;
