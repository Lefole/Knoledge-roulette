import { axiosInstance } from "../config/axios_config";

export const getQuestionsBySubject = async (subjectId: number) => {
  const questions = await axiosInstance.get(`questions/${subjectId}`);

  return questions.data;
};

export const getanswersByQuestion = async (questionId: number) => {
  const answers = await axiosInstance.get(`options/${questionId}`);
  return answers.data;
};

export const getQuestionImage = async (questionId: number) => {
  const image = await axiosInstance.get(`questions/image/${questionId}`, {
    responseType: "blob",
  });
  return image.data;
};
