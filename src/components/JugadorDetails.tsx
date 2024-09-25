import { Link } from "react-router-dom";
import { Jugador } from "../types";

type JugadorDetailsProps = {
  jugador: Jugador;
};
export default function JugadorDetails({ jugador }: JugadorDetailsProps) {
  return (
    <>
      <tr className="border-b ">
        <td className="p-3 text-lg text-white">{jugador.nombreCompleto}</td>
        <td className="p-3 text-lg text-white">{jugador.equipo}</td>
        <td className="p-3 text-lg text-white">{jugador.numeroDorsal}</td>
        <td className="p-3 text-lg text-white">{jugador.posicion}</td>
        <td className="p-3 text-lg text-white">
          {jugador.fechaNacimiento.toISOString().split("T")[0]}
        </td>
        <td className="p-3 text-lg text-white">
          <div className="flex gap-2 items-center">
            <Link
              to={`/jugador/${jugador.id}/editar`}
              className="bg-gradient-to-b from-red-300 to-pink-950 text-white w-full uppercase p-2 rounded-lg text-xs text-center"
            >
              Editar
            </Link>
          </div>
        </td>
      </tr>
    </>
  );
}
