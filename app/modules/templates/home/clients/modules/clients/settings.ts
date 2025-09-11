import {
  ChevronsLeftRightEllipsis,
  PanelTop,
  SmilePlus,
  SquareDashedBottomCode,
} from "lucide-react";

export const items = {
  lg: {
    isEven: false,
    items: [
      [
        {
          icon: PanelTop,
          title: "",
          description: "",
        },
        {
          title: "10+",
          description: "Project Finished",
        },
        {
          icon: ChevronsLeftRightEllipsis,
          title: "",
          description: "",
        },
        {
          title: "20+",
          description: "Website Developed",
        },
      ],
      [
        {
          title: "4+",
          description: "Years experience",
        },
        {
          icon: SquareDashedBottomCode,
          title: "",
          description: "",
        },
        {
          title: "15+",
          description: "Happy Clients",
        },
        {
          icon: SmilePlus,
          title: "",
          description: "",
        },
      ],
    ],
  },
  mobile: {
    isEven: true,
    items: [
      [
        {
          title: "10+",
          description: "Project Finished",
        },
        {
          icon: PanelTop,
          title: "",
          description: "",
        },
        {
          title: "20+",
          description: "Website Developed",
        },
        {
          icon: ChevronsLeftRightEllipsis,
          title: "",
          description: "",
        },
      ],
      [
        {
          icon: SquareDashedBottomCode,
          title: "",
          description: "",
        },
        {
          title: "4+",
          description: "Years experience",
        },
        {
          icon: SmilePlus,
          title: "",
          description: "",
        },
        {
          title: "15+",
          description: "Happy Clients",
        },
      ],
    ],
  },
};
