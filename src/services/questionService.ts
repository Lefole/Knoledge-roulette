import { axiosInstance } from "../config/axios_config";
import { AnswerModel } from "../models/answerModel";

export const getQuestionsBySubject = async (subjectId: number) => {
  const questions = await axiosInstance.get(`questions/${subjectId}`);
  return questions.data;
};

export const getanswersByQuestion = (idQuestion: number) => {
  const answers: AnswerModel[] = [
    { id: 1, text: `${idQuestion} a`, isCorrect: true },
    { id: 2, text: `${idQuestion} b`, isCorrect: false },
    { id: 3, text: `${idQuestion} c`, isCorrect: false },
    { id: 4, text: `${idQuestion} d`, isCorrect: false },
  ];
  return answers;
};
