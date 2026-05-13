import { useState, useMemo, useEffect } from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import HeroStats from '../components/HeroStats';
import SchoolCard from '../components/SchoolCard';
import Footer from '../components/Footer';
import EmptyState from '../components/EmptyState';
import { SkeletonHero } from '../components/SkeletonLoading';
import SkeletonList from '../components/SkeletonLoading';
import { schools, getSchoolStats } from '../data/schools';
import { compareSchools } from '../lib/schoolSort';
import { expandSchoolsByTurno } from '../lib/schoolTurnos';
import { totalExamenesBateriasRecomendadas } from '../lib/examTotals';
import { ArrowDownWideNarrow, ArrowUpNarrowWide } from 'lucide-react';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'zone' | 'school'>('zone');
  const [sortDir, setSortDir] = useState<'asc' | 'desc'>('asc');
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  const stats = useMemo(() => getSchoolStats(), []);

  const schoolsByTurno = useMemo(() => expandSchoolsByTurno(schools), []);

  const totalBateriasExamenes = useMemo(
    () => totalExamenesBateriasRecomendadas(schoolsByTurno),
    [schoolsByTurno]
  );

  const filteredSchools = useMemo(() => {
    const base = !searchQuery.trim()
      ? schoolsByTurno
      : schoolsByTurno.filter((school) => {
          const query = searchQuery.toLowerCase().trim();
          return (
            school.name.toLowerCase().includes(query) ||
            school.cct.toLowerCase().includes(query) ||
            school.address.toLowerCase().includes(query)
          );
        });
    return [...base].sort((a, b) => compareSchools(a, b, sortBy, sortDir));
  }, [searchQuery, sortBy, sortDir, schoolsByTurno]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col" style={{ background: 'var(--sec-bg)' }}>
        <Header />
        <SkeletonHero />
        <div className="flex-1 py-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between px-4 md:px-6 mb-4">
              <div className="h-6 rounded-lg animate-shimmer w-48" style={{ background: 'rgba(123,31,75,0.08)' }} />
              <div className="h-6 rounded-full animate-shimmer w-10" style={{ background: 'rgba(123,31,75,0.08)' }} />
            </div>
            <SkeletonList />
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col" style={{ background: 'var(--sec-bg)' }}>
      <Header />
      
      <HeroStats 
        stats={stats}
        totalTurnos={schoolsByTurno.length}
        totalBateriasExamenes={totalBateriasExamenes}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />

      {/* School List Section */}
      <main className="flex-1 py-6 md:py-8">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          {/* Section Header */}
          <motion.div
            className="flex flex-col gap-3 mb-4 md:mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 100, damping: 15 }}
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-1 min-w-0">
                  <h2 className="text-xl md:text-2xl font-bold min-w-0 break-words" style={{ color: 'var(--sec-text)' }}>
                    Turnos registrados
                  </h2>
                  <span
                    className="text-xs md:text-sm font-semibold px-3 py-1 rounded-full text-white"
                    style={{ backgroundColor: 'var(--sec-primary)' }}
                  >
                    {filteredSchools.length}
                  </span>
                </div>
                <p className="text-xs md:text-sm" style={{ color: 'var(--sec-text-muted)' }}>
                  Toca un turno para ver sus grupos y alumnos
                </p>
              </div>
              {searchQuery && (
                <motion.button
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  onClick={() => setSearchQuery('')}
                  className="text-sm px-4 py-2 rounded-lg font-medium transition-all duration-200 hover:opacity-90 self-start sm:self-auto shrink-0"
                  style={{
                    background: 'rgba(123, 31, 75, 0.08)',
                    color: 'var(--sec-primary)',
                  }}
                >
                  Limpiar búsqueda
                </motion.button>
              )}
            </div>

            <div className="flex flex-wrap items-center gap-2 md:gap-3">
              <span className="text-xs font-medium" style={{ color: 'var(--sec-text-muted)' }}>
                Ordenar por
              </span>
              <div
                className="flex rounded-xl p-1 gap-0.5"
                style={{
                  background: 'rgba(123, 31, 75, 0.08)',
                  border: '1px solid rgba(123, 31, 75, 0.12)',
                }}
              >
                <button
                  type="button"
                  onClick={() => setSortBy('zone')}
                  className="px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors"
                  style={{
                    background: sortBy === 'zone' ? 'var(--sec-primary)' : 'transparent',
                    color: sortBy === 'zone' ? '#fff' : 'var(--sec-primary)',
                  }}
                >
                  Zona
                </button>
                <button
                  type="button"
                  onClick={() => setSortBy('school')}
                  className="px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors"
                  style={{
                    background: sortBy === 'school' ? 'var(--sec-primary)' : 'transparent',
                    color: sortBy === 'school' ? '#fff' : 'var(--sec-primary)',
                  }}
                >
                  N.º escuela
                </button>
              </div>
              <button
                type="button"
                onClick={() => setSortDir((d) => (d === 'asc' ? 'desc' : 'asc'))}
                className="inline-flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-semibold transition-colors hover:opacity-90"
                style={{
                  background: 'rgba(123, 31, 75, 0.1)',
                  color: 'var(--sec-primary)',
                  border: '1px solid rgba(123, 31, 75, 0.2)',
                }}
                title={sortDir === 'asc' ? 'Cambiar a descendente' : 'Cambiar a ascendente'}
              >
                {sortDir === 'asc' ? (
                  <ArrowUpNarrowWide className="w-4 h-4 shrink-0" aria-hidden />
                ) : (
                  <ArrowDownWideNarrow className="w-4 h-4 shrink-0" aria-hidden />
                )}
                {sortDir === 'asc' ? 'Ascendente' : 'Descendente'}
              </button>
            </div>
          </motion.div>

          {/* Schools List */}
          {filteredSchools.length > 0 ? (
            <div className="flex flex-col gap-3">
              {filteredSchools.map((school, index) => (
                <SchoolCard key={school.id} school={school} index={index} />
              ))}
            </div>
          ) : (
            <EmptyState searchQuery={searchQuery} />
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
