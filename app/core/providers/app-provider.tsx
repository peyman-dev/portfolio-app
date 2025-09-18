"use client"
import { Theme } from "@radix-ui/themes";
import React, { ReactNode } from "react";
import '../lib/disable-inspect'
import { Toaster } from "react-hot-toast";

const ApplicationProvider = ({ children }: { children: ReactNode }) => {
    return <Theme className="font-Inter-Regular">
        <Toaster />
        {children}
    </Theme>
};

export default ApplicationProvider;
