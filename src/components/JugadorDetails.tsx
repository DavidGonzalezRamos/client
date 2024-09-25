import { Link, Form, ActionFunctionArgs, redirect } from "react-router-dom";
import { Jugador } from "../types";
import { deleteJugador } from "../services/JugadorService";

type JugadorDetailsProps = {
  jugador: Jugador;
};

export async function action({ params }: ActionFunctionArgs) {
  if (params.id !== undefined) {
    await deleteJugador(+params.id);
    return redirect("/jugador");
  }
}
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

            <Form
              className="w-full"
              method="POST"
              action={`/jugador/${jugador.id}/eliminar`}
              onSubmit={(e) => {
                if (!confirm("¿Estás seguro de eliminar este jugador?")) {
                  e.preventDefault();
                }
              }}
            >
              <input
                type="submit"
                value="Eliminar"
                className="bg-gradient-to-b from-red-300 to-pink-950 text-white w-full uppercase p-2 rounded-lg text-xs text-center"
              />
            </Form>
          </div>
        </td>
      </tr>
    </>
  );
}
