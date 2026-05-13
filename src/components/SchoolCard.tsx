import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Building2, ChevronDown, Users, MapPin } from 'lucide-react';
import type { School, Group } from '../types';
import { getLargestGroup } from '../data/schools';

interface SchoolCardProps {
  school: School;
  index: number;
}

function GroupCard({ group, isLargest }: { group: Group; isLargest: boolean }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.2 }}
      className="relative rounded-xl p-4 transition-shadow duration-200 hover:shadow-md"
      style={{
        background: isLargest ? 'rgba(201, 162, 39, 0.08)' : 'var(--sec-surface)',
        border: isLargest 
          ? '1px solid rgba(201, 162, 39, 0.3)' 
          : '1px solid var(--sec-border-light)',
        borderLeft: isLargest ? '4px solid var(--sec-accent-gold)' : undefined,
      }}
    >
      <div className="flex items-center justify-between mb-2">
        <span className="font-mono text-lg font-semibold" style={{ color: 'var(--sec-text)' }}>
          {group.code}
        </span>
        <span 
          className="text-xs font-medium px-2 py-1 rounded-md"
          style={{
            background: group.shift === 'M' 
              ? 'rgba(74, 127, 181, 0.15)' 
              : 'rgba(193, 122, 47, 0.15)',
            color: group.shift === 'M' ? 'var(--sec-matutino)' : 'var(--sec-vespertino)',
          }}
        >
          {group.shift === 'M' ? 'Matutino' : 'Vespertino'}
        </span>
      </div>
      <div className="flex items-center gap-1.5" style={{ color: 'var(--sec-text-secondary)' }}>
        <Users className="w-4 h-4" />
        <span className="text-sm font-medium">{group.students} alumnos</span>
      </div>
      {isLargest && (
        <span 
          className="absolute -top-2 -right-2 text-[10px] font-bold px-2 py-0.5 rounded-full text-white"
          style={{ backgroundColor: 'var(--sec-accent-gold)' }}
        >
          Mayor
        </span>
      )}
    </motion.div>
  );
}

export default function SchoolCard({ school, index }: SchoolCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const largestGroup = getLargestGroup(school);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: 'spring', stiffness: 100, damping: 15, delay: index * 0.05 }}
      className="rounded-2xl overflow-hidden transition-all duration-200"
      style={{
        background: 'var(--sec-surface)',
        border: '1px solid var(--sec-border)',
        boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
      }}
    >
      {/* Main Card */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full text-left p-4 md:p-5 flex items-start gap-4 transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
        style={{
          boxShadow: isExpanded ? 'none' : undefined,
        }}
        aria-expanded={isExpanded}
        aria-controls={`school-groups-${school.id}`}
      >
        {/* School Icon */}
        <div 
          className="flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center"
          style={{ backgroundColor: 'rgba(201, 162, 39, 0.12)' }}
        >
          <Building2 className="w-5 h-5" style={{ color: 'var(--sec-accent-gold)' }} />
        </div>

        {/* School Info */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2">
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-base leading-tight mb-1" style={{ color: 'var(--sec-text)' }}>
                {school.name}
              </h3>
              <div className="flex items-center gap-2 mb-1">
                <span 
                  className="font-mono text-xs px-2 py-0.5 rounded"
                  style={{ 
                    background: 'var(--sec-surface-alt)',
                    color: 'var(--sec-text-muted)',
                  }}
                >
                  {school.cct}
                </span>
                <span 
                  className="text-xs px-2 py-0.5 rounded-full font-medium"
                  style={{
                    background: school.type === 'publica' 
                      ? 'rgba(46, 125, 90, 0.12)' 
                      : 'rgba(123, 31, 75, 0.12)',
                    color: school.type === 'publica' 
                      ? 'var(--sec-success, #2E7D5A)' 
                      : 'var(--sec-primary)',
                  }}
                >
                  {school.type === 'publica' ? 'Pública' : 'Privada'}
                </span>
              </div>
              <div className="flex items-center gap-1" style={{ color: 'var(--sec-text-muted)' }}>
                <MapPin className="w-3 h-3 flex-shrink-0" />
                <span className="text-xs truncate">{school.address}</span>
              </div>
            </div>

            {/* Largest Group Badge + Chevron */}
            <div className="flex flex-col items-end gap-2 flex-shrink-0">
              <span 
                className="text-xs font-semibold px-3 py-1.5 rounded-lg whitespace-nowrap"
                style={{
                  background: 'rgba(123, 31, 75, 0.08)',
                  color: 'var(--sec-primary)',
                }}
              >
                Grupo más grande: {largestGroup.students} alumnos
              </span>
              <motion.div
                animate={{ rotate: isExpanded ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <ChevronDown 
                  className="w-5 h-5" 
                  style={{ color: 'var(--sec-text-muted)' }} 
                />
              </motion.div>
            </div>
          </div>
        </div>
      </button>

      {/* Expanded Groups */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            id={`school-groups-${school.id}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div 
              className="px-4 md:px-5 pb-4 md:pb-5 pt-2"
              style={{
                background: 'var(--sec-surface-alt)',
                borderTop: '1px solid var(--sec-border)',
              }}
            >
              {/* Groups Header */}
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-semibold text-sm" style={{ color: 'var(--sec-text)' }}>
                  Grupos
                </h4>
                <span 
                  className="text-xs px-2.5 py-1 rounded-full font-medium"
                  style={{
                    background: 'rgba(123, 31, 75, 0.08)',
                    color: 'var(--sec-primary)',
                  }}
                >
                  {school.groups.length} grupos
                </span>
              </div>

              {/* Groups Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {school.groups.map((group) => (
                  <GroupCard
                    key={group.id}
                    group={group}
                    isLargest={group.id === largestGroup.id}
                  />
                ))}
              </div>

              {/* School Summary */}
              <div 
                className="mt-4 flex items-center justify-between text-xs px-4 py-3 rounded-lg"
                style={{
                  background: 'rgba(123, 31, 75, 0.04)',
                  color: 'var(--sec-text-secondary)',
                }}
              >
                <span>Total de alumnos en la escuela: <strong style={{ color: 'var(--sec-text)' }}>{school.groups.reduce((a, g) => a + g.students, 0)}</strong></span>
                <span>Promedio por grupo: <strong style={{ color: 'var(--sec-text)' }}>{Math.round(school.groups.reduce((a, g) => a + g.students, 0) / school.groups.length)}</strong></span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
