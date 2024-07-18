// src/useThemeTimer.js
import { useState, useEffect } from "react";

const useThemeTimer = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const checkTime = () => {
      const hour = new Date().getHours();
      if (hour >= 19 || hour < 7) {
        setTheme("dark");
      } else {
        setTheme("light");
      }
    };

    // Check time initially
    checkTime();

    // Set interval to check time every hour
    const intervalId = setInterval(checkTime, 3600000); // 3600000 ms = 1 hour

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return theme;
};

export default useThemeTimer;
