import clsx from "clsx";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useRoundStore } from "../state/roundStore";
import { getAllParticipants } from "../services/participantService";

interface ContinueButtonProps {
  destinyRoute: string;
  isDisabled: boolean;
}

const ContinueButton: React.FC<ContinueButtonProps> = ({
  destinyRoute,
  isDisabled,
}) => {
  const { pathname } = useLocation();
  const {
    currentParticipantIndex,
    changeParticipant,
    incrementRound,
    resetParticipantsIndex,
  } = useRoundStore();

  return (
    <Link
      onClick={async () => {
        if (pathname.includes("question")) {
          changeParticipant();
          const participants = await getAllParticipants();
          if (currentParticipantIndex == participants.length - 1) {
            incrementRound();
            resetParticipantsIndex();
          }
        }
      }}
      to={destinyRoute}
      className={clsx(
        "rounded-md px-6 py-2 text-xl font-semibold text-white shadow-md hover:shadow-lg",
        {
          "bg-green-400 hover:bg-green-500  active:bg-green-700 active:shadow-none":
            isDisabled,
          "bg-green-200": !isDisabled,
        }
      )}
    >
      Continuar
    </Link>
  );
};

export default ContinueButton;
