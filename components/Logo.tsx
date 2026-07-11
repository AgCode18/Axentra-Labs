export function LogoMark({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="axentraGrad" x1="10" y1="82" x2="52" y2="28" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#3E6BFF" />
          <stop offset="1" stopColor="#8B4CF0" />
        </linearGradient>
      </defs>
      <path d="M52 8L86 82H68L52 46L36 82H18L52 8Z" fill="#10142A" />
      <path d="M45 40L23 82H35C37.5 82 39.7 80.6 40.8 78.3L58 40H45Z" fill="url(#axentraGrad)" />
      <path d="M52 46L60 63H44L52 46Z" fill="#10142A" />
    </svg>
  );
}

export function LogoFull({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <LogoMark className="h-8 w-8 shrink-0" />
      <div className="flex flex-col leading-none">
        <span className="font-display font-semibold text-lg tracking-wide text-fog">
          AXENTRA
        </span>
        <span className="flex items-center gap-1.5 -mt-0.5">
          <span className="h-px w-3 bg-gradient-to-r from-blue to-violet" />
          <span className="font-mono text-[9px] tracking-[0.3em] text-blue-soft">LABS</span>
          <span className="h-px w-3 bg-gradient-to-r from-violet to-blue" />
        </span>
      </div>
    </div>
  );
}
