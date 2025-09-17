"use client";
import Loading from "@/app/_modules/ui/loading";
import React, { ReactNode, useTransition } from "react";
import { createPortal } from "react-dom";

const useAsyncAction = () => {
  const [isPending, startTransition] = useTransition();

  const startAsyncAction = (yourFunction: () => void ) =>
    startTransition(async () => await yourFunction());


  const AsyncProvider = ({ children }: { children: ReactNode }) => {
    return (
      <>
        {children}
        {isPending && <Loading />}
      </>
    );
  };

  return { startAsyncAction, AsyncProvider };
};

export default useAsyncAction;
