import { useEffect, useState } from "react";
import { useQuestionsLoading } from "./useQuestionsLoading";
import { useQuestionRandom } from "../state/questionRandom";

export const useRQuestionSelector = (): [number, (arg: string) => void] => {
  const [questions, questions_loading] = useQuestionsLoading();
  const [selectedQuestionIndex, setSelectedQuestionIndex] = useState(-1);
  const { setQuestionResult, questions_used } = useQuestionRandom();
  const [isSelecting, setIsSelecting] = useState(false);

  const [key, setKey] = useState("");
  const [intervalId, setIntervalId] = useState<number>();

  useEffect(() => {
    if (!questions_loading && questions.length > 0 && !isSelecting) {
      const filteredQuestions = questions.filter(
        (quest) => !questions_used.includes(quest.question_id)
      );
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

      setIntervalId(interval);
    }
  }, [questions_loading, questions, isSelecting, questions_used]);

  useEffect(() => {
    if (key) {
      clearInterval(intervalId);
      setIsSelecting(false);

      const filteredQuestions = questions.filter(
        (quest) => !questions_used.includes(quest.question_id)
      );

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

      setKey("");
    }
  }, [key, intervalId, questions, questions_used, setQuestionResult]);

  return [selectedQuestionIndex, setKey];
};
