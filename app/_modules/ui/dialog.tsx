"use client";
import useToggle from "@/app/core/hooks/use-toggle";
import { Drawer, DrawerProps } from "antd";
import { X } from "lucide-react";
import React, { ReactNode } from "react";

interface IProps extends DrawerProps {
  children: ReactNode;
  Trigger: React.ReactElement;
  closeTrigger?: boolean;
}

const Dialog = ({
  children,
  closeTrigger,
  Trigger,
  ...drawerProps
}: IProps) => {
  const [isOpen, toggle] = useToggle();

  return (
    <>
      <div onClick={toggle}>{Trigger}</div>
      <Drawer
        closeIcon={false}
        closable={false}
        onClose={toggle}
        open={isOpen}
        {...drawerProps}
      >
        {closeTrigger && <button className="absolute! right-4!" onClick={toggle}><X /></button>}
        {children}
      </Drawer>
    </>
  );
};

export default Dialog;
