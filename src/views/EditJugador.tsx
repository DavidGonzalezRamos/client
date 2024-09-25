import {
  Link,
  Form,
  useActionData,
  ActionFunctionArgs,
  redirect,
  LoaderFunctionArgs,
  useLoaderData,
} from "react-router-dom";
import ErrorMessage from "../components/ErrorMessage";
import { getJugadorById, updateJugador } from "../services/JugadorService";
import { Jugador } from "../types";
import JugadorForm from "../components/JugadorForm";

export async function loader({ params }: LoaderFunctionArgs) {
  if (params.id !== undefined) {
    const jugador = await getJugadorById(+params.id);
    if (!jugador) {
      return redirect("/jugador");
    }
    return jugador;
  }
}

export async function action({ request, params }: ActionFunctionArgs) {
  const data = Object.fromEntries(await request.formData());
  let error = "";
  if (Object.values(data).includes("")) {
    error = "Todos los campos son requeridos";
  }
  if (error.length) {
    return error;
  }
  if (params.id !== undefined) {
    await updateJugador(data, +params.id);

    return redirect("/jugador");
  }
}

export default function EditJugador() {
  const jugador = useLoaderData() as Jugador;
  const error = useActionData() as string;

  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-red-300 to-pink-950">
        <header className="mb-10 flex justify-between items-center p-5">
          <h1 className="text-4xl text-white font-extrabold uppercase text-center">
            Editar Jugador
          </h1>
          <div>
            <Link to="/jugador">
              <button className="font-mono font-semibold bg-gradient-to-b from-red-300 to-pink-950 text-white py-2 px-12 rounded-full">
                Regresar a los jugadores
              </button>
            </Link>
          </div>
        </header>

        {error && <ErrorMessage>{error}</ErrorMessage>}

        <Form
          className="bg-gradient-to-b from-red-300 to-pink-950 p-10 rounded-lg shadow-md w-full"
          method="POST"
        >
          <JugadorForm jugador={jugador} />

          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-pink-900 text-white font-bold py-3 px-8 rounded-full shadow-md hover:bg-pink-800 transition-all"
            >
              Guardar Cambios de Jugador
            </button>
          </div>
        </Form>
      </div>
    </>
  );
}
