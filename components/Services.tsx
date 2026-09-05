// import { Reveal } from "./Reveal";

// const SERVICES = [
//   {
//     n: "",
//     title: "SaaS Development",
//     desc: "Full-stack build: auth, billing, dashboards, and the core workflow that proves your product — live and testable in 21 days.",
//     features: ["Auth & user management", "Stripe billing", "Admin dashboard", "Production deploy"],
//   },
//   {
//     n: "",
//     title: "MVP Development",
//     desc: "Full-stack build: auth, billing, dashboards, and the core workflow that proves your product — live and testable in 21 days.",
//     features: ["user management", "Stripe billing", "Admin dashboard", "Production deploy"],
//   },
//   {
//     n: "",
//     title: "Website Development",
//     desc: "Marketing sites and web apps built on Next.js for speed and SEO, not a page builder that slows down at scale.",
//     features: ["Next.js + Tailwind", "CMS integration", "Sub-second load times", "Fully responsive"],
//   },
  
//   {
//     n: "",
//     title: "Landing Page Design",
//     desc: "A single, conversion-focused page for a launch, a waitlist, or a fundraise — live in a week.",
//     features: ["Copy + UX design", "A/B-ready structure", "Analytics wired in", "7-day delivery"],
//   },
//   {
//     n: "",
//     title: "Product Redesign",
//     desc: "Already shipped and losing users at onboarding? We rebuild the UX around what your data says is actually breaking.",
//     features: ["UX audit", "Design system", "Incremental rollout", "No downtime migration"],
//   },
//   {
//     n: "",
//     title: "Digital Marketing",
//     desc: "Boost your online presence, reach the right audience, and generate more leads with our result-driven digital marketing solutions, including SEO, social media marketing, paid advertising, content marketing, and lead generation.",
//     features: ["Google Ads", "Meta Ads", "SEO", "SMM"],
//   },

// ];

// export function Services() {
//   return (
//     <section id="work" className="relative bg-ink py-24 md:py-32">
//       <div className="max-w-7xl mx-auto px-5 md:px-8">
//         <Reveal>
//           <span className="font-mono text-xs tracking-[0.25em] text-blue-soft">WHAT WE BUILD</span>
//           <h2 className="font-display font-semibold text-3xl md:text-5xl mt-4 max-w-2xl leading-[1.1]">
//             Every kind of product, one senior team.
//           </h2>
//         </Reveal>

//         <div className="grid md:grid-cols-2 gap-6 mt-16">
//           {SERVICES.map((s, i) => (
//             <Reveal key={s.n} delay={i * 90}>
//               <div className="card-lift group relative rounded-2xl border border-line bg-surface p-8 md:p-10 h-full hover:border-blue/40 overflow-hidden">
//                 <div
//                   aria-hidden
//                   className="absolute -top-16 -right-16 w-40 h-40 rounded-full bg-grad-brand opacity-0 group-hover:opacity-[0.12] blur-3xl transition-opacity duration-500"
//                 />
//                 <span className="font-mono text-xs text-muted-2 transition-colors duration-300 group-hover:text-blue">{s.n}</span>
//                 <h3 className="font-display font-semibold text-2xl mt-4 mb-3 text transition-transform duration-300 group-hover:translate-x-1">{s.title}</h3>
//                 <p className="text-muted text-sm leading-relaxed mb-6">{s.desc}</p>
//                 <ul className="flex flex-wrap gap-2">
//                   {s.features.map((f) => (
//                     <li
//                       key={f}
//                       className="text-xs font-mono tracking-wide text-black border border-line-soft rounded-full px-3 py-1.5 transition-colors duration-300 hover:border-blue/40 hover:text-blue hover:bg-surface-2"
//                     >
//                       {f}
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </Reveal>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }



"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Magnetic from "./Magnetic";

const services = [
  {
    number: "01",
    title: "Web Development",
    description:
      "High-performance websites and web applications built to turn attention into measurable business growth.",
    tags: ["Next.js", "React", "Node.js"],
  },
  {
    number: "02",
    title: "Graphic Design",
    description:
      "Visual identities, digital graphics and creative systems that make your brand impossible to ignore.",
    tags: ["Branding", "UI Design", "Creative"],
  },
  {
    number: "03",
    title: "MVP Development",
    description:
      "Turn your idea into a working product quickly, validate the market and build a foundation ready to scale.",
    tags: ["MVP", "Prototype", "Full Stack"],
  },
  {
    number: "04",
    title: "SaaS Solutions",
    description:
      "Scalable SaaS platforms designed around your business model, users and long-term product vision.",
    tags: ["SaaS", "APIs", "Cloud"],
  },
  {
    number: "05",
    title: "Digital Marketing",
    description:
      "Creative campaigns and digital strategies designed to increase visibility, leads and conversions.",
    tags: ["Social Media", "Ads", "Growth"],
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#f5f5f2] text-[#111111]"
    >
      {/* =====================================================
          TOP DECORATION
      ===================================================== */}

      <div className="pointer-events-none absolute left-[-150px] top-[15%] h-[400px] w-[400px] rounded-full bg-[#4B20FF]/10 blur-[130px]" />

      <div className="pointer-events-none absolute right-[-200px] top-[45%] h-[500px] w-[500px] rounded-full bg-[#4B20FF]/5 blur-[150px]" />

      {/* Small decorative circle */}
      

      <div className="mx-auto max-w-[1500px] px-6 py-28 md:px-10 md:py-36 lg:px-16">
        {/* =====================================================
            HEADER
        ===================================================== */}

        <div
          data-reveal="up"
          className="relative mb-24"
        >
          {/* <div className="mb-8 flex items-center gap-4">
            <span className="h-3 w-3 rotate-45 bg-[#C7FF00]" />

            <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#C7FF00]">
              What we do
            </span>
          </div> */}

          <div className="grid gap-10 lg:grid-cols-[1.5fr_0.5fr] lg:items-end">
            <h2 className="max-w-6xl text-[clamp(4rem,10vw,10rem)] font-black uppercase leading-[0.78] tracking-[-0.07em] text-[#111111]">
              Our
              <br />

              <span className="text-[#4B20FF]">
                Services
              </span>
            </h2>

            <div className="max-w-sm lg:pb-3">
              <p className="text-sm leading-7 text-neutral-500 md:text-base">
                We combine strategy, design and technology
                to build digital experiences that move
                businesses forward.
              </p>

              <div className="mt-8 flex items-center gap-4">

              
              </div>
            </div>
          </div>
        </div>

        {/* =====================================================
            SERVICES LIST
        ===================================================== */}

        <div
          data-stagger
          className="border-t border-black/10"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.number}
              initial="initial"
              whileHover="hover"
              className="group relative border-b border-black/10"
            >
              {/* Hover background */}

              <motion.div
                variants={{
                  initial: {
                    scaleY: 0,
                    transformOrigin: "bottom",
                  },
                  hover: {
                    scaleY: 1,
                    transformOrigin: "bottom",
                  },
                }}
                transition={{
                  duration: 0.5,
                  ease: [0.76, 0, 0.24, 1],
                }}
                className="absolute inset-0 bg-[#4B20FF]"
              />

              {/* Main row */}

              <div className="relative z-10 grid gap-8 py-10 md:grid-cols-[100px_1.2fr_1fr_100px] md:items-center md:py-14">
                {/* NUMBER */}

                <div>
                  <span className="font-mono text-sm font-bold tracking-wider text-[#4B20FF] transition-colors duration-300 group-hover:text-white">
                    {/* {service.number} */}
                  </span>
                </div>

                {/* TITLE */}

                <h3 className="text-[clamp(2rem,4vw,4.5rem)] font-black uppercase leading-none tracking-[-0.05em] text-[#111111] transition-colors duration-300 group-hover:text-white">
                  {service.title}
                </h3>

                {/* DESCRIPTION */}

                <div>
                  <p className="max-w-lg text-sm leading-6 text-neutral-500 transition-colors duration-300 group-hover:text-white/75 md:text-base">
                    {service.description}
                  </p>

                  {/* Tags */}

                  <div className="mt-5 flex flex-wrap gap-2">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-black/10 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.15em] text-neutral-500 transition-colors duration-300 group-hover:border-white/30 group-hover:text-white/75"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* ARROW */}

             
              </div>

              {/* Hover index */}

              <motion.span
                variants={{
                  initial: {
                    opacity: 0,
                    x: -20,
                  },
                  hover: {
                    opacity: 1,
                    x: 0,
                  },
                }}
                transition={{
                  duration: 0.3,
                }}
                className="pointer-events-none absolute bottom-3 right-32 hidden text-[9px] font-bold uppercase tracking-[0.2em] text-white/60 md:block"
              >
                Explore service
              </motion.span>
            </motion.div>
          ))}
        </div>

        {/* =====================================================
            BOTTOM CTA
        ===================================================== */}

        <div
          data-reveal="up"
          className="mt-20 grid gap-10 md:grid-cols-2 md:items-end"
        >
          <div>
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.25em] text-[#4B20FF]">
              Have a project?
            </p>

            <h3 className="max-w-2xl text-4xl font-black uppercase leading-[0.9] tracking-[-0.05em] md:text-6xl">
              Let's make
              <br />
              something
              <br />
              <span className="text-[#4B20FF]">
                impossible.
              </span>
            </h3>
          </div>

          <div className="md:flex md:justify-end">
            <Magnetic strength={0.25}>
              <Link
                href="#contact"
                className="group relative inline-flex items-center gap-5 overflow-hidden rounded-full bg-[#4B20FF] px-7 py-5 text-sm font-black uppercase tracking-wider text-white"
              >
                <span className="relative z-10">
                  Start a project
                </span>

                <span className="absolute inset-0 translate-y-full bg-[#111111] transition-transform duration-500 group-hover:translate-y-0" />
              </Link>
            </Magnetic>
          </div>
        </div>
      </div>

      {/* =====================================================
          BOTTOM MARQUEE
      ===================================================== */}

      <div className="relative overflow-hidden border-y border-black/10 bg-[#4B20FF] py-5">
        <motion.div
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex w-max items-center"
        >
          {[
            "WEB DEVELOPMENT",
            "✦",
            "GRAPHIC DESIGN",
            "✦",
            "MVP DEVELOPMENT",
            "✦",
            "SAAS SOLUTIONS",
            "✦",
            "DIGITAL MARKETING",
            "✦",
            "WEB DEVELOPMENT",
            "✦",
            "GRAPHIC DESIGN",
            "✦",
            "MVP DEVELOPMENT",
            "✦",
            "SAAS SOLUTIONS",
            "✦",
            "DIGITAL MARKETING",
            "✦",
          ].map((item, index) => (
            <span
              key={index}
              className={`mx-5 whitespace-nowrap text-2xl font-black uppercase tracking-[-0.03em] ${
                item === "✦"
                  ? "text-white"
                  : "text-white"
              } md:text-4xl`}
            >
              {item}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}