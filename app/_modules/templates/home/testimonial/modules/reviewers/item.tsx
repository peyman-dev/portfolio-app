import React from "react";
import Image from "next/image";
import { activeUserStyles, motionConfigs } from "../../settings";
import * as motion from "motion/react-client";

interface IProps {
  id: any;
  userImg: string;
  user: {
    name: string;
    job: string;
  };
  message: string;
  handleClick: () => void;
  isUserActive: boolean;
}

const Item = ({
  handleClick,
  message,
  user,
  id,
  userImg,
  isUserActive,
}: IProps) => {
  return (
    <motion.button
      {...motionConfigs(isUserActive)}
      {
        ...activeUserStyles(isUserActive)
      }
      onClick={() => {
        handleClick();
      }}
      
    >
      <div className="size-[60px] overflow-hidden rounded-lg **:object-cover! *:size-full!">
        <Image alt={user.name} src={userImg} width={10000} height={10000} />
      </div>
    </motion.button>
  );
};

export default Item;
