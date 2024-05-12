import React from "react";
import Cronometer from "./Cronometer";

interface QuestionPlaceProps {
  questionText: string;
}

const QuestionPlace: React.FC<QuestionPlaceProps> = ({ questionText }) => {
  return (
    <div className="h-full p-5">
      <div className="h-fit flex justify-end text-white font-semibold text-md items-center gap-2">
        <Cronometer />
      </div>
      <div className="mt-5 px-5 text-white text-2xl font-medium text-ellipsis">
        {questionText}
      </div>
    </div>
  );
};

export default QuestionPlace;
