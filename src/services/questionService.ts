import { axiosInstance } from "../config/axios_config";

export const getQuestionsBySubject = async (subjectId: number) => {
  const questions = await axiosInstance.get(`questions/${subjectId}`);
  console.log(subjectId);
  console.log(questions.data);
  return questions.data;
};

export const getanswersByQuestion = async (questionId: number) => {
  const answers = await axiosInstance.get(`options/${questionId}`);
  return answers.data;
};
