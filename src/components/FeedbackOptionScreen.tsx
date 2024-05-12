import clsx from "clsx";
import { useOptionPressed } from "../state/optionPressed";
import { useEffect, useState } from "react";

const FeedbackOptionScreen = () => {
  const { option, correct } = useOptionPressed();
  const [showAmungus, setShowAmungus] = useState(false);
  useEffect(() => {
    if (option != -1) setShowAmungus(true);
    setTimeout(() => {
      setShowAmungus(false);
    }, 1800);
  }, [option]);
  return (
    <div
      className={clsx("absolute z-10 h-full w-full", {
        flex: showAmungus,
        hidden: !showAmungus,
      })}
    >
      <div className="absolute z-10 h-full w-full flex items-center justify-center bg-slate-600 opacity-80"></div>
      <div className="absolute z-20 h-full w-full flex items-center justify-center">
        <img
          className="opacity-100 rounded-full h-80 w-80 object-fill"
          src={
            correct
              ? "https://i.makeagif.com/media/2-02-2023/RR35Ne.gif"
              : "https://i.pinimg.com/originals/a0/d1/3e/a0d13ec25f9774f155b6cd5ebf12a6c8.gif"
          }
          alt="amungus"
        />
      </div>
    </div>
  );
};

export default FeedbackOptionScreen;
