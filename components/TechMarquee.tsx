const STACK = [
  "NEXT.JS",
  "TAILWIND CSS",
  "TYPESCRIPT",
  "POSTGRESQL",
  "PRISMA",
  "STRIPE",
  "SUPABASE",
  "VERCEL",
  "NODE.JS",
  "REACT",
];

export function TechMarquee() {
  const items = [...STACK, ...STACK];
  return (
    <div className="bg-surface border-b border-line-soft py-7 overflow-hidden">
      <div className="flex whitespace-nowrap animate-marquee hover:[animation-play-state:paused]">
        {items.map((item, i) => (
          <div key={i} className="flex items-center">
            <span className="font-mono text-xs tracking-[0.2em] text-muted-2 px-6 transition-colors duration-300 hover:text-blue cursor-default">
              {item}
            </span>
            <span className="h-1 w-1 rounded-full bg-line" />
          </div>
        ))}
      </div>
    </div>
  );
}
