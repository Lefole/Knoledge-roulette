import { Container } from "../components/Container";
import { Outlet } from "react-router-dom";
import GameInfo from "../components/GameInfo";
// import FeedbackOptionScreen from "../components/FeedbackOptionScreen";

const Game = () => {
  return (
    <div className="relative h-screen w-screen flex justify-center items-center">
      {/* <FeedbackOptionScreen /> */}
      <div className="inline-flex w-full h-fit">
        <div className="w-[500px] h-[700px] p-10">
          <Container classname="h-full " children={<GameInfo />} />
        </div>
        <div className="w-full ">{/* <Outlet /> */}</div>
      </div>
    </div>
  );
};

export default Game;
