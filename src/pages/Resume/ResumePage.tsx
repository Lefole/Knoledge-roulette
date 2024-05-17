import { Link } from "react-router-dom";
import { IoReturnUpBack } from "react-icons/io5";
import GameRecordTable from "./components/GameRecordTable";
import { useGameStore } from "../../state/gameStore";
import { useParticipantStore } from "../../state/participanStore";

const ResumePage = () => {
  const { setGameId } = useGameStore();
  const { setCurrentParticipant } = useParticipantStore();
  return (
    <main className="px-10 py-5 h-screen w-screen">
      <div className="h-10 mb-2">
        <Link
          className="flex w-fit justify-center rounded-lg px-5 bg-blue-800 shadow-md 
          hover:bg-blue-900 hover:shadow-lg
          active:bg-blue-950 active:shadow-none"
          to={"../game"}
          onClick={() => {
            setCurrentParticipant("");
          }}
        >
          <IoReturnUpBack size={40} className="text-white" />
        </Link>
      </div>

      <GameRecordTable />

      <div className="w-full h-18 mt-4">
        <Link
          className="flex items-center justify-center ml-auto mr-20  w-fit text-xl text-white font-semibold h-12 rounded-lg px-5 
          bg-red-600 shadow-md 
          hover:bg-red-700 hover:shadow-lg
          active:bg-red-500 active:shadow-none"
          to={".."}
          onClick={() => {
            setGameId("");
          }}
        >
          Terminar Juego
        </Link>
      </div>
    </main>
  );
};

export default ResumePage;
