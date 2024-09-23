import { createBrowserRouter } from "react-router-dom";
import Layout from "./layouts/Layout";
import Jugador from "./views/Jugador";
import NewJugador from "./views/NewJugador";
import PaginaInicio from "./views/PaginaInicio";
import Torneos from "./views/Torneos";
import Partidos from "./views/Partidos";
import Equipos from "./views/Equipos";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <PaginaInicio />,
      },
      {
        path: "jugador",
        element: <Jugador />,
      },
      {
        path: "jugador/nuevo",
        element: <NewJugador />,
      },
      {
        path: "torneos",
        element: <Torneos />,
      },
      {
        path: "partidos",
        element: <Partidos />,
      },
      {
        path: "equipos",
        element: <Equipos />,
      },
    ],
  },
]);
