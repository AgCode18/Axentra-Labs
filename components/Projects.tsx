"use client";

import Link from "next/link";
import { Reveal } from "./Reveal";
import Image from "next/image";

const PROJECTS = [
  {
    // tag: "KingfishLogistics",
    name: "KingfishLogistics",
    image: "/projects/logistic.png",
    summary:
      "One or two sentences on what the product does and the core problem it solves for its users.",
    stack: ["React.js", "TailwindCSS", "MongoDB"],
    href: "https://www.kingfishlogistics.in/",
  },

  {
    // tag: "SAAS MVP",
    name: "E-Commerce",
    image: "/projects/e-comi.png",
    summary:
      "One or two sentences on what the product does and the core problem it solves for its users.",
    stack: ["React.js", "TailwindCSS", "MongoDB"],
    href: "https://omenterprisesjpr.com/",
  },

  {
    // tag: "API Panel",
    name: "API Panel",
    image: "/projects/api.png",
    summary:
      "One or two sentences on what the product does and the core problem it solves for its users.",
    stack: ["React.js", "TailwindCSS", "MongoDB"],
    href: "https://apipanel.azzunique.cloud/login",
  },

  {
    // tag: "LMS",
    name: "Loan Management System",
    image: "/projects/lmsimage.png",
    summary:
      "One or two sentences on what the product does and the core problem it solves for its users.",
    stack: ["React.js", "TailwindCSS", "MongoDB"],
    href: "https://mascotfin.com/",
  },

  {
    // tag: "Fintech",
    name: "Reseller Fintech",
    image: "/projects/reseller.png",
    summary:
      "One or two sentences on what the product does and the core problem it solves for its users.",
    stack: ["React.js", "TailwindCSS", "MongoDB"],
    href: "https://superadmin.bankfipay.com/",
  },

  {
    // tag: "Salon",
    name: "Salon",
    image: "/projects/salon.png",
    summary:
      "One or two sentences on what the product does and the core problem it solves for its users.",
    stack: ["React.js", "TailwindCSS", "GSAP"],
    href: "https://salondummy.vercel.app/",
  },

  {
    // tag: "Dental",
    name: "Dentoi",
    image: "/projects/dental.png",
    summary:
      "One or two sentences on what the product does and the core problem it solves for its users.",
    stack: ["React.js", "TailwindCSS", "GSAP"],
    href: "https://dainteldummy.vercel.app/",
  },

  {
    // tag: "cafe",
    name: "Latte Laven Cafe",
    image: "/projects/P-3.png",
    summary:
      "One or two sentences on what the product does and the core problem it solves for its users.",
    stack: ["React.js", "TailwindCSS", "MongoDB"],
    href: "https://cafedummy.vercel.app/",
  },

  {
    // tag: "WEBSITE",
    name: "Quirk",
    image: "/projects/p-1.png",
    summary:
      "Quirk is a health & fitness tracker app that helps you set out realistic goals that you can accomplish without many hurdles. Sometimes, we keep bigger goals but end up help you keep fit.",
    stack: ["React.js", "TailwindCSS", "MongoDB"],
    href: "https://gymdummy.vercel.app/",
  },

  {
    // tag: "LANDING PAGE",
    name: "Travel Bug",
    image: "/projects/p-4.png",
    summary:
      "I developed a Travel Bug website using React.js, TailwindCSS, MongoDB, Figma, incorporating smooth animations to create a visually immersive, interactive, and engaging user experience throughout the site.]",
    stack: ["React.js", "TailwindCSS", "MongoDB", "Figma",
    href: "https://cozy-llama-cc3aa2.netlify.app/",
  },
  
  {
    // tag: "LANDING PAGE",
    name: "Real Estate",
    // image: "/projects/p-4.png",
    summary:
      "I developed a Travel Bug website using React.js, TailwindCSS, MongoDB, Figma incorporating smooth animations to create a visually immersive, interactive, and engaging user experience throughout the site.",
    stack: ["Next.js", "TailwindCSS", "Figma"],
    href: "https://real-estate-phi-blond.vercel.app/",
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
                <div className="relative h-48 md:h-56 overflow-hidden">
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-black/30" />

                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-display font-semibold text-white text-2xl tracking-tight">
                      {p.name}
                    </span>
                  </div>
                </div>

                <div className="p-7 md:p-8">
                  {/* <span className="font-mono text-[11px] tracking-widest text-muted-2">
                                        {p.tag}
                                    </span> */}

                  <h3 className="font-display font-semibold text-xl mt-2 mb-3 transition-transform duration-300 group-hover:translate-x-1">
                    {p.name}
                  </h3>

                  <p className="text-muted text-sm leading-relaxed mb-6">
                    {p.summary}
                  </p>

                  <div className="flex items-center justify-between">
                    {/* <ul className="flex flex-wrap gap-2">
                                            {p.stack.map((s) => (
                                                <li
                                                    key={s}
                                                    className="text-xs font-mono tracking-wide text-muted-2 border border-line-soft rounded-full px-3 py-1"
                                                >
                                                    {s}
                                                </li>
                                            ))}
                                        </ul> */}

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
