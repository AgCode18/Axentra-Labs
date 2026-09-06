"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Magnetic from "./Magnetic";

const services = [
  {
    // number: "01",
    title: "Web Development",
    description:
      "High-performance websites and web applications built to turn attention into measurable business growth.",
    tags: ["Next.js", "React", "Node.js"],
  },
  {
    // number: "02",
    title: "Graphic Design",
    description:
      "Visual identities, digital graphics and creative systems that make your brand impossible to ignore.",
    tags: ["Branding", "UI Design", "Creative"],
  },
  {
    // number: "03",
    title: "MVP Development",
    description:
      "Turn your idea into a working product quickly, validate the market and build a foundation ready to scale.",
    tags: ["MVP", "Prototype", "Full Stack"],
  },
  {
    // number: "04",
    title: "SaaS Solutions",
    description:
      "Scalable SaaS platforms designed around your business model, users and long-term product vision.",
    tags: ["SaaS", "APIs", "Cloud"],
  },
  {
    // number: "05",
    title: "Digital Marketing",
    description:
      "Creative campaigns and digital strategies designed to increase visibility, leads and conversions.",
    tags: ["Social Media", "Ads", "Growth"],
  },
];

const marqueeItems = [
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
];

export default function Services() {
  return (
    <section
      id="services"
      className="
        relative
        w-full
        max-w-full
        min-w-0
        overflow-hidden
        bg-[#f5f5f2]
        text-[#111111]
      "
    >
      {/* Background decoration */}
      <div
        aria-hidden
        className="
          pointer-events-none
          absolute
          left-[-150px]
          top-[15%]
          h-[400px]
          w-[400px]
          max-w-[80vw]
          rounded-full
          bg-[#4B20FF]/10
          blur-[130px]
        "
      />

      <div
        aria-hidden
        className="
          pointer-events-none
          absolute
          right-[-200px]
          top-[45%]
          h-[500px]
          w-[500px]
          max-w-[80vw]
          rounded-full
          bg-[#4B20FF]/5
          blur-[150px]
        "
      />

      {/* MAIN CONTENT */}
      <div
        className="
          relative
          mx-auto
          w-full
          max-w-[1500px]
          min-w-0
          px-5
          py-24
          sm:px-6
          md:px-10
          md:py-36
          lg:px-16
        "
      >
        {/* HEADER */}
        <div
          data-reveal="up"
          className="relative mb-16 min-w-0 md:mb-24"
        >
          <div
            className="
              grid
              min-w-0
              gap-8
              lg:grid-cols-[1.5fr_0.5fr]
              lg:items-end
            "
          >
            {/* Heading */}
            <h2
              className="
                w-full
                max-w-6xl
                break-words
                text-[clamp(3.5rem,10vw,10rem)]
                font-black
                uppercase
                leading-[0.8]
                tracking-[-0.07em]
                text-[#111111]
              "
            >
              Our
              <br />
              <span className="text-[#4B20FF]">
                Services
              </span>
            </h2>

            {/* Description */}
            <div className="w-full max-w-sm min-w-0 lg:pb-3">
              <p
                className="
                  text-sm
                  leading-7
                  text-neutral-500
                  md:text-base
                "
              >
                We combine strategy, design and technology
                to build digital experiences that move
                businesses forward.
              </p>
            </div>
          </div>
        </div>

        {/* SERVICES LIST */}
        <div
          data-stagger
          className="
            w-full
            max-w-full
            min-w-0
            border-t
            border-black/10
          "
        >
          {services.map((service) => (
            <motion.div
              // key={service.number}
              initial="initial"
              whileHover="hover"
              className="
                group
                relative
                w-full
                min-w-0
                overflow-hidden
                border-b
                border-black/10
              "
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
                className="
                  pointer-events-none
                  hidden
                  md:block
                  absolute
                  inset-0
                  bg-[#4B20FF]
                "
              />

              {/* Main row */}
              <div
                className="
                  relative
                  z-10
                  grid
                  min-w-0
                  gap-6
                  py-8
                  md:grid-cols-[80px_minmax(0,1.2fr)_minmax(0,1fr)]
                  md:items-center
                  md:gap-8
                  md:py-14
                "
              >
                {/* NUMBER */}
                <div>
                  <span
                    className="
                      font-mono
                      text-sm
                      font-bold
                      tracking-wider
                      text-[#4B20FF]
                      transition-colors
                      duration-300
                      md:group-hover:text-white
                    "
                  >
                    {/* {service.number} */}
                  </span>
                </div>

                {/* TITLE */}
                <h3
                  className="
                    min-w-0
                    break-words
                    text-[clamp(2rem,5vw,4.5rem)]
                    font-black
                    uppercase
                    leading-[0.9]
                    tracking-[-0.05em]
                    text-[#111111]
                    transition-colors
                    duration-300
                    md:group-hover:text-white
                  "
                >
                  {service.title}
                </h3>

                {/* DESCRIPTION + TAGS */}
                <div className="min-w-0">
                  <p
                    className="
                      max-w-lg
                      break-words
                      text-sm
                      leading-6
                      text-neutral-500
                      transition-colors
                      duration-300
                      md:group-hover:text-white/75
                      md:text-base
                    "
                  >
                    {service.description}
                  </p>

                  {/* Tags */}
                  <div className="mt-5 flex max-w-full flex-wrap gap-2">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="
                          rounded-full
                          border
                          border-black/10
                          px-3
                          py-1.5
                          text-[9px]
                          font-bold
                          uppercase
                          tracking-[0.15em]
                          text-neutral-500
                          transition-colors
                          duration-300
                          md:group-hover:border-white/30
                          md:group-hover:text-white/75
                        "
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Hover label */}
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
                className="
                  pointer-events-none
                  absolute
                  bottom-3
                  right-10
                  hidden
                  text-[9px]
                  font-bold
                  uppercase
                  tracking-[0.2em]
                  text-white/60
                  md:block
                "
              >
                Explore service
              </motion.span>
            </motion.div>
          ))}
        </div>

        {/* BOTTOM CTA */}
        <div
          data-reveal="up"
          className="
            mt-16
            grid
            min-w-0
            gap-10
            md:mt-20
            md:grid-cols-2
            md:items-end
          "
        >
          <div className="min-w-0">
            <p
              className="
                mb-5
                text-xs
                font-bold
                uppercase
                tracking-[0.25em]
                text-[#4B20FF]
              "
            >
              Have a project?
            </p>

            <h3
              className="
                max-w-2xl
                break-words
                text-4xl
                font-black
                uppercase
                leading-[0.9]
                tracking-[-0.05em]
                md:text-6xl
              "
            >
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
                className="
                  group
                  relative
                  inline-flex
                  max-w-full
                  items-center
                  gap-5
                  overflow-hidden
                  rounded-full
                  bg-[#4B20FF]
                  px-7
                  py-5
                  text-sm
                  font-black
                  uppercase
                  tracking-wider
                  text-white
                "
              >
                <span className="relative z-10">
                  Start a project
                </span>

                <span
                  className="
                    absolute
                    inset-0
                    translate-y-full
                    bg-[#111111]
                    transition-transform
                    duration-500
                    group-hover:translate-y-0
                  "
                />
              </Link>
            </Magnetic>
          </div>
        </div>
      </div>

      {/* BOTTOM MARQUEE */}
      <div
        className="
          relative
          w-full
          max-w-full
          overflow-hidden
          border-y
          border-black/10
          bg-[#4B20FF]
          py-5
        "
      >
        <motion.div
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear",
          }}
          className="
            flex
            w-max
            min-w-max
            items-center
            whitespace-nowrap
            will-change-transform
          "
        >
          {[...marqueeItems, ...marqueeItems].map(
            (item, index) => (
              <span
                key={`${item}-${index}`}
                className="
                  mx-3
                  shrink-0
                  whitespace-nowrap
                  text-xl
                  font-black
                  uppercase
                  tracking-[-0.03em]
                  text-white
                  sm:mx-5
                  sm:text-2xl
                  md:text-4xl
                "
              >
                {item}
              </span>
            )
          )}
        </motion.div>
      </div>
    </section>
  );
}