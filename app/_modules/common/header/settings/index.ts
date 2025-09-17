export const displayTime = (
  setCurrentTime: React.Dispatch<React.SetStateAction<string>>
) => {
  const updateTime = () => {
    const now = new Date();
    const timeString = now.toLocaleString("en-US", {
      timeZone: "Asia/Tehran",
      hourCycle: "h24",
      hour: "2-digit",
      minute: '2-digit',
      second: '2-digit'
    });
    setCurrentTime(timeString);
  };

  updateTime(); // اجرای اولیه
  const intervalId = setInterval(updateTime, 1000);

  return () => clearInterval(intervalId);
};


export const navigation = [
  {
    id: Math.random() * Math.random() * Math.random(),
    title: "Home",
    href: "/"
  },
  {
    id: Math.random() * Math.random() * Math.random(),
    title: "Playground",
    href: "/playground"
  },
  {
    id: Math.random() * Math.random() * Math.random(),
    title: "Services",
    href: "/services"
  },
  {
    id: Math.random() * Math.random() * Math.random(),
    title: "Blog",
    href: "/blog"
  },
  {
    id: Math.random() * Math.random() * Math.random(),
    title: "About me",
    href: "/about-me"
  },
  {
    id: Math.random() * Math.random() * Math.random(),
    title: "Contact me",
    href: "/contact-me"
  },
]