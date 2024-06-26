import { useEffect, useState } from "react";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";
import { useRouletteSpin } from "../../../state/rouletteSpin";
import { CircularProgress } from "@mui/material";
import { useQuestionsLoading } from "../../../hooks/useQuestionsLoading";
import { useQuestionRandom } from "../../../state/questionRandom";

const QuestionsView = () => {
  const { startSpin } = useRouletteSpin();
  const [questions, questions_loading] = useQuestionsLoading();
  const [selectedQuestionIndex, setSelectedQuestionIndex] = useState(-1);
  const [, setIsSelecting] = useState(false);
  const { setQuestionResult, questions_used } = useQuestionRandom();
  const [key, setKey] = useState("");

  useEffect(() => {
    if (!questions_loading && questions.length > 0 && key != "") {
      const filteredQuestions = questions.filter(
        (quest) => !questions_used.includes(quest.question_id)
      );

      setIsSelecting(true);
      setKey("");
      const interval = setInterval(() => {
        const randomQuestionIndex = Math.floor(
          Math.random() * filteredQuestions.length
        );
        const selectedQuestion = filteredQuestions[randomQuestionIndex];
        const selectedQuestionIndexInAllQuestions = questions.findIndex(
          (quest) => quest.question_id === selectedQuestion.question_id
        );

        setSelectedQuestionIndex(selectedQuestionIndexInAllQuestions);
      }, 100);

      setTimeout(() => {
        clearInterval(interval);
        setIsSelecting(false);
        const randomQuestionIndex = Math.floor(
          Math.random() * filteredQuestions.length
        );
        const selectedQuestion = filteredQuestions[randomQuestionIndex];

        const selectedQuestionIndexInAllQuestions = questions.findIndex(
          (quest) => quest.question_id === selectedQuestion.question_id
        );

        setSelectedQuestionIndex(selectedQuestionIndexInAllQuestions);

        setQuestionResult(
          selectedQuestionIndexInAllQuestions,
          questions[selectedQuestionIndexInAllQuestions]
        );
      }, 2000);
    }
  }, [questions_loading, questions, key, questions_used]);

  return (
    <div className="flex flex-col h-full items-center w-1/2">
      <h3 className="mt-10 text-3xl font-semibold text-neutral-700 h-10 w-full text-center mb-5">
        Preguntas
      </h3>
      {startSpin || questions_loading ? (
        <div className="flex h-full w-full justify-center">
          <CircularProgress size={80} color="success" className="mt-16" />
        </div>
      ) : (
        <div
          className="grid h-fit max-h-96 w-[350px] grid-cols-5 gap-4 focus:border-none "
          tabIndex={0}
          onKeyDownCapture={(key) => {
            setKey(key.code);
          }}
        >
          {questions.map((value, index) => (
            <div
              key={index}
              className={twMerge(
                "w-14 rounded-sm px-4 py-2 text-center text-xl text-white",
                clsx({
                  "bg-red-500": selectedQuestionIndex === index,

                  "bg-slate-500":
                    selectedQuestionIndex !== index &&
                    questions_used.findIndex(
                      (quest_id) => quest_id == value.question_id
                    ) == -1,

                  "bg-slate-500 opacity-30":
                    selectedQuestionIndex !== index &&
                    questions_used.findIndex(
                      (quest_id) => quest_id == value.question_id
                    ) != -1,
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
