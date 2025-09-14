"use client";
import React, { useState } from "react";

const useToggle = (): [isOpen: boolean, toggle: (optionalState?: boolean) => void] => {
  const [state, setState] = useState(false);
  const toggle = (optionalState?: boolean) => {
    if (typeof optionalState == "undefined") {
      setState(!state);
    } else {
      setState(optionalState);
    }
  };
  return [state, toggle];
};

export default useToggle;
