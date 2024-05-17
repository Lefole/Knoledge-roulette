import uets_logo from "../../assets/uets_logo.png";
import salesianos_logo from "../../assets/salesianos-logo.png";
import { Link } from "react-router-dom";
import { useParticipantsLoading } from "../../hooks/useParticipantsLoading";
import { useGameStore } from "../../state/gameStore";
import { createNewGame } from "../../services/gameService";

const Index = () => {
  const { setGameId } = useGameStore();
  const [participants, participants_loading] = useParticipantsLoading();

  const handleInitGame = async () => {
    const rounds = 5;
    const period = 1;
    if (participants_loading) return;

    const participantsIds: string[] = participants.map(
      (participant) => `${participant.participant_id}`
    );

    const createdGame = await createNewGame(participantsIds, period, rounds);
    //if (createdGame) return;

    setGameId(createdGame!);
  };

  return (
    <div className="relative h-screen w-screen flex">
      <div
        className="border-triangle absolute top-0 -z-20 h-full
        w-3/5 bg-gradient-to-br from-blue-600 via-blue-400 via-50% to-transparent"
      ></div>
      {/* <div className="absolute top-0 left-0 justify-center items-center  w-full h-full">
        <div className="flex h-full w-full items-center justify-center">a</div>
      </div> */}
      <div className="flex h-full items-center w-full">
        <div className="flex h-5/6 w-3/5 flex-col justify-center">
          <div className="mb-auto flex w-full justify-center">
            <img src={uets_logo} alt="logo uets" />
          </div>
          <div className="mb-10 flex w-full justify-center">
            <div className="w-1/3">
              <img src={salesianos_logo} alt="logo uets" />
            </div>
          </div>
        </div>
        <div className="flex h-full w-2/5 flex-col items-center py-10 border-l-2 border-l-slate-300  border-opacity-60">
          <h1 className="mt-20 mb-20 text-center text-6xl font-extrabold text-blue-400 px-20">
            RULETA DEL SABER
          </h1>
          <Link
            onClick={async () => await handleInitGame()}
            to={"game"}
            className="w-fit rounded-full border-2 border-neutral-300 bg-blue-400 px-8 py-2 text-xl font-semibold text-white shadow-lg hover:scale-105 hover:bg-blue-500"
          >
            Iniciar juego
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Index;
