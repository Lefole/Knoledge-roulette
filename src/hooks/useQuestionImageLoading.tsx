import { useEffect, useState } from "react";
import { getQuestionImage } from "../services/questionService";

const useQuestionImageLoading = (questionId: number): [string, boolean] => {
  const [imageSrc, setImageSrc] = useState("");
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    getQuestionImage(questionId).then((image) => {
      const imageUrl = URL.createObjectURL(image as Blob);
      setImageSrc(imageUrl);
    });
    setLoading(false);
  }, [questionId]);
  return [imageSrc, loading];
};

export default useQuestionImageLoading;
