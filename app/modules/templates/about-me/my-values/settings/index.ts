import { generateRandomID } from "@/app/core/settings";
import { ChevronsUp, GalleryVertical, Handshake, Rocket } from "lucide-react";
import FigmaIcon from "@/images/figma-icon.png"

export const values = [
  {
    id: generateRandomID(),
    title: "Focus on super high-quality and all yours",
    Icon: Rocket
  },
  {
    id: generateRandomID(),
    title: "Unique work and all yours",
    Icon: GalleryVertical
  },
  {
    id: generateRandomID(),
    title: "Super fast delivery work",
    Icon: ChevronsUp
  },
  {
    id: generateRandomID(),
    title: "Collaboration number one",
    Icon: Handshake
  },
];

export const clients = [
    {
        id: generateRandomID(),
        hasText: true,
        title: "Website developed",
        value: "+10"
    },
    {
        id: generateRandomID(),
        hasText: false,
        image: FigmaIcon.src
    },
    {
        id: generateRandomID(),
        hasText: true,
        title: "Project Finished",
        value: "+12"
    },
    {
        id: generateRandomID(),
        hasText: false,
        image: FigmaIcon.src
    },
]