import { Container } from "../components/Container";
import { Outlet } from "react-router-dom";
import GameInfo from "../components/GameInfo";

const Game = () => {
  return (
    <div className="flex h-screen w-full p-10">
      <div className="h-full w-1/4">
        <Container classname="h-full" children={<GameInfo />} />
      </div>
      <div className="h-full w-full">
        <Outlet />
      </div>
    </div>
  );
};

export default Game;
