import clsx from "clsx";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useRoundStore } from "../state/roundStore";
import { getAllParticipants } from "../services/participantService";

interface ContinueButtonProps {
  destinyRoute: string;
  disabled: boolean;
  onClick: () => void;
}

const ContinueButton: React.FC<ContinueButtonProps> = ({
  destinyRoute,
  disabled,
  onClick,
}) => {
  const { pathname } = useLocation();
  const {
    currentRound,
    maxRounds,
    currentParticipantIndex,
    changeParticipant,
    incrementRound,
    resetParticipantsIndex,
  } = useRoundStore();

  return (
    <Link
      onClick={async () => {
        onClick();
        // if (pathname.includes("question")) {
        //   changeParticipant();
        //   const participants = await getAllParticipants();
        //   if (currentParticipantIndex == participants.length - 1) {
        //     incrementRound();
        //     resetParticipantsIndex();
        //   }
        // }
      }}
      to={
        currentRound >= maxRounds && destinyRoute == "game/"
          ? "resume"
          : destinyRoute
      }
      className={clsx(
        "rounded-md px-6 py-2 text-xl font-semibold text-white shadow-md hover:shadow-lg",
        {
          "bg-green-400 hover:bg-green-500  active:bg-green-700 active:shadow-none":
            !disabled,
          "bg-green-200": disabled,
        }
      )}
    >
      Continuar
    </Link>
  );
};

export default ContinueButton;
