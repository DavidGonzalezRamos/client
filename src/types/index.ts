import { object, string, number, date } from "valibot";

export const DraftJugadorSchema = object({
  nombreCompleto: string(),
  equipo: string(),
  numeroDorsal: number(),
  posicion: string(),
  fechaNacimiento: date()

})