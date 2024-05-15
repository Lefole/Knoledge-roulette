import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./index.css";
import Game from "./templates/Game";
import RoulettePage from "./pages/Roulette/RoulettePage";
import ResumePage from "./pages/Resume/ResumePage";
import ProtectedGameRoute from "./components/ProtectedGameRoute";
import Index from "./pages/Index/Index";

// const router = createBrowserRouter([
//   {
//     path: "",
//     element: <Index />,
//   },
//   {
//     path: "/game",
//     element: (
//       <ProtectedGameRoute>
//         <Game />
//       </ProtectedGameRoute>
//     ),
//     children: [
//       { path: "/game", element: <RoulettePage /> },
//       { path: "/game/question/:questionId", element: <QuestionPage /> },
//     ],
//   },
//   {
//     path: "/resume",
//     element: <ResumePage />,
//   },
// ]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<Index />} />

        <Route element={<ProtectedGameRoute />}>
          <Route path="/game" element={<Game />}>
            <Route path="" element={<RoulettePage />} />
            {/* <Route path="/question" element={<QuestionPage />} /> */}
          </Route>

          <Route path="/resume" element={<ResumePage />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
    {/* <RouterProvider router={router} /> */}
  </React.StrictMode>
);
