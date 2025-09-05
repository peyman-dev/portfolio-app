"use client"
import { Theme } from "@radix-ui/themes";
import React, { ReactNode } from "react";

const ApplicationProvider = ({ children }: { children: ReactNode }) => {
    return <Theme>
        {children}
    </Theme>
};

export default ApplicationProvider;
