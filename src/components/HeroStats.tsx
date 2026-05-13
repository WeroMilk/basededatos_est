import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';
import { useAnimatedCounter } from '../hooks/useAnimatedCounter';
import type { SchoolStats } from '../types';

interface HeroStatsProps {
  stats: SchoolStats;
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

function AnimatedStat({ value, label, delay }: { value: number; label: string; delay: number }) {
  const { value: animatedValue } = useAnimatedCounter(value, 1500);
  
  return (
    <motion.div 
      className="flex flex-col items-center text-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: 'spring', stiffness: 100, damping: 15, delay }}
    >
      <span className="text-white text-xl md:text-2xl font-bold">
        {animatedValue.toLocaleString()}
      </span>
      <span className="text-white/70 text-xs uppercase tracking-wider">
        {label}
      </span>
    </motion.div>
  );
}

export default function HeroStats({ stats, searchQuery, onSearchChange }: HeroStatsProps) {
  const { value: totalSchools } = useAnimatedCounter(stats.totalSchools, 1500);
  const [isFocused, setIsFocused] = useState(false);

  return (
    <section 
      className="relative px-4 md:px-6 pb-8 pt-8 md:pt-12"
      style={{
        background: 'linear-gradient(135deg, var(--sec-primary) 0%, var(--sec-primary-dark) 100%)',
        borderRadius: '0 0 24px 24px',
      }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Main Counter */}
        <motion.div 
          className="text-center mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 100, damping: 15 }}
        >
          <motion.span 
            className="text-white font-extrabold text-5xl md:text-7xl block leading-none"
            style={{ textShadow: '0 2px 20px rgba(0,0,0,0.2)' }}
          >
            {totalSchools.toLocaleString()}
          </motion.span>
          <span className="text-white/85 text-sm md:text-base font-semibold uppercase tracking-[0.2em] mt-2 block">
            Escuelas Inscritas
          </span>
        </motion.div>

        {/* Secondary Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 mb-8">
          <AnimatedStat value={stats.publicSchools} label="Escuelas Públicas" delay={0.1} />
          <AnimatedStat value={stats.totalGroups} label="Total Grupos" delay={0.2} />
          <AnimatedStat value={stats.totalStudents} label="Total Alumnos" delay={0.3} />
        </div>

        {/* Search Bar */}
        <motion.div 
          className="relative max-w-xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 100, damping: 15, delay: 0.3 }}
        >
          <Search 
            className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 transition-colors duration-200"
            style={{ color: isFocused ? '#fff' : 'rgba(255,255,255,0.5)' }}
          />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            placeholder="Buscar escuela por nombre, CCT o dirección..."
            className="w-full h-12 pl-12 pr-4 rounded-xl text-white placeholder-white/40 text-sm outline-none transition-all duration-200"
            style={{
              background: 'rgba(255,255,255,0.12)',
              border: isFocused 
                ? '1px solid rgba(255,255,255,0.4)' 
                : '1px solid rgba(255,255,255,0.2)',
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}
