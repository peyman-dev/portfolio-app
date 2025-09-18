import React from "react";
import SectionTitle from "./elements/section-title";
import Textarea from "./elements/textarea";
import SubmitButton from "./elements/submit-button";
import UserDetailInputs from "./elements/user-detail-inputs";

const Comments = () => {
  return (
    <section className="space-y-10!">
      {/* <CustomEditor /> */}
      <div >
        <UserDetailInputs />
        <Textarea />
        <SubmitButton />
      </div>
      <SectionTitle />
    </section>
  );
};

export default Comments;
