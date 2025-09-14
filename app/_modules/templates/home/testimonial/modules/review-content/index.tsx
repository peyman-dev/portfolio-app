"use client";
import React, { useEffect, useState } from "react";
import { useTestimonialStore } from "../../settings/store";
import { getContent } from "../../settings/get-content";
import Message from "./message";
import User from "./user";

const ReviewContent = () => {
  const { activeIndex } = useTestimonialStore();
  const [data, setData] = useState<any>()
  useEffect(() => {
    const result = getContent()
    setData(result)
    console.log(result)
  }, [activeIndex]);

  return <div className="max-w-[720px] mx-auto">
   <Message 
    message={data?.message as string}
   />
   <User 
    user={data?.user}
   />
  </div>;
};

export default ReviewContent;
