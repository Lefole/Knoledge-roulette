import { useEffect, useState } from "react";
import { AnswerModel } from "../models/answerModel";
import { getanswersByQuestion } from "../services/questionService";
import { useQuestionRandom } from "../state/questionRandom";

export const useAnswersLoading = (): [AnswerModel[], boolean, number] => {
  const [anwsers, setAnswers] = useState<AnswerModel[]>([]);
  const [loading, setLoading] = useState(false);
  const [randomFalseAnswer, setRandomFalseAnswer] = useState(-1);
  const { question } = useQuestionRandom();

  useEffect(() => {
    setLoading(true);
    if (question == null) return;
    getanswersByQuestion(question.question_id).then(
      (anwsers: AnswerModel[]) => {
        setAnswers(anwsers);
        const false_answers = anwsers.filter((value) => !value.is_correct);
        const randomNumber = Math.floor(Math.random() * false_answers.length);
        setRandomFalseAnswer(false_answers[randomNumber].option_id);
        setLoading(false);
      }
    );
  }, [question]);

  return [anwsers, loading, randomFalseAnswer];
};
