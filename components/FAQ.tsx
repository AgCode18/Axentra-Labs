// "use client";

// import { useState } from "react";
// import { Reveal } from "./Reveal";

// const FAQS = [
//   {
//     q: "Do you actually code, or use no-code tools?",
//     a: "We hand-write every product on Next.js, TypeScript, and Postgres. No-code platforms are fast to demo but painful to scale or customize once real users show up — so we skip them entirely.",
//   },
//   {
//     q: "How is an MVP done in just 21 days?",
//     a: "By scoping tightly. We pick the 3–4 features that actually test your core idea, skip the rest, and run a senior-only team with no committee approvals slowing things down. Bigger builds get an honest, upfront timeline instead.",
//   },
//   {
//     q: "What happens after the MVP ships?",
//     a: "You choose: move to a monthly Build Partner retainer and we keep shipping features based on real user feedback, or take the full codebase — clean, documented, and ready for any developer to pick up.",
//   },
//   {
//     q: "What's included in the MVP Sprint?",
//     a: "A live, hosted web app with your core features (auth, billing, and dashboards are common), a responsive UI, and a production deployment. Custom Figma-level design can be added, which extends the timeline slightly.",
//   },
//   {
//     q: "My product has 10+ features. Can you build all of them in 21 days?",
//     a: "Probably not in one sprint — and that's the right call. We help you cut down to the leanest version that still validates the idea, then plan future phases based on real usage instead of guesses.",
//   },
//   {
//     q: "Who actually owns the code?",
//     a: "You do, from the first commit. Repository, environment, and credentials are set up under your accounts, not ours.",
//   },
// ];

// function FAQItem({ q, a }: { q: string; a: string }) {
//   const [open, setOpen] = useState(false);
//   return (
//     <div className="border-b border-line-soft group">
//       <button
//         onClick={() => setOpen((v) => !v)}
//         className="w-full flex items-center justify-between gap-6 py-6 text-left"
//         aria-expanded={open}
//       >
//         <span className={`font-display font-medium text-base md:text-lg transition-colors duration-300 ${open ? "text-blue" : "group-hover:text-blue"}`}>
//           {q}
//         </span>
//         <svg
//           className={`shrink-0 transition-all duration-300 group-hover:border-blue/40 rounded-full border border-line p-1 box-content ${open ? "rotate-45 border-blue/40" : ""}`}
//           width="18"
//           height="18"
//           viewBox="0 0 20 20"
//           fill="none"
//         >
//           <path d="M10 3V17M3 10H17" stroke={open ? "#3E6BFF" : "#9AA0BD"} strokeWidth="1.4" strokeLinecap="round" />
//         </svg>
//       </button>
//       <div
//         className="grid transition-all duration-300 ease-out"
//         style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
//       >
//         <div className="overflow-hidden">
//           <p className="text-muted text-sm md:text-base leading-relaxed pb-6 max-w-2xl">{a}</p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export function FAQ() {
//   return (
//     <section id="faq" className="relative bg-ink py-24 md:py-32">
//       <div className="max-w-4xl mx-auto px-5 md:px-8">
//         <Reveal>
//           <span className="font-mono text-xs tracking-[0.25em] text-blue-soft">FAQ</span>
//           <h2 className="font-display font-semibold text-3xl md:text-5xl mt-4 leading-[1.1]">
//             Questions, answered straight.
//           </h2>
//         </Reveal>

//         <div className="mt-14">
//           {FAQS.map((f) => (
//             <FAQItem key={f.q} {...f} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }



"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const faqs = [
  {
    question: "What kind of projects does Axentra build?",
    answer:
      "We build modern websites, SaaS platforms, MVPs, business applications and AI-powered digital products. We focus on products that solve real business problems rather than adding unnecessary features.",
  },
  {
    question: "How long does a project usually take?",
    answer:
      "It depends on the scope. A landing page can take a few days, while an MVP or SaaS product can take several weeks. Before development starts, we define the scope and provide a clear timeline.",
  },
  {
    question: "Can you build an MVP from just an idea?",
    answer:
      "Yes. We can take a product from an initial idea through planning, UI/UX, development and deployment. The goal is to identify the core features and get a usable product into the hands of real users quickly.",
  },
  {
    question: "What technologies do you use?",
    answer:
      "Our primary stack includes Next.js, React, TypeScript, Tailwind CSS and Node.js. Depending on the project, we also work with databases, cloud infrastructure, APIs, AI services and other modern technologies.",
  },
  {
    question: "Do you work with existing projects?",
    answer:
      "Yes. We can work with an existing codebase to improve performance, fix issues, add features, redesign the interface or continue development.",
  },
  {
    question: "How do we start a project?",
    answer:
      "Simply get in touch with us. We'll understand your requirements, discuss the goals and recommend the most practical approach for your project.",
  },
];

export default function FAQ() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".faq-header", {
        y: 80,
        opacity: 0,
        duration: 1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".faq-header",
          start: "top 80%",
        },
      });

      gsap.from(".faq-item", {
        y: 60,
        opacity: 0,
        duration: 0.9,
        stagger: 0.1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".faq-list",
          start: "top 80%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="overflow-hidden bg-[#f5f5f2] px-5 py-28 md:px-8 md:py-40"
    >
      <div className="mx-auto max-w-[1400px]">
        {/* Header */}
        <div className="faq-header mx-auto mb-20 max-w-5xl text-center">
          <div>
            <h2 className="text-[clamp(3.5rem,7vw,7.5rem)] font-semibold leading-[0.84] tracking-[-0.065em] text-[#111111]">
              Questions?
              <br />
              <span className="text-[#4B20FF]">We have answers.</span>
            </h2>

            <p className="mx-auto mt-8 max-w-2xl text-base leading-7 text-neutral-500 md:text-xl">
              Everything you need to know before starting your next digital
              product with us.
            </p>
          </div>
        </div>

        {/* FAQ List */}
        <div className="faq-list mx-auto max-w-5xl border-t border-black/10">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;

            return (
              <div
                key={faq.question}
                className="faq-item border-b border-black/10"
              >
                <button
                  type="button"
                  onClick={() =>
                    setActiveIndex(isOpen ? null : index)
                  }
                  className="flex w-full items-center justify-between gap-8 py-7 text-left md:py-9"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-start gap-5 md:gap-8">
                    {/* <span className="mt-1 text-xs font-semibold tracking-[0.15em] text-[#4B20FF]">
                      {String(index + 1).padStart(2, "0")}
                    </span> */}

                    <span className="text-xl font-medium tracking-[-0.02em] text-[#111111] md:text-3xl">
                      {faq.question}
                    </span>
                  </div>

                  {/* Plus / Minus */}
                  <motion.span
                    animate={{
                      rotate: isOpen ? 45 : 0,
                    }}
                    transition={{
                      duration: 0.3,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#111111] text-xl text-white md:h-12 md:w-12"
                  >
                    +
                  </motion.span>
                </button>

                {/* Answer */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{
                        height: 0,
                        opacity: 0,
                      }}
                      animate={{
                        height: "auto",
                        opacity: 1,
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                      }}
                      transition={{
                        duration: 0.4,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="overflow-hidden"
                    >
                      <div className="pb-8 pl-10 md:pl-[72px]">
                        <p className="max-w-3xl text-base leading-relaxed text-neutral-500 md:text-lg">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

       
      </div>
    </section>
  );
}