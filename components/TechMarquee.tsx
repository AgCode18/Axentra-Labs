"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const technologies = [
  "Next.js",
  "TypeScript",
  "React",
  "Node.js",
  "Express.js",
  "MongoDB",
  "MySQL",
  "PostgreSQL",
  "AWS",
  "Docker",
  "Git",
  "REST APIs",
];

export default function TechMarquee() {
  const sectionRef = useRef<HTMLElement>(null);
  const rowOneRef = useRef<HTMLDivElement>(null);
  const rowTwoRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const rowOne = rowOneRef.current;
      const rowTwo = rowTwoRef.current;

      if (!rowOne || !rowTwo) return;

      /*
       * Because the technologies are duplicated,
       * half of the scrollWidth represents one complete set.
       */
      const firstRowWidth = rowOne.scrollWidth / 2;
      const secondRowWidth = rowTwo.scrollWidth / 2;

      // Row 1 → moves left
      const tl1 = gsap.timeline({
        repeat: -1,
      });

      tl1.to(rowOne, {
        x: -firstRowWidth,
        duration: 25,
        ease: "none",
      });

      // Row 2 → moves right
      const tl2 = gsap.timeline({
        repeat: -1,
      });

      tl2.fromTo(
        rowTwo,
        {
          x: -secondRowWidth,
        },
        {
          x: 0,
          duration: 28,
          ease: "none",
        }
      );

      // Header reveal
      gsap.fromTo(
        ".tech-header",
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power4.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            once: true,
          },
        }
      );
    }, sectionRef);

    return () => {
      ctx.revert();
    };
  }, []);

  const renderTechnologies = () =>
    [...technologies, ...technologies].map((tech, index) => (
      <div
        key={`${tech}-${index}`}
        className="
          flex
          shrink-0
          items-center
          gap-5
          md:gap-8
        "
      >
        <span
          className="
            whitespace-nowrap
            text-[2.75rem]
            font-medium
            leading-none
            tracking-[-0.04em]
            md:text-7xl
          "
        >
          {tech}
        </span>

        <span
          className="
            shrink-0
            text-xl
            text-[#4B20FF]
            md:text-4xl
          "
        >
          ✦
        </span>
      </div>
    ));

  return (
    <section
      ref={sectionRef}
      className="
        relative
        w-full
        max-w-full
        overflow-hidden
        py-24
        text-black
        md:py-36
      "
    >
      {/* HEADER */}
      <div
        className="
          tech-header
          mx-auto
          mb-16
          w-full
          max-w-7xl
          px-5
          md:mb-20
          md:px-8
        "
      >
        <div className="w-full min-w-0">
          <h2
            className="
              w-full
              max-w-5xl
              text-center
              text-[2.75rem]
              font-semibold
              leading-[0.95]
              tracking-[-0.055em]
              md:text-7xl
              lg:text-8xl
            "
          >
            Built with modern{" "}
            <span className="text-blue-700">
              technology.
            </span>
          </h2>

          <p
            className="
              mx-auto
              mt-6
              max-w-2xl
              text-center
              text-base
              leading-relaxed
              text-black/55
              md:mt-8
              md:text-lg
            "
          >
            We use a modern development stack to build fast,
            scalable and maintainable digital products.
          </p>
        </div>
      </div>

      {/* ROW 1 */}
      <div
        className="
          w-full
          max-w-full
          overflow-hidden
        "
      >
        <div
          ref={rowOneRef}
          className="
            flex
            w-max
            min-w-max
            items-center
            gap-5
            whitespace-nowrap
            md:gap-8
          "
        >
          {renderTechnologies()}
        </div>
      </div>

      {/* ROW 2 */}
      <div
        className="
          mt-6
          w-full
          max-w-full
          overflow-hidden
          md:mt-8
        "
      >
        <div
          ref={rowTwoRef}
          className="
            flex
            w-max
            min-w-max
            items-center
            gap-5
            whitespace-nowrap
            md:gap-8
          "
        >
          {renderTechnologies()}
        </div>
      </div>

      {/* BOTTOM LINE */}
      <div
        className="
          mx-auto
          mt-16
          w-full
          max-w-7xl
          px-5
          md:mt-20
          md:px-8
        "
      >
        <div className="border-t border-black/10 pt-6" />
      </div>
    </section>
  );
}