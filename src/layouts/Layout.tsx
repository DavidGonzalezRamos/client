import { NavLink, Outlet } from "react-router-dom";
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
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "block p-3 font-mono font-black text-2xl bg-pink-900 cursor-pointer"
                    : "block p-3 font-mono font-black text-2xl opacity-80 hover:bg-pink-900 cursor-pointer"
                }
              >
                Inicio
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Torneos"
                className={({ isActive }) =>
                  isActive
                    ? "block p-3 font-mono font-black text-2xl bg-pink-900 cursor-pointer"
                    : "block p-3 font-mono font-black text-2xl opacity-80 hover:bg-pink-900 cursor-pointer"
                }
              >
                Torneos
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/partidos"
                className={({ isActive }) =>
                  isActive
                    ? "block p-3 font-mono font-black text-2xl bg-pink-900 cursor-pointer"
                    : "block p-3 font-mono font-black text-2xl opacity-80 hover:bg-pink-900 cursor-pointer"
                }
              >
                Partidos
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/equipos"
                className={({ isActive }) =>
                  isActive
                    ? "block p-3 font-mono font-black text-2xl bg-pink-900 cursor-pointer"
                    : "block p-3 font-mono font-black text-2xl opacity-80 hover:bg-pink-900 cursor-pointer"
                }
              >
                Equipos
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/jugador"
                className={({ isActive }) =>
                  isActive
                    ? "block p-3 font-mono font-black text-2xl bg-pink-900 cursor-pointer"
                    : "block p-3 font-mono font-black text-2xl opacity-80 hover:bg-pink-900 cursor-pointer"
                }
              >
                Jugadores
              </NavLink>
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
          <main className="mt-36 px-8 text-white">
            <Outlet />
          </main>
        </div>
      </div>
    </>
  );
}
