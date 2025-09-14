import React, { isValidElement } from "react";

interface IProps {
  title?: string;
  description?: string;
  icon?: React.ReactNode;
}

const CompanyItem = ({ title, icon, description }: IProps) => {
  return (
    <article className="h-[120px] flex-col-center gap-1 w-full p-5 ">
      {isValidElement(icon) ? (
        <div>{icon}</div>
      ) : (
        <>
          <div>
            <p className="text-[24px]">
              <strong>{title}</strong>
            </p>
          </div>
          <div>
            <p className="text-center text-[#808080]">{description}</p>
          </div>
        </>
      )}
    </article>
  );
};

export default CompanyItem;
