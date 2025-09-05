import Image from "next/image";
import React from "react";

const ProfilePicture = () => {
  return (
    <Image
      alt="Peyman Ahmadi's Picture"
      width={52}
      height={52}
      src={"/images/my-picture.jpg"}
      className="rounded-full" 
      objectFit="cover"
    />
  );
};

export default ProfilePicture;
