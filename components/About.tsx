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
        },
      });

      // Counter animation
      gsap.utils.toArray<HTMLElement>(".stat-number").forEach((element) => {
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
            element.textContent = Math.floor(counter.value).toString();
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
      className="overflow-hidden bg-[#f5f5f2] px-5 py-28 md:px-8 md:py-40"
    >
      <div className="mx-auto max-w-[1400px]">
        {/* Top Label */}
        <div className="mb-20">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#4B20FF]">
           About Axxentra
          </p>
        </div>

        {/* Main Heading */}
        <div className="about-heading max-w-[1200px]">
          <div className="overflow-hidden">
            <h2 className="about-heading-line text-5xl font-semibold leading-[0.95] tracking-[-0.06em] md:text-8xl">
              We turn ideas
            </h2>
          </div>

          <div className="overflow-hidden">
            <h2 className="about-heading-line text-5xl font-semibold leading-[0.95] tracking-[-0.06em] md:text-8xl">
              into digital
            </h2>
          </div>

          <div className="overflow-hidden">
            <h2 className="about-heading-line text-5xl font-semibold leading-[0.95] tracking-[-0.06em] text-[#4B20FF] md:text-8xl">
              products.
            </h2>
          </div>
        </div>

        {/* Description */}
        <div className="about-description mt-16 grid gap-10 md:grid-cols-[1fr_1.5fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-neutral-400">
              Who we are
            </p>
          </div>

          <div>
            <p className="max-w-3xl text-2xl leading-[1.25] tracking-[-0.02em] text-neutral-700 md:text-4xl">
              Axxentra is a digital product studio focused on building
              high-performance websites, SaaS platforms, MVPs and
              AI-powered digital solutions.
            </p>

            <p className="mt-8 max-w-2xl text-base leading-relaxed text-neutral-500 md:text-lg">
              We combine thoughtful design with modern engineering to create
              products that are fast, scalable and built around real
              business goals.
            </p>

            <motion.a
              href="#contact"
              whileHover={{ x: 8 }}
              transition={{ duration: 0.3 }}
              className="mt-10 inline-flex items-center gap-3 border-b border-[#4B20FF] pb-2 text-sm font-medium text-[#4B20FF]"
            >
              Work with us
            </motion.a>
          </div>
        </div>

        {/* Stats */}
        <div className="stats-grid mt-28 grid border-y border-black/15 md:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="stat-item border-b border-black/15 px-0 py-10 md:border-b-0 md:border-r md:px-8 md:py-12 md:first:pl-0 md:last:border-r-0"
            >
              <div className="flex items-start">
                <span
                  data-value={stat.value}
                  className="stat-number text-6xl font-semibold leading-none tracking-[-0.06em] md:text-7xl"
                >
                  0
                </span>

                <span className="ml-1 text-3xl font-medium">
                  {stat.suffix}
                </span>
              </div>

              <p className="mt-5 text-sm uppercase tracking-[0.15em] text-neutral-500">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
