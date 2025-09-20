import React from "react";
import MyImg from "@/images/my-picture.jpg";
import Image from "next/image";

const ProfilePicture = () => {
  return (
    <div className="rounded-full size-10 ">
      <Image objectFit="cover" width={1000} height={1000} src={MyImg.src} alt="Test" className="rounded-full object-cover! size-full!" />
    </div>
  );
};

export default ProfilePicture;
