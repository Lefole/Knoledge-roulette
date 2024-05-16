import React from "react";
import clsx from "clsx";
import correctSound from "../../../assets/correct sound.wav";
import incorrectSound from "../../../assets/incorrect sound.wav";
import { twMerge } from "tailwind-merge";

interface OptionButtonProps {
  index: number;
  value: number;
  optionSelected: number;
  text: string;
  isCorrect?: boolean;
  disabled: boolean;
  onClick: () => void;
  className?: string;
}

const OptionButton: React.FC<OptionButtonProps> = ({
  index,
  value,
  optionSelected,
  text,
  isCorrect,
  disabled,
  onClick,
  className,
}) => {
  return (
    <button
      disabled={disabled}
      className={clsx(
        twMerge(
          "inline-flex items-center h-12 w-full text-ellipsis rounded-full border-2 pl-6 text-start",
          className
        ),
        {
          "shadow-md hover:bg-slate-100 hover:shadow-lg active:bg-slate-300 active:shadow-none":
            !disabled,
          "bg-slate-300": disabled && optionSelected != value,
          "border-green-700 ": isCorrect && disabled,
          "border-red-700 ": !isCorrect && disabled,
        }
      )}
      type="button"
      onClick={() => {
        onClick();
        const audio = isCorrect
          ? new Audio(correctSound)
          : new Audio(incorrectSound);
        audio.play();
      }}
    >
      <span
        className={clsx(
          "border-2 rounded-full h-9 w-9 flex items-center justify-center mr-2 text-3xl",
          {
            "bg-slate-300": disabled && optionSelected != value,
            "border-green-700 text-green-700": isCorrect && disabled,
            "border-red-700 text-red-700": !isCorrect && disabled,
          }
        )}
      >
        {index}
      </span>
      {text}
    </button>
  );
};

export default OptionButton;
