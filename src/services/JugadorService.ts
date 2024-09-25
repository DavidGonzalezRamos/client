import { safeParse } from "valibot";
import { DraftJugadorSchema, JugadoresSchema, Jugador, JugadorSchema } from "../types";
import axios from "axios";

type JugadorData = {
  [k: string]: FormDataEntryValue;
}
export async function addJugador(data: JugadorData) {
  try {
    const result = safeParse(DraftJugadorSchema, {
      nombreCompleto: data.nombreCompleto,
      equipo: data.equipo,
      numeroDorsal: +data.numeroDorsal,
      posicion: data.posicion,
      fechaNacimiento: new Date(data.fechaNacimiento as string)
    });
    if(result.success){
      const url = `${import.meta.env.VITE_API_URL}/api/jugador`
      await axios.post(url, {
        nombreCompleto: result.output.nombreCompleto,
        equipo: result.output.equipo,
        numeroDorsal: result.output.numeroDorsal,
        posicion: result.output.posicion,
        fechaNacimiento: result.output.fechaNacimiento
      });
    }else{
      throw new Error('Datos no validos');
    }
  } catch (error) {
      console.log(error);
  }
}

// Función para convertir las fechas en objetos Date
function convertirFechas(jugadores: any[] | any) {
  if (Array.isArray(jugadores)) {
    return jugadores.map(jugador => ({
      ...jugador,
      fechaNacimiento: new Date(jugador.fechaNacimiento),
    }));
  } else {
    return {
      ...jugadores,
      fechaNacimiento: new Date(jugadores.fechaNacimiento),
    };
  }
}

export async function getJugadores() {
  try {
    const url = `${import.meta.env.VITE_API_URL}/api/jugador`;
    const { data } = await axios(url);
    // Convertir las fechas antes de validar
    const jugadoresConFechas = convertirFechas(data.data);
    // Validar usando el esquema con las fechas ya convertidas
    const result = safeParse(JugadoresSchema, jugadoresConFechas);
    if (result.success) {
      return result.output;
    } else {
      throw new Error("Datos no válidos");
    }
  } catch (error) {
    console.error(error);
  }
}

export async function getJugadorById(id: Jugador['id']) {
  try {
    const url = `${import.meta.env.VITE_API_URL}/api/jugador/${id}`;
    const { data } = await axios(url);
    // Convertir las fechas antes de validar
    const jugadoresConFechas = convertirFechas(data.data);
    // Validar usando el esquema con las fechas ya convertidas
    const result = safeParse(JugadorSchema, jugadoresConFechas);
    if (result.success) {
      return result.output;
    } else {
      throw new Error("Datos no válidos");
    }
  } catch (error) {
    console.error(error);
  }
}

export async function updateJugador(data: JugadorData, id: Jugador['id']) {
  console.log(data);
  try {
    const result = safeParse(JugadorSchema, {
      id,
      nombreCompleto: data.nombreCompleto,
      equipo: data.equipo,
      numeroDorsal: +data.numeroDorsal,
      posicion: data.posicion,
      fechaNacimiento: new Date(data.fechaNacimiento as string)
    })
    if (result.success) {
      const url = `${import.meta.env.VITE_API_URL}/api/jugador/${id}`;
      await axios.put(url, result.output);
    }
  } catch (error) {
    console.log(error);
  }
  
}

export async function deleteJugador(id: Jugador['id']) {
  try {
    const url = `${import.meta.env.VITE_API_URL}/api/jugador/${id}`;
    await axios.delete(url);
  } catch (error) {
    console.error(error);
  }
}