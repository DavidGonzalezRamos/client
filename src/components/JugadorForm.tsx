import { Jugador } from "../types";

type JugadorFromProps = {
  jugador?: Jugador;
};
function JugadorForm({ jugador }: JugadorFromProps) {
  return (
    <>
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
          defaultValue={jugador?.nombreCompleto}
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
          defaultValue={jugador?.equipo}
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
          defaultValue={jugador?.numeroDorsal}
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
          defaultValue={jugador?.posicion}
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
          defaultValue={jugador?.fechaNacimiento.toISOString().split("T")[0]}
        />
      </div>
    </>
  );
}

export default JugadorForm;
