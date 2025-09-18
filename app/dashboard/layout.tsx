import React, { ReactNode } from "react";
import Sidebar from "../_modules/templates/dashboard/sidebar";
import { classNames } from "./settings/styles";
import Tabs from "../_modules/templates/dashboard/common/tabs";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <main className={classNames.layout}>
      <Sidebar />
      <section className="grow">
        <Tabs />
        {children}
      </section>
    </main>
  );
};

export default layout;
