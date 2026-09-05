"use client";

import { useLayoutEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    number: "01",
    title: "Discover",
    description:
      "We understand your business, users, goals and technical requirements before writing a single line of code.",
    points: [
      "Business & product goals",
      "User requirements",
      "Technical planning",
      "Project roadmap",
    ],
  },
  {
    number: "02",
    title: "Design",
    description:
      "We turn the product strategy into a clear, intuitive and conversion-focused user experience.",
    points: [
      "User flows",
      "Wireframes",
      "UI design",
      "Responsive layouts",
    ],
  },
  {
    number: "03",
    title: "Develop",
    description:
      "We build the product using modern technologies with a focus on performance, scalability and maintainability.",
    points: [
      "Frontend development",
      "Backend & APIs",
      "Database architecture",
      "Testing & optimization",
    ],
  },
  {
    number: "04",
    title: "Launch",
    description:
      "We deploy, test and optimize the product so it is ready for real users and real business growth.",
    points: [
      "Production deployment",
      "Performance testing",
      "Analytics setup",
      "Post-launch support",
    ],
  },
];

export default function Process() {
  const sectionRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const ctx = gsap.context(() => {
      // Header animation
      gsap.from(".process-header", {
        y: 80,
        opacity: 0,
        duration: 1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".process-header",
          start: "top 80%",
          once: true,
        },
      });

      // Card content reveal
      gsap.utils
        .toArray<HTMLElement>(".process-content")
        .forEach((content) => {
          gsap.from(content, {
            y: 50,
            opacity: 0,
            duration: 0.9,
            ease: "power4.out",
            scrollTrigger: {
              trigger: content,
              start: "top 80%",
              once: true,
            },
          });
        });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="process"
      className="relative bg-[#f5f5f2] px-5 py-28 md:px-8 md:py-40"
    >
      {/* ============================================
          BACKGROUND
      ============================================ */}

      <div className="pointer-events-none absolute right-[-200px] top-40 h-[500px] w-[500px] rounded-full bg-[#C7FF00]/10 blur-[120px]" />

      <div className="pointer-events-none absolute bottom-40 left-[-200px] h-[500px] w-[500px] rounded-full bg-[#4B20FF]/5 blur-[120px]" />

      <div className="relative mx-auto max-w-[1400px]">

        {/* ============================================
            HEADER
        ============================================ */}

        <div className="process-header mb-24 text-center lg:mb-32">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-[clamp(3.5rem,7vw,7.5rem)] font-semibold leading-[0.84] tracking-[-0.065em] text-[#111111]">
              From idea
              <span className="text-[#4B20FF]"> to launch.</span>
            </h2>

            <p className="mx-auto mt-8 max-w-2xl text-base leading-7 text-neutral-500 md:text-xl">
              A simple, transparent process designed to keep
              projects moving without unnecessary complexity.
            </p>
          </div>
        </div>

        {/* =================================================
            STACKING AREA

            IMPORTANT:
            All cards are direct children of this container.
            Do NOT put each card inside another wrapper.
        ================================================= */}

        <div className="relative">

          {steps.map((step, index) => (
            <article
              key={step.number}
              className="
                sticky
                top-24
                mb-8
                min-h-[560px]
                overflow-hidden
                rounded-[30px]
                border
                border-black/10
                bg-white
                shadow-[0_30px_90px_rgba(0,0,0,0.12)]
                md:min-h-[600px]
                lg:min-h-[620px]
              "
              style={{
                zIndex: index + 1,
              }}
            >

              {/* ============================================
                  ACCENT CIRCLE
              ============================================ */}

              {/* <motion.div
                className="absolute right-7 top-7 h-14 w-14 rounded-full bg-[#C7FF00] md:right-12 md:top-12 md:h-20 md:w-20"
                whileHover={{
                  scale: 1.15,
                  rotate: 45,
                }}
                transition={{
                  duration: 0.4,
                }}
              /> */}


              <div className="process-content relative z-10 flex min-h-[560px] flex-col justify-between p-7 md:min-h-[600px] md:p-12 lg:min-h-[620px] lg:p-16">

           

                <div className="flex items-start justify-between">

                  <div>

                    <div className="mt-4 flex items-center gap-3">
                      <span className="h-2 w-2 rounded-full bg-black" />

                      <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-neutral-500">
                        Process
                      </span>
                    </div>
                  </div>
                  
                </div>

                

                <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">

                
                  <div>
                    <h3 className="text-[clamp(3.5rem,7vw,7rem)] font-medium leading-[0.82] tracking-[-0.07em] text-[#111111]">
                      {step.title}
                    </h3>
                  </div>

               

                  <div className="max-w-2xl">

                    <p className="text-lg leading-7 text-neutral-500 md:text-xl md:leading-8">
                      {step.description}
                    </p>

         

                    <div className="mt-10 grid gap-x-10 gap-y-3 sm:grid-cols-2">

                      {step.points.map((point) => (
                        <motion.div
                          key={point}
                          className="group/point flex items-center gap-3 border-t border-black/10 py-4"
                          whileHover={{
                            x: 5,
                          }}
                          transition={{
                            duration: 0.25,
                          }}
                        >
                          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-black transition-transform duration-300 group-hover/point:scale-150" />

                          <span className="text-xs font-medium text-neutral-700 md:text-sm">
                            {point}
                          </span>
                        </motion.div>
                      ))}

                    </div>
                  </div>
                </div>

                

                <div className="flex items-end justify-between border-t border-black/10 pt-6">

                  <div>

                  </div>

                  <motion.div
                    className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.15em]"
                    whileHover={{
                      x: 6,
                    }}
                  >

                  </motion.div>

                </div>
              </div>

             

              <div className="absolute bottom-0 left-0 h-1 w-full bg-[#C7FF00]" />

            </article>
          ))}
        </div>

       

        <motion.div
          className="mt-12 rounded-[30px] bg-[#181818] p-7 text-white md:p-12"
          whileHover={{
            y: -5,
          }}
          transition={{
            duration: 0.35,
          }}
        >
          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">

            <div>
              <div className="mb-4 flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#C7FF00]" />

                <p className="text-[9px] font-black uppercase tracking-[0.2em] text-[#C7FF00]">
                  Our approach
                </p>
              </div>

              <h3 className="text-2xl font-medium leading-tight tracking-[-0.04em] md:text-4xl">
                No unnecessary meetings.
                <br />
                Just focused execution.
              </h3>
            </div>

            <motion.a
              href="#contact"
              className="inline-flex w-fit items-center gap-5 rounded-full bg-[#C7FF00] px-7 py-4 text-xs font-black uppercase tracking-wider text-black"
              whileHover={{
                scale: 1.04,
              }}
              whileTap={{
                scale: 0.97,
              }}
            >
              Start a project

              
            </motion.a>

          </div>
        </motion.div>

      </div>
    </section>
  );
}