"use client";

import { useState } from "react";
import { Reveal } from "./Reveal";

const FAQS = [
  {
    q: "Do you actually code, or use no-code tools?",
    a: "We hand-write every product on Next.js, TypeScript, and Postgres. No-code platforms are fast to demo but painful to scale or customize once real users show up — so we skip them entirely.",
  },
  {
    q: "How is an MVP done in just 21 days?",
    a: "By scoping tightly. We pick the 3–4 features that actually test your core idea, skip the rest, and run a senior-only team with no committee approvals slowing things down. Bigger builds get an honest, upfront timeline instead.",
  },
  {
    q: "What happens after the MVP ships?",
    a: "You choose: move to a monthly Build Partner retainer and we keep shipping features based on real user feedback, or take the full codebase — clean, documented, and ready for any developer to pick up.",
  },
  {
    q: "What's included in the MVP Sprint?",
    a: "A live, hosted web app with your core features (auth, billing, and dashboards are common), a responsive UI, and a production deployment. Custom Figma-level design can be added, which extends the timeline slightly.",
  },
  {
    q: "My product has 10+ features. Can you build all of them in 21 days?",
    a: "Probably not in one sprint — and that's the right call. We help you cut down to the leanest version that still validates the idea, then plan future phases based on real usage instead of guesses.",
  },
  {
    q: "Who actually owns the code?",
    a: "You do, from the first commit. Repository, environment, and credentials are set up under your accounts, not ours.",
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-line-soft group">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between gap-6 py-6 text-left"
        aria-expanded={open}
      >
        <span className={`font-display font-medium text-base md:text-lg transition-colors duration-300 ${open ? "text-blue" : "group-hover:text-blue"}`}>
          {q}
        </span>
        <svg
          className={`shrink-0 transition-all duration-300 group-hover:border-blue/40 rounded-full border border-line p-1 box-content ${open ? "rotate-45 border-blue/40" : ""}`}
          width="18"
          height="18"
          viewBox="0 0 20 20"
          fill="none"
        >
          <path d="M10 3V17M3 10H17" stroke={open ? "#3E6BFF" : "#9AA0BD"} strokeWidth="1.4" strokeLinecap="round" />
        </svg>
      </button>
      <div
        className="grid transition-all duration-300 ease-out"
        style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
      >
        <div className="overflow-hidden">
          <p className="text-muted text-sm md:text-base leading-relaxed pb-6 max-w-2xl">{a}</p>
        </div>
      </div>
    </div>
  );
}

export function FAQ() {
  return (
    <section id="faq" className="relative bg-ink py-24 md:py-32">
      <div className="max-w-4xl mx-auto px-5 md:px-8">
        <Reveal>
          <span className="font-mono text-xs tracking-[0.25em] text-blue-soft">FAQ</span>
          <h2 className="font-display font-semibold text-3xl md:text-5xl mt-4 leading-[1.1]">
            Questions, answered straight.
          </h2>
        </Reveal>

        <div className="mt-14">
          {FAQS.map((f) => (
            <FAQItem key={f.q} {...f} />
          ))}
        </div>
      </div>
    </section>
  );
}
