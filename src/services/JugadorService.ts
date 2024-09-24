import { safeParse } from "valibot";
import { DraftJugadorSchema } from "../types";
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