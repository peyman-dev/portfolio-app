"use client";
import useToggle from "@/app/core/hooks/use-toggle";
import { Drawer, DrawerProps } from "antd";
import React, { JSX, ReactNode } from "react";

interface IProps extends DrawerProps {
  children: ReactNode;
  Trigger: JSX.Element;
}

const Dialog = (props: IProps) => {
  const [isOpen, toggle] = useToggle();

  return (
    <>
      <div onClick={() => toggle()}>{props.Trigger}</div>
      <Drawer  closeIcon={false} closable={false} onClose={() => toggle()} open={isOpen}  {...props}>
        {props.children}
      </Drawer>
    </>
  );
};

export default Dialog;
