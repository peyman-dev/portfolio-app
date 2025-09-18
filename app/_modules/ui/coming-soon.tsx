import React, { ReactNode } from "react";

const WrapInComingSoon = ({ children }: { children: ReactNode }) => {
  return (
    <div className="relative">
      <div className="p-5">{children}</div>
      <div className="size-full z-[1000] absolute top-0 left-0 rounded-2xl overflow-hidden backdrop-blur-sm bg-black/30 flex-center">
        <p className="text-4xl">
          <strong>Coming soon ...</strong>
        </p>
      </div>
    </div>
  );
};

export default WrapInComingSoon;
