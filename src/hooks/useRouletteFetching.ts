import { useEffect, useState } from "react";
import { SubjectModel } from "../models/subjectModel";
import { getAllSubjects } from "../services/subjectService";

export const useRouletteLoading = (): [{ option: string }[], boolean] => {
  const [subjectsToRoulette, setSubjectsToRoulette] = useState<
    { option: string }[]
  >([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    getAllSubjects().then((subjects) => {
      const options = subjects.map((subject: SubjectModel) => ({
        option: subject.name,
      }));
      setSubjectsToRoulette(options);
      setLoading(false);
    });
  }, []);
  return [subjectsToRoulette, loading];
};
