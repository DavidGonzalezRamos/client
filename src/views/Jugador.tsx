import { Link } from "react-router-dom";
export default function Jugador() {
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
    </>
  );
}
