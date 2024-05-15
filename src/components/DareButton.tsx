import React, { ReactNode } from "react";
import { Link } from "react-router-dom";

interface DareButtonProps {
  end: boolean;
  children: ReactNode;
  onClick: () => void;
}

const DareButton: React.FC<DareButtonProps> = ({ end, children, onClick }) => {
  return (
    <Link
      className="bg-blue-800 h-10 rounded-md w-20 flex justify-center items-center shadow-md
      hover:shadow-lg hover:bg-blue-900 active:bg-blue-950"
      to={end ? "resume" : ""}
      onClick={() => onClick()}
    >
      {children}
    </Link>
  );
};

export default DareButton;
