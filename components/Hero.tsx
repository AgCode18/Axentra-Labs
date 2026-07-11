import { LogoMark } from "./Logo";

export function Hero() {
  return (
    <section id="top" className="relative pt-32 md:pt-40 pb-0 overflow-hidden">
      {/* ambient gradient field */}
      <div className="absolute inset-0 bg-grad-radial-fade pointer-events-none" />
      <div className="noise-layer" />
      <div
        aria-hidden
        className="absolute -top-40 right-[-10%] w-[560px] h-[560px] rounded-full bg-violet/10 blur-[140px] pointer-events-none animate-float-slow"
      />
      <div
        aria-hidden
        className="absolute top-20 left-[-10%] w-[480px] h-[480px] rounded-full bg-blue/10 blur-[140px] pointer-events-none animate-float"
      />

      <div className="relative max-w-7xl mx-auto px-5 md:px-8">
        <div className="flex flex-col items-start">
          <div className="inline-flex items-center gap-2 rounded-full border border-line bg-surface/60 px-4 py-1.5 mb-8 animate-fade-up">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-soft opacity-75" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-blue-soft" />
            </span>
            <span className="font-mono text-[11px] tracking-wider text-muted">
              CURRENTLY BOOKING · Q3 2026 BUILD SLOTS
            </span>
          </div>

          <h1 className="font-display font-semibold text-[13vw] leading-[0.92] tracking-tight md:text-[6.4rem] lg:text-[7.4rem] max-w-5xl animate-fade-up [animation-delay:80ms] opacity-0">
            Ship your SaaS
            <br />
            in{" "}
            <span className="text-gradient relative inline-block">
              21 days
            </span>
            .
          </h1>

          <p className="mt-8 max-w-xl text-base md:text-lg text-muted leading-relaxed animate-fade-up [animation-delay:180ms] opacity-0">
            Axentra Labs is a full-stack product studio. We take your idea from
            spec to a live, production-grade SaaS or MVP — designed, built,
            and shipped in three weeks flat.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4 animate-fade-up [animation-delay:260ms] opacity-0">
            <a
              href="#contact"
              className="shine-wrap group inline-flex items-center gap-2 rounded-full bg-grad-brand text-white text-sm font-medium px-6 py-3.5 shadow-glow transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_36px_-10px_rgba(62,107,255,0.5)] active:translate-y-0"
            >
              Start your build
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="transition-transform duration-300 group-hover:translate-x-1">
                <path d="M2 7H12M12 7L7.5 2.5M12 7L7.5 11.5" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a
              href="#work"
              className="group inline-flex items-center gap-2 rounded-full border border-line text-sm font-medium px-6 py-3.5 text-fog transition-all duration-300 hover:border-blue/50 hover:-translate-y-0.5 hover:shadow-[0_12px_28px_-12px_rgba(21,26,53,0.25)] active:translate-y-0"
            >
              See how we build
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="transition-transform duration-300 group-hover:translate-x-1">
                <path d="M2 7H12M12 7L7.5 2.5M12 7L7.5 11.5" stroke="#0B0D18" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>

          <div className="mt-14 flex flex-wrap items-center gap-x-10 gap-y-4 pb-16 animate-fade-up [animation-delay:340ms] opacity-0">
            {[
              ["21", "day build cycle"],
              ["Fixed", "price, no surprise invoices"],
              ["100%", "code ownership on handoff"],
            ].map(([big, small]) => (
              <div key={small} className="group flex items-baseline gap-2 cursor-default">
                <span className="font-display font-semibold text-2xl md:text-3xl text-fog transition-colors duration-300 group-hover:text-blue">{big}</span>
                <span className="font-mono text-[11px] text-muted-2 max-w-[8rem] leading-tight">{small}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* signature chevron divider — echoes the apex of the logo's A */}
      <div className="relative h-16 md:h-24">
        <div
          aria-hidden
          className="absolute inset-x-0 bottom-0 h-full bg-surface"
          style={{ clipPath: "polygon(0 100%, 50% 0, 100% 100%)" }}
        />
        <div className="absolute left-1/2 -translate-x-1/2 bottom-0">
          <LogoMark className="h-6 w-6 md:h-8 md:w-8 mb-1 opacity-90" />
        </div>
      </div>
    </section>
  );
}
