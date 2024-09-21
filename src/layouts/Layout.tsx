import { Outlet } from "react-router-dom";
export default function Layout() {
  return (
    <>
      <div className="flex h-screen">
        {/* Sidebar */}
        <aside className="border-r-4 border-white w-1/5 bg-gradient-to-b from-red-300 to-pink-950 p-6 flex flex-col justify-between text-white">
          <div className="text-center">
            <p className="font-mono text-3xl font-semibold">David Gonzalez</p>
          </div>

          <ul className="space-y-4 mt-10">
            <li className="p-3 font-mono font-black text-2xl opacity-80 hover:opacity-100 cursor-pointer">
              Inicio
            </li>
            <li className="p-3 font-mono font-black text-2xl opacity-80 hover:opacity-100 cursor-pointer">
              Torneos
            </li>
            <li className="p-3 font-mono font-black text-2xl opacity-80 hover:opacity-100 cursor-pointer">
              Partidos
            </li>
            <li className="p-3 font-mono font-black text-2xl opacity-80 hover:opacity-100 cursor-pointer">
              Equipos
            </li>
            <li className="p-3 font-mono font-black text-2xl opacity-80 hover:opacity-100 cursor-pointer">
              Jugadores
            </li>
          </ul>

          <div className="bg-white bg-opacity-10 p-4 rounded-md text-center">
            <h3 className="text-lg font-mono">Encuentro Próximo</h3>
            <div className="mt-2">
              <p className="font-bold font-mono">ESCOM vs ESCA</p>
              <p className="font-mono">A las 18:00 hrs</p>
              <p className="font-mono">Gimnasio Carrillón</p>
            </div>
          </div>

          <button className="font-mono bg-white bg-opacity-20 hover:bg-opacity-30 py-2 rounded-md text-lg">
            Cerrar Sesión
          </button>
        </aside>

        <div className="flex-grow">
          <header className="border-b-4 border-white w-4/5 fixed top-0 right-0 left-1/5 py-8 px-9 flex justify-between items-center z-10">
            <h1 className="font-mono text-4xl text-white font-extrabold uppercase px-6">
              Jugadores
            </h1>
            <div className="flex items-center space-x-4">
              <button className="font-mono font-semibold bg-gradient-to-b from-red-300 to-pink-950 text-white py-2 px-12 rounded-full">
                Agregar Jugador
              </button>
            </div>
          </header>

          <main className="mt-36 px-8 text-white">
            <Outlet />
          </main>
        </div>
      </div>
    </>
  );
}
