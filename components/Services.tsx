import { Reveal } from "./Reveal";

const SERVICES = [
  {
    n: "01",
    title: "SaaS MVP Development",
    desc: "Full-stack build: auth, billing, dashboards, and the core workflow that proves your product — live and testable in 21 days.",
    features: ["Auth & user management", "Stripe billing", "Admin dashboard", "Production deploy"],
  },
  {
    n: "02",
    title: "Website Development",
    desc: "Marketing sites and web apps built on Next.js for speed and SEO, not a page builder that slows down at scale.",
    features: ["Next.js + Tailwind", "CMS integration", "Sub-second load times", "Fully responsive"],
  },
  {
    n: "03",
    title: "Landing Page Design",
    desc: "A single, conversion-focused page for a launch, a waitlist, or a fundraise — live in a week.",
    features: ["Copy + UX design", "A/B-ready structure", "Analytics wired in", "7-day delivery"],
  },
  {
    n: "04",
    title: "Product Redesign",
    desc: "Already shipped and losing users at onboarding? We rebuild the UX around what your data says is actually breaking.",
    features: ["UX audit", "Design system", "Incremental rollout", "No downtime migration"],
  },
];

export function Services() {
  return (
    <section id="work" className="relative bg-ink py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <Reveal>
          <span className="font-mono text-xs tracking-[0.25em] text-blue-soft">WHAT WE BUILD</span>
          <h2 className="font-display font-semibold text-3xl md:text-5xl mt-4 max-w-2xl leading-[1.1]">
            Every kind of product, one senior team.
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-6 mt-16">
          {SERVICES.map((s, i) => (
            <Reveal key={s.n} delay={i * 90}>
              <div className="card-lift group relative rounded-2xl border border-line bg-surface p-8 md:p-10 h-full hover:border-blue/40 overflow-hidden">
                <div
                  aria-hidden
                  className="absolute -top-16 -right-16 w-40 h-40 rounded-full bg-grad-brand opacity-0 group-hover:opacity-[0.12] blur-3xl transition-opacity duration-500"
                />
                <span className="font-mono text-xs text-muted-2 transition-colors duration-300 group-hover:text-blue">{s.n}</span>
                <h3 className="font-display font-semibold text-2xl mt-4 mb-3 transition-transform duration-300 group-hover:translate-x-1">{s.title}</h3>
                <p className="text-muted text-sm leading-relaxed mb-6">{s.desc}</p>
                <ul className="flex flex-wrap gap-2">
                  {s.features.map((f) => (
                    <li
                      key={f}
                      className="text-xs font-mono tracking-wide text-muted-2 border border-line-soft rounded-full px-3 py-1.5 transition-colors duration-300 hover:border-blue/40 hover:text-blue hover:bg-surface-2"
                    >
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
