// 'use client';

// import Image from 'next/image';

// const STACK = [
//   'NEXT.JS',
//   'TAILWIND CSS',
//   'TYPESCRIPT',
//   'POSTGRESQL',
//   'PRISMA',
//   'STRIPE',
//   'SUPABASE',
//   'VERCEL',
//   'NODE.JS',
//   'REACT',
// ];

// // Map each tech to its Simple Icons slug
// const techSlugs: Record<string, string> = {
//   'NEXT.JS': 'nextdotjs',
//   'TAILWIND CSS': 'tailwindcss',
//   TYPESCRIPT: 'typescript',
//   POSTGRESQL: 'postgresql',
//   PRISMA: 'prisma',
//   STRIPE: 'stripe',
//   SUPABASE: 'supabase',
//   VERCEL: 'vercel',
//   'NODE.JS': 'nodedotjs',
//   REACT: 'react',
// };

// export function TechMarquee() {
//   const items = [...STACK, ...STACK]; // duplicate for seamless loop

//   return (
//     <>
//       <style jsx>{`
//         .marquee-track {
//           animation: marqueeScroll 20s linear infinite;
//         }
//         .marquee-track:hover {
//           animation-play-state: paused;
//         }
//         @keyframes marqueeScroll {
//           0% {
//             transform: translateX(0);
//           }
//           100% {
//             transform: translateX(-50%);
//           }
//         }
//       `}</style>

//       <div className="bg-surface border-b border-line-soft py-7 overflow-hidden relative">
//         {/* Left gradient fade */}
//         <div className="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none bg-gradient-to-r from-surface to-transparent" />

//         <div className="flex whitespace-nowrap marquee-track">
//           {items.map((item, i) => {
//             const slug = techSlugs[item];
//             return (
//               <div
//                 key={i}
//                 className="flex items-center gap-3 px-6 transition-colors duration-300 hover:text-blue"
//               >
//                 <Image
//                   src={`https://cdn.simpleicons.org/${slug}`}
//                   alt={item}
//                   width={28}
//                   height={28}
//                   className="object-contain"
//                   draggable={false}
//                   unoptimized // external SVGs
//                 />
//                 <span className="font-mono text-xs tracking-[0.2em] text-black">
//                   {item}
//                 </span>
//                 <span className="h-1 w-1 rounded-full bg-line" />
//               </div>
//             );
//           })}
//         </div>

//         {/* Right gradient fade */}
//         <div className="absolute right-0 top-0 h-full w-20 z-10 pointer-events-none bg-gradient-to-l from-surface to-transparent" />
//       </div>
//     </>
//   );
// }




"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

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

      const firstRowWidth = rowOne.scrollWidth / 2;
      const secondRowWidth = rowTwo.scrollWidth / 2;

      const tl = gsap.timeline({
        repeat: -1,
      });

      tl.to(rowOne, {
        x: -firstRowWidth,
        duration: 25,
        ease: "none",
      });

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

      // Section reveal
      gsap.from(".tech-header", {
        y: 80,
        opacity: 0,
        duration: 1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const renderTechnologies = () =>
    [...technologies, ...technologies].map((tech, index) => (
      <div
        key={`${tech}-${index}`}
        className="flex shrink-0 items-center gap-8"
      >
        <span className="text-5xl font-medium tracking-[-0.04em] md:text-7xl">
          {tech}
        </span>

        <span className="text-2xl text-black md:text-4xl">✦</span>
      </div>
    ));

  return (
    <section
      ref={sectionRef}
      className="overflow-hidden  py-28 text-black md:py-40"
    >
      <div className="mx-auto mb-20 px-5 md:px-8">
        <div className="">


          <div>
            <h2 className="text-5xl text-center justify-center font-semibold leading-[0.95] tracking-[-0.055em] md:text-8xl whitespace-nowrap">Built with modern <span className="text-blue-700">technology.</span></h2>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/45">
              We use a modern development stack to build fast, scalable and
              maintainable digital products.
            </p>
          </div>
        </div>
      </div>

      {/* Row 1 */}
      <div className="mb-8 overflow-hidden">
        <div
          ref={rowOneRef}
          className="flex w-max items-center gap-8 whitespace-nowrap"
        >
          {renderTechnologies()}
        </div>
      </div>

      {/* Row 2 */}
      <div className="overflow-hidden">
        <div
          ref={rowTwoRef}
          className="flex w-max items-center gap-8 whitespace-nowrap"
        >
          {renderTechnologies()}
        </div>
      </div>

      {/* Bottom line */}
      <div className="mx-auto mt-20 max-w-[1400px] px-5 md:px-8">
        <div className="border-t border-white/15 pt-6">

        </div>
      </div>
    </section>
  );
}