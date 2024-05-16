import { useState } from "react";
import { Wheel } from "react-custom-roulette";
import { useRouletteLoading } from "../../../hooks/useRouletteFetching";
import { CircularProgress } from "@mui/material";
import { useRouletteSpin } from "../../../state/rouletteSpin";
import { useQuestionRandom } from "../../../state/questionRandom";
import { useParticipantStore } from "../../../state/participanStore";

const Roulette = () => {
  const { participantId } = useParticipantStore();
  const [prizeNumber, setPrizeNumber] = useState(0);
  const [mustSpin, setMustSpin] = useState(false);
  const [rouletteData, loading, subjects] = useRouletteLoading();
  const { setRouletteResult, setStartSpin } = useRouletteSpin();
  const { setQuestionResult } = useQuestionRandom();

  return !loading ? (
    <div className="flex w-1/2 flex-col items-center justify-center">
      <Wheel
        mustStartSpinning={mustSpin}
        spinDuration={0.5}
        prizeNumber={prizeNumber}
        data={rouletteData}
        perpendicularText={false}
        outerBorderColor={"#4c0e0e"}
        outerBorderWidth={12}
        radiusLineColor={"#320909"}
        radiusLineWidth={3}
        innerRadius={2}
        innerBorderColor={"#320909"}
        innerBorderWidth={2}
        textColors={["#fff"]}
        textDistance={55}
        fontSize={14}
        backgroundColors={[
          "#e02627",
          "#f09317",
          "#ffe207",
          "#38d163",
          "#0aa4ff",
          "#0a61f0",
          "#ff08a1",
          "#7c0898",
        ]}
        onStopSpinning={() => {
          setMustSpin(false);
          setRouletteResult(subjects[prizeNumber].subject_id);
          setStartSpin(false);
        }}
      />

      <button
        className="mt-4 w-auto rounded-lg bg-blue-800 p-2 px-10 text-center font-semibold text-white shadow-md hover:bg-blue-900 active:bg-blue-950"
        type="button"
        onClick={() => {
          if (participantId == "") return;
          setQuestionResult(-1, null);
          setStartSpin(true);

          const randomPrize = Math.floor(Math.random() * rouletteData.length);
          setPrizeNumber(randomPrize);
          setMustSpin(true);
        }}
      >
        Girar
      </button>
    </div>
  ) : (
    <div className="w-1/2 items-center flex justify-center">
      <CircularProgress size={100} className="h-full w-full" />
    </div>
  );
};

export default Roulette;
