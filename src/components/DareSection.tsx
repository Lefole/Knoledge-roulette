import { useRoundStore } from "../state/roundStore";
import DareButton from "./DareButton";
import { RiEmotionSadFill, RiEmotionHappyFill } from "react-icons/ri";
import { useDarePressed } from "../state/darePressed";
import { useParticipantsLoading } from "../hooks/useParticipantsLoading";
import { getGameRecordByGameAndParticipant } from "../services/gameRecordService";
import { updateDareResult } from "../services/dareService";

const DareSection = () => {
  const {
    currentRound,
    maxParticpants,
    currentParticipantIndex,
    incrementRound,
    changeParticipant,
    resetParticipantsIndex,
    maxRounds,
    gameId,
  } = useRoundStore();
  const [participants] = useParticipantsLoading();
  const { setDareComplete } = useDarePressed();

  const handleDareButtonPressed = async (dareComplete: boolean) => {
    //TODO: AÑADIR DARE COMPLETE FUNCTION
    if (currentParticipantIndex <= maxParticpants - 1) {
      if (dareComplete) {
        setDareComplete(true);
        await getGameRecordByGameAndParticipant(
          gameId,
          participants[currentParticipantIndex].participant_id
        ).then(async (game_record) => {
          await updateDareResult(game_record["record_id"]);
        });
        setDareComplete(false);
      }
      changeParticipant();
      if (currentParticipantIndex >= maxParticpants - 1) {
        console.log(currentParticipantIndex);
        resetParticipantsIndex();
        incrementRound();
      }
    } else {
      resetParticipantsIndex();
      incrementRound();
    }
  };
  return (
    <>
      <h3 className="mb-3 w-full text-xl font-semibold italic text-neutral-700">
        Reto
      </h3>
      <div className="mb-5 flex h-30 w-full items-center justify-evenly gap-2">
        <DareButton
          end={
            currentRound == maxRounds &&
            currentParticipantIndex == maxParticpants - 1
          }
          children={<RiEmotionSadFill color="#ffffff" size={30} />}
          onClick={async () => {
            await handleDareButtonPressed(false);
          }}
        />
        <DareButton
          end={
            currentRound == maxRounds &&
            currentParticipantIndex == maxParticpants - 1
          }
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
