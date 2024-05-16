import React from "react";
import Cronometer from "./Cronometer";
import useQuestionImageLoading from "../../../hooks/useQuestionImageLoading";

interface QuestionPlaceProps {
  questionId: number;
  questionText: string;
  hasImage: boolean;
}

const QuestionPlace: React.FC<QuestionPlaceProps> = ({
  questionId,
  questionText,
  hasImage,
}) => {
  const [questionUrl, loading] = useQuestionImageLoading(questionId);
  return (
    <div className="relative flex flex-col p-5">
      <div className="h-fit flex justify-end text-white font-semibold text-md items-center gap-2">
        <Cronometer />
      </div>
      {!hasImage && (
        <div className="mt-5 px-5 text-white text-2xl font-medium text-ellipsis">
          {questionText}
        </div>
      )}
      {hasImage && (
        <div className="mt-5 h-[350px]">
          {!loading && (
            <img
              src={questionUrl}
              alt="question_image"
              className="h-full w-full object-contain rounded-md"
            />
          )}
        </div>
      )}
    </div>
  );
};

export default QuestionPlace;
