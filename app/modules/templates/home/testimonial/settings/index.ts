import clsx from "clsx";
import { HTMLMotionProps } from "framer-motion";

export const items = [
  {
    id: crypto.randomUUID(),
    userImg: "/images/portrait-1.jpg",
    user: {
      name: "Ali Rezaei",
      job: "Web Developer",
    },
    message:
      "This platform has completely transformed the way I approach web development projects. The intuitive interface and robust features allowed me to streamline my workflow, reduce debugging time, and deliver high-quality applications to my clients ahead of schedule. The support team was also incredibly responsive, addressing my queries promptly and professionally. I highly recommend this tool to any developer looking to enhance their productivity and efficiency.",
  },
  {
    id: crypto.randomUUID(),
    userImg: "/images/portrait-2.jpg",
    user: {
      name: "Sara Mohammadi",
      job: "Graphic Designer",
    },
    message:
      "As a graphic designer, I was initially skeptical about using a new tool for my projects, but this platform exceeded all my expectations. The seamless integration with design software and the ability to preview my work in real-time saved me countless hours. The templates are customizable and modern, which helped me create stunning visuals for my clients. This is now my go-to solution for all my design needs, and I can’t imagine working without it!",
  },
  {
    id: crypto.randomUUID(),
    userImg: "/images/portrait-3.jpg",
    user: {
      name: "Hossein Karimi",
      job: "Project Manager",
    },
    message:
      "Managing multiple projects simultaneously can be overwhelming, but this tool has been a game-changer for my team. The collaboration features, combined with detailed analytics and progress tracking, have made it so much easier to keep everything on track. My team loves how user-friendly it is, and our clients have noticed the improvement in our delivery timelines. This is hands-down the best project management solution we’ve ever used.",
  },
  {
    id: crypto.randomUUID(),
    userImg: "/images/portrait-4.jpg",
    user: {
      name: "Maryam Ahmadi",
      job: "Marketing Specialist",
    },
    message:
      "I’ve been using this platform for our marketing campaigns, and the results have been phenomenal. The ability to analyze user engagement and tweak our strategies in real-time has significantly boosted our conversion rates. The dashboard is clean and easy to navigate, even for someone who isn’t very tech-savvy. The customer support is top-notch, always ready to assist with any issues. I highly recommend this to any marketing professional looking to elevate their campaigns.",
  },
];

export const activeUserStyles = (isUserActive: boolean): HTMLMotionProps<"button"> => {
  return {
    className: clsx(
      isUserActive 
        ? "**:size-[100px] border-4 border-white ring ring-black/10 rounded-2xl overflow-hidden grayscale-0!"
        : "grayscale"
    ),
  };

};

export const isThisUserActive = (i: number, currentIndex: number) =>
  i == currentIndex;

export const motionConfigs = (isActive: boolean): HTMLMotionProps<"button"> =>
  isActive
    ? {}
    : {
        animate: { opacity: 1, scale: 1.15 },
        transition: { duration: 0.3, ease: "easeInOut" },
        whileHover: {
          filter: "grayscale(0.5)",
          scale: 1.3, // scale باید عدد باشد، نه رشته
        },
      };
