import OptionButton from "../components/OptionButton";
import { clsx } from "clsx";
import ContinueButton from "../components/ContinueButton";
import { getanswersByQuestion } from "../services/questionService";
import { useOptionPressed } from "../state/optionPressed";
import QuestionPlace from "../components/QuestionPlace";
import { useLifelinePressed } from "../state/lifelinePressed";
import { useQuestionRandom } from "../state/questionRandom";

const QuestionPage = () => {
  const isNormaldirectory = false;
  const { option, setOption } = useOptionPressed();
  const { fifthy_fifthy } = useLifelinePressed();
  const { question } = useQuestionRandom();

  const false_answers = getanswersByQuestion(0).filter(
    (value) => !value.isCorrect
  );
  const randomNumber = Math.floor(Math.random() * false_answers.length);

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
          {getanswersByQuestion(0).map(
            (value, index) => {
              return (
                <OptionButton
                  key={index}
                  value={value.id}
                  optionSelected={option}
                  text={value.text}
                  isCorrect={value.isCorrect}
                  disabled={option != -1}
                  onClick={() => setOption(value.id)}
                  className={
                    clsx("", {
                      hidden:
                        fifthy_fifthy &&
                        false_answers[randomNumber].id != value.id &&
                        !value.isCorrect,
                    })
                    // ((fifthy_fifthy && false_answers[randomNumber].id == value.id) ||(fif))
                    //   ? ""
                    //   : "hidden"
                  }
                />
              );
            }
            // <OptionButton
            //   value={value.id}
            //   optionSelected={option}
            //   text={value.text}
            //   isCorrect={value.isCorrect}
            //   disabled={option != -1}
            //   onClick={() => setOption(value.id)}
            // />
          )}
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
