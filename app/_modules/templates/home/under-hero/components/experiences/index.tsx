import React from "react";
import Title from "../../modules/title";
import ExperienceCard from "./experience-card";
import { experiences } from "./settings";

const Experiences = () => {
  return (
    <section>
      <Title title="Working experience" />
      <div className="space-y-8 mt-8 md:mt-12!">
        {experiences.map((item, i) => (
          <ExperienceCard key={i} company={{ ...item }} />
        ))}
      </div>
    </section>
  );
};

export default Experiences;
