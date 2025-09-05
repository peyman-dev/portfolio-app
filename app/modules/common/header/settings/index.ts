export const displayTime = (
    setCurrentTime: React.Dispatch<React.SetStateAction<string>>
  ) => {
    const updateTime = () => {
      const now = new Date();
      const timeString = now.toLocaleString("fa-IR", {
        timeZone: "Asia/Tehran",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      });
      setCurrentTime(timeString);
    };
  
    updateTime(); // اجرای اولیه
    const intervalId = setInterval(updateTime, 1000); 
  
    return () => clearInterval(intervalId);
  };