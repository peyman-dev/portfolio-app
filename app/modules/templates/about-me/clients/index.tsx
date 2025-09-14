import { clients } from "@/app/core/settings";
import Image from "next/image";
import React from "react";

const Clients = () => {
  return (
    <div className="grid sm:grid-cols-3 grid-cols-2 **:border-gray-200 md:grid-cols-4 lg:grid-cols-5 gap-0">
      {clients.map((data) => {
        if (data.hasText) {
          return (
            <div key={data.id} className="flex-center border h-[108px] gap-2">
              <p>{data.value}</p>
              <p>{data.title}</p>
            </div>
          );
        } else {
          return (
            <div key={data.id} className="h-[108px] flex-center border">
              <Image
                src={data.image as string}
                width={1000}
                height={60}
                className="w-[60%]! odd:order-0!"
                alt="Logo"
              />
            </div>
          );
        }
      })}
    </div>
  );
};

export default Clients;
