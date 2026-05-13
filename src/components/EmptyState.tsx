import { motion } from 'framer-motion';
import { SearchX } from 'lucide-react';

interface EmptyStateProps {
  searchQuery: string;
}

export default function EmptyState({ searchQuery }: EmptyStateProps) {
  return (
    <motion.div 
      className="flex flex-col items-center justify-center py-16 px-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: 'spring', stiffness: 100, damping: 15 }}
    >
      <div 
        className="w-16 h-16 rounded-2xl flex items-center justify-center mb-4"
        style={{ backgroundColor: 'rgba(123, 31, 75, 0.08)' }}
      >
        <SearchX className="w-8 h-8" style={{ color: 'var(--sec-primary)' }} />
      </div>
      <h3 className="text-lg font-semibold mb-2" style={{ color: 'var(--sec-text)' }}>
        No se encontraron turnos
      </h3>
      <p className="text-sm text-center max-w-md" style={{ color: 'var(--sec-text-secondary)' }}>
        No hay resultados para &quot;<strong style={{ color: 'var(--sec-text)' }}>{searchQuery}</strong>&quot;. 
        Intenta con otro término de búsqueda.
      </p>
    </motion.div>
  );
}
