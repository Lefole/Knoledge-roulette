import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Index from "./pages/Index";

import "./index.css";
import Game from "./templates/Game";
import RoulettePage from "./pages/RoulettePage";
import QuestionPage from "./pages/QuestionPage";
import ResumePage from "./pages/ResumePage";

const router = createBrowserRouter([
  {
    path: "",
    element: <Index />,
  },
  {
    path: "/game",
    element: <Game />,
    children: [
      { path: "/game", element: <RoulettePage /> },
      { path: "/game/question/:questionId", element: <QuestionPage /> },
    ],
  },
  {
    path: "/resume",
    element: <ResumePage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
