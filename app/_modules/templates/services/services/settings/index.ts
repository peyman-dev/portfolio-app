import { generateRandomID } from "@/app/core/settings";
import AntdAppImg from "@/images/antd-app.png";
import ReactFlow from "@/images/react-flow.png";
import Tadabor from "@/images/tadabor.png";
import CarizImg from "@/images/cariz.png";

export const achievements = [
  {
    id: generateRandomID(),
    value: "+10",
    text: "Projects finished",
  },
  {
    id: generateRandomID(),
    value: "+20",
    text: "Happy clients",
  },
];

export const achievementsGallery = [
  { title: "RealTime Data Management", img: AntdAppImg.src, link: "https://peyman-dev.github.io/hadafplus-panel/" },
  { title: "React Flow Application", img: ReactFlow.src, link: "https://peyman-dev.github.io/react-flow/" },
  { title: "Tadabor Client", img: Tadabor.src, link: "https://aye.tadaborzendegi.ir/dashboard" },
  { title: "Cariz pump application", img: CarizImg.src, link: "https://carizpump.com/calculate-page/" },
];
