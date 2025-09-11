"use client";
import React, { useState } from "react";
import Reviewers from "./modules/reviewers";
import "swiper/css";
import "swiper/css/effect-fade";
import ReviewContent from "./modules/review-content";

const Testimonial = () => {
  return (
    <section className="flex-center flex-col gap-20">
      <Reviewers />
      <ReviewContent />
    </section>
  );
};

export default Testimonial;
