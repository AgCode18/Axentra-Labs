"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const follower = followerRef.current;
    const label = labelRef.current;

    if (!cursor || !follower || !label) return;

    const mediaQuery = window.matchMedia(
      "(hover: hover) and (pointer: fine)"
    );

    if (!mediaQuery.matches) return;

    const moveCursor = (event: MouseEvent) => {
      gsap.to(cursor, {
        x: event.clientX,
        y: event.clientY,
        duration: 0.12,
        ease: "power2.out",
      });

      gsap.to(follower, {
        x: event.clientX,
        y: event.clientY,
        duration: 0.45,
        ease: "power3.out",
      });
    };

    const handleEnter = () => {
      gsap.to(cursor, {
        scale: 0.5,
        duration: 0.25,
        ease: "power3.out",
      });

      gsap.to(follower, {
        scale: 1.8,
        opacity: 0.25,
        duration: 0.3,
        ease: "power3.out",
      });
    };

    const handleLeave = () => {
      gsap.to(cursor, {
        scale: 1,
        duration: 0.25,
      });

      gsap.to(follower, {
        scale: 1,
        opacity: 0.15,
        duration: 0.3,
      });
    };

    const handleMouseOver = (event: MouseEvent) => {
      const target = event.target as HTMLElement;

      const interactive = target.closest(
        "a, button, [data-cursor]"
      ) as HTMLElement | null;

      if (!interactive) {
        handleLeave();
        label.textContent = "";
        return;
      }

      const cursorType =
        interactive.dataset.cursor || "view";

      label.textContent =
        cursorType === "view"
          ? "View"
          : cursorType === "drag"
            ? "Drag"
            : cursorType === "open"
              ? "Open"
              : "";

      handleEnter();
    };

    window.addEventListener("mousemove", moveCursor);
    document.addEventListener(
      "mouseover",
      handleMouseOver
    );

    return () => {
      window.removeEventListener(
        "mousemove",
        moveCursor
      );

      document.removeEventListener(
        "mouseover",
        handleMouseOver
      );
    };
  }, []);

  return (
    <>
      {/* Small cursor */}
      <div
        ref={cursorRef}
        className="pointer-events-none fixed left-0 top-0 z-[9999] hidden h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#4B20FF] md:block"
      />

      {/* Large follower */}
      <div
        ref={followerRef}
        className="pointer-events-none fixed left-0 top-0 z-[9998] hidden h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#4B20FF]/30 bg-[#4B20FF]/10 backdrop-blur-sm md:flex"
      >
        <span
          ref={labelRef}
          className="text-[8px] font-semibold uppercase tracking-[0.12em] text-[#111A3A]"
        />
      </div>
    </>
  );
}