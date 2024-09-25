import { object, string, number, date, InferOutput, array, pipe, regex} from "valibot";

export const DraftJugadorSchema = object({
  nombreCompleto: pipe(
    string(),
    regex(/^[^0-9]+$/, 'El nombre completo no puede contener números')
  ),
  equipo: pipe(
    string(),
    regex(/^[^0-9]+$/, 'El equipo no puede contener números')
  ),
  numeroDorsal: number(),
  posicion: pipe(
    string(),
    regex(/^[^0-9]+$/, 'La posicion no puede contener números')
  ),
  fechaNacimiento: date(),
});

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