import React from "react";
import { Progress } from "@/components/ui/progress";

import ScoreTable from "./ScoreTable";
import { useLocation } from "react-router-dom";

import ComodinSection from "./ComodinSection";
import { useRoundStore } from "../state/roundStore";

const GameInfo = () => {
  const { pathname } = useLocation();
  const { currentRound } = useRoundStore();
  return (
    <div className="flex h-full flex-col justify-between px-6 py-4">
      <>
        {/* /<LinearProgressWithLabel value={30} /> */}
        <h3>{`Avance: ${currentRound}`}</h3>
        <h3 className="mb-2 w-full text-xl font-semibold italic text-neutral-700">
          Participantes
        </h3>
        <ScoreTable />
      </>
      {pathname === "/game/" && (
        <div className="mt-auto">
          <h3 className="mb-2 w-full text-xl font-semibold italic text-neutral-700">
            Reto
          </h3>
        </div>
      )}
      {pathname.includes("question") && (
        <div className="mt-auto">
          <ComodinSection />
        </div>
      )}
    </div>
  );
};

export default GameInfo;
