import { Building2 } from 'lucide-react';

export default function Header() {
  return (
    <header 
      className="sticky top-0 z-50 min-h-[4.5rem] py-2 flex items-center px-4 md:px-6"
      style={{
        background: 'linear-gradient(135deg, var(--sec-primary) 0%, var(--sec-primary-dark) 100%)',
        boxShadow: '0 2px 8px rgba(123, 31, 75, 0.15)',
      }}
    >
      <div className="flex items-center gap-3 md:gap-4 w-full max-w-6xl mx-auto">
        <img
          src={`${import.meta.env.BASE_URL}logo-dgest-est.png`}
          alt="DGEST — Escuela Secundaria Técnica"
          className="h-11 w-11 sm:h-12 sm:w-12 md:h-14 md:w-14 shrink-0 object-contain object-left"
          decoding="async"
        />
        <div className="flex flex-col min-w-0 flex-1 pr-1">
          <h1 className="text-white font-semibold text-base md:text-lg leading-tight">
            Sistema de Registro Escolar
          </h1>
          <span className="text-white/75 text-[11px] sm:text-xs leading-snug mt-0.5 break-words hyphens-auto">
            Secretaría de Educación y Cultura | Secundarias Técnicas
          </span>
        </div>
        
        <a
          href="https://educacion.sonora.gob.mx/"
          target="_blank"
          rel="noopener noreferrer"
          className="ml-auto flex items-center gap-2 shrink-0 rounded-xl px-2 py-1 sm:px-3 sm:py-1.5 transition-opacity hover:opacity-90 active:opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/70"
          aria-label="Ir al sitio oficial de la Secretaría de Educación y Cultura, Gobierno de Sonora"
        >
          <div
            className="w-8 h-8 rounded-full flex items-center justify-center shrink-0"
            style={{ backgroundColor: 'rgba(255,255,255,0.15)' }}
          >
            <Building2 className="w-4 h-4 text-white" aria-hidden />
          </div>
          <span className="text-white font-semibold text-xs sm:text-sm leading-tight">
            SEC Sonora
          </span>
        </a>
      </div>
    </header>
  );
}
