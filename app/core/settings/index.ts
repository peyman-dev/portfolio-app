import FigmaIcon from "@/images/figma-icon.png"
import FramerIcon from "@/images/framer.png"


export function generateRandomID() {
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < 8; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}
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
        image: FramerIcon.src
    },
    {
        id: generateRandomID(),
        hasText: true,
        title: "Years of experience",
        value: "+3"
    },
]