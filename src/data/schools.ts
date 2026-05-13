import type { School, SchoolStats, Group } from '../types';

/**
 * Escuelas Secundarias Técnicas generadas desde listas CSV (External Ref. columna B).
 * Formato ref: Z{zona}EST{número}(M|V){grado}{sección} — M matutino, V vespertino.
 */
export const schools: School[] = [
  {
    id: "est-z1-5",
    name: "Escuela Secundaria Técnica #5 (Zona 1)",
    cct: "Z1EST5",
    address: "Zona 1, Sonora, México",
    groups: [
      {
        id: "g1",
        code: "1A M",
        grade: "1",
        section: "A",
        shift: 'M',
        students: 33
      },
      {
        id: "g2",
        code: "1B M",
        grade: "1",
        section: "B",
        shift: 'M',
        students: 32
      },
      {
        id: "g3",
        code: "1C M",
        grade: "1",
        section: "C",
        shift: 'M',
        students: 30
      },
      {
        id: "g4",
        code: "1D M",
        grade: "1",
        section: "D",
        shift: 'M',
        students: 31
      },
      {
        id: "g5",
        code: "1E M",
        grade: "1",
        section: "E",
        shift: 'M',
        students: 31
      },
      {
        id: "g6",
        code: "1F M",
        grade: "1",
        section: "F",
        shift: 'M',
        students: 29
      },
      {
        id: "g7",
        code: "1A V",
        grade: "1",
        section: "A",
        shift: 'V',
        students: 7
      },
      {
        id: "g8",
        code: "1B V",
        grade: "1",
        section: "B",
        shift: 'V',
        students: 6
      },
      {
        id: "g9",
        code: "1C V",
        grade: "1",
        section: "C",
        shift: 'V',
        students: 6
      },
      {
        id: "g10",
        code: "1D V",
        grade: "1",
        section: "D",
        shift: 'V',
        students: 5
      },
      {
        id: "g11",
        code: "1E V",
        grade: "1",
        section: "E",
        shift: 'V',
        students: 8
      },
      {
        id: "g12",
        code: "1F V",
        grade: "1",
        section: "F",
        shift: 'V',
        students: 8
      }
    ],
    type: 'publica' as const
  },
  {
    id: "est-z1-25",
    name: "Escuela Secundaria Técnica #25 (Zona 1)",
    cct: "Z1EST25",
    address: "Zona 1, Sonora, México",
    groups: [
      {
        id: "g13",
        code: "1A M",
        grade: "1",
        section: "A",
        shift: 'M',
        students: 19
      },
      {
        id: "g14",
        code: "1B M",
        grade: "1",
        section: "B",
        shift: 'M',
        students: 20
      },
      {
        id: "g15",
        code: "1C M",
        grade: "1",
        section: "C",
        shift: 'M',
        students: 23
      }
    ],
    type: 'publica' as const
  },
  {
    id: "est-z1-55",
    name: "Escuela Secundaria Técnica #55 (Zona 1)",
    cct: "Z1EST55",
    address: "Zona 1, Sonora, México",
    groups: [
      {
        id: "g16",
        code: "1A M",
        grade: "1",
        section: "A",
        shift: 'M',
        students: 28
      },
      {
        id: "g17",
        code: "1B M",
        grade: "1",
        section: "B",
        shift: 'M',
        students: 29
      },
      {
        id: "g18",
        code: "1C M",
        grade: "1",
        section: "C",
        shift: 'M',
        students: 28
      },
      {
        id: "g19",
        code: "1D M",
        grade: "1",
        section: "D",
        shift: 'M',
        students: 30
      },
      {
        id: "g20",
        code: "1E V",
        grade: "1",
        section: "E",
        shift: 'V',
        students: 14
      },
      {
        id: "g21",
        code: "1F V",
        grade: "1",
        section: "F",
        shift: 'V',
        students: 13
      },
      {
        id: "g22",
        code: "1G V",
        grade: "1",
        section: "G",
        shift: 'V',
        students: 14
      },
      {
        id: "g23",
        code: "1H V",
        grade: "1",
        section: "H",
        shift: 'V',
        students: 11
      }
    ],
    type: 'publica' as const
  },
  {
    id: "est-z3-22",
    name: "Escuela Secundaria Técnica #22 (Zona 3)",
    cct: "Z3EST22",
    address: "Zona 3, Sonora, México",
    groups: [
      {
        id: "g24",
        code: "1A M",
        grade: "1",
        section: "A",
        shift: 'M',
        students: 32
      },
      {
        id: "g25",
        code: "1B M",
        grade: "1",
        section: "B",
        shift: 'M',
        students: 28
      },
      {
        id: "g26",
        code: "1C M",
        grade: "1",
        section: "C",
        shift: 'M',
        students: 31
      },
      {
        id: "g27",
        code: "1D M",
        grade: "1",
        section: "D",
        shift: 'M',
        students: 27
      },
      {
        id: "g28",
        code: "1E M",
        grade: "1",
        section: "E",
        shift: 'M',
        students: 30
      },
      {
        id: "g29",
        code: "1F M",
        grade: "1",
        section: "F",
        shift: 'M',
        students: 32
      }
    ],
    type: 'publica' as const
  },
  {
    id: "est-z3-24",
    name: "Escuela Secundaria Técnica #24 (Zona 3)",
    cct: "Z3EST24",
    address: "Zona 3, Sonora, México",
    groups: [
      {
        id: "g30",
        code: "1A M",
        grade: "1",
        section: "A",
        shift: 'M',
        students: 22
      },
      {
        id: "g31",
        code: "1B M",
        grade: "1",
        section: "B",
        shift: 'M',
        students: 20
      },
      {
        id: "g32",
        code: "1C M",
        grade: "1",
        section: "C",
        shift: 'M',
        students: 24
      }
    ],
    type: 'publica' as const
  },
  {
    id: "est-z3-65",
    name: "Escuela Secundaria Técnica #65 (Zona 3)",
    cct: "Z3EST65",
    address: "Zona 3, Sonora, México",
    groups: [
      {
        id: "g33",
        code: "1A M",
        grade: "1",
        section: "A",
        shift: 'M',
        students: 21
      },
      {
        id: "g34",
        code: "1B M",
        grade: "1",
        section: "B",
        shift: 'M',
        students: 21
      }
    ],
    type: 'publica' as const
  },
  {
    id: "est-z4-19",
    name: "Escuela Secundaria Técnica #19 (Zona 4)",
    cct: "Z4EST19",
    address: "Zona 4, Sonora, México",
    groups: [
      {
        id: "g35",
        code: "1A M",
        grade: "1",
        section: "A",
        shift: 'M',
        students: 19
      }
    ],
    type: 'publica' as const
  },
  {
    id: "est-z4-71",
    name: "Escuela Secundaria Técnica #71 (Zona 4)",
    cct: "Z4EST71",
    address: "Zona 4, Sonora, México",
    groups: [
      {
        id: "g36",
        code: "1A M",
        grade: "1",
        section: "A",
        shift: 'M',
        students: 32
      },
      {
        id: "g37",
        code: "1B M",
        grade: "1",
        section: "B",
        shift: 'M',
        students: 32
      },
      {
        id: "g38",
        code: "1C M",
        grade: "1",
        section: "C",
        shift: 'M',
        students: 33
      },
      {
        id: "g39",
        code: "1D M",
        grade: "1",
        section: "D",
        shift: 'M',
        students: 31
      },
      {
        id: "g40",
        code: "1E M",
        grade: "1",
        section: "E",
        shift: 'M',
        students: 30
      },
      {
        id: "g41",
        code: "1F M",
        grade: "1",
        section: "F",
        shift: 'M',
        students: 32
      },
      {
        id: "g42",
        code: "1G M",
        grade: "1",
        section: "G",
        shift: 'M',
        students: 33
      },
      {
        id: "g43",
        code: "1H V",
        grade: "1",
        section: "H",
        shift: 'V',
        students: 31
      },
      {
        id: "g44",
        code: "1I V",
        grade: "1",
        section: "I",
        shift: 'V',
        students: 32
      },
      {
        id: "g45",
        code: "1J V",
        grade: "1",
        section: "J",
        shift: 'V',
        students: 38
      },
      {
        id: "g46",
        code: "1K V",
        grade: "1",
        section: "K",
        shift: 'V',
        students: 29
      },
      {
        id: "g47",
        code: "1L V",
        grade: "1",
        section: "L",
        shift: 'V',
        students: 29
      }
    ],
    type: 'publica' as const
  },
  {
    id: "est-z5-1",
    name: "Escuela Secundaria Técnica #1 (Zona 5)",
    cct: "Z5EST1",
    address: "Zona 5, Sonora, México",
    groups: [
      {
        id: "g48",
        code: "1A M",
        grade: "1",
        section: "A",
        shift: 'M',
        students: 22
      },
      {
        id: "g49",
        code: "1B M",
        grade: "1",
        section: "B",
        shift: 'M',
        students: 22
      },
      {
        id: "g50",
        code: "1C M",
        grade: "1",
        section: "C",
        shift: 'M',
        students: 24
      },
      {
        id: "g51",
        code: "1D M",
        grade: "1",
        section: "D",
        shift: 'M',
        students: 17
      },
      {
        id: "g52",
        code: "1E M",
        grade: "1",
        section: "E",
        shift: 'M',
        students: 23
      },
      {
        id: "g53",
        code: "1F M",
        grade: "1",
        section: "F",
        shift: 'M',
        students: 21
      },
      {
        id: "g54",
        code: "1G M",
        grade: "1",
        section: "G",
        shift: 'M',
        students: 22
      },
      {
        id: "g55",
        code: "1H M",
        grade: "1",
        section: "H",
        shift: 'M',
        students: 21
      },
      {
        id: "g56",
        code: "1A V",
        grade: "1",
        section: "A",
        shift: 'V',
        students: 24
      },
      {
        id: "g57",
        code: "1B V",
        grade: "1",
        section: "B",
        shift: 'V',
        students: 24
      },
      {
        id: "g58",
        code: "1C V",
        grade: "1",
        section: "C",
        shift: 'V',
        students: 25
      }
    ],
    type: 'publica' as const
  },
  {
    id: "est-z7-11",
    name: "Escuela Secundaria Técnica #11 (Zona 7)",
    cct: "Z7EST11",
    address: "Zona 7, Sonora, México",
    groups: [
      {
        id: "g59",
        code: "1A M",
        grade: "1",
        section: "A",
        shift: 'M',
        students: 19
      },
      {
        id: "g60",
        code: "1B M",
        grade: "1",
        section: "B",
        shift: 'M',
        students: 22
      },
      {
        id: "g61",
        code: "1C M",
        grade: "1",
        section: "C",
        shift: 'M',
        students: 23
      },
      {
        id: "g62",
        code: "1D M",
        grade: "1",
        section: "D",
        shift: 'M',
        students: 24
      }
    ],
    type: 'publica' as const
  },
  {
    id: "est-z8-12",
    name: "Escuela Secundaria Técnica #12 (Zona 8)",
    cct: "Z8EST12",
    address: "Zona 8, Sonora, México",
    groups: [
      {
        id: "g63",
        code: "1A M",
        grade: "1",
        section: "A",
        shift: 'M',
        students: 40
      },
      {
        id: "g64",
        code: "1B M",
        grade: "1",
        section: "B",
        shift: 'M',
        students: 38
      },
      {
        id: "g65",
        code: "1C M",
        grade: "1",
        section: "C",
        shift: 'M',
        students: 35
      }
    ],
    type: 'publica' as const
  },
  {
    id: "est-z8-42",
    name: "Escuela Secundaria Técnica #42 (Zona 8)",
    cct: "Z8EST42",
    address: "Zona 8, Sonora, México",
    groups: [
      {
        id: "g66",
        code: "1A M",
        grade: "1",
        section: "A",
        shift: 'M',
        students: 29
      },
      {
        id: "g67",
        code: "1B M",
        grade: "1",
        section: "B",
        shift: 'M',
        students: 32
      },
      {
        id: "g68",
        code: "1C M",
        grade: "1",
        section: "C",
        shift: 'M',
        students: 30
      }
    ],
    type: 'publica' as const
  },
  {
    id: "est-z9-10",
    name: "Escuela Secundaria Técnica #10 (Zona 9)",
    cct: "Z9EST10",
    address: "Zona 9, Sonora, México",
    groups: [
      {
        id: "g69",
        code: "1A M",
        grade: "1",
        section: "A",
        shift: 'M',
        students: 22
      },
      {
        id: "g70",
        code: "1B M",
        grade: "1",
        section: "B",
        shift: 'M',
        students: 18
      },
      {
        id: "g71",
        code: "1C M",
        grade: "1",
        section: "C",
        shift: 'M',
        students: 15
      },
      {
        id: "g72",
        code: "1D M",
        grade: "1",
        section: "D",
        shift: 'M',
        students: 15
      },
      {
        id: "g73",
        code: "1E M",
        grade: "1",
        section: "E",
        shift: 'M',
        students: 16
      }
    ],
    type: 'publica' as const
  },
  {
    id: "est-z10-6",
    name: "Escuela Secundaria Técnica #6 (Zona 10)",
    cct: "Z10EST6",
    address: "Zona 10, Sonora, México",
    groups: [
      {
        id: "g74",
        code: "1A M",
        grade: "1",
        section: "A",
        shift: 'M',
        students: 27
      },
      {
        id: "g75",
        code: "1B M",
        grade: "1",
        section: "B",
        shift: 'M',
        students: 31
      },
      {
        id: "g76",
        code: "1C M",
        grade: "1",
        section: "C",
        shift: 'M',
        students: 26
      },
      {
        id: "g77",
        code: "1D M",
        grade: "1",
        section: "D",
        shift: 'M',
        students: 27
      },
      {
        id: "g78",
        code: "1E M",
        grade: "1",
        section: "E",
        shift: 'M',
        students: 27
      },
      {
        id: "g79",
        code: "1F M",
        grade: "1",
        section: "F",
        shift: 'M',
        students: 27
      },
      {
        id: "g80",
        code: "1A V",
        grade: "1",
        section: "A",
        shift: 'V',
        students: 16
      },
      {
        id: "g81",
        code: "1B V",
        grade: "1",
        section: "B",
        shift: 'V',
        students: 17
      },
      {
        id: "g82",
        code: "1C V",
        grade: "1",
        section: "C",
        shift: 'V',
        students: 19
      },
      {
        id: "g83",
        code: "1D V",
        grade: "1",
        section: "D",
        shift: 'V',
        students: 16
      },
      {
        id: "g84",
        code: "1E V",
        grade: "1",
        section: "E",
        shift: 'V',
        students: 19
      },
      {
        id: "g85",
        code: "1F V",
        grade: "1",
        section: "F",
        shift: 'V',
        students: 17
      }
    ],
    type: 'publica' as const
  },
  {
    id: "est-z10-60",
    name: "Escuela Secundaria Técnica #60 (Zona 10)",
    cct: "Z10EST60",
    address: "Zona 10, Sonora, México",
    groups: [
      {
        id: "g86",
        code: "1A M",
        grade: "1",
        section: "A",
        shift: 'M',
        students: 25
      },
      {
        id: "g87",
        code: "1B M",
        grade: "1",
        section: "B",
        shift: 'M',
        students: 24
      },
      {
        id: "g88",
        code: "1C M",
        grade: "1",
        section: "C",
        shift: 'M',
        students: 24
      },
      {
        id: "g89",
        code: "1D M",
        grade: "1",
        section: "D",
        shift: 'M',
        students: 25
      },
      {
        id: "g90",
        code: "1E M",
        grade: "1",
        section: "E",
        shift: 'M',
        students: 25
      },
      {
        id: "g91",
        code: "1F M",
        grade: "1",
        section: "F",
        shift: 'M',
        students: 24
      },
      {
        id: "g92",
        code: "1G M",
        grade: "1",
        section: "G",
        shift: 'M',
        students: 25
      },
      {
        id: "g93",
        code: "1A V",
        grade: "1",
        section: "A",
        shift: 'V',
        students: 26
      },
      {
        id: "g94",
        code: "1B V",
        grade: "1",
        section: "B",
        shift: 'V',
        students: 25
      },
      {
        id: "g95",
        code: "1C V",
        grade: "1",
        section: "C",
        shift: 'V',
        students: 25
      },
      {
        id: "g96",
        code: "1D V",
        grade: "1",
        section: "D",
        shift: 'V',
        students: 26
      },
      {
        id: "g97",
        code: "1E V",
        grade: "1",
        section: "E",
        shift: 'V',
        students: 23
      }
    ],
    type: 'publica' as const
  },
  {
    id: "est-z11-48",
    name: "Escuela Secundaria Técnica #48 (Zona 11)",
    cct: "Z11EST48",
    address: "Zona 11, Sonora, México",
    groups: [
      {
        id: "g98",
        code: "1A M",
        grade: "1",
        section: "A",
        shift: 'M',
        students: 30
      },
      {
        id: "g99",
        code: "1B M",
        grade: "1",
        section: "B",
        shift: 'M',
        students: 31
      },
      {
        id: "g100",
        code: "1C M",
        grade: "1",
        section: "C",
        shift: 'M',
        students: 30
      },
      {
        id: "g101",
        code: "1D M",
        grade: "1",
        section: "D",
        shift: 'M',
        students: 31
      },
      {
        id: "g102",
        code: "1E M",
        grade: "1",
        section: "E",
        shift: 'M',
        students: 33
      }
    ],
    type: 'publica' as const
  },
  {
    id: "est-z11-56",
    name: "Escuela Secundaria Técnica #56 (Zona 11)",
    cct: "Z11EST56",
    address: "Zona 11, Sonora, México",
    groups: [
      {
        id: "g103",
        code: "1A M",
        grade: "1",
        section: "A",
        shift: 'M',
        students: 41
      },
      {
        id: "g104",
        code: "1B M",
        grade: "1",
        section: "B",
        shift: 'M',
        students: 42
      },
      {
        id: "g105",
        code: "1C M",
        grade: "1",
        section: "C",
        shift: 'M',
        students: 44
      },
      {
        id: "g106",
        code: "1D M",
        grade: "1",
        section: "D",
        shift: 'M',
        students: 43
      },
      {
        id: "g107",
        code: "1E M",
        grade: "1",
        section: "E",
        shift: 'M',
        students: 44
      },
      {
        id: "g108",
        code: "1F M",
        grade: "1",
        section: "F",
        shift: 'M',
        students: 44
      },
      {
        id: "g109",
        code: "1G V",
        grade: "1",
        section: "G",
        shift: 'V',
        students: 33
      },
      {
        id: "g110",
        code: "1H V",
        grade: "1",
        section: "H",
        shift: 'V',
        students: 37
      },
      {
        id: "g111",
        code: "1I V",
        grade: "1",
        section: "I",
        shift: 'V',
        students: 34
      },
      {
        id: "g112",
        code: "1J V",
        grade: "1",
        section: "J",
        shift: 'V',
        students: 34
      },
      {
        id: "g113",
        code: "1K V",
        grade: "1",
        section: "K",
        shift: 'V',
        students: 34
      },
      {
        id: "g114",
        code: "1L V",
        grade: "1",
        section: "L",
        shift: 'V',
        students: 39
      }
    ],
    type: 'publica' as const
  },
  {
    id: "est-z12-27",
    name: "Escuela Secundaria Técnica #27 (Zona 12)",
    cct: "Z12EST27",
    address: "Zona 12, Sonora, México",
    groups: [
      {
        id: "g115",
        code: "1A M",
        grade: "1",
        section: "A",
        shift: 'M',
        students: 28
      }
    ],
    type: 'publica' as const
  },
  {
    id: "est-z12-51",
    name: "Escuela Secundaria Técnica #51 (Zona 12)",
    cct: "Z12EST51",
    address: "Zona 12, Sonora, México",
    groups: [
      {
        id: "g116",
        code: "1A M",
        grade: "1",
        section: "A",
        shift: 'M',
        students: 28
      },
      {
        id: "g117",
        code: "1B M",
        grade: "1",
        section: "B",
        shift: 'M',
        students: 26
      }
    ],
    type: 'publica' as const
  },
  {
    id: "est-z12-54",
    name: "Escuela Secundaria Técnica #54 (Zona 12)",
    cct: "Z12EST54",
    address: "Zona 12, Sonora, México",
    groups: [
      {
        id: "g118",
        code: "1A M",
        grade: "1",
        section: "A",
        shift: 'M',
        students: 18
      },
      {
        id: "g119",
        code: "1B M",
        grade: "1",
        section: "B",
        shift: 'M',
        students: 19
      }
    ],
    type: 'publica' as const
  },
  {
    id: "est-z12-61",
    name: "Escuela Secundaria Técnica #61 (Zona 12)",
    cct: "Z12EST61",
    address: "Zona 12, Sonora, México",
    groups: [
      {
        id: "g120",
        code: "1A M",
        grade: "1",
        section: "A",
        shift: 'M',
        students: 19
      },
      {
        id: "g121",
        code: "1B M",
        grade: "1",
        section: "B",
        shift: 'M',
        students: 15
      },
      {
        id: "g122",
        code: "1C M",
        grade: "1",
        section: "C",
        shift: 'M',
        students: 17
      }
    ],
    type: 'publica' as const
  },
  {
    id: "est-z12-67",
    name: "Escuela Secundaria Técnica #67 (Zona 12)",
    cct: "Z12EST67",
    address: "Zona 12, Sonora, México",
    groups: [
      {
        id: "g123",
        code: "1A M",
        grade: "1",
        section: "A",
        shift: 'M',
        students: 26
      },
      {
        id: "g124",
        code: "1B M",
        grade: "1",
        section: "B",
        shift: 'M',
        students: 29
      },
      {
        id: "g125",
        code: "1C M",
        grade: "1",
        section: "C",
        shift: 'M',
        students: 30
      },
      {
        id: "g126",
        code: "1D M",
        grade: "1",
        section: "D",
        shift: 'M',
        students: 27
      },
      {
        id: "g127",
        code: "1E M",
        grade: "1",
        section: "E",
        shift: 'M',
        students: 29
      }
    ],
    type: 'publica' as const
  },
  {
    id: "est-z14-73",
    name: "Escuela Secundaria Técnica #73 (Zona 14)",
    cct: "Z14EST73",
    address: "Zona 14, Sonora, México",
    groups: [
      {
        id: "g128",
        code: "1A M",
        grade: "1",
        section: "A",
        shift: 'M',
        students: 25
      },
      {
        id: "g129",
        code: "1B M",
        grade: "1",
        section: "B",
        shift: 'M',
        students: 27
      },
      {
        id: "g130",
        code: "1C M",
        grade: "1",
        section: "C",
        shift: 'M',
        students: 24
      },
      {
        id: "g131",
        code: "1D M",
        grade: "1",
        section: "D",
        shift: 'M',
        students: 24
      },
      {
        id: "g132",
        code: "1E V",
        grade: "1",
        section: "E",
        shift: 'V',
        students: 20
      },
      {
        id: "g133",
        code: "1F V",
        grade: "1",
        section: "F",
        shift: 'V',
        students: 22
      },
      {
        id: "g134",
        code: "1G V",
        grade: "1",
        section: "G",
        shift: 'V',
        students: 23
      },
      {
        id: "g135",
        code: "1H V",
        grade: "1",
        section: "H",
        shift: 'V',
        students: 21
      }
    ],
    type: 'publica' as const
  },
  {
    id: "est-z14-76",
    name: "Escuela Secundaria Técnica #76 (Zona 14)",
    cct: "Z14EST76",
    address: "Zona 14, Sonora, México",
    groups: [
      {
        id: "g136",
        code: "1A M",
        grade: "1",
        section: "A",
        shift: 'M',
        students: 29
      },
      {
        id: "g137",
        code: "1B M",
        grade: "1",
        section: "B",
        shift: 'M',
        students: 24
      },
      {
        id: "g138",
        code: "1C M",
        grade: "1",
        section: "C",
        shift: 'M',
        students: 25
      },
      {
        id: "g139",
        code: "1D M",
        grade: "1",
        section: "D",
        shift: 'M',
        students: 26
      },
      {
        id: "g140",
        code: "1E M",
        grade: "1",
        section: "E",
        shift: 'M',
        students: 27
      },
      {
        id: "g141",
        code: "1F V",
        grade: "1",
        section: "F",
        shift: 'V',
        students: 24
      },
      {
        id: "g142",
        code: "1G V",
        grade: "1",
        section: "G",
        shift: 'V',
        students: 24
      },
      {
        id: "g143",
        code: "1H V",
        grade: "1",
        section: "H",
        shift: 'V',
        students: 23
      },
      {
        id: "g144",
        code: "1I V",
        grade: "1",
        section: "I",
        shift: 'V',
        students: 22
      },
      {
        id: "g145",
        code: "1J V",
        grade: "1",
        section: "J",
        shift: 'V',
        students: 22
      }
    ],
    type: 'publica' as const
  },
  {
    id: "est-z15-74",
    name: "Escuela Secundaria Técnica #74 (Zona 15)",
    cct: "Z15EST74",
    address: "Zona 15, Sonora, México",
    groups: [
      {
        id: "g146",
        code: "1A M",
        grade: "1",
        section: "A",
        shift: 'M',
        students: 33
      },
      {
        id: "g147",
        code: "1B M",
        grade: "1",
        section: "B",
        shift: 'M',
        students: 33
      },
      {
        id: "g148",
        code: "1C M",
        grade: "1",
        section: "C",
        shift: 'M',
        students: 31
      },
      {
        id: "g149",
        code: "1D M",
        grade: "1",
        section: "D",
        shift: 'M',
        students: 34
      },
      {
        id: "g150",
        code: "1E M",
        grade: "1",
        section: "E",
        shift: 'M',
        students: 33
      },
      {
        id: "g151",
        code: "1F M",
        grade: "1",
        section: "F",
        shift: 'M',
        students: 32
      },
      {
        id: "g152",
        code: "1G M",
        grade: "1",
        section: "G",
        shift: 'M',
        students: 33
      },
      {
        id: "g153",
        code: "1H M",
        grade: "1",
        section: "H",
        shift: 'M',
        students: 31
      },
      {
        id: "g154",
        code: "1A V",
        grade: "1",
        section: "A",
        shift: 'V',
        students: 29
      },
      {
        id: "g155",
        code: "1B V",
        grade: "1",
        section: "B",
        shift: 'V',
        students: 32
      },
      {
        id: "g156",
        code: "1C V",
        grade: "1",
        section: "C",
        shift: 'V',
        students: 27
      },
      {
        id: "g157",
        code: "1D V",
        grade: "1",
        section: "D",
        shift: 'V',
        students: 28
      },
      {
        id: "g158",
        code: "1E V",
        grade: "1",
        section: "E",
        shift: 'V',
        students: 30
      },
      {
        id: "g159",
        code: "1F V",
        grade: "1",
        section: "F",
        shift: 'V',
        students: 29
      },
      {
        id: "g160",
        code: "1G V",
        grade: "1",
        section: "G",
        shift: 'V',
        students: 31
      }
    ],
    type: 'publica' as const
  },
  {
    id: "est-z15-78",
    name: "Escuela Secundaria Técnica #78 (Zona 15)",
    cct: "Z15EST78",
    address: "Zona 15, Sonora, México",
    groups: [
      {
        id: "g161",
        code: "1A M",
        grade: "1",
        section: "A",
        shift: 'M',
        students: 35
      },
      {
        id: "g162",
        code: "1B M",
        grade: "1",
        section: "B",
        shift: 'M',
        students: 33
      },
      {
        id: "g163",
        code: "1C M",
        grade: "1",
        section: "C",
        shift: 'M',
        students: 36
      },
      {
        id: "g164",
        code: "1D M",
        grade: "1",
        section: "D",
        shift: 'M',
        students: 31
      },
      {
        id: "g165",
        code: "1E M",
        grade: "1",
        section: "E",
        shift: 'M',
        students: 35
      }
    ],
    type: 'publica' as const
  },
  {
    id: "est-z17-23",
    name: "Escuela Secundaria Técnica #23 (Zona 17)",
    cct: "Z17EST23",
    address: "Zona 17, Sonora, México",
    groups: [
      {
        id: "g166",
        code: "1A M",
        grade: "1",
        section: "A",
        shift: 'M',
        students: 33
      },
      {
        id: "g167",
        code: "1B M",
        grade: "1",
        section: "B",
        shift: 'M',
        students: 31
      },
      {
        id: "g168",
        code: "1C M",
        grade: "1",
        section: "C",
        shift: 'M',
        students: 32
      },
      {
        id: "g169",
        code: "1D M",
        grade: "1",
        section: "D",
        shift: 'M',
        students: 32
      }
    ],
    type: 'publica' as const
  },
  {
    id: "est-z17-26",
    name: "Escuela Secundaria Técnica #26 (Zona 17)",
    cct: "Z17EST26",
    address: "Zona 17, Sonora, México",
    groups: [
      {
        id: "g170",
        code: "1A M",
        grade: "1",
        section: "A",
        shift: 'M',
        students: 26
      },
      {
        id: "g171",
        code: "1B M",
        grade: "1",
        section: "B",
        shift: 'M',
        students: 26
      },
      {
        id: "g172",
        code: "1C M",
        grade: "1",
        section: "C",
        shift: 'M',
        students: 24
      }
    ],
    type: 'publica' as const
  },
  {
    id: "est-z17-28",
    name: "Escuela Secundaria Técnica #28 (Zona 17)",
    cct: "Z17EST28",
    address: "Zona 17, Sonora, México",
    groups: [
      {
        id: "g173",
        code: "1A M",
        grade: "1",
        section: "A",
        shift: 'M',
        students: 33
      },
      {
        id: "g174",
        code: "1B M",
        grade: "1",
        section: "B",
        shift: 'M',
        students: 30
      },
      {
        id: "g175",
        code: "1C M",
        grade: "1",
        section: "C",
        shift: 'M',
        students: 32
      },
      {
        id: "g176",
        code: "1D M",
        grade: "1",
        section: "D",
        shift: 'M',
        students: 30
      },
      {
        id: "g177",
        code: "1E M",
        grade: "1",
        section: "E",
        shift: 'M',
        students: 33
      }
    ],
    type: 'publica' as const
  },
  {
    id: "est-z17-53",
    name: "Escuela Secundaria Técnica #53 (Zona 17)",
    cct: "Z17EST53",
    address: "Zona 17, Sonora, México",
    groups: [
      {
        id: "g178",
        code: "1A M",
        grade: "1",
        section: "A",
        shift: 'M',
        students: 20
      },
      {
        id: "g179",
        code: "1B M",
        grade: "1",
        section: "B",
        shift: 'M',
        students: 20
      },
      {
        id: "g180",
        code: "1C M",
        grade: "1",
        section: "C",
        shift: 'M',
        students: 21
      },
      {
        id: "g181",
        code: "1D M",
        grade: "1",
        section: "D",
        shift: 'M',
        students: 20
      },
      {
        id: "g182",
        code: "1E M",
        grade: "1",
        section: "E",
        shift: 'M',
        students: 21
      }
    ],
    type: 'publica' as const
  },
  {
    id: "est-z18-20",
    name: "Escuela Secundaria Técnica #20 (Zona 18)",
    cct: "Z18EST20",
    address: "Zona 18, Sonora, México",
    groups: [
      {
        id: "g183",
        code: "1A M",
        grade: "1",
        section: "A",
        shift: 'M',
        students: 25
      },
      {
        id: "g184",
        code: "1B M",
        grade: "1",
        section: "B",
        shift: 'M',
        students: 27
      },
      {
        id: "g185",
        code: "1C M",
        grade: "1",
        section: "C",
        shift: 'M',
        students: 26
      },
      {
        id: "g186",
        code: "1D M",
        grade: "1",
        section: "D",
        shift: 'M',
        students: 24
      },
      {
        id: "g187",
        code: "1E M",
        grade: "1",
        section: "E",
        shift: 'M',
        students: 25
      },
      {
        id: "g188",
        code: "1F M",
        grade: "1",
        section: "F",
        shift: 'M',
        students: 23
      },
      {
        id: "g189",
        code: "1A V",
        grade: "1",
        section: "A",
        shift: 'V',
        students: 26
      },
      {
        id: "g190",
        code: "1C V",
        grade: "1",
        section: "C",
        shift: 'V',
        students: 24
      },
      {
        id: "g191",
        code: "1D V",
        grade: "1",
        section: "D",
        shift: 'V',
        students: 26
      }
    ],
    type: 'publica' as const
  }
];

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
