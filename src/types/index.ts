import { object, string, number, date, InferOutput, array } from "valibot";

export const DraftJugadorSchema = object({
  nombreCompleto: string(),
  equipo: string(),
  numeroDorsal: number(),
  posicion: string(),
  fechaNacimiento: date()

})

export const JugadorSchema = object({
  id: number(),
  nombreCompleto: string(),
  equipo: string(),
  numeroDorsal: number(),
  posicion: string(),
  fechaNacimiento: date()
})
export const JugadoresSchema = array(JugadorSchema);
export type Jugador = InferOutput< typeof JugadorSchema > ;