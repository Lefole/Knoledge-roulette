import React from "react";
import { twMerge } from "tailwind-merge";

interface ContainerProps {
  classname?: string;
  children?: React.ReactNode;
}

export const Container: React.FC<ContainerProps> = ({
  classname,
  children,
}) => {
  return (
    <div
      className={twMerge(
        "h-fit w-auto rounded-lg border-2 border-neutral-300 bg-transparent",
        classname,
      )}
    >
      {children}
    </div>
  );
};
