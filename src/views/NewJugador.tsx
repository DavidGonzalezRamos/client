import {
  Link,
  Form,
  useActionData,
  ActionFunctionArgs,
  redirect,
} from "react-router-dom";
import ErrorMessage from "../components/ErrorMessage";
import { addJugador } from "../services/JugadorService";
import JugadorForm from "../components/JugadorForm";

export async function action({ request }: ActionFunctionArgs) {
  const data = Object.fromEntries(await request.formData());
  let error = "";
  if (Object.values(data).includes("")) {
    error = "Todos los campos son requeridos";
  }
  if (error.length) {
    return error;
  }

  await addJugador(data);

  return redirect("/jugador");
}

export default function NewJugador() {
  const error = useActionData() as string;

  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-red-300 to-pink-950">
        <header className="mb-10 flex justify-between items-center p-5">
          <h1 className="text-4xl text-white font-extrabold uppercase text-center">
            Nuevo Jugador
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
          <JugadorForm />
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-pink-900 text-white font-bold py-3 px-8 rounded-full shadow-md hover:bg-pink-800 transition-all"
            >
              Agregar Nuevo Jugador
            </button>
          </div>
        </Form>
      </div>
    </>
  );
}
