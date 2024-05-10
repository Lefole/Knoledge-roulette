import React from "react";

interface OptionButtonProps {
  text: string;
  onClick: () => void;
}

const OptionButton: React.FC<OptionButtonProps> = ({ text, onClick }) => {
  return (
    <button
      className="min-h-12 w-full text-ellipsis rounded-full border-2 px-10 text-start shadow-md
      hover:bg-slate-100 hover:shadow-lg active:bg-slate-300 active:shadow-none"
      type="button"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default OptionButton;
