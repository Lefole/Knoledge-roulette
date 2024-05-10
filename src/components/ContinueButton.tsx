import React from "react";
import { Link } from "react-router-dom";

interface ContinueButtonProps {
  destinyRoute: string;
}

const ContinueButton: React.FC<ContinueButtonProps> = ({ destinyRoute }) => {
  return (
    <Link
      to={destinyRoute}
      className="rounded-md bg-green-400 px-6 py-2 text-xl font-semibold text-white shadow-md
          hover:bg-green-500 hover:shadow-lg active:bg-green-700 active:shadow-none"
    >
      Continuar
    </Link>
  );
};

export default ContinueButton;
