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

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  const stats = useMemo(() => getSchoolStats(), []);

  const filteredSchools = useMemo(() => {
    if (!searchQuery.trim()) return schools;
    const query = searchQuery.toLowerCase().trim();
    return schools.filter(
      (school) =>
        school.name.toLowerCase().includes(query) ||
        school.cct.toLowerCase().includes(query) ||
        school.address.toLowerCase().includes(query)
    );
  }, [searchQuery]);

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
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />

      {/* School List Section */}
      <main className="flex-1 py-6 md:py-8">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          {/* Section Header */}
          <motion.div 
            className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 md:mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 100, damping: 15 }}
          >
            <div>
              <div className="flex items-center gap-3 mb-1">
                <h2 className="text-xl md:text-2xl font-bold" style={{ color: 'var(--sec-text)' }}>
                  Escuelas Registradas
                </h2>
                <span 
                  className="text-xs md:text-sm font-semibold px-3 py-1 rounded-full text-white"
                  style={{ backgroundColor: 'var(--sec-primary)' }}
                >
                  {filteredSchools.length}
                </span>
              </div>
              <p className="text-xs md:text-sm" style={{ color: 'var(--sec-text-muted)' }}>
                Toca una escuela para ver sus grupos y alumnos
              </p>
            </div>
            
            {searchQuery && (
              <motion.button
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                onClick={() => setSearchQuery('')}
                className="text-sm px-4 py-2 rounded-lg font-medium transition-all duration-200 hover:opacity-90 self-start sm:self-auto"
                style={{
                  background: 'rgba(123, 31, 75, 0.08)',
                  color: 'var(--sec-primary)',
                }}
              >
                Limpiar búsqueda
              </motion.button>
            )}
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
