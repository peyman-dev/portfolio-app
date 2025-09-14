"use client";
import { displayTime } from "@/app/_modules/common/header/settings";
import React, { useEffect, useState } from "react";

const useLocalTime = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const cleanup = displayTime(setTime);

    return () => {
      cleanup;
    };
  }, []);

  return time
};

export default useLocalTime;
