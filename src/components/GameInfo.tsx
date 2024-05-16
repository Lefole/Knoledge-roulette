// import ScoreTable from "./ScoreTable";
import { useLocation } from "react-router-dom";
import ScoreTable from "./ScoreTable";
// import ComodinSection from "./ComodinSection";

// import RoundProgress from "./RoundProgress";
import DareSection from "./DareSection";

const GameInfo = () => {
  const { pathname } = useLocation();

  return (
    <div className="inline-flex h-full flex-col justify-between px-6 py-4 w-full">
      <div>
        {/* <RoundProgress currentRound={currentRound} maxRounds={maxRounds} />*/}
        <h3 className="mt-4 mb-2 w-full text-xl font-semibold italic text-neutral-700">
          Participantes
        </h3>
        <ScoreTable />
      </div>

      {pathname === "/game" && <div className="mt-auto">{<DareSection />}</div>}
      {pathname.includes("question") && (
        <div className="mt-auto">{/* <ComodinSection /> */}</div>
      )}
    </div>
  );
};

export default GameInfo;
