import Landing1 from "@/public/images/landing-1.png";
import Landing2 from "@/public/images/landing-2.png";

import Company1 from "@/public/images/company-website-1.jpg";
import Company2 from "@/public/images/company-website-2.jpg";

import Responsive1 from "@/public/images/responsive-web-design-1.jpg";
import Responsive2 from "@/public/images/responsive-web-design-2.jpg";

import Framer1 from "@/public/images/framer-1.png";
import Framer2 from "@/public/images/framer-2.png";

export const services = [
  {
    id: crypto.randomUUID(),
    title: "Landing page design",
    description:
      "Crafting compelling first impressions with our innovative landing page designs. Elevate your online presence effortlessly.",
    images: [Landing1.src, Landing2.src],
  },
  {
    id: crypto.randomUUID(),
    title: "Company website design",
    description:
      "Transform your online presence with our sleek and modern company website design.",
    images: [Company1.src, Company2.src],
  },
  {
    id: crypto.randomUUID(),
    title: "Full pages website design",
    description:
      "Crafting immersive and engaging full-page website designs that captivate audiences and deliver a seamless user experience.",
    images: [Responsive1.src, Responsive2.src],
  },
  {
    id: crypto.randomUUID(),
    title: "Framer development",
    description:
      "Transforming design into captivating digital realities with precision and innovation using design tools called Framer.",
    images: [Framer1.src, Framer2.src],
  },
];
