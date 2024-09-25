import { createBrowserRouter } from "react-router-dom";
import Layout from "./layouts/Layout";
import Jugador, { loader as jugadoresLoader } from "./views/Jugador";
import NewJugador, { action as newJugadorAction } from "./views/NewJugador";
import PaginaInicio from "./views/PaginaInicio";
import Torneos from "./views/Torneos";
import Partidos from "./views/Partidos";
import Equipos from "./views/Equipos";
import EditJugador, {
  loader as editJugadorLoader,
  action as editJugadorAction,
} from "./views/EditJugador";
import { action as deleteJugadorAction } from "./components/JugadorDetails";

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
        loader: jugadoresLoader,
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
      {
        path: "/jugador/:id/eliminar",
        action: deleteJugadorAction,
      },
    ],
  },
  {
    path: "/jugador/nuevo",
    element: <NewJugador />,
    action: newJugadorAction,
  },
  {
    path: "jugador/:id/editar",
    element: <EditJugador />,
    loader: editJugadorLoader,
    action: editJugadorAction,
  },
]);
