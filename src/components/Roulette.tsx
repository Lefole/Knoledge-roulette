import React, { useState } from "react";
import { Wheel } from "react-custom-roulette";

type RouletteOption = {
  option: string;
};
const rouletteData: RouletteOption[] = [
  { option: "1" },
  { option: "2" },
  { option: "3" },
  { option: "4" },
  { option: "1" },
  { option: "2" },
  { option: "3" },
  { option: "4" },
];

const Roulette = () => {
  const [prizeNumber, setPrizeNumber] = useState(0);
  const [mustSpin, setMustSpin] = useState(false);
  return (
    <div className="flex w-fit flex-col items-center justify-center">
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
        textColors={["#f5f5f5"]}
        textDistance={55}
        fontSize={20}
        backgroundColors={[
          "#ffc107",
          "#20d039",
          "#2c69cf",
          "#ff7b23",
          "#ff2e22",
        ]}
        onStopSpinning={() => setMustSpin(false)}
      />

      <button
        className="mt-4 w-auto rounded-lg bg-blue-800 p-2 px-10 text-center font-semibold text-white shadow-md hover:bg-blue-900 active:bg-blue-950"
        type="button"
        onClick={() => {
          const randomPrize = Math.floor(Math.random() * rouletteData.length);
          setPrizeNumber(randomPrize);
          setMustSpin(true);
        }}
      >
        Girar
      </button>
    </div>
  );
};

export default Roulette;
