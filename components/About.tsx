"use client";

import { useLayoutEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  {
    value: 10,
    suffix: "+",
    label: "Projects Built",
  },
  {
    value: 5,
    suffix: "+",
    label: "Technologies",
  },
  {
    value: 100,
    suffix: "%",
    label: "Focus on Quality",
  },
  {
    value: 24,
    suffix: "/7",
    label: "Digital Thinking",
  },
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Heading reveal
      gsap.from(".about-heading-line", {
        yPercent: 110,
        opacity: 0,
        duration: 1.2,
        stagger: 0.12,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".about-heading",
          start: "top 80%",
          once: true,
        },
      });

      // Description reveal
      gsap.from(".about-description", {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".about-description",
          start: "top 80%",
          once: true,
        },
      });

      // Stats reveal
      gsap.from(".stat-item", {
        y: 60,
        opacity: 0,
        duration: 0.9,
        stagger: 0.12,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".stats-grid",
          start: "top 80%",
          once: true,
        },
      });

      // Counter animation
      gsap.utils
        .toArray<HTMLElement>(".stat-number")
        .forEach((element) => {
          const target = Number(element.dataset.value);

          const counter = {
            value: 0,
          };

          gsap.to(counter, {
            value: target,
            duration: 1.8,
            ease: "power2.out",

            scrollTrigger: {
              trigger: element,
              start: "top 85%",
              once: true,
            },

            onUpdate: () => {
              element.textContent = Math.floor(
                counter.value
              ).toString();
            },
          });
        });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="
        relative
        w-full
        max-w-full
        overflow-hidden
        bg-[#f5f5f2]
        px-5
        py-24
        md:px-8
        md:py-40
      "
    >
      <div
        className="
          mx-auto
          w-full
          max-w-[1400px]
          min-w-0
        "
      >
        {/* TOP LABEL */}
        <div className="mb-16 md:mb-20">
          <p
            className="
              text-xs
              font-medium
              uppercase
              tracking-[0.2em]
              text-[#4B20FF]
              md:text-sm
            "
          >
            About Axentra
          </p>
        </div>

        {/* MAIN HEADING */}
        <div
          className="
            about-heading
            w-full
            max-w-[1200px]
            min-w-0
          "
        >
          <div className="overflow-hidden">
            <h2
              className="
                about-heading-line
                w-full
                break-words
                text-[3.25rem]
                font-semibold
                leading-[0.95]
                tracking-[-0.06em]
                sm:text-6xl
                md:text-8xl
              "
            >
              We turn ideas
            </h2>
          </div>

          <div className="overflow-hidden">
            <h2
              className="
                about-heading-line
                w-full
                break-words
                text-[3.25rem]
                font-semibold
                leading-[0.95]
                tracking-[-0.06em]
                sm:text-6xl
                md:text-8xl
              "
            >
              into digital
            </h2>
          </div>

          <div className="overflow-hidden">
            <h2
              className="
                about-heading-line
                w-full
                break-words
                text-[3.25rem]
                font-semibold
                leading-[0.95]
                tracking-[-0.06em]
                text-[#4B20FF]
                sm:text-6xl
                md:text-8xl
              "
            >
              products.
            </h2>
          </div>
        </div>

        {/* DESCRIPTION */}
        <div
          className="
            about-description
            mt-14
            grid
            min-w-0
            gap-10
            md:mt-16
            md:grid-cols-[1fr_1.5fr]
          "
        >
          {/* LEFT */}
          <div>
            <p
              className="
                text-xs
                uppercase
                tracking-[0.2em]
                text-neutral-400
                md:text-sm
              "
            >
              Who we are
            </p>
          </div>

          {/* RIGHT */}
          <div className="min-w-0">
            <p
              className="
                max-w-3xl
                break-words
                text-[1.75rem]
                leading-[1.2]
                tracking-[-0.025em]
                text-neutral-700
                sm:text-3xl
                md:text-4xl
              "
            >
              Axentra is a digital product studio focused on
              building high-performance websites, SaaS
              platforms, MVPs and AI-powered digital solutions.
            </p>

            <p
              className="
                mt-8
                max-w-2xl
                break-words
                text-base
                leading-relaxed
                text-neutral-500
                md:text-lg
              "
            >
              We combine thoughtful design with modern
              engineering to create products that are fast,
              scalable and built around real business goals.
            </p>

            <motion.a
              href="#contact"
              whileHover={{
                x: 8,
              }}
              transition={{
                duration: 0.3,
              }}
              className="
                mt-10
                inline-flex
                max-w-full
                items-center
                gap-3
                border-b
                border-[#4B20FF]
                pb-2
                text-sm
                font-medium
                text-[#4B20FF]
              "
            >
              Work with us
            </motion.a>
          </div>
        </div>

        {/* STATS */}
        <div
          className="
            stats-grid
            mt-20
            grid
            w-full
            max-w-full
            border-y
            border-black/15
            md:mt-28
            md:grid-cols-4
          "
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="
                stat-item
                min-w-0
                border-b
                border-black/15
                px-0
                py-8
                last:border-b-0
                md:border-b-0
                md:border-r
                md:px-8
                md:py-12
                md:first:pl-0
                md:last:border-r-0
              "
            >
              <div className="flex min-w-0 items-start">
                <span
                  data-value={stat.value}
                  className="
                    stat-number
                    min-w-0
                    break-words
                    text-5xl
                    font-semibold
                    leading-none
                    tracking-[-0.06em]
                    sm:text-6xl
                    md:text-7xl
                  "
                >
                  0
                </span>

                <span
                  className="
                    ml-1
                    shrink-0
                    text-2xl
                    font-medium
                    md:text-3xl
                  "
                >
                  {stat.suffix}
                </span>
              </div>

              <p
                className="
                  mt-4
                  text-xs
                  uppercase
                  tracking-[0.15em]
                  text-neutral-500
                  md:mt-5
                  md:text-sm
                "
              >
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}