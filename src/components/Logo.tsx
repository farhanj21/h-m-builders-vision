export function Logo({ className = "", showText = true }: { className?: string; showText?: boolean }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <svg viewBox="0 0 64 56" className="h-10 w-auto" aria-hidden="true">
        {/* Roof */}
        <path d="M32 6 L58 30 L52 30 L32 14 L12 30 L6 30 Z" fill="#F5A623" />
        {/* Window */}
        <g fill="#0D1F35">
          <rect x="24" y="26" width="7" height="7" rx="1" />
          <rect x="33" y="26" width="7" height="7" rx="1" />
          <rect x="24" y="35" width="7" height="7" rx="1" />
          <rect x="33" y="35" width="7" height="7" rx="1" />
        </g>
        {/* Base arc */}
        <path d="M6 50 Q32 42 58 50" stroke="#1E3A5F" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      </svg>
      {showText && (
        <div className="leading-tight">
          <div className="font-display text-lg font-semibold tracking-tight text-navy">H &amp; M Builders</div>
          <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Co Pty Ltd</div>
        </div>
      )}
    </div>
  );
}
