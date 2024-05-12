import clsx from "clsx";
import React from "react";
import { Link } from "react-router-dom";

interface ContinueButtonProps {
  destinyRoute: string;
  disabled: boolean;
  end: boolean;
  onClick: () => void;
}

const ContinueButton: React.FC<ContinueButtonProps> = ({
  destinyRoute,
  disabled,
  onClick,
  end,
}) => {
  return end ? (
    <Link
      className="rounded-md px-6 py-2 text-xl font-semibold text-white shadow-md hover:shadow-lg 
      bg-red-600 hover:bg-red-700  active:bg-red-500 active:shadow-none"
      to={"/resume"}
    >
      Terminar
    </Link>
  ) : (
    <Link
      onClick={onClick}
      to={destinyRoute}
      className={clsx(
        "rounded-md px-6 py-2 text-xl font-semibold text-white shadow-md hover:shadow-lg",
        {
          "bg-green-400 hover:bg-green-500  active:bg-green-700 active:shadow-none":
            !disabled,
          "bg-green-200": disabled,
        }
      )}
    >
      Continuar
    </Link>
  );
};

export default ContinueButton;
