import React, { ReactNode } from "react";

interface LifelineButtonProps {
  children: ReactNode;
  onClick?: () => void;
}

const LifelineButton: React.FC<LifelineButtonProps> = ({
  children,
  onClick,
}) => {
  return (
    <button
      className="flex items-center justify-center h-10 w-1/3 rounded-full bg-blue-800  py-1 text-xl font-bold text-white
shadow-md hover:scale-110 hover:bg-blue-800 hover:shadow-lg 
active:bg-blue-950"
      type="button"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default LifelineButton;
