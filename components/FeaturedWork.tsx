"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Magnetic from "./Magnetic";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    number: "01 / 04",
    category: "MVP DEVELOPMENT & SAAS",
    title: "Loan Management System",
    description:
      "Scalable MVP built for growth. Automated AI workflows, real-time analytics, and enterprise-ready cloud infrastructure.",
    tags: ["REACT.JS", "NODE.JS", "MYSQL"],
    image: "/projects/lmsimage.png",
    background: "#1826D8",
    textColor: "#FFFFFF",
    accent: "#C7FF00",
  },
  {
    number: "02 / 04",
    category: "WEBSITE DESIGN & BRANDING",
    title: "King FIsh Logistics",
    description:
      "High-converting e-commerce platform designed to elevate brand identity and increase online sales conversion rates.",
    tags: ["WEB DESIGN", "SHOPIFY PLUS", "3D MOCKUP"],
    image: "/projects/logistic.png",
    background: "#C7FF00",
    textColor: "#111111",
    accent: "#111111",
    accentTextColor: "#FFFFFF",
  },
  {
    number: "03 / 04",
    category: "WEB DEVELOPMENT",
    title: "Salon",
    description:
      "Modern financial management platform with powerful dashboards, automated workflows, and secure user experiences.",
    tags: ["REACT", "NODE.JS", "MONGODB"],
    image: "/projects/salon.png",
    background: "#171717",
    textColor: "#FFFFFF",
    accent: "#C7FF00",
  },
  {
    number: "04 / 04",
    category: "AI & AUTOMATION",
    title: "E-Commerce",
    description:
      "Intelligent automation system that connects business workflows, reduces repetitive tasks, and improves operational efficiency.",
    tags: ["AI", "AUTOMATION", "EXPRESS"],
    image: "/projects/e-comi.png",
    background: "#EDEDED",
    textColor: "#111111",
    accent: "#4B20FF",
  },
];

export default function FeaturedWork() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>(".work-card");

      cards.forEach((card, index) => {
        /*
        ================================================
        IMAGE PARALLAX
        ================================================
        */

        const image = card.querySelector(
          ".work-card-image"
        ) as HTMLElement | null;

        if (image) {
          gsap.fromTo(
            image,
            {
              scale: 1.15,
            },
            {
              scale: 1,
              ease: "none",
              scrollTrigger: {
                trigger: card,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
              },
            }
          );
        }

      });

      ScrollTrigger.refresh();
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="work"
      className="relative bg-[#F2F2F0]"
    >
      {/* =================================================
          HEADER
      ================================================= */}

      <div
        data-reveal="up"
        className="mx-auto max-w-[1500px] px-6 pb-20 pt-28 md:px-10 md:pt-36 lg:px-16"
      >
        <div className="grid gap-10 lg:grid-cols-[1.5fr_0.5fr] lg:items-end">

          {/* LABEL + HEADING */}

          <div>
            <div className="mb-7 flex items-center gap-3">
              {/* <span className="h-3 w-3 rotate-45 bg-[#C7FF00]" /> */}

              <span className="text-xs font-black uppercase tracking-[0.25em] text-[#111111]">
                Our Work
              </span>
            </div>

            <h2 className="max-w-5xl text-[clamp(3.5rem,7vw,7rem)] font-black uppercase leading-[0.82] tracking-[-0.065em] text-[#111111]">
              Transforming ideas
              <br />
              into memorable
              <br />
              <span className="text-[#4B20FF]">
                experiences.
              </span>
            </h2>
          </div>

          {/* INTRO */}

          <div className="max-w-sm lg:pb-2">
            <p className="text-sm leading-6 text-[#111111]/60 md:text-base">
              Explore our portfolio of high-impact web
              design, scalable MVP development, SaaS
              platforms, and AI automation projects.
            </p>
            
          </div>
        </div>
      </div>

      {/* =================================================
          WORK AREA
      ================================================= */}

      <div className="mx-auto grid max-w-[1500px] gap-8 px-6 pb-32 md:px-10 lg:grid-cols-[0.7fr_1.3fr] lg:px-16">

        {/* =================================================
            LEFT INFORMATION CARD
        ================================================= */}

        <div className="lg:sticky lg:top-24 lg:h-fit">
          <div
            data-reveal="up"
            className="rounded-[28px] bg-[#181818] p-7 text-white shadow-[0_30px_80px_rgba(0,0,0,0.15)] md:p-9"
          >
            {/* LABEL */}

            <div className="mb-8 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#C7FF00]" />

              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#C7FF00]">
                Featured Case Studies
              </span>
            </div>

            {/* HEADING */}

            <h3 className="max-w-md text-4xl font-black uppercase leading-[0.9] tracking-[-0.045em] md:text-5xl">
              Our work
              <br />
              speaks
              <br />
              for itself.
            </h3>

            {/* DESCRIPTION */}

            <p className="mt-7 max-w-md text-sm leading-6 text-white/55">
              From ambitious startups to growing brands,
              we build high-converting web applications,
              scalable MVP platforms, and custom AI
              automation workflows that engineer measurable
              business growth.
            </p>

            {/* STATS */}

            <div className="mt-9 grid grid-cols-2 gap-3">
              <div className="rounded-2xl border border-white/15 bg-white/[0.03] p-5">
                <p className="text-3xl font-black text-[#C7FF00]">
                  50+
                </p>

                <p className="mt-2 text-[8px] font-bold uppercase tracking-[0.15em] text-white/40">
                  Projects shipped
                </p>
              </div>

              <div className="rounded-2xl border border-white/15 bg-white/[0.03] p-5">
                <p className="text-3xl font-black">
                  99%
                </p>

                <p className="mt-2 text-[8px] font-bold uppercase tracking-[0.15em] text-white/40">
                  Client satisfaction
                </p>
              </div>
            </div>

            {/* BOTTOM CTA */}

            <div className="mt-10 flex items-center justify-between border-t border-white/10 pt-7">
              <div>
                {/* <p className="text-[9px] font-bold uppercase tracking-[0.15em] text-white/40">
                  Book a call
                </p> */}

                {/* <p className="mt-1 text-xs font-black uppercase text-[#C7FF00]">
                  Free consultation ↗
                </p> */}
              </div>

              {/* <Magnetic strength={0.25}>
                {/* <Link
                  href="#contact"
                  className="rounded-lg bg-[#C7FF00] px-4 py-3 text-[9px] font-black uppercase tracking-wider text-black"
                >
                  View all portfolio ↗
                </Link> */}
              {/* </Magnetic> */}
            </div>
          </div>
        </div>

        {/* =================================================
            STACKING PROJECT CARDS
        ================================================= */}

        <div className="relative">

          {projects.map((project, index) => (
            <article
              key={project.number}
              className="work-card sticky top-24 mb-8 min-h-[480px] overflow-hidden rounded-[28px] shadow-[0_30px_80px_rgba(0,0,0,0.18)] md:min-h-[520px]"
              style={{
                backgroundColor: project.background,
                color: project.textColor,
                zIndex: index + 1,
              }}
            >
                <div className="relative min-h-[480px] p-7 md:min-h-[520px] md:p-9 lg:p-10">

                  {/* =================================================
                      TOP ROW
                  ================================================= */}

                  <div className="flex items-start justify-between gap-4">
                    <span
                      className="rounded-full px-4 py-2 text-[9px] font-black uppercase tracking-[0.14em]"
                      style={{
                        backgroundColor: project.accent,
                        color: project.accentTextColor ?? "#111111",
                      }}
                    >
                      {project.category}
                    </span>

                    <span className="text-sm font-black opacity-40 md:text-lg">
                      {/* {project.number} */}
                    </span>
                  </div>

                  {/* =================================================
                      CONTENT
                  ================================================= */}

                  <div className="mt-8 max-w-[62%] md:mt-10">
                    <h3 className="text-[clamp(2.2rem,4vw,4.5rem)] font-black uppercase leading-[0.85] tracking-[-0.055em]">
                      {project.title}
                    </h3>

                    <p className="mt-6 max-w-xl text-sm leading-6 text-current opacity-70 md:text-base">
                      {project.description}
                    </p>

                    {/* TAGS */}

                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-md border border-current/20 px-3 py-1.5 text-[8px] font-black uppercase tracking-wider text-current opacity-70"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* CTA */}

                    
                      <Link
                        href="#contact"
                        className="mt-7 inline-flex items-center gap-3 border border-current px-5 py-3 text-[9px] font-black uppercase tracking-wider transition-all duration-300 hover:bg-black hover:text-white"
                      >
                        Get free quote
                      </Link>
                   
                  </div>

                  {/* =================================================
                      IMAGE
                  ================================================= */}

                  <div className="absolute bottom-8 right-7 h-[190px] w-[35%] overflow-hidden rounded-2xl border border-black/20 bg-black md:bottom-10 md:right-10 md:h-[210px] lg:h-[220px]">
                    <div className="work-card-image relative h-full w-full">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>

                  {/* =================================================
                      DECORATIVE NUMBER
                  ================================================= */}

                  {/* <span className="pointer-events-none absolute bottom-[-25px] right-[-10px] text-[180px] font-black leading-none opacity-[0.05]">
                    {String(index + 1).padStart(2, "0")}
                  </span> */}
                </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}