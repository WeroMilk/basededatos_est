export interface Group {
  id: string;
  code: string;
  grade: string;
  section: string;
  shift: 'M' | 'V';
  students: number;
}

export interface School {
  id: string;
  name: string;
  cct: string;
  address: string;
  type: 'publica' | 'privada';
  groups: Group[];
}

export interface SchoolStats {
  totalSchools: number;
  publicSchools: number;
  privateSchools: number;
  totalGroups: number;
  totalStudents: number;
}
