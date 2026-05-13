import type { School } from '../types';

export function getSchoolZoneAndNumber(school: School): { zone: number; est: number } {
  const fromId = school.id.match(/^est-z(\d+)-(\d+)(?:-[MV])?$/);
  if (fromId) {
    return { zone: parseInt(fromId[1], 10), est: parseInt(fromId[2], 10) };
  }
  const fromCct = school.cct.match(/^Z(\d+)EST(\d+)(?:-[MV])?$/i);
  if (fromCct) {
    return { zone: parseInt(fromCct[1], 10), est: parseInt(fromCct[2], 10) };
  }
  return { zone: 0, est: 0 };
}

function shiftRankForSort(school: School): number {
  if (school.id.endsWith('-V')) return 1;
  return 0;
}

export function compareSchools(
  a: School,
  b: School,
  sortBy: 'zone' | 'school',
  sortDir: 'asc' | 'desc'
): number {
  const ka = getSchoolZoneAndNumber(a);
  const kb = getSchoolZoneAndNumber(b);
  const mul = sortDir === 'asc' ? 1 : -1;
  if (sortBy === 'zone') {
    if (ka.zone !== kb.zone) return mul * (ka.zone - kb.zone);
    if (ka.est !== kb.est) return mul * (ka.est - kb.est);
    const tie = shiftRankForSort(a) - shiftRankForSort(b);
    return mul * tie;
  }
  if (ka.est !== kb.est) return mul * (ka.est - kb.est);
  if (ka.zone !== kb.zone) return mul * (ka.zone - kb.zone);
  const tie = shiftRankForSort(a) - shiftRankForSort(b);
  return mul * tie;
}
