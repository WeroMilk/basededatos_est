import { Building2 } from 'lucide-react';

export default function Header() {
  return (
    <header 
      className="sticky top-0 z-50 h-16 flex items-center px-4 md:px-6"
      style={{
        background: 'linear-gradient(135deg, var(--sec-primary) 0%, var(--sec-primary-dark) 100%)',
        boxShadow: '0 2px 8px rgba(123, 31, 75, 0.15)',
      }}
    >
      <div className="flex items-center gap-3 w-full max-w-6xl mx-auto">
        <img
          src={`${import.meta.env.BASE_URL}logo-sonora.png`}
          alt="Sonora, Tierra de oportunidades"
          className="h-9 sm:h-10 w-auto max-w-[200px] sm:max-w-[260px] object-contain object-left shrink-0"
          decoding="async"
        />
        <div className="flex flex-col">
          <h1 className="text-white font-semibold text-base md:text-lg leading-tight">
            Sistema de Registro Escolar
          </h1>
          <span className="text-white/70 text-xs hidden sm:block">
            Secretaría de Educación y Cultura
          </span>
        </div>
        
        <div className="ml-auto hidden md:flex items-center gap-2">
          <div 
            className="w-8 h-8 rounded-full flex items-center justify-center"
            style={{ backgroundColor: 'rgba(255,255,255,0.15)' }}
          >
            <Building2 className="w-4 h-4 text-white" />
          </div>
          <span className="text-white/90 text-sm font-medium">SEC Sonora</span>
        </div>
      </div>
    </header>
  );
}
