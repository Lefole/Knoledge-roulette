import clsx from "clsx";
import React, { ReactNode } from "react";

interface LifelineButtonProps {
  children: ReactNode;
  disabled: boolean;
  onClick: () => void;
}

const LifelineButton: React.FC<LifelineButtonProps> = ({
  children,
  disabled,
  onClick,
}) => {
  return (
    <button
      disabled={disabled}
      className={clsx(
        "flex items-center justify-center h-10 w-1/3 rounded-full py-1 text-xl font-bold text-white shadow-md bg-blue-800",
        {
          "hover:scale-110 hover:bg-blue-800 hover:shadow-lg active:bg-blue-950":
            !disabled,
          "bg-opacity-40": disabled,
        }
      )}
      type="button"
      onClick={() => onClick()}
    >
      {children}
    </button>
  );
};

export default LifelineButton;
