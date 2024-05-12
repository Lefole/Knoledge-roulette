import { useEffect, useState } from "react";
import { QuestionModel } from "../models/questionModel";
import { getQuestionsBySubject } from "../services/questionService";
import { useRouletteSpin } from "../state/rouletteSpin";

export const useQuestionsLoading = (): [QuestionModel[], boolean] => {
  const [questions, setQuestions] = useState<QuestionModel[]>([]);
  const [loading, setLoading] = useState(false);
  const { roulete_result, startSpin } = useRouletteSpin();

  useEffect(() => {
    setQuestions([]);
  }, [startSpin]);

  useEffect(() => {
    setLoading(true);
    if (roulete_result != -1) {
      getQuestionsBySubject(roulete_result).then(
        (questions: QuestionModel[]) => {
          setQuestions(questions);
        }
      );
    }
    setLoading(false);
  }, [roulete_result]);

  return [questions, loading];
};
