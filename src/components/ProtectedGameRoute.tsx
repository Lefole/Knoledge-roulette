import { Navigate, Outlet } from "react-router-dom";
import { useGameStore } from "../state/gameStore";

const ProtectedGameRoute = () => {
  const { gameId } = useGameStore();
  if (gameId == "") return <Navigate to={"/game"} />;
  return <Outlet />;
};

export default ProtectedGameRoute;
