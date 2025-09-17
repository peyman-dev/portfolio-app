import React from "react";
import CompanyItem from "./item";
import {
  ChevronsLeftRightEllipsis,
  PanelTop,
  SmilePlus,
  SquareDashedBottomCode,
} from "lucide-react";

const ClientsCompanies = () => {
  return (
    <div className="flex-center  grow">
      <div className="grid  max-w-[480px] grow">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 *:even:bg-[#FBFBF9]">
          <CompanyItem icon={<PanelTop className="size-10" />} />
          <CompanyItem
            title="10+"
            description="Project Finished"
            className="order-1! md:order-none!"
          />
          <CompanyItem
            icon={<ChevronsLeftRightEllipsis className="size-10" />}
          />
          <CompanyItem title="20+" description="Website Developed" />
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 *:odd:bg-[#FBFBF9] *:even:bg-white!">
          <CompanyItem
            title="4+"
            description="Years experience"
            className="order-1! md:order-none!"
          />
          <CompanyItem icon={<SquareDashedBottomCode className="size-10" />}className="order-3! md:order-none!"  />
          <CompanyItem title="15+" description="Happy Clients"  />
          <CompanyItem icon={<SmilePlus className="size-10" />} />
        </div>
      </div>
    </div>
  );
};

export default ClientsCompanies;
