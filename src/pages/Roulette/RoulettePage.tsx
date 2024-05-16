import Roulette from "./components/Roulette";
import QuestionsView from "./components/QuestionsView";
import ContinueButton from "../../components/ContinueButton";
import CurrentParticipant from "./components/CurrentParticipant";
import { useRouletteSpin } from "../../state/rouletteSpin";
import { useQuestionRandom } from "../../state/questionRandom";
import { useParticipantsLoading } from "../../hooks/useParticipantsLoading";

const RoulettePage = () => {
  const [participants, participants_loading] = useParticipantsLoading();
  const { roulete_result } = useRouletteSpin();
  const { question_result } = useQuestionRandom();
  return (
    <div className="p-10 pl-0 flex w-full flex-col gap-10">
      <CurrentParticipant />
      {/* <div className="flex h-4/6 w-full items-center justify-around gap-10">
        <Roulette />
        <QuestionsView />
      </div> */}

      <div className="mr-20 flex h-1/6 items-center justify-end">
        <ContinueButton
          onClick={() => {}}
          end={false}
          destinyRoute={
            roulete_result == -1 || question_result == -1
              ? ""
              : `question/${question_result}`
          }
          disabled={roulete_result == -1 || question_result == -1}
        />
      </div>
    </div>
  );
};

export default RoulettePage;
