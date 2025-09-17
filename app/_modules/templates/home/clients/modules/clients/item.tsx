import clsx from "clsx";
import React, { HTMLAttributes, isValidElement } from "react";

interface IProps extends HTMLAttributes<HTMLDivElement> {
  title?: string;
  description?: string;
  icon?: React.ReactNode;
  isLastChild?: boolean;
}

const CompanyItem = ({ title, icon, description, className }: IProps) => {
  return (
    <article
      className={clsx(
        `h-[120px] flex-col-center nth-[3]:order-1! md:nth-[3]:order-none! gap-1 w-full p-5`, className
      )}
    >
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
