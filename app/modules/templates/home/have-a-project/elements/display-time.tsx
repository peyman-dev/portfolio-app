"use client";
import useLocalTime from "@/app/core/hooks/use-local-time";
import React, { useEffect } from "react";

const DisplayTime = () => {
  const myLocalTime = useLocalTime();

  useEffect(() => {}, [myLocalTime]);

  return (
    <div className="flex-center gap-2 text-sm">
      <p className="text-gray-500">My local time</p>
      <p className="font-Inter-Black!">
        <strong>{myLocalTime}</strong>
      </p>
    </div>
  );
};

export default DisplayTime;
