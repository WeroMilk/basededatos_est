import type { School } from '../types';
import { getLargestGroup } from '../data/schools';

/** Igual que en cada tarjeta: grupo más grande + 5 exámenes por turno. */
const EXTRA_EXAMENES_POR_TURNO = 5;

/** Total de exámenes a imprimir (suma de todas las “baterías recomendadas”). */
export function totalExamenesBateriasRecomendadas(turnos: School[]): number {
  return turnos.reduce((acc, school) => {
    const mayor = getLargestGroup(school).students;
    return acc + mayor + EXTRA_EXAMENES_POR_TURNO;
  }, 0);
}
