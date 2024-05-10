import { Container } from "../components/Container";
import { Outlet } from "react-router-dom";
import GameInfo from "../components/GameInfo";
import clsx from "clsx";

const Game = () => {
  const answerCorrect = false;
  return (
    <div className="relative h-screen w-screen">
      <div
        className={clsx("absolute z-10 h-full w-full", {
          flex: answerCorrect,
          hidden: !answerCorrect,
        })}
      >
        <div className="absolute z-10 h-full w-full flex items-center justify-center bg-slate-600 opacity-80"></div>
        <div className="absolute z-20 h-full w-full flex items-center justify-center">
          <img
            className="opacity-100 rounded-full h-80 w-80 object-fill"
            src="https://i.makeagif.com/media/2-02-2023/RR35Ne.gif"
            alt=""
          />
        </div>
      </div>

      <div className="relative flex h-screen w-screen p-10">
        <div className="h-full w-1/4">
          <Container classname="h-full" children={<GameInfo />} />
        </div>
        <div className="h-full w-full">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Game;
