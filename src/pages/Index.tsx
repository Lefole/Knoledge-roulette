import uets_logo from "../assets/uets_logo.png";
import salesianos_logo from "../assets/salesianos-logo.png";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="relative h-screen w-screen">
      <div
        className="bg-clip border-triangle absolute top-0 -z-20 h-5/6 
        w-3/5 bg-gradient-to-br from-blue-600 via-blue-400 via-50% to-transparent"
      ></div>
      <div className="flex h-full items-center justify-around">
        <div className="flex h-5/6 w-1/3 flex-col justify-center">
          <div className="mb-auto flex w-full justify-center">
            <img src={uets_logo} alt="logo uets" />
          </div>
          <div className="mb-10 flex w-full justify-center">
            <div className="w-1/3">
              <img src={salesianos_logo} alt="logo uets" />
            </div>
          </div>
        </div>

        <div className="flex h-5/6 w-1/3 flex-col items-center py-10">
          <h1 className="mb-20 text-center text-6xl font-extrabold text-blue-400">
            RULETA DEL SABER
          </h1>
          <Link
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
