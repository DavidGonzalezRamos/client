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
          {jugador.fechaNacimiento.toDateString()}
        </td>
      </tr>
    </>
  );
}
