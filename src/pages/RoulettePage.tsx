import Roulette from "../components/Roulette";
import QuestionsView from "../components/QuestionsView";
import ContinueButton from "../components/ContinueButton";
import { useRoundStore } from "../state/roundStore";

const RoulettePage = () => {
  const { currentParticipantIndex } = useRoundStore();
  return (
    <div className="flex h-full w-full flex-col gap-10">
      <div className="h-1/6">
        <div
          className="mx-10  flex h-full items-center justify-start gap-2 
        rounded-md bg-fuchsia-700 text-white"
        >
          <h3 className="ml-10 text-2xl font-semibold">Turno de:</h3>
          <p className="text-xl">
            Pepe Nacho {currentParticipantIndex.toString()}
          </p>
        </div>
      </div>
      <div className="flex h-4/6 w-full items-center justify-around gap-10">
        <Roulette />
        <QuestionsView />
      </div>
      <div className="mr-20 flex h-1/6 items-center justify-end">
        <ContinueButton destinyRoute="question/1" isDisabled={true} />
      </div>
    </div>
  );
};

export default RoulettePage;
