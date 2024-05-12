import React, { useEffect, useState } from "react";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";
import { useRouletteSpin } from "../state/rouletteSpin";
import { CircularProgress } from "@mui/material";
import { useQuestionsLoading } from "../hooks/useQuestionsLoading";
import { useQuestionRandom } from "../state/questionRandom";

const QuestionsView = () => {
  const { startSpin } = useRouletteSpin();
  const [questions, loading] = useQuestionsLoading();
  const [selectedQuestionIndex, setSelectedQuestionIndex] = useState(-1);
  const [, setIsSelecting] = useState(false);
  const { setQuestionResult } = useQuestionRandom();

  useEffect(() => {
    if (!loading && questions.length > 0) {
      setIsSelecting(true);
      const interval = setInterval(() => {
        setSelectedQuestionIndex(Math.floor(Math.random() * questions.length));
      }, 100);

      setTimeout(() => {
        clearInterval(interval);
        setIsSelecting(false);
        const randomQuestion = Math.floor(Math.random() * questions.length);
        setSelectedQuestionIndex(randomQuestion);
        setQuestionResult(randomQuestion, questions[randomQuestion]);
        console.log(selectedQuestionIndex);
      }, 2000);
    }
  }, [loading, questions]);

  return (
    <div className="flex flex-col h-full items-center w-1/3">
      <h3 className="mb-8 text-3xl font-semibold text-neutral-700 h-10 w-full text-center">
        Preguntas
      </h3>
      {startSpin || loading ? (
        <div className="flex h-full w-full justify-center">
          <CircularProgress size={80} color="success" className="mt-16" />
        </div>
      ) : (
        <div className="grid h-fit max-h-96 w-full grid-cols-5 gap-4">
          {questions.map((_, index) => (
            <div
              key={index}
              className={twMerge(
                "w-14 rounded-sm px-4 py-2 text-center text-xl text-white",
                clsx({
                  "bg-red-500": selectedQuestionIndex === index,

                  "bg-slate-500": selectedQuestionIndex !== index,
                })
              )}
            >
              {index + 1}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default QuestionsView;
