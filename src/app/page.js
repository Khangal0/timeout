"use client";
import { useState } from "react";
import { useEffect } from "react";

const page = () => {
  const [time, setTime] = useState(0);

  const sec = time % 60;
  const minute = Math.floor(time / 60);
  const formatTime = (time) => {
    if (time <= 9) return `0${time}`;
    return time;
  };

  const add = () => {
    setTime((prev) => prev + 1);
  };

  useEffect(() => {
    // if (time === 0) return;
    const interval = setInterval(add, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div>
        {formatTime(minute)}:{formatTime(sec)}
      </div>
    </div>
  );
};

export default page;
