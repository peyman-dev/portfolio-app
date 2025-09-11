import React from "react";
import Title from "./modules/headline/title";
import Description from "./modules/headline/description";
import { Button } from "@radix-ui/themes";
import { PhoneCall } from "lucide-react";
import Image from "./modules/image";

const CTASection = () => {
  return (
    <section className="mt-[120px] p-8 border-[#DDE0D1] grid grid-cols-2 gap-15 bg-white rounded-[20px] border h-[336px]! overflow-hidden!">
      <div className="flex-col-between">
        <div className="space-y-5">
          <Title />
          <Description />
        </div>
        <div>
          <Button className="bg-black! text-white! px-4! h-12! rounded-xl!">
            <PhoneCall className="size-4"/>
            Contact me
          </Button>
        </div>
      </div>
      <div className="">
        <Image />
      </div>
    </section>
  );
};

export default CTASection;
