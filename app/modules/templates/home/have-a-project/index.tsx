import React from "react";
import DisplayTime from "./elements/display-time";
import ContactButton from "./elements/contact-button";
import MiniTitle from "./elements/mini-title";
import Title from "./elements/title";

const HaveAProject = () => {
  return (
    <section className="flex-col-center gap-y-10 my-[100px]">
      <div className="space-y-5 text-center">
        <MiniTitle />
        <Title />
      </div>
      <div className="flex-col-center gap-4">
        <ContactButton />
        <DisplayTime />
      </div>
    </section>
  );
};

export default HaveAProject;
