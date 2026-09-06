
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