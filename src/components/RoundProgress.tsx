import { LinearProgress } from "@mui/material";
import React from "react";

interface RoundProgressProps {
  currentRound: number;
  maxRounds: number;
}

const RoundProgress: React.FC<RoundProgressProps> = ({
  currentRound,
  maxRounds,
}) => {
  return (
    <div className="flex items-center w-full">
      <h3 className="text-sm font-semibold italic text-neutral-700">Avance</h3>
      <div className="ml-8 w-full mr-2">
        <LinearProgress
          variant="determinate"
          value={(currentRound * 100) / maxRounds}
        />
      </div>
      <p>{`${currentRound}/${maxRounds}`}</p>
    </div>
  );
};

export default RoundProgress;
