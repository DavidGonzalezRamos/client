import { Link, useLoaderData } from "react-router-dom";
import { getJugadores } from "../services/JugadorService";
import JugadorDetails from "../components/JugadorDetails";
import { Jugador } from "../types";
export async function loader() {
  const jugadores = await getJugadores();
  return jugadores;
}

export default function Jugadores() {
  const jugadores = useLoaderData() as Jugador[];
  return (
    <>
      <div className="flex-grow">
        <header className="border-b-4 border-white w-4/5 fixed top-0 right-0 left-1/5 py-8 px-9 flex justify-between items-center z-10">
          <h1 className="font-mono text-4xl text-white font-extrabold uppercase px-6">
            Jugadores
          </h1>
          <div className="flex items-center space-x-4">
            <button className="font-mono font-semibold bg-gradient-to-b from-red-300 to-pink-950 text-white py-2 px-12 rounded-full">
              <Link to="/jugador/nuevo">Agregar Jugador</Link>
            </button>
          </div>
        </header>
      </div>

      <div className="p-2">
        <table className="w-full mt-5 table-auto">
          <thead className="font-mono font-semibold bg-gradient-to-b from-red-300 to-pink-950 text-white">
            <tr>
              <th className="p-2">Nombre del jugador</th>
              <th className="p-2">Equipo</th>
              <th className="p-2">Numero</th>
              <th className="p-2">Posicion</th>
              <th className="p-2">Fecha de nacimiento</th>
            </tr>
          </thead>
          <tbody>
            {jugadores.map((jugador) => (
              <JugadorDetails key={jugador.id} jugador={jugador} />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
