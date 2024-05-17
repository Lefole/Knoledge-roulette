import { FaPhone } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import LifelineButton from "./LifelineButton";
import { useLifelinePressed } from "../state/lifelinePressed";
import useParticipantsLifelines from "../hooks/useParticipantsLifelines";
import { getGameRecordByGameAndParticipant } from "../services/gameRecordService";
import { updateLifelineStatus } from "../services/lifelineService";
import { useState } from "react";
import { useGameStore } from "../state/gameStore";
import { useParticipantStore } from "../state/participanStore";

const ComodinSection = () => {
  const [disabledButton1, setDisabledButton1] = useState(false);
  const [disabledButton2, setDisabledButton2] = useState(false);
  const [disabledButton3, setDisabledButton3] = useState(false);

  const { fifthy_fifthy, setFiftyPressed } = useLifelinePressed();
  const [lifelines, loading] = useParticipantsLifelines();
  const { participantId } = useParticipantStore();
  const { gameId } = useGameStore();

  const handleLifelinePressed = async (lifelineIndex: number) => {
    await getGameRecordByGameAndParticipant(gameId, participantId)
      .then((game_record) => game_record)
      .then((game_record_json) => {
        updateLifelineStatus(game_record_json["record_id"], lifelineIndex);
      });
  };

  return (
    <>
      <h3 className="mb-5 w-full text-xl font-semibold italic text-neutral-700">
        Comodines
      </h3>
      <div className="mb-5 flex h-30 w-full items-center justify-between gap-2 ">
        {!loading && lifelines.length > 0 && (
          <>
            <LifelineButton
              disabled={!lifelines[0].isAvailable || disabledButton1}
              onClick={async () => {
                if (lifelines[0].isAvailable) await handleLifelinePressed(0);
                setDisabledButton1(true);
              }}
            >
              <FaPeopleGroup size={40} />
            </LifelineButton>
            <LifelineButton
              disabled={!lifelines[1].isAvailable || disabledButton2}
              onClick={async () => {
                if (!fifthy_fifthy) setFiftyPressed(true);
                if (lifelines[1].isAvailable) await handleLifelinePressed(1);
                setDisabledButton2(true);
              }}
            >
              50:50
            </LifelineButton>
            <LifelineButton
              disabled={!lifelines[2].isAvailable || disabledButton3}
              onClick={async () => {
                if (lifelines[2].isAvailable) await handleLifelinePressed(2);
                setDisabledButton3(true);
              }}
            >
              <FaPhone size={30} />
            </LifelineButton>
          </>
        )}
      </div>
    </>
  );
};

export default ComodinSection;
