import type { School } from '../types';

/** Quita sufijo previo si el nombre ya traía turno explícito. */
function stripTurnSuffix(name: string): string {
  return name.replace(/\s+Matutino\s*$/i, '').replace(/\s+Vespertino\s*$/i, '').trim();
}

/**
 * Un plantel con matutino y vespertino se muestra como dos filas:
 * "... Matutino" solo grupos M, "... Vespertino" solo grupos V.
 */
export function expandSchoolsByTurno(source: School[]): School[] {
  const result: School[] = [];
  for (const school of source) {
    const baseName = stripTurnSuffix(school.name);
    const mGroups = school.groups.filter((g) => g.shift === 'M');
    const vGroups = school.groups.filter((g) => g.shift === 'V');

    if (mGroups.length > 0) {
      result.push({
        ...school,
        id: `${school.id}-M`,
        name: `${baseName} Matutino`,
        groups: mGroups,
        cct: `${school.cct}-M`,
      });
    }
    if (vGroups.length > 0) {
      result.push({
        ...school,
        id: `${school.id}-V`,
        name: `${baseName} Vespertino`,
        groups: vGroups,
        cct: `${school.cct}-V`,
      });
    }
  }
  return result;
}
