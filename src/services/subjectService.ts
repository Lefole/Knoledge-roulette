import axios from "axios";
import { SubjectModel } from "../models/subjectModel";

const getAllSubjects = () => {
  axios.get("");
  const subjects: SubjectModel[] = [
    { id: 1, name: "A" },
    { id: 2, name: "B" },
    { id: 3, name: "C" },
    { id: 4, name: "D" },
    { id: 5, name: "E" },
  ];
  return subjects;
};

export { getAllSubjects };
