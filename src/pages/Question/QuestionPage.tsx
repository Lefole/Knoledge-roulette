import QuestionPlace from "./components/QuestionPlace";
import OptionButton from "./components/OptionButton";
import ContinueButton from "../../components/ContinueButton";
import { useOptionPressed } from "../../state/optionPressed";
import { useLifelinePressed } from "../../state/lifelinePressed";
import { useQuestionRandom } from "../../state/questionRandom";
import { useAnswersLoading } from "../../hooks/useAnswerLoading";
import { useRouletteSpin } from "../../state/rouletteSpin";
import { getGameRecordByGameAndParticipant } from "../../services/gameRecordService";
import { postAnswerResult } from "../../services/answersService";
import { useParticipantStore } from "../../state/participanStore";
import { useGameStore } from "../../state/gameStore";
import clsx from "clsx";

const QuestionPage = () => {
  const { fifthy_fifthy, setFiftyPressed } = useLifelinePressed();
  const { option, setOption, setCorrect } = useOptionPressed();
  const [answers, answers_loading, randomFalseAnswer] = useAnswersLoading();
  const { question } = useQuestionRandom();
  const { setRouletteResult } = useRouletteSpin();
  const { setQuestionResult } = useQuestionRandom();

  const { participantId, setCurrentParticipant } = useParticipantStore();
  const { gameId } = useGameStore();

  const handlePostAnswers = async (option_id: number) => {
    await getGameRecordByGameAndParticipant(gameId, participantId)
      .then((game_record) => game_record)
      .then((game_record_json) => {
        postAnswerResult(option_id, game_record_json["record_id"]);
      });
  };

  return (
    <div className="h-full w-full flex-col gap-5 p-10 pl-0">
      <div className="flex h-full w-full flex-col gap-5">
        <div
          className={clsx("w-full rounded-xl bg-fuchsia-700", {
            "h-2/5": !question?.have_image,
            "h-4/5": question?.have_image,
          })}
        >
          <QuestionPlace
            questionId={question!.question_id}
            questionText={question != null ? question.question_text : ""}
            hasImage={question!.have_image}
          />
        </div>
        <div
          className={clsx("w-full gap-4 h-[300px]", {
            "flex flex-shrink-0 flex-col": !question?.have_image,
            "grid grid-cols-2": question?.have_image,
          })}
        >
          {!answers_loading &&
            answers.map((value, index) => (
              <OptionButton
                key={index}
                value={value.option_id}
                optionSelected={option}
                text={value.option_text}
                isCorrect={value.is_correct}
                disabled={option != -1}
                onClick={async () => {
                  setOption(value.option_id);
                  setCorrect(value.is_correct);
                  await handlePostAnswers(value.option_id);
                }}
                className={clsx("", {
                  hidden:
                    fifthy_fifthy &&
                    answers.filter(
                      (answer) => answer.option_id == randomFalseAnswer
                    )[0].option_id != value.option_id &&
                    !value.is_correct,
                })}
              />
            ))}
        </div>
        <div className="h-fit mr-20 flex items-center justify-end">
          <ContinueButton
            key={"bttn_continue_question_page"}
            destinyRoute=".."
            end={false}
            disabled={option == -1}
            onClick={() => {
              setCurrentParticipant("");
              setOption(-1);
              setRouletteResult(-1);
              setQuestionResult(-1, null);
              setFiftyPressed(false);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default QuestionPage;
