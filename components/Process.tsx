import { Reveal } from "./Reveal";

const STEPS = [
  {
    n: "01",
    days: "DAY 1–2",
    title: "Discover",
    desc: "A focused kickoff call to pin down your users, your core loop, and the one problem the MVP has to prove. We leave with a scoped feature list, not a wishlist.",
  },
  {
    n: "02",
    days: "DAY 3–5",
    title: "Architect",
    desc: "Data models, user flows, and screen-level UX get mapped before a line of code ships. You approve the plan; we don't guess mid-build.",
  },
  {
    n: "03",
    days: "DAY 6–18",
    title: "Build",
    desc: "Full-stack development on Next.js and Postgres, with a staging link updated daily so you're watching the product take shape, not waiting for a reveal.",
  },
  {
    n: "04",
    days: "DAY 19–21",
    title: "Launch",
    desc: "QA, performance passes, and production deploy. You leave with a live product, a clean repo, and a handoff call.",
  },
];

export function Process() {
  return (
    <section id="process" className="relative bg-ink py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <Reveal>
          <span className="font-mono text-xs tracking-[0.25em] text-blue-soft">OUR PROCESS</span>
          <h2 className="font-display font-semibold text-3xl md:text-5xl mt-4 max-w-2xl leading-[1.1]">
            One sprint. Four stages. Zero drift.
          </h2>
        </Reveal>

        <div className="mt-20 relative">
          {/* connecting rail */}
          <div className="hidden md:block absolute left-[27px] top-3 bottom-3 w-px bg-gradient-to-b from-blue via-violet to-line-soft" />

          <div className="flex flex-col gap-12 md:gap-16">
            {STEPS.map((s, i) => (
              <Reveal key={s.n} delay={i * 100}>
                <div className="group flex gap-6 md:gap-10 items-start">
                  <div className="relative shrink-0 w-14 h-14 rounded-full bg-surface border border-line flex items-center justify-center font-display font-semibold text-sm z-10 transition-all duration-300 group-hover:border-blue group-hover:shadow-[0_0_0_6px_rgba(62,107,255,0.08)] group-hover:-translate-y-0.5">
                    {s.n}
                  </div>
                  <div className="pt-2 flex-1 grid md:grid-cols-[1fr_2fr] gap-2 md:gap-10 border-b border-line-soft pb-12 md:pb-16">
                    <div>
                      <span className="font-mono text-[11px] tracking-widest text-muted-2">{s.days}</span>
                      <h3 className="font-display font-semibold text-2xl md:text-3xl mt-2 transition-colors duration-300 group-hover:text-blue">{s.title}</h3>
                    </div>
                    <p className="text-muted text-sm md:text-base leading-relaxed max-w-lg">{s.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
