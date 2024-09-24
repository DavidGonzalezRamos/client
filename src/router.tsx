import { createBrowserRouter } from "react-router-dom";
import Layout from "./layouts/Layout";
import Jugador from "./views/Jugador";
import NewJugador, { action as newJugadorAction } from "./views/NewJugador";
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
  {
    path: "/jugador/nuevo",
    element: <NewJugador />,
    action: newJugadorAction,
  },
]);
