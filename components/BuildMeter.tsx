"use client";

import { useEffect, useState } from "react";

/**
 * Signature element: the gradient diagonal stroke from the logo's "A"
 * becomes a fixed progress rail that fills as the visitor scrolls —
 * a visual metaphor for a build progressing day by day toward launch.
 */
export function BuildMeter() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      const scrollable = doc.scrollHeight - doc.clientHeight;
      const pct = scrollable > 0 ? (doc.scrollTop / scrollable) * 100 : 0;
      setProgress(Math.min(100, Math.max(0, pct)));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const day = Math.max(1, Math.round((progress / 100) * 21));

  return (
    <div className="fixed right-5 md:right-7 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-center gap-2.5">
      <span className="font-mono text-[10px] text-muted-2 tracking-wider">D01</span>
      <div className="relative w-[3px] h-48 rounded-full bg-line overflow-visible">
        <div
          className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-blue to-violet rounded-full transition-[height] duration-150 ease-out"
          style={{ height: `${progress}%` }}
        />
        <div
          className="absolute left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-white border-2 border-blue shadow-[0_2px_8px_rgba(62,107,255,0.4)] transition-[bottom] duration-150 ease-out"
          style={{ bottom: `calc(${progress}% - 5px)` }}
        />
      </div>
      <span className="font-mono text-[10px] text-blue tracking-wider">D{String(day).padStart(2, "0")}</span>
    </div>
  );
}
