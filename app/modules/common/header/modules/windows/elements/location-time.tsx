"use client";
import React, { useEffect, useState } from "react";
import { displayTime } from "../../../settings";

const LocationTime = () => {
  const [liveTime, setLiveTime] = useState("");

  useEffect(() => {
    const cleanup = displayTime(setLiveTime);
    return cleanup; 
  }, []);

  return (
    <div className="text-center">
      <p className="text-[#808080] text-sm">Zanjan, Iran</p>
      <p className="text-xs">{liveTime}</p>
    </div>
  );
};

export default LocationTime;