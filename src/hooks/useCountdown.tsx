import { useEffect, useState } from "react";
import { useOptionPressed } from "../state/optionPressed";
import alarm from "../assets/clock-alarm-8761.mp3";

export const useCountdown = (initialTime: number) => {
  const [time, setTime] = useState(initialTime);
  const { option } = useOptionPressed();

  useEffect(() => {
    const interval = setInterval(() => {
      if (time > 0) setTime((prev) => prev - 1000);
    }, 1000);

    if (option != -1) {
      clearInterval(interval);
    }

    if (time == 0 && option == -1) {
      new Audio(alarm).play();
    }

    return () => clearInterval(interval);
  }, [time]);

  return [time, setTime] as [
    number,
    React.Dispatch<React.SetStateAction<number>>
  ];
};
