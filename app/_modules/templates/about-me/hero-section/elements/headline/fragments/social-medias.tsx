import { Tooltip } from "@radix-ui/themes";
import { Linkedin, LucidePhoneCall, Mail, Send } from "lucide-react";
import Link from "next/link";
import React from "react";

const SocialMedias = () => {
  return (
    <div className="*:size-[48px] *:border-zinc-300 flex-ic gap-5 *:flex-center *:rounded-full *:border *:cursor-pointer justify-center md:justify-start">
      <Tooltip content="Linkedin">
        <Link href={"/"}>
          <Linkedin className="size-5" />
        </Link>
      </Tooltip>
      <Tooltip content="Telegram">
        <Link href={"https://t.me/this_peyman"}>
          <Send className="size-5" />
        </Link>
      </Tooltip>
      <Tooltip content="Email">
        <Link href={"mailto:peymangeek@gmail.com"}>
          <Mail className="size-5" />
        </Link>
      </Tooltip>
      <Tooltip content="Call me">
        <Link href={"tel:+989911871596"}>
          <LucidePhoneCall className="size-5" />
        </Link>
      </Tooltip>
    </div>
  );
};

export default SocialMedias;
