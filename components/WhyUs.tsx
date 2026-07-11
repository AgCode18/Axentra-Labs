import { Reveal } from "./Reveal";

const CARDS = [
  {
    title: "Speed to market",
    desc: "A fixed 21-day sprint, scoped tight around the 3–4 features that actually prove your idea. No bloated backlog, no six-month roadmap.",
    tag: "01 · Velocity",
  },
  {
    title: "Real engineering, not no-code",
    desc: "Every product is hand-built on Next.js, TypeScript, and Postgres — production code an engineer can pick up on day one, not a locked-in drag-and-drop stack.",
    tag: "02 · Code quality",
  },
  {
    title: "Fixed pricing",
    desc: "One quote, agreed before we start. No hourly surprises, no change-order creep — you know the number on day zero.",
    tag: "03 · Transparency",
  },
  {
    title: "You own everything",
    desc: "Repository, infra, and credentials are yours from the first commit. Walk away with a codebase, not a dependency on us.",
    tag: "04 · Ownership",
  },
];

export function WhyUs() {
  return (
    <section className="relative bg-surface py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <Reveal>
          <span className="font-mono text-xs tracking-[0.25em] text-blue-soft">WHY AXENTRA LABS</span>
          <h2 className="font-display font-semibold text-3xl md:text-5xl mt-4 max-w-2xl leading-[1.1]">
            Most agencies waste your first month on decks. We waste none.
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-px bg-line-soft mt-16 rounded-2xl overflow-hidden">
          {CARDS.map((c, i) => (
            <Reveal key={c.title} delay={i * 80}>
              <div className="relative bg-surface p-8 md:p-10 h-full min-h-[220px] flex flex-col justify-between hover:bg-surface-2 transition-all duration-300 hover:z-10 hover:shadow-[0_20px_44px_-24px_rgba(21,26,53,0.25)] group">
                <span className="font-mono text-[11px] tracking-widest text-muted-2 group-hover:text-blue transition-colors duration-300">
                  {c.tag}
                </span>
                <div>
                  <h3 className="font-display font-semibold text-xl md:text-2xl mb-3 transition-transform duration-300 group-hover:translate-x-1">{c.title}</h3>
                  <p className="text-muted text-sm md:text-base leading-relaxed max-w-md">{c.desc}</p>
                </div>
                <span className="absolute left-0 top-0 h-full w-0.5 bg-gradient-to-b from-blue to-violet scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-300" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
