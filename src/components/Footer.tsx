import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer 
      className="px-4 md:px-6 py-8 md:py-10 mt-8"
      style={{
        background: 'var(--sec-primary-dark)',
        borderRadius: '24px 24px 0 0',
      }}
    >
      <motion.div 
        className="max-w-6xl mx-auto flex flex-col items-center text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ type: 'spring', stiffness: 100, damping: 15 }}
      >
        <img
          src={`${import.meta.env.BASE_URL}logo-sonora.png`}
          alt="Sonora, Tierra de oportunidades"
          className="w-auto max-w-[200px] sm:max-w-[240px] h-auto max-h-14 object-contain mb-3 mx-auto"
          decoding="async"
        />
        <h3 className="text-white font-semibold text-lg mb-1">
          Secretaría de Educación y Cultura
        </h3>
        <p className="text-white/70 text-sm mb-1">
          Gobierno del Estado de Sonora
        </p>
        <p className="text-white/65 text-xs mb-3 mt-2">
          Base de datos desarrollada por Luis Alfonso Silvas
        </p>
        <p className="text-white/50 text-xs">
          &copy; {new Date().getFullYear()} - Todos los derechos reservados
        </p>
      </motion.div>
    </footer>
  );
}
