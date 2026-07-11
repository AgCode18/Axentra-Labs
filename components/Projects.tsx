"use client";

import Link from "next/link";
import { Reveal } from "./Reveal";

/**
 * EDIT ME — replace with your real, shipped projects before going live.
 * Placeholder entries are intentionally generic so nothing here reads
 * as a fabricated client case study.
 */
const PROJECTS = [
    {
        tag: "SAAS MVP",
        name: "[Project Name]",
        summary:
            "[One or two sentences on what the product does and the core problem it solves for its users.]",
        stack: ["Next.js", "Postgres", "Stripe"],
        href: "#",
        accent: "from-blue to-violet",
    },
    {
        tag: "WEBSITE",
        name: "[Project Name]",
        summary:
            "[What the site was for — marketing site, e-commerce, internal tool — and what made it a fast build.]",
        stack: ["Next.js", "Tailwind", "Sanity CMS"],
        href: "#",
        accent: "from-violet to-blue",
    },
    {
        tag: "LANDING PAGE",
        name: "[Project Name]",
        summary:
            "[What the launch or campaign was, and the outcome — waitlist size, signups, funding, etc.]",
        stack: ["Next.js", "Tailwind", "Resend"],
        href: "#",
        accent: "from-blue to-violet",
    },
    {
        tag: "REDESIGN",
        name: "[Project Name]",
        summary:
            "[What was broken in the old product and what changed after the redesign shipped.]",
        stack: ["Next.js", "Prisma", "Figma"],
        href: "#",
        accent: "from-violet to-blue",
    },
];

export function Projects() {
    return (
        <section id="projects" className="relative bg-surface py-24 md:py-32">
            <div className="max-w-7xl mx-auto px-5 md:px-8">
                <Reveal>
                    <span className="font-mono text-xs tracking-[0.25em] text-blue">
                        SELECTED WORK
                    </span>

                    <h2 className="font-display font-semibold text-3xl md:text-5xl mt-4 max-w-2xl leading-[1.1]">
                        A few builds we're proud of.
                    </h2>
                </Reveal>

                <div className="grid md:grid-cols-2 gap-6 mt-16">
                    {PROJECTS.map((p, i) => (
                        <Reveal key={`${p.name}-${i}`} delay={i * 90}>
                            <Link
                                href={p.href}
                                className="card-lift group relative block rounded-2xl border border-line bg-ink overflow-hidden hover:border-blue/40"
                            >
                                {/* thumbnail placeholder — swap for a real screenshot/image */}
                                <div
                                    className={`relative h-48 md:h-56 bg-gradient-to-br ${p.accent} overflow-hidden`}
                                >
                                    <div
                                        aria-hidden
                                        className="absolute inset-0 opacity-20"
                                        style={{
                                            backgroundImage:
                                                "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)",
                                            backgroundSize: "28px 28px",
                                        }}
                                    />

                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <span className="font-display font-semibold text-white/90 text-2xl tracking-tight">
                                            {p.name}
                                        </span>
                                    </div>

                                    <div
                                        aria-hidden
                                        className="absolute inset-0 bg-ink/0 group-hover:bg-ink/10 transition-colors duration-300"
                                    />
                                </div>

                                <div className="p-7 md:p-8">
                                    <span className="font-mono text-[11px] tracking-widest text-muted-2">
                                        {p.tag}
                                    </span>

                                    <h3 className="font-display font-semibold text-xl mt-2 mb-3 transition-transform duration-300 group-hover:translate-x-1">
                                        {p.name}
                                    </h3>

                                    <p className="text-muted text-sm leading-relaxed mb-6">
                                        {p.summary}
                                    </p>

                                    <div className="flex items-center justify-between">
                                        <ul className="flex flex-wrap gap-2">
                                            {p.stack.map((s) => (
                                                <li
                                                    key={s}
                                                    className="text-xs font-mono tracking-wide text-muted-2 border border-line-soft rounded-full px-3 py-1"
                                                >
                                                    {s}
                                                </li>
                                            ))}
                                        </ul>

                                        <span className="shrink-0 inline-flex items-center gap-1.5 text-sm font-medium text-fog transition-transform duration-300 group-hover:translate-x-1">
                                            View

                                            <svg
                                                width="13"
                                                height="13"
                                                viewBox="0 0 14 14"
                                                fill="none"
                                            >
                                                <path
                                                    d="M2 7H12M12 7L7.5 2.5M12 7L7.5 11.5"
                                                    stroke="#0B0D18"
                                                    strokeWidth="1.4"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}

