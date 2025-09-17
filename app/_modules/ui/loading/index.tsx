import React from "react";
import './styles.css'
const Loading = () => {
  return (
    <div className="fixed z-10 top-0 right-0 left-0 bottom-0 size-full bg-black/20 flex-center">
      <div className="size-56 rounded-xl bg-white flex-col-center gap-5">
        <div className="loader">
          <span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </span>
          <div className="base">
            <span></span>
            <div className="face"></div>
          </div>
        </div>
        <div className="longfazers">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>

      </div>
    </div>
  );
};

export default Loading;
