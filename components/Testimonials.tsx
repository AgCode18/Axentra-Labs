"use client";

import { useLayoutEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type Testimonial = {
  id: number;
  quote: string;
  name: string;
  role: string;
  initials: string;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote:
      "Axentra understood what we needed and turned our idea into a clean, professional website that feels much more aligned with our brand.",
    name: "Rahul Sharma",
    role: "Founder, King Fish Logistics",
    initials: "RS",
  },

  {
    id: 2,
    quote:
      "The development process was smooth and straightforward. The dashboard is clean, responsive, and much easier for our team to work with.",
    name: "Aman Gupta",
    role: "Product Manager, API Panel",
    initials: "AG",
  },

  {
    id: 3,
    quote:
      "The team understood the fintech workflow quickly and built a platform that makes managing users, transactions, and operations much more organized.",
    name: "Vikram Mehta",
    role: "Founder, Reseller Fintech",
    initials: "VM",
  },

  {
    id: 4,
    quote:
      "Axentra gave our salon a modern digital presence that represents our brand much better and makes it easier for customers to explore our services.",
    name: "Neha Sharma",
    role: "Owner, Salon",
    initials: "NS",
  },

  {
    id: 5,
    quote:
      "The website looks modern and works smoothly across devices. The overall shopping experience feels much cleaner and easier for our customers.",
    name: "Mohit Agarwal",
    role: "Director, O.M. Enterprises",
    initials: "MA",
  },

  {
    id: 6,
    quote:
      "The loan management system helped us bring different operational processes into one structured platform. The overall workflow is much easier to manage now.",
    name: "Rohit Jain",
    role: "Operations Head, Mascot Fin",
    initials: "RJ",
  },

  {
    id: 7,
    quote:
      "The website has a clean visual identity and smooth interactions. The final result feels modern, polished, and easy for visitors to navigate.",
    name: "Arjun Verma",
    role: "Founder, Dentoi",
    initials: "AV",
  },

  {
    id: 8,
    quote:
      "The website captures the personality of our cafe really well. The design makes our menu and brand experience much more engaging for customers.",
    name: "Priya Agarwal",
    role: "Owner, Latte Laven Cafe",
    initials: "PA",
  },

  {
    id: 9,
    quote:
      "The platform provides a simple and engaging experience for setting fitness goals and building healthier habits without making things complicated.",
    name: "Karan Singh",
    role: "Founder, Quirk",
    initials: "KS",
  },
];

const columns = [
  {
    testimonials: testimonials.slice(0, 3),
    animationClass: "testimonial-scroll-up",
  },
  {
    testimonials: testimonials.slice(3, 6),
    animationClass: "testimonial-scroll-down",
  },
  {
    testimonials: testimonials.slice(6, 9),
    animationClass: "testimonial-scroll-up-slow",
  },
];

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const ctx = gsap.context(() => {
      /* =========================================================
         HEADER REVEAL
      ========================================================= */

      gsap.from(".testimonial-header", {
        y: 70,
        opacity: 0,
        duration: 1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".testimonial-header",
          start: "top 82%",
          once: true,
        },
      });

      /* =========================================================
         TESTIMONIAL CONTAINER REVEAL
      ========================================================= */

      gsap.from(".testimonial-container", {
        y: 60,
        opacity: 0,
        duration: 1,
        delay: 0.15,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".testimonial-container",
          start: "top 82%",
          once: true,
        },
      });

      ScrollTrigger.refresh();
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#f7f7f5] px-5 py-24 md:px-8 md:py-32"
    >
      {/* =========================================================
          MARQUEE ANIMATIONS
      ========================================================= */}

      <style jsx>{`
        @keyframes testimonial-up {
          from {
            transform: translateY(0);
          }

          to {
            transform: translateY(calc(-50% - 10px));
          }
        }

        @keyframes testimonial-down {
          from {
            transform: translateY(calc(-50% - 10px));
          }

          to {
            transform: translateY(0);
          }
        }

        .testimonial-scroll-up {
          animation: testimonial-up 28s linear infinite;
          will-change: transform;
        }

        .testimonial-scroll-down {
          animation: testimonial-down 34s linear infinite;
          will-change: transform;
        }

        .testimonial-scroll-up-slow {
          animation: testimonial-up 31s linear infinite;
          will-change: transform;
        }

        .testimonial-column:hover .testimonial-scroll-up,
        .testimonial-column:hover .testimonial-scroll-down,
        .testimonial-column:hover .testimonial-scroll-up-slow {
          animation-play-state: paused;
        }

        @media (prefers-reduced-motion: reduce) {
          .testimonial-scroll-up,
          .testimonial-scroll-down,
          .testimonial-scroll-up-slow {
            animation: none;
          }
        }
      `}</style>

      {/* =========================================================
          BACKGROUND GLOW
      ========================================================= */}

      <div
        className="
          pointer-events-none
          absolute
          -right-40
          top-20
          h-[500px]
          w-[500px]
          rounded-full
          bg-[#4B20FF]/10
          blur-[140px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -left-40
          bottom-0
          h-[450px]
          w-[450px]
          rounded-full
          bg-[#d9ff5a]/10
          blur-[140px]
        "
      />

      <div className="relative z-10 mx-auto max-w-[1400px]">
        {/* =========================================================
            HEADER
        ========================================================= */}

        <div className="testimonial-header mb-16 text-center md:mb-20">
          <p className="mb-5 text-xs font-medium uppercase tracking-[0.2em] text-neutral-400">
            Client Stories
          </p>

          <h2
            className="
              mx-auto
              max-w-5xl
              text-5xl
              font-medium
              leading-[0.92]
              tracking-[-0.06em]
              text-[#080808]
              md:text-7xl
              lg:text-[100px]
            "
          >
            Good products create{" "}
            <span className="text-[#4B20FF]">good stories.</span>
          </h2>

          <p
            className="
              mx-auto
              mt-7
              max-w-2xl
              text-base
              leading-relaxed
              text-neutral-500
              md:text-lg
            "
          >
            Real experiences from businesses that trusted Axentra to turn
            ideas into fast, scalable and meaningful digital products.
          </p>
        </div>

        {/* =========================================================
            TESTIMONIAL MARQUEE
        ========================================================= */}

        <div className="testimonial-container relative">
          {/* TOP FADE */}

          <div
            className="
              pointer-events-none
              absolute
              inset-x-0
              top-0
              z-20
              h-40
              bg-gradient-to-b
              from-[#f7f7f5]
              via-[#f7f7f5]/90
              to-transparent
            "
          />

          {/* BOTTOM FADE */}

          <div
            className="
              pointer-events-none
              absolute
              inset-x-0
              bottom-0
              z-20
              h-40
              bg-gradient-to-t
              from-[#f7f7f5]
              via-[#f7f7f5]/90
              to-transparent
            "
          />

          <div
            className="
              grid
              h-[620px]
              grid-cols-1
              gap-5
              overflow-hidden
              md:grid-cols-2
              lg:grid-cols-3
            "
          >
            {columns.map((column, columnIndex) => (
              <div
                key={columnIndex}
                className={`
                  testimonial-column
                  overflow-hidden
                  ${columnIndex === 1
                    ? "hidden md:block"
                    : ""
                  }
                  ${columnIndex === 2
                    ? "hidden lg:block"
                    : ""
                  }
                `}
              >
                <div className={column.animationClass}>
                  {/* FIRST SET */}

                  <div className="flex flex-col gap-5">
                    {column.testimonials.map((testimonial) => (
                      <TestimonialCard
                        key={`first-${testimonial.id}`}
                        testimonial={testimonial}
                      />
                    ))}
                  </div>

                  {/* DUPLICATE SET */}

                  <div
                    className="
                      mt-5
                      flex
                      flex-col
                      gap-5
                    "
                  >
                    {column.testimonials.map((testimonial) => (
                      <TestimonialCard
                        key={`second-${testimonial.id}`}
                        testimonial={testimonial}
                      />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* =========================================================
            BOTTOM TRUST LINE
        ========================================================= */}

        <div
          className="
            mt-16
            flex
            flex-col
            justify-between
            gap-5
            border-t
            border-black/10
            pt-6
            md:flex-row
          "
        >
          <p
            className="
              text-xs
              uppercase
              tracking-[0.15em]
              text-neutral-400
            "
          >
            Built for ambitious businesses
          </p>

          <p
            className="
              max-w-md
              text-sm
              leading-relaxed
              text-neutral-500
              md:text-right
            "
          >
            Real results matter more than impressive-sounding promises.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ===============================================================
   TESTIMONIAL CARD
================================================================ */

function TestimonialCard({
  testimonial,
}: {
  testimonial: Testimonial;
}) {
  return (
    <motion.article
      className="
        group
        rounded-[24px]
        border
        border-black/[0.08]
        bg-white
        p-6
        shadow-[0_8px_30px_rgba(0,0,0,0.035)]
        transition-all
        duration-300
        hover:border-[#4B20FF]/30
        hover:shadow-[0_20px_50px_rgba(75,32,255,0.08)]
        md:p-7
      "
      whileHover={{
        y: -6,
      }}
      transition={{
        duration: 0.3,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {/* =========================================================
          QUOTE ICON
      ========================================================= */}

      <div className="mb-6">
        <svg
          width="21"
          height="15"
          viewBox="0 0 21 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <g
            stroke="#4B20FF"
            strokeOpacity=".9"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M7 13.056c.464 0 .91-.131 1.237-.364.329-.234.513-.55.513-.88v-3.73c0-.33-.184-.647-.513-.88C7.91 6.97 7.464 6.838 7 6.838c-.232 0-.455-.066-.619-.182-.164-.117-.256-.275-.256-.44v-.622c0-.33.184-.646.513-.879.328-.233.773-.364 1.237-.364.232 0 .455-.066.619-.182.164-.117.256-.275.256-.44V2.485c0-.165-.092-.323-.256-.44a1.1 1.1 0 0 0-.619-.181c-1.392 0-2.728.393-3.712 1.092-.985.7-1.538 1.649-1.538 2.638v6.218c0 .33.184.646.513.88.328.233.773.364 1.237.364zm9.83 0c.465 0 .91-.131 1.238-.364.328-.234.513-.55.513-.88v-3.73c0-.33-.184-.647-.513-.88-.328-.233-.773-.364-1.237-.364-.232 0-.455-.066-.619-.182-.164-.117-.256-.275-.256-.44v-.622c0-.33.184-.646.512-.879.329-.233.774-.364 1.238-.364.232 0 .454-.066.619-.182.164-.117.256-.275.256-.44V2.485c0-.165-.092-.323-.256-.44a1.1 1.1 0 0 0-.62-.181c-1.391 0-2.727.393-3.711 1.092-.985.7-1.538 1.649-1.538 2.638v6.218c0 .33.184.646.512.88.329.233.774.364 1.238.364z" />
          </g>
        </svg>
      </div>

      {/* =========================================================
          QUOTE
      ========================================================= */}

      <p
        className="
          mb-7
          text-[15px]
          leading-[1.7]
          tracking-[-0.01em]
          text-neutral-600
        "
      >
        {testimonial.quote}
      </p>

      {/* =========================================================
          CLIENT
      ========================================================= */}

      <div className="flex items-center gap-3">
        <div
          className="
            flex
            size-10
            shrink-0
            items-center
            justify-center
            rounded-full
            bg-[#080808]
            text-[10px]
            font-semibold
            text-white
            transition-colors
            duration-300
            group-hover:bg-[#4B20FF]
          "
        >
          {testimonial.initials}
        </div>

        <div>
          <p className="text-sm font-medium text-neutral-900">
            {testimonial.name}
          </p>

          <p className="mt-0.5 text-xs text-neutral-400">
            {testimonial.role}
          </p>
        </div>
      </div>
    </motion.article>
  );
}
