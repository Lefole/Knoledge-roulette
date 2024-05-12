import { create } from "zustand";
import { QuestionModel } from "../models/questionModel";

interface questionRandomStore {
  question_result: number;
  question: QuestionModel | null;
  setQuestionResult: (
    questionResult: number,
    questionObject: QuestionModel | null
  ) => void;
}

export const useQuestionRandom = create<questionRandomStore>((set) => ({
  question_result: -1,
  question: null,
  setQuestionResult: (
    questionRestult: number,
    questionObject: QuestionModel | null
  ) =>
    set(() => ({
      question_result: questionRestult,
      question: questionObject,
    })),
}));
