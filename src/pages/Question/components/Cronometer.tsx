import { LuTimerReset } from "react-icons/lu";
import { useCountdown } from "../../../hooks/useCountdown";
import { LuPlus } from "react-icons/lu";
import { LuMinus } from "react-icons/lu";
import { useState } from "react";

const Cronometer = () => {
  const initialTime = 30 * 1000;
  const [time, setTime] = useCountdown(initialTime);
  const [numberSpinValue, setNumberSpinValue] = useState(0);

  const seconds = Math.floor((time as number) / 1000);
  return (
    <>
      <div>Tiempo: {`${seconds}s`}</div>
      <LuTimerReset
        color="#ffffff"
        size={30}
        className="shadow-md rounded-md bg-fuchsia-800 p-0.5 hover:bg-fuchsia-900 active:bg-fuchsia-400 mr-10"
        onClick={() => setTime(initialTime)}
      />
      <LuMinus
        color="#ffffff"
        size={30}
        className="shadow-md rounded-md bg-fuchsia-800 p-0.5 hover:bg-fuchsia-900 active:bg-fuchsia-400"
        onClick={() => {
          if (time - numberSpinValue * 1000 > 0)
            setTime(time - numberSpinValue * 1000);
        }}
      />
      <input
        type="number"
        placeholder="Tiempo"
        value={numberSpinValue}
        onChange={(event) => {
          setNumberSpinValue(parseInt(event.currentTarget.value));
        }}
        className="text-slate-950 w-10 text-center"
      />
      <LuPlus
        color="#ffffff"
        size={30}
        className="shadow-md rounded-md bg-fuchsia-800 p-0.5 hover:bg-fuchsia-900 active:bg-fuchsia-400"
        onClick={() => {
          setTime(time + numberSpinValue * 1000);
        }}
      />
    </>
  );
};

export default Cronometer;
