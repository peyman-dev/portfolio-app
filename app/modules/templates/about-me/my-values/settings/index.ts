import { generateRandomID } from "@/app/core/settings";
import { ChevronsUp, GalleryVertical, Handshake, Rocket } from "lucide-react";

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

