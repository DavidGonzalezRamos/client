import {
  Link,
  Form,
  useActionData,
  ActionFunctionArgs,
} from "react-router-dom";
import ErrorMessage from "../components/ErrorMessage";
import { addJugador } from "../services/JugadorService";

export async function action({ request }: ActionFunctionArgs) {
  const data = Object.fromEntries(await request.formData());
  let error = "";
  if (Object.values(data).includes("")) {
    error = "Todos los campos son requeridos";
  }
  if (error.length) {
    return error;
  }

  addJugador(data);

  return {};
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
          <div className="mb-6">
            <label className="text-white block text-lg mb-2" htmlFor="name">
              Nombre Completo:
            </label>
            <input
              id="name"
              type="text"
              className="w-full p-3 bg-white text-black rounded-md"
              placeholder="Ingrese nombre completo"
              name="nombreCompleto"
            />
          </div>
          <div className="mb-6">
            <label className="text-white block text-lg mb-2" htmlFor="team">
              Seleccione el equipo al que pertenece:
            </label>
            <input
              id="team"
              type="text"
              className="w-full p-3 bg-white text-black rounded-md"
              placeholder="Ingrese equipo"
              name="equipo"
            />
          </div>
          <div className="mb-6">
            <label className="text-white block text-lg mb-2" htmlFor="team">
              Seleccione el número del jersey:
            </label>
            <input
              id="team"
              type="text"
              className="w-full p-3 bg-white text-black rounded-md"
              placeholder="Ingrese número"
              name="numeroDorsal"
            />
          </div>

          <div className="mb-6">
            <label className="text-white block text-lg mb-2" htmlFor="position">
              Posición del jugador:
            </label>
            <input
              id="position"
              type="text"
              className="w-full p-3 bg-white text-black rounded-md"
              placeholder="Ingrese posición"
              name="posicion"
            />
          </div>
          <div className="mb-6">
            <label className="text-white block text-lg mb-2" htmlFor="dob">
              Fecha de nacimiento:
            </label>
            <input
              id="dob"
              type="date"
              className="w-full p-3 bg-white text-black rounded-md"
              name="fechaNacimiento"
            />
          </div>
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
