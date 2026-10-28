interface LogoProps {
  className?: string;
  variant?: 'full' | 'mark';
}

export function Logo({ className = 'h-10', variant = 'full' }: LogoProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <svg viewBox="0 0 64 64" className="h-full w-auto" aria-hidden="true">
        <rect width="64" height="64" rx="14" fill="#0e1d35" />
        <path
          d="M32 13 L49 26 L49 49 L37 49 L37 37 L27 37 L27 49 L15 49 L15 26 Z"
          fill="none"
          stroke="#d4a93f"
          strokeWidth="2.6"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
        <path d="M32 13 L49 26" stroke="#d4a93f" strokeWidth="2.6" strokeLinecap="round" />
        <circle cx="32" cy="21" r="2.2" fill="#d4a93f" />
        <path d="M19 49 L45 49" stroke="#d4a93f" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
      </svg>
      {variant === 'full' && (
        <div className="leading-none">
          <p className="font-serif text-xl font-semibold tracking-wide text-navy-900">
            Drishani
          </p>
          <p className="text-[10px] font-medium uppercase tracking-[0.32em] text-gold-600">
            Consultants
          </p>
        </div>
      )}
    </div>
  );
}
