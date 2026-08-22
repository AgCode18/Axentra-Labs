'use client';

import Image from 'next/image';

const STACK = [
  'NEXT.JS',
  'TAILWIND CSS',
  'TYPESCRIPT',
  'POSTGRESQL',
  'PRISMA',
  'STRIPE',
  'SUPABASE',
  'VERCEL',
  'NODE.JS',
  'REACT',
];

// Map each tech to its Simple Icons slug
const techSlugs: Record<string, string> = {
  'NEXT.JS': 'nextdotjs',
  'TAILWIND CSS': 'tailwindcss',
  TYPESCRIPT: 'typescript',
  POSTGRESQL: 'postgresql',
  PRISMA: 'prisma',
  STRIPE: 'stripe',
  SUPABASE: 'supabase',
  VERCEL: 'vercel',
  'NODE.JS': 'nodedotjs',
  REACT: 'react',
};

export function TechMarquee() {
  const items = [...STACK, ...STACK]; // duplicate for seamless loop

  return (
    <>
      <style jsx>{`
        .marquee-track {
          animation: marqueeScroll 20s linear infinite;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
        @keyframes marqueeScroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>

      <div className="bg-surface border-b border-line-soft py-7 overflow-hidden relative">
        {/* Left gradient fade */}
        <div className="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none bg-gradient-to-r from-surface to-transparent" />

        <div className="flex whitespace-nowrap marquee-track">
          {items.map((item, i) => {
            const slug = techSlugs[item];
            return (
              <div
                key={i}
                className="flex items-center gap-3 px-6 transition-colors duration-300 hover:text-blue"
              >
                <Image
                  src={`https://cdn.simpleicons.org/${slug}`}
                  alt={item}
                  width={28}
                  height={28}
                  className="object-contain"
                  draggable={false}
                  unoptimized // external SVGs
                />
                <span className="font-mono text-xs tracking-[0.2em] text-black">
                  {item}
                </span>
                <span className="h-1 w-1 rounded-full bg-line" />
              </div>
            );
          })}
        </div>

        {/* Right gradient fade */}
        <div className="absolute right-0 top-0 h-full w-20 z-10 pointer-events-none bg-gradient-to-l from-surface to-transparent" />
      </div>
    </>
  );
}