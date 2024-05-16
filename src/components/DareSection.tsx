import DareButton from "./DareButton";
import { RiEmotionSadFill, RiEmotionHappyFill } from "react-icons/ri";
import { useDarePressed } from "../state/darePressed";
import { getGameRecordByGameAndParticipant } from "../services/gameRecordService";
import { updateDareResult } from "../services/dareService";
import { useGameStore } from "../state/gameStore";
import { useParticipantStore } from "../state/participanStore";

const DareSection = () => {
  const { participantId } = useParticipantStore();
  const { gameId } = useGameStore();
  const { setDareComplete } = useDarePressed();

  const handleDareButtonPressed = async (dareComplete: boolean) => {
    if (!dareComplete) return;
    if (participantId == "" || gameId == "") return;

    await getGameRecordByGameAndParticipant(gameId, participantId).then(
      async (game_record) => {
        await updateDareResult(game_record["record_id"]);
        setDareComplete(true);
      }
    );
    setDareComplete(false);
  };
  return (
    <>
      <h3 className="mb-3 w-full text-xl font-semibold italic text-neutral-700">
        Reto
      </h3>
      <div className="mb-5 flex h-30 w-full items-center justify-evenly gap-2">
        <DareButton
          children={<RiEmotionSadFill color="#ffffff" size={30} />}
          onClick={async () => {
            await handleDareButtonPressed(false);
          }}
        />
        <DareButton
          children={<RiEmotionHappyFill color="#ffffff" size={30} />}
          onClick={async () => {
            await handleDareButtonPressed(true);
          }}
        />
      </div>
    </>
  );
};

export default DareSection;
