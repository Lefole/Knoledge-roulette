import OptionButton from "../components/OptionButton";
import { clsx } from "clsx";
import ContinueButton from "../components/ContinueButton";
import { useOptionPressed } from "../state/optionPressed";
import QuestionPlace from "../components/QuestionPlace";
import { useLifelinePressed } from "../state/lifelinePressed";
import { useQuestionRandom } from "../state/questionRandom";
import { useAnswersLoading } from "../hooks/useAnswerLoading";

const QuestionPage = () => {
  const { option, setOption } = useOptionPressed();
  const { fifthy_fifthy } = useLifelinePressed();
  const { question } = useQuestionRandom();
  const [answers, loading, randomFalseAnswer] = useAnswersLoading();
  return (
    <div className="flex h-full w-full flex-col gap-5 px-10">
      <div className="flex h-full w-full flex-col gap-5">
        {/* Pregunta */}
        <div
          className={clsx("w-full rounded-lg bg-fuchsia-700", {
            "h-2/5": !question?.have_image,
            "h-4/5": question?.have_image,
          })}
        >
          <QuestionPlace
            questionText={question != null ? question.question_text : ""}
          />
        </div>

        {/* Respuestas */}
        <div
          className={clsx("w-full gap-4", {
            "flex flex-shrink-0 flex-col": !question?.have_image,
            "grid grid-cols-2": question?.have_image,
          })}
        >
          {!loading &&
            answers.map((value, index) => {
              return (
                <OptionButton
                  key={index}
                  value={value.id_option}
                  optionSelected={option}
                  text={value.option_text}
                  isCorrect={value.is_correct}
                  disabled={option != -1}
                  onClick={() => setOption(value.id_option)}
                  className={clsx("", {
                    hidden:
                      fifthy_fifthy &&
                      answers[randomFalseAnswer].id_option != value.id_option &&
                      !value.is_correct,
                  })}
                />
              );
            })}
        </div>
      </div>
      <div className="mr-20 flex items-center justify-end">
        <ContinueButton
          key={"bttn_continue_question_page"}
          destinyRoute="../"
          disabled={option == -1}
          onClick={() => setOption(-1)}
        />
      </div>
    </div>
  );
};

export default QuestionPage;
