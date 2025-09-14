"use client";
import useToggle from "@/app/core/hooks/use-toggle";
import { Drawer, DrawerProps } from "antd";
import React, { JSX, ReactNode } from "react";

interface IProps extends DrawerProps {
  children: ReactNode;
  Trigger: JSX.Element;
}

const Dialog = ({ children, Trigger, ...drawerProps }: IProps) => {
  const [isOpen, toggle] = useToggle();

  const RenderDialog = () => {
    return React.Children.map(children, (child, index) => {
      if (React.isValidElement(child)) {
        return (
          <div key={index} onClick={() => toggle()}>
            {child}
          </div>
        );
      }
      return child;
    });
  };

  return (
    <>
      <div onClick={() => toggle()}>{Trigger}</div>
      <Drawer
        closeIcon={false}
        closable={false}
        onClose={() => toggle()}
        open={isOpen}
        {...drawerProps}
      >
        {RenderDialog()}
      </Drawer>
    </>
  );
};

export default Dialog;