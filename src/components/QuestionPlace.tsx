import React from "react";
import Cronometer from "./Cronometer";

const QuestionPlace = () => {
  return (
    <div className="h-full p-5">
      <div className="h-fit flex justify-end text-white font-semibold text-md items-center gap-2">
        <Cronometer />
      </div>
      <div className="h-full">b </div>
    </div>
  );
};

export default QuestionPlace;
