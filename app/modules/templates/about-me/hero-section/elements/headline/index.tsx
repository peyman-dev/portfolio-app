import React from "react";
import MyName from "./fragments/my-name";
import MyJob from "./fragments/my-job";
import Description from "./fragments/description";
import SocialMedias from "./fragments/social-medias";

const Headline = () => {
  return (
    <div className="space-y-4 md:space-y-8! text-center md:text-start">
      <div>
        <MyName />
      </div>
      <div className="space-y-4">
        <MyJob />
        <Description />
      </div>
      <div>
        <SocialMedias />
      </div>
    </div>
  );
};

export default Headline;
