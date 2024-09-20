import { createBrowserRouter } from "react-router-dom";
import Layout from "./layouts/Layout";
import Jugador from "./views/Jugador";
import NewJugador from "./views/NewJugador";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Jugador />,
      },
      {
        path: "jugador/nuevo",
        element: <NewJugador />,
      },
    ],
  },
]);
