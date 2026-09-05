import { Reveal } from "./Reveal";

const PLANS = [
  {
    name: "Landing Page",
    desc: "A single high-converting page, designed and built fast.",
    price: "₹5,999",
    period: "Domain + Hosting",
    features: [
      "Live in 5 days",
      "Custom UI, no templates",
      "Fully responsive",
      "Analytics + SEO basics",
      "1 round of revisions",
    ],
    cta: "Book a call",
    featured: false,
  },

  {
    name: "MVP Sprint",
    desc: "Idea to a live, testable product in 21 days flat.",
    price: "₹49,999",
    period: "",
    features: [
      "3–4 core features",
      "Full-stack build (Next.js + MySql)",
      "Auth, billing & admin dashboard",
      "Daily staging updates",
      "Production deploy + handoff",
      "Source code, fully yours",
    ],
    cta: "Start your build",
    featured: true,
  },

  {
    name: "Enterprise",
    desc: "Tailored to your needs.",
    price: "Custom",
    period: "",
    features: [
      "40 dev hours per month",
      "Weekly strategy call",
      "Priority feature builds",
      "Bug fixes & monitoring",
      "Cancel anytime",
    ],
    cta: "Talk to us",
    featured: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="relative bg-surface py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <Reveal className="text-center max-w-2xl mx-auto">
          <span className="font-mono text-xs tracking-[0.25em] text-blue-soft">
            PRICING
          </span>
          <h2 className="font-display font-semibold text-3xl md:text-5xl mt-4 leading-[1.1]">
            Pick your starting point.
          </h2>
          <p className="mt-5 text-muted">
            One clear number. No hourly billing, no scope games.
          </p>
        </Reveal>

        <div className="grid lg:grid-cols-3 gap-6 mt-16">
          {PLANS.map((p, i) => (
            <Reveal key={p.name} delay={i * 100}>
              <div
                className={`card-lift relative rounded-2xl p-8 md:p-9 h-full flex flex-col ${
                  p.featured
                    ? "bg-surface-2 border border-blue/40 shadow-glow"
                    : "bg-ink border border-line"
                }`}
              >
                {p.featured && (
                  <span className="absolute -top-3 left-8 rounded-full bg-grad-brand text-white text-[11px] font-mono tracking-wider px-3 py-1 animate-pop-in">
                    MOST POPULAR
                  </span>
                )}
                <h3 className="font-display font-semibold text-xl">{p.name}</h3>
                <p className="text-muted text-sm mt-2 mb-6">{p.desc}</p>
                <div className="flex items-baseline gap-2 mb-8">
                  <span className="font-display font-semibold text-4xl">
                    {p.price}
                  </span>
                  <span className="text-muted-2 text-sm font-mono">
                    {p.period}
                  </span>
                </div>
                <ul className="space-y-3 mb-9 flex-1">
                  {p.features.map((f) => (
                    <li
                      key={f}
                      className="group/item flex items-start gap-2.5 text-sm text-black"
                    >
                      <svg
                        className="mt-1 shrink-0 transition-transform duration-300 group-hover/item:scale-125"
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                      >
                        <path
                          d="M11.5 3.5L5.5 10.5L2.5 7.5"
                          stroke="#3E6BFF"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span className="transition-colors duration-300 group-hover/item:text-fog">
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className={`shine-wrap text-center rounded-full text-sm font-medium px-6 py-3.5 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 ${
                    p.featured
                      ? "bg-grad-brand text-white hover:shadow-[0_16px_32px_-10px_rgba(62,107,255,0.45)]"
                      : "border border-line text-fog hover:border-blue/40 hover:shadow-[0_12px_28px_-14px_rgba(21,26,53,0.25)]"
                  }`}
                >
                  {p.cta}
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
