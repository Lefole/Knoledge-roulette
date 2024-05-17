import Roulette from "./components/Roulette";
import QuestionsView from "./components/QuestionsView";
import ContinueButton from "../../components/ContinueButton";
import CurrentParticipant from "./components/CurrentParticipant";
import { useRouletteSpin } from "../../state/rouletteSpin";
import { useQuestionRandom } from "../../state/questionRandom";
import { useParticipantStore } from "../../state/participanStore";

const RoulettePage = () => {
  const { participantId } = useParticipantStore();
  const { roulete_result } = useRouletteSpin();
  const { question_result, add_question_used, question } = useQuestionRandom();
  return (
    <div
      className="p-10 h-full pl-0 flex w-full flex-col"
      onKeyDown={(key) => console.log(key.code)}
    >
      <CurrentParticipant />
      <div className="flex h-full w-full items-center justify-around gap-10">
        <Roulette />
        <QuestionsView />
      </div>

      <div className="mr-20 flex h-14 items-center justify-end">
        <ContinueButton
          onClick={() => {
            add_question_used(question?.question_id ?? -1);
          }}
          end={false}
          destinyRoute={
            roulete_result == -1 || question_result == -1 || participantId == ""
              ? ""
              : "question"
          }
          disabled={
            roulete_result == -1 || question_result == -1 || participantId == ""
          }
        />
      </div>
    </div>
  );
};

export default RoulettePage;
