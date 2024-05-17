import { create } from "zustand";
import { QuestionModel } from "../models/questionModel";

interface questionRandomStore {
  question_result: number;
  question: QuestionModel | null;
  setQuestionResult: (
    questionResult: number,
    questionObject: QuestionModel | null
  ) => void;
  questions_used: number[];
  add_question_used: (question_id: number) => void;
}

export const useQuestionRandom = create<questionRandomStore>((set, get) => ({
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
  questions_used: [],
  add_question_used: (question_id: number) =>
    set({
      questions_used: [...get().questions_used, question_id],
    }),
}));
