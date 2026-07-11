import { Reveal } from "./Reveal";

export function SpeedCompare() {
  return (
    <section className="relative bg-surface py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 md:px-8 grid lg:grid-cols-2 gap-16 items-center">
        <Reveal>
          <span className="font-mono text-xs tracking-[0.25em] text-blue-soft">SPEED, NOT SHORTCUTS</span>
          <h2 className="font-display font-semibold text-3xl md:text-5xl mt-4 leading-[1.1]">
            Traditional teams take a quarter.
            <br />
            We take three weeks.
          </h2>
          <p className="mt-6 text-muted text-base leading-relaxed max-w-md">
            A tight scope, a senior-only team, and zero committee-driven
            decisions. That's the entire trick — no framework magic, just
            fewer places for a build to stall.
          </p>
        </Reveal>

        <Reveal delay={120}>
          <div className="space-y-8">
            <div>
              <div className="flex items-baseline justify-between mb-2">
                <span className="font-mono text-xs tracking-widest text-muted">TRADITIONAL AGENCY</span>
                <span className="font-display font-semibold text-lg text-muted">~120 days</span>
              </div>
              <div className="h-3 rounded-full bg-surface-3 overflow-hidden">
                <div className="h-full w-full rounded-full bg-line transition-all duration-[1200ms] ease-out" />
              </div>
            </div>

            <div>
              <div className="flex items-baseline justify-between mb-2">
                <span className="font-mono text-xs tracking-widest text-blue transition-colors">AXENTRA LABS</span>
                <span className="font-display font-semibold text-lg text-fog">21 days</span>
              </div>
              <div className="h-3 rounded-full bg-surface-3 overflow-hidden">
                <div className="speed-bar-fill h-full rounded-full bg-grad-brand w-0 shadow-[0_0_16px_rgba(62,107,255,0.4)]" />
              </div>
            </div>

            <p className="font-mono text-[11px] text-muted-2 pt-2">
              * BASED ON TYPICAL 3–4 FEATURE MVP SCOPE
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
