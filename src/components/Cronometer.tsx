import { LuTimerReset } from "react-icons/lu";
import { useCountdown } from "../hooks/useCountdown";

const Cronometer = () => {
  const initialTime = 30 * 1000;
  const [time, setTime] = useCountdown(initialTime);
  const seconds = Math.floor((time as number) / 1000);
  return (
    <>
      <div>Tiempo: {`${seconds}s`}</div>
      <LuTimerReset
        color="#ffffff"
        size={30}
        className="shadow-md rounded-md bg-fuchsia-800 p-0.5 hover:bg-fuchsia-900 active:bg-fuchsia-400"
        onClick={() => setTime(initialTime)}
      />
    </>
  );
};

export default Cronometer;
