import { useEffect, useState } from "react";
import { SubjectModel } from "../models/subjectModel";
import { getAllSubjects } from "../services/subjectService";

export const useRouletteLoading = (): [
  { option: string }[],
  boolean,
  SubjectModel[]
] => {
  const [subjectsToRoulette, setSubjectsToRoulette] = useState<
    { option: string }[]
  >([]);
  const [subjectsFull, setSubjectsFull] = useState<SubjectModel[]>([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    getAllSubjects().then((subjects) => {
      const options = subjects.map((subject: SubjectModel) => ({
        option: subject.name,
      }));
      setSubjectsFull(subjects);
      setSubjectsToRoulette(options);
      setLoading(false);
    });
  }, []);
  return [subjectsToRoulette, loading, subjectsFull];
};
