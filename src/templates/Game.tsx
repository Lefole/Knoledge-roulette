import { Container } from "../components/Container";
import { Outlet } from "react-router-dom";
import GameInfo from "../components/GameInfo";
import FeedbackOptionScreen from "../components/FeedbackOptionScreen";

const Game = () => {
  return (
    <div className="relative h-screen w-screen">
      <FeedbackOptionScreen />
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
