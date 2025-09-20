"use client";
import React, { useState } from "react";

const Textarea = () => {
  const [value, setValue] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(event.target.value);
  };

  // تبدیل \n به <br> برای نمایش
  const renderTextWithBreaks = (text: string) => {
    return text.split("\n").map((line, index) => (
      <React.Fragment key={index}>
        {line}
        <br />
      </React.Fragment>
    ));
  };

  return (
    <div className="grow">
      <p className="text-sm text-[#808080] mb-2 font-Inter-Light!">
        Write something:
      </p>
      <textarea
        name="comment-field"
        id="comment-field"
        value={value}
        onChange={handleChange}
        className="grow border w-full! min-h-20 border-[#f0f0f0] font-Inter-Regular! rounded-md p-3.5 focus-within:outline-0! focus-within:ring-0! h-[140px] resize-none!"
        placeholder="What's on your mind?"
      />
    </div>
  );
};

export default Textarea;
