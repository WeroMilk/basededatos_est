/**
 * Genera PDF con nombres de alumnos por escuela → turno → grupo → apellido A-Z.
 * Lee los mismos CSV que build-schools-from-csv.mjs
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import PDFDocument from 'pdfkit';

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

const OUT_FILE = path.join(
  path.dirname(fileURLToPath(import.meta.url)),
  '..',
  'Listas-alumnos-por-grupo.pdf'
);

const PAGE_BOTTOM = 750;
const MARGIN_LEFT = 50;

function parseExternalRef(ref) {
  const t = String(ref || '').trim().toUpperCase();
  const m = t.match(/^Z(\d+)EST(\d+)(M|V)(\d)([A-Z])$/);
  if (!m) return null;
  const [, z, est, shift, g, sec] = m;
  return {
    z: String(parseInt(z, 10)),
    est: String(parseInt(est, 10)),
    shift,
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

function titleCaseName(s) {
  return String(s || '')
    .trim()
    .toLowerCase()
    .replace(/\b([\p{L}\p{N}']+)/gu, (w) => w.charAt(0).toUpperCase() + w.slice(1));
}

function compareApellido(a, b) {
  return a.apellido.localeCompare(b.apellido, 'es', { sensitivity: 'base' });
}

function loadStudents() {
  /** @type {Map<string, { names: Set<string>, students: Map<string, { apellido: string, nombre: string, ref: string, grade: string, section: string, shift: string }> }>} */
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
      const studentId = cols[0]?.trim();
      const ref = cols[1];
      const parsed = parseExternalRef(ref);
      if (!parsed || !studentId) continue;

      let apellido;
      let nombre;
      if (isSuper) {
        apellido = cols[2];
        nombre = cols[3];
      } else {
        nombre = cols[2];
        apellido = cols[3];
      }
      apellido = titleCaseName(apellido);
      nombre = titleCaseName(nombre);
      if (!apellido && !nombre) continue;

      const schoolKey = `z${parsed.z}-est${parsed.est}`;
      if (!bySchool.has(schoolKey)) {
        bySchool.set(schoolKey, { names: new Set(), students: new Map() });
      }
      const sch = bySchool.get(schoolKey);
      sch.names.add(fileLabelName);

      const dedupeKey = `${ref.trim().toUpperCase()}|${studentId}`;
      if (!sch.students.has(dedupeKey)) {
        sch.students.set(dedupeKey, {
          apellido,
          nombre,
          ref: ref.trim().toUpperCase(),
          grade: parsed.grade,
          section: parsed.section,
          shift: parsed.shift,
        });
      }
    }
  }

  return bySchool;
}

function buildHierarchy(bySchool) {
  const entries = [...bySchool.entries()].sort((a, b) => {
    const az = parseInt(a[0].replace(/^z(\d+)-est.*$/, '$1'), 10);
    const bz = parseInt(b[0].replace(/^z(\d+)-est.*$/, '$1'), 10);
    if (az !== bz) return az - bz;
    const ae = parseInt(a[0].replace(/^z\d+-est(\d+)$/, '$1'), 10);
    const be = parseInt(b[0].replace(/^z\d+-est(\d+)$/, '$1'), 10);
    return ae - be;
  });

  return entries.map(([key, sch]) => {
    const zm = key.match(/^z(\d+)-est(\d+)$/);
    const z = zm ? zm[1] : '0';
    const e = zm ? zm[2] : '0';

    const namesArr = [...sch.names].sort();
    const withZona = namesArr.filter((n) => /\(Zona\s*\d+\)/.test(n));
    const name =
      withZona.sort((a, b) => b.length - a.length)[0] ||
      namesArr[0] ||
      `Escuela Secundaria Técnica #${e} (Zona ${z})`;

    const all = [...sch.students.values()];
    const turnoConfig = [
      { label: 'Matutino', shift: 'M' },
      { label: 'Vespertino', shift: 'V' },
    ];

    const turnoBlocks = turnoConfig
      .map(({ label, shift }) => {
        const inTurno = all.filter((s) => s.shift === shift);
        if (inTurno.length === 0) return null;

        const groupKeys = [...new Set(inTurno.map((s) => `${s.grade}|${s.section}|${s.ref}`))];
        groupKeys.sort((a, b) => {
          const [ga, sa] = a.split('|');
          const [gb, sb] = b.split('|');
          const gradeCmp = parseInt(ga, 10) - parseInt(gb, 10);
          if (gradeCmp !== 0) return gradeCmp;
          return sa.localeCompare(sb);
        });

        const groups = groupKeys.map((gk) => {
          const [grade, section] = gk.split('|');
          const list = inTurno
            .filter((s) => s.grade === grade && s.section === section)
            .sort(compareApellido);
          return {
            code: `${grade}° ${section}`,
            students: list,
          };
        });

        return { label, groups };
      })
      .filter(Boolean);

    return { name, sortZ: parseInt(z, 10), sortE: parseInt(e, 10), turnos: turnoBlocks };
  });
}

function generatePdf(hierarchy) {
  return new Promise((resolve, reject) => {
    const doc = new PDFDocument({ margin: MARGIN_LEFT, size: 'LETTER' });
    const stream = fs.createWriteStream(OUT_FILE);
    doc.pipe(stream);

    let y = doc.y;

    function ensureSpace(needed) {
      if (y + needed > PAGE_BOTTOM) {
        doc.addPage();
        y = 50;
      }
    }

    function writeLine(text, opts = {}) {
      const { size = 10, bold = false, indent = 0, gap = 4 } = opts;
      doc.font(bold ? 'Helvetica-Bold' : 'Helvetica').fontSize(size);
      const height = doc.heightOfString(text, { width: 512 - indent });
      ensureSpace(height + gap);
      doc.text(text, MARGIN_LEFT + indent, y, { width: 512 - indent });
      y += height + gap;
    }

    doc.font('Helvetica-Bold').fontSize(18);
    doc.text('Listado de alumnos por escuela, turno y grupo', MARGIN_LEFT, y, { width: 512 });
    y = doc.y + 8;
    writeLine(`Generado: ${new Date().toLocaleString('es-MX', { dateStyle: 'long', timeStyle: 'short' })}`, {
      size: 9,
      gap: 16,
    });

    let totalStudents = 0;
    let totalGroups = 0;

    for (const school of hierarchy) {
      ensureSpace(40);
      writeLine(school.name, { size: 14, bold: true, gap: 8 });

      for (const turno of school.turnos) {
        writeLine(turno.label, { size: 12, bold: true, indent: 8, gap: 6 });

        for (const group of turno.groups) {
          writeLine(`Grupo ${group.code}`, { size: 11, bold: true, indent: 16, gap: 4 });
          totalGroups += 1;

          for (const st of group.students) {
            const line = `${st.apellido}, ${st.nombre}`;
            writeLine(line, { size: 10, indent: 24, gap: 2 });
            totalStudents += 1;
          }
          writeLine('', { gap: 6 });
        }
      }
      writeLine('', { gap: 10 });
    }

    doc.end();
    stream.on('finish', () => resolve({ totalStudents, totalGroups }));
    stream.on('error', reject);
  });
}

async function main() {
  const bySchool = loadStudents();
  const hierarchy = buildHierarchy(bySchool);
  const { totalStudents, totalGroups } = await generatePdf(hierarchy);

  console.log('PDF generado:', OUT_FILE);
  console.log('Escuelas:', hierarchy.length);
  console.log('Grupos (secciones):', totalGroups);
  console.log('Alumnos listados:', totalStudents);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
