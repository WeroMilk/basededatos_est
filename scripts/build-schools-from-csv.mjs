/**
 * Lee listas CSV (columna B = External Ref.) y genera src/data/schools.ts
 * Formato ref: Z{zona}EST{numero}(M|V){grado}{seccion}  ej. Z12EST54M1A → Zona 12, EST #54, Matutino, 1° A
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const ROOT = 'C:\\Users\\alfon\\Documents\\Rosa Isela\\Listas Alumnos';

const CSV_FILES = [
  path.join(ROOT, 'alfonsosilvas', 'Escuela Secundaria Técnica #26 Zona 17.csv'),
  path.join(ROOT, 'alfonsosilvas', 'Escuela Secundaria Técnica #27 Zona 12.csv'),
  path.join(ROOT, 'alfonsosilvas', 'Escuela Secundaria Técnica #28 Zona 17 cde .csv'),
  path.join(ROOT, 'alfonsosilvas', 'Escuela Secundaria Técnica #28 Zona 17.csv'),
  path.join(ROOT, 'alfonsosilvas', 'Escuela Secundaria Técnica #51 Zona 12.csv'),
  path.join(ROOT, 'alfonsosilvas', 'Escuela Secundaria Técnica #53 Zona 17 .csv'),
  path.join(ROOT, 'alfonsosilvas', 'Escuela Secundaria Técnica #54 Zona 12.csv'),
  path.join(ROOT, 'alfonsosilvas', 'Escuela Secundaria Técnica #61 Zona 12.csv'),
  path.join(ROOT, 'alfonsosilvas', 'Escuela Secundaria Técnica #67 Zona 12.csv'),
  path.join(ROOT, 'alfonsosilvas', 'Escuela Secundaria Técnica #71 Zona 4.csv'),
  path.join(ROOT, 'alfonsosilvas', 'Escuela Secundaria Técnica #73 Zona 14 - matutino.csv'),
  path.join(ROOT, 'alfonsosilvas', 'Escuela Secundaria Técnica #73 Zona 14.csv'),
  path.join(ROOT, 'alfonsosilvas', 'Escuela Secundaria Técnica #74 Zona 15 - vespertino.csv'),
  path.join(ROOT, 'alfonsosilvas', 'Escuela Secundaria Técnica #74 Zona 15 efgh.csv'),
  path.join(ROOT, 'alfonsosilvas', 'Escuela Secundaria Técnica #74 Zona 15.csv'),
  path.join(ROOT, 'alfonsosilvas', 'Escuela Secundaria Técnica #76 Zona 14 - matutino.csv'),
  path.join(ROOT, 'alfonsosilvas', 'Escuela Secundaria Técnica #76 Zona 14.csv'),
  path.join(ROOT, 'alfonsosilvas', 'Escuela Secundaria Técnica #78 Zona 15.csv'),
  path.join(ROOT, 'alfonsosilvas', 'Escuela Secundaria Técnica #10 Zona 9.csv'),
  path.join(ROOT, 'alfonsosilvas', 'Escuela Secundaria Técnica #20 Vespertino.csv'),
  path.join(ROOT, 'alfonsosilvas', 'Escuela Secundaria Técnica #20 Zona 18.csv'),
  path.join(ROOT, 'superzonax', 'Z10EST06MV1436.csv'),
  path.join(ROOT, 'superzonax', 'Z10EST60MV1733.csv'),
  path.join(ROOT, 'superzonax', 'Z11EST48M610.csv'),
  path.join(ROOT, 'superzonax', 'Z11EST56MV 1079.csv'),
  path.join(ROOT, 'superzonax', 'Z1EST5MV226.csv'),
  path.join(ROOT, 'superzonax', 'Z1EST25M455.csv'),
  path.join(ROOT, 'superzonax', 'Z1EST55MV393.csv'),
  path.join(ROOT, 'superzonax', 'Z3EST22M1259.csv'),
  path.join(ROOT, 'superzonax', 'Z3EST24M.csv'),
  path.join(ROOT, 'superzonax', 'Z3EST65M.csv'),
  path.join(ROOT, 'superzonax', 'Z4EST19M.csv'),
  path.join(ROOT, 'superzonax', 'Z5EST1MV.csv'),
  path.join(ROOT, 'superzonax', 'Z7EST11M1167.csv'),
  path.join(ROOT, 'superzonax', 'Z8EST12.csv'),
  path.join(ROOT, 'superzonax', 'Z8EST42.csv'),
];

const OUT_FILE = path.join(path.dirname(fileURLToPath(import.meta.url)), '..', 'src', 'data', 'schools.ts');

/** @returns {{ z: string, est: string, shift: 'M'|'V', grade: string, section: string } | null} */
function parseExternalRef(ref) {
  const t = String(ref || '').trim().toUpperCase();
  const m = t.match(/^Z(\d+)EST(\d+)(M|V)(\d)([A-Z])$/);
  if (!m) return null;
  const [, z, est, shift, g, sec] = m;
  return {
    z: String(parseInt(z, 10)),
    est: String(parseInt(est, 10)),
    shift: /** @type {'M'|'V'} */ (shift),
    grade: g,
    section: sec,
  };
}

function parseCsvLine(line) {
  const out = [];
  let cur = '';
  let i = 0;
  while (i < line.length) {
    const c = line[i];
    if (c === '"') {
      i++;
      while (i < line.length && line[i] !== '"') {
        cur += line[i];
        i++;
      }
      i++;
    } else if (c === ',') {
      out.push(cur);
      cur = '';
      i++;
    } else {
      cur += c;
      i++;
    }
  }
  out.push(cur);
  return out;
}

function friendlyNameFromFilename(filePath) {
  let base = path.basename(filePath, '.csv').replace(/\s+/g, ' ').trim();
  const m = base.match(/#\s*(\d+)/i);
  const zm = base.match(/Zona\s*(\d+)/i);
  const num = m ? parseInt(m[1], 10) : null;
  const zona = zm ? zm[1] : null;
  if (num != null) {
    return zona != null
      ? `Escuela Secundaria Técnica #${num} (Zona ${zona})`
      : `Escuela Secundaria Técnica #${num}`;
  }
  return base || 'Escuela Secundaria Técnica';
}

function nameFromSuperzonax(filePath) {
  const base = path.basename(filePath, '.csv');
  const zm = base.match(/Z(\d+)EST(\d+)/i);
  if (zm) {
    const z = parseInt(zm[1], 10);
    const e = parseInt(zm[2], 10);
    return `Escuela Secundaria Técnica #${e} (Zona ${z})`;
  }
  return friendlyNameFromFilename(filePath);
}

function main() {
  /** @type {Map<string, { names: Set<string>, groupCounts: Map<string, { grade: string, section: string, shift: 'M'|'V', count: number }> }>} */
  const bySchool = new Map();

  for (const filePath of CSV_FILES) {
    if (!fs.existsSync(filePath)) {
      console.warn('No encontrado (omitido):', filePath);
      continue;
    }
    const isSuper = filePath.split(path.sep).includes('superzonax');
    const fileLabelName = isSuper ? nameFromSuperzonax(filePath) : friendlyNameFromFilename(filePath);

    const raw = fs.readFileSync(filePath, 'utf8');
    const lines = raw.split(/\r?\n/).filter(Boolean);
    if (lines.length < 2) continue;

    for (let li = 1; li < lines.length; li++) {
      const cols = parseCsvLine(lines[li]);
      const ref = cols[1];
      const parsed = parseExternalRef(ref);
      if (!parsed) continue;

      const schoolKey = `z${parsed.z}-est${parsed.est}`;
      if (!bySchool.has(schoolKey)) {
        bySchool.set(schoolKey, { names: new Set(), groupCounts: new Map() });
      }
      const sch = bySchool.get(schoolKey);
      sch.names.add(fileLabelName);

      const gKey = ref.trim().toUpperCase();
      const gc = sch.groupCounts.get(gKey);
      if (gc) gc.count += 1;
      else sch.groupCounts.set(gKey, { grade: parsed.grade, section: parsed.section, shift: parsed.shift, count: 1 });
    }
  }

  const entries = [...bySchool.entries()].sort((a, b) => {
    const az = parseInt(a[0].replace(/^z(\d+)-est.*$/, '$1'), 10);
    const bz = parseInt(b[0].replace(/^z(\d+)-est.*$/, '$1'), 10);
    if (az !== bz) return az - bz;
    const ae = parseInt(a[0].replace(/^z\d+-est(\d+)$/, '$1'), 10);
    const be = parseInt(b[0].replace(/^z\d+-est(\d+)$/, '$1'), 10);
    return ae - be;
  });

  let gid = 1;
  const schoolObjects = entries.map(([key, sch], idx) => {
    const zm = key.match(/^z(\d+)-est(\d+)$/);
    const z = zm ? zm[1] : '0';
    const e = zm ? zm[2] : '0';

    const namesArr = [...sch.names].sort();
    const withZona = namesArr.filter((n) => /\(Zona\s*\d+\)/.test(n));
    const name =
      withZona.sort((a, b) => b.length - a.length)[0] ||
      namesArr[0] ||
      `Escuela Secundaria Técnica #${e} (Zona ${z})`;

    const groupEntries = [...sch.groupCounts.entries()].sort((a, b) => {
      const pa = a[1];
      const pb = b[1];
      if (pa.grade !== pb.grade) return parseInt(pa.grade, 10) - parseInt(pb.grade, 10);
      if (pa.shift !== pb.shift) return pa.shift.localeCompare(pb.shift);
      return pa.section.localeCompare(pb.section);
    });

    const groups = groupEntries.map(([refKey, g]) => {
      const code = `${g.grade}${g.section} ${g.shift}`;
      const id = `g${gid++}`;
      return { id, code, grade: g.grade, section: g.section, shift: g.shift, students: g.count };
    });

    const id = `est-z${z}-${e}`;
    const cct = `Z${z}EST${e}`;
    const address = `Zona ${z}, Sonora, México`;

    return { id, name, cct, address, groups, type: 'publica' };
  });

  const ts = `import type { School, SchoolStats, Group } from '../types';

/**
 * Escuelas Secundarias Técnicas generadas desde listas CSV (External Ref. columna B).
 * Formato ref: Z{zona}EST{número}(M|V){grado}{sección} — M matutino, V vespertino.
 */
export const schools: School[] = ${JSON.stringify(schoolObjects, null, 2)
    .replace(/"type": "publica"/g, "type: 'publica' as const")
    .replace(/"shift": "M"/g, "shift: 'M'")
    .replace(/"shift": "V"/g, "shift: 'V'")
    .replace(/"id":/g, 'id:')
    .replace(/"name":/g, 'name:')
    .replace(/"cct":/g, 'cct:')
    .replace(/"address":/g, 'address:')
    .replace(/"groups":/g, 'groups:')
    .replace(/"code":/g, 'code:')
    .replace(/"grade":/g, 'grade:')
    .replace(/"section":/g, 'section:')
    .replace(/"students":/g, 'students:')};

export function getSchoolStats(): SchoolStats {
  const publicSchools = schools.filter(s => s.type === 'publica').length;
  const privateSchools = schools.filter(s => s.type === 'privada').length;
  const totalGroups = schools.reduce((acc, s) => acc + s.groups.length, 0);
  const totalStudents = schools.reduce((acc, s) => acc + s.groups.reduce((gAcc, g) => gAcc + g.students, 0), 0);

  return {
    totalSchools: schools.length,
    publicSchools,
    privateSchools,
    totalGroups,
    totalStudents,
  };
}

export function getLargestGroup(school: School): Group {
  return school.groups.reduce(
    (largest, group) => (group.students > largest.students ? group : largest),
    school.groups[0]
  );
}
`;

  fs.mkdirSync(path.dirname(OUT_FILE), { recursive: true });
  fs.writeFileSync(OUT_FILE, ts, 'utf8');
  console.log('Escuelas:', schoolObjects.length);
  console.log('Grupos totales:', gid - 1);
  console.log('Escribido:', OUT_FILE);
}

main();
