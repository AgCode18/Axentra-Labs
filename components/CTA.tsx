// import { Reveal } from "./Reveal";
// import { LogoMark } from "./Logo";

// interface CTAProps {
//   onContactClick: () => void;
// }

// export function CTA({ onContactClick }: CTAProps) {
//   return (
//     <section
//       id="contact"
//       className="relative bg-surface py-28 md:py-36 overflow-hidden"
//     >
//       <div
//         aria-hidden
//         className="absolute inset-0 bg-grad-radial-fade opacity-70"
//       />

//       <div
//         aria-hidden
//         className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.06]"
//       >
//         <LogoMark className="h-[420px] w-[420px]" />
//       </div>

//       <div className="relative max-w-3xl mx-auto px-5 md:px-8 text-center">
//         <Reveal>
//           <span className="font-mono text-xs tracking-[0.25em] text-blue-soft">
//             LET&apos;S BUILD
//           </span>

//           <h2 className="font-display font-semibold text-4xl md:text-6xl mt-5 leading-[1.05]">
//             Have an idea worth 21 days?
//           </h2>

//           <p className="mt-6 text-muted text-base md:text-lg max-w-xl mx-auto">
//             Tell us what you&apos;re building. We&apos;ll scope it, quote it,
//             and if it&apos;s a fit, have your MVP live before the month is out.
//           </p>

//           <div className="mt-10 flex flex-wrap justify-center gap-4">
//             {/* Changed from <a> to <button> */}
//             <button
//               type="button"
//               onClick={onContactClick}
//               className="shine-wrap group inline-flex items-center gap-2 rounded-full bg-grad-brand text-white text-sm font-medium px-7 py-4 shadow-glow transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_40px_-12px_rgba(62,107,255,0.5)] active:translate-y-0"
//             >
//               Start Your Project

//               <svg
//                 width="14"
//                 height="14"
//                 viewBox="0 0 14 14"
//                 fill="none"
//                 className="transition-transform duration-300 group-hover:translate-x-1"
//               >
//                 <path
//                   d="M2 7H12M12 7L7.5 2.5M12 7L7.5 11.5"
//                   stroke="white"
//                   strokeWidth="1.4"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                 />
//               </svg>
//             </button>
//           </div>
//         </Reveal>
//       </div>
//     </section>
//   );
// }


"use client";

import { useLayoutEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface CTAProps {
  onContactClick: () => void;
}

export default function ContactCTA({ onContactClick }: CTAProps) {
  const sectionRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".cta-content", {
        y: 100,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });

      gsap.from(".cta-orb", {
        scale: 0.5,
        opacity: 0,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative min-h-[85vh] overflow-hidden bg-[#111A3A] px-5 py-28 text-white md:px-8 md:py-40"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="cta-orb absolute -right-32 -top-32 h-[500px] w-[500px] rounded-full bg-[#4B20FF] opacity-40 blur-[120px]" />

        <div className="absolute -bottom-40 -left-40 h-[450px] w-[450px] rounded-full bg-[#4B20FF] opacity-20 blur-[130px]" />
      </div>

      {/* Grid */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.06]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <div className="relative mx-auto flex min-h-[60vh] max-w-[1400px] flex-col justify-between">
        {/* Label */}
        <div>
          <div className="flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-[#7C5CFF]" />

            <p className="text-sm font-medium uppercase tracking-[0.2em] text-white/50">
              08 / Start a project
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="cta-content py-20">
          <h2 className="max-w-[1200px] text-[15vw] font-semibold uppercase leading-[0.8] tracking-[-0.075em] md:text-[10vw]">
            Let&apos;s
            <br />
            <span className="text-[#7C5CFF]">build.</span>
          </h2>

          <div className="mt-12 flex flex-col justify-between gap-10 md:flex-row md:items-end">
            <p className="max-w-xl text-lg leading-relaxed text-white/50 md:text-xl">
              Have an idea, a business problem or a product you want to
              build? Tell us about it. We&apos;ll figure out the best way
              forward.
            </p>

            <motion.button
              type="button"
              onClick={onContactClick}
              whileHover={{
                scale: 1.06,
                rotate: -2,
              }}
              whileTap={{
                scale: 0.96,
              }}
              className="group flex h-36 w-36 shrink-0 items-center justify-center rounded-full bg-[#4B20FF] text-center text-sm font-semibold text-white transition-shadow duration-300 hover:shadow-[0_0_80px_rgba(75,32,255,0.45)] md:h-44 md:w-44"
            >
              <span>
                Start a
                <br />
                conversation ↗
              </span>
            </motion.button>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col gap-3 border-t border-white/10 pt-6 md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-white/35">
            Your idea deserves to be built properly.
          </p>

          <p className="text-sm text-white/35">
            Available for selected projects
          </p>
        </div>
      </div>
    </section>
  );
}