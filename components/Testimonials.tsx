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
      "Axxentra understood what we wanted and turned the idea into a clean, functional product without unnecessary complexity.",
    name: "Client Name",
    role: "Founder, Company",
    initials: "CN",
  },
  {
    id: 2,
    quote:
      "The development process was straightforward, fast and transparent. The final product was much better than what we initially imagined.",
    name: "Client Name",
    role: "Business Owner",
    initials: "CN",
  },
  {
    id: 3,
    quote:
      "From the initial concept to deployment, everything was handled with a strong focus on performance and user experience.",
    name: "Client Name",
    role: "Product Lead",
    initials: "CN",
  },
  {
    id: 4,
    quote:
      "The team brought our idea to life with a strong understanding of both design and development. Everything felt polished and intentional.",
    name: "Client Name",
    role: "Startup Founder",
    initials: "CN",
  },
  {
    id: 5,
    quote:
      "What stood out most was the attention to detail. The product feels fast, modern and incredibly easy to use.",
    name: "Client Name",
    role: "CEO, Company",
    initials: "CN",
  },
  {
    id: 6,
    quote:
      "Axxentra helped us move from an early concept to a working product much faster than we expected.",
    name: "Client Name",
    role: "Product Manager",
    initials: "CN",
  },
  {
    id: 7,
    quote:
      "The communication throughout the project was excellent. We always knew what was happening and what came next.",
    name: "Client Name",
    role: "Founder, Startup",
    initials: "CN",
  },
  {
    id: 8,
    quote:
      "They focused on solving the actual business problem instead of adding unnecessary features. That made a huge difference.",
    name: "Client Name",
    role: "Business Owner",
    initials: "CN",
  },
  {
    id: 9,
    quote:
      "A strong combination of design, performance and development expertise. We would absolutely work with them again.",
    name: "Client Name",
    role: "Founder, Company",
    initials: "CN",
  },
];

const columns = [
  {
    testimonials: testimonials.slice(0, 3),
    animation: "testimonial-scroll-1",
  },
  {
    testimonials: testimonials.slice(3, 6),
    animation: "testimonial-scroll-2",
  },
  {
    testimonials: testimonials.slice(6, 9),
    animation: "testimonial-scroll-3",
  },
];

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".testimonial-header", {
        y: 80,
        opacity: 0,
        duration: 1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".testimonial-header",
          start: "top 80%",
          once: true,
        },
      });

      gsap.from(".testimonial-container", {
        y: 80,
        opacity: 0,
        duration: 1,
        delay: 0.15,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".testimonial-container",
          start: "top 80%",
          once: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#f7f7f5] px-5 py-24 md:px-8 md:py-32"
    >
      <style jsx>{`
        @keyframes testimonial-scroll-1 {
          from {
            transform: translateY(0);
          }

          to {
            transform: translateY(-50%);
          }
        }

        @keyframes testimonial-scroll-2 {
          from {
            transform: translateY(0);
          }

          to {
            transform: translateY(-50%);
          }
        }

        @keyframes testimonial-scroll-3 {
          from {
            transform: translateY(0);
          }

          to {
            transform: translateY(-50%);
          }
        }

        .testimonial-scroll-1 {
          animation: testimonial-scroll-1 26s linear infinite;
        }

        .testimonial-scroll-2 {
          animation: testimonial-scroll-2 32s linear infinite;
        }

        .testimonial-scroll-3 {
          animation: testimonial-scroll-3 23s linear infinite;
        }

        .testimonial-scroll-1:hover,
        .testimonial-scroll-2:hover,
        .testimonial-scroll-3:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* Ambient Purple / Lime Glow */}
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
        {/* Header */}
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
            Real experiences from businesses that trusted Axxentra to turn
            ideas into fast, scalable and meaningful digital products.
          </p>
        </div>

        {/* Testimonials */}
        <div className="testimonial-container relative">
          {/* Top Fade */}
          <div
            className="
              pointer-events-none
              absolute
              inset-x-0
              top-0
              z-20
              h-36
              bg-gradient-to-b
              from-[#f7f7f5]
              via-[#f7f7f5]/90
              to-transparent
            "
          />

          {/* Bottom Fade */}
          <div
            className="
              pointer-events-none
              absolute
              inset-x-0
              bottom-0
              z-20
              h-36
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
                  overflow-hidden
                  ${
                    columnIndex === 1
                      ? "hidden md:block"
                      : ""
                  }
                  ${
                    columnIndex === 2
                      ? "hidden lg:block"
                      : ""
                  }
                `}
              >
                <div className={column.animation}>
                  {/* Original cards */}
                  {column.testimonials.map((testimonial) => (
                    <TestimonialCard
                      key={`first-${testimonial.id}`}
                      testimonial={testimonial}
                    />
                  ))}

                  {/* Duplicate cards for infinite loop */}
                  {column.testimonials.map((testimonial) => (
                    <TestimonialCard
                      key={`second-${testimonial.id}`}
                      testimonial={testimonial}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Trust Line */}
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

function TestimonialCard({
  testimonial,
}: {
  testimonial: Testimonial;
}) {
  return (
    <motion.article
      className="
        group
        mb-5
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
      {/* Quote Icon */}
      <div className="mb-6">
        <svg
          width="21"
          height="15"
          viewBox="0 0 21 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
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

      {/* Quote */}
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

      {/* Client */}
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