import React, { createContext, useContext, useState } from "react";

const AnswerContext = createContext(false);

export const useAnswer = () => useContext(AnswerContext);

interface AnswerProviderProps {
  children: React.ReactNode;
}

export const AnswerProvider: React.FC<AnswerProviderProps> = ({ children }) => {
  const [answer, setAnswer] = useState(false);

  return (
    <AnswerContext.Provider value={answer}>{children}</AnswerContext.Provider>
  );
};
