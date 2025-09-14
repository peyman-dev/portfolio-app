import React from "react";
import Icon from "./elements/icon";
import Title from "./elements/title";
import Description from "./elements/description";
import { IExperienceProps } from "@/app/core/lib/types";

const ExperienceCard = ({
  company: { companyName, iconSrc, role, time },
}: {
  company: IExperienceProps;
}) => {
  return (
    <article className="flex-ic gap-5!">
      <Icon src={iconSrc}/>
      <div>
        <Title role={role} company={companyName} />
        <Description content={time} />
      </div>
    </article>
  );
};

export default ExperienceCard;
