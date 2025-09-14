import { Button } from "@radix-ui/themes";
import { Download } from "lucide-react";
import React from "react";

const CVDownload = () => {
  return (
    <Button
      variant="solid"
      radius="large"
      className="cursor-pointer! bg-black! hover:bg-zinc-900!"
    >
        <Download className="size-4"/>
        Download CV
    </Button>
  );
};

export default CVDownload;
