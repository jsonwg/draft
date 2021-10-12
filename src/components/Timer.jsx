import { useState, useEffect } from "react";
import Button from "./Button.jsx";

const Timer = () => {
  const startTime = 150;

  const [timeLeft, setTime] = useState(startTime);
  const [paused, setPaused] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!paused && timeLeft !== 0) {
        setTime(timeLeft - 1);
      }
    }, 1000);
    return () => clearTimeout(timer);
  });

  const timeString = () => {
    if (timeLeft === 0) return "Done";
    const minutes = Math.floor(timeLeft / 60).toString();
    const seconds = Math.floor((timeLeft % 60) / 1).toString();
    return `${minutes}:${seconds.length > 1 ? seconds : "0" + seconds}`;
  };

  return (
    <Button
      action={() => setPaused(paused ? false : true)}
      text={timeString()}
      size="7"
      className="timer"
    />
  );
};

export default Timer;
