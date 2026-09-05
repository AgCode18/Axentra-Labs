"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function GSAPAnimations() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      // -----------------------------------------
      // 1. Reveal animations
      // -----------------------------------------

      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((element) => {
        const direction = element.dataset.reveal || "up";

        let x = 0;
        let y = 0;

        if (direction === "up") y = 60;
        if (direction === "down") y = -60;
        if (direction === "left") x = 60;
        if (direction === "right") x = -60;

        gsap.fromTo(
          element,
          {
            opacity: 0,
            x,
            y,
          },
          {
            opacity: 1,
            x: 0,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: element,
              start: "top 85%",
              once: true,
            },
          }
        );
      });

      // -----------------------------------------
      // 2. Scale reveal
      // -----------------------------------------

      gsap.utils
        .toArray<HTMLElement>("[data-reveal-scale]")
        .forEach((element) => {
          gsap.fromTo(
            element,
            {
              opacity: 0,
              scale: 0.9,
            },
            {
              opacity: 1,
              scale: 1,
              duration: 1.1,
              ease: "power3.out",
              scrollTrigger: {
                trigger: element,
                start: "top 85%",
                once: true,
              },
            }
          );
        });

      // -----------------------------------------
      // 3. Stagger animations
      // -----------------------------------------

      gsap.utils
        .toArray<HTMLElement>("[data-stagger]")
        .forEach((container) => {
          const children = container.children;

          gsap.fromTo(
            children,
            {
              opacity: 0,
              y: 40,
            },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              stagger: 0.12,
              ease: "power3.out",
              scrollTrigger: {
                trigger: container,
                start: "top 82%",
                once: true,
              },
            }
          );
        });

      // -----------------------------------------
      // 4. Line reveal
      // -----------------------------------------

      gsap.utils
        .toArray<HTMLElement>("[data-line-reveal]")
        .forEach((element) => {
          gsap.fromTo(
            element,
            {
              opacity: 0,
              y: 35,
            },
            {
              opacity: 1,
              y: 0,
              duration: 0.9,
              ease: "power3.out",
              scrollTrigger: {
                trigger: element,
                start: "top 85%",
                once: true,
              },
            }
          );
        });

      // -----------------------------------------
      // 5. Parallax
      // -----------------------------------------

      gsap.utils
        .toArray<HTMLElement>("[data-parallax]")
        .forEach((element) => {
          const speed = Number(element.dataset.parallax) || 0.2;

          gsap.to(element, {
            yPercent: speed * -100,
            ease: "none",
            scrollTrigger: {
              trigger: element,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          });
        });

      // -----------------------------------------
      // 6. Image reveal
      // -----------------------------------------

      gsap.utils
        .toArray<HTMLElement>("[data-image-reveal]")
        .forEach((element) => {
          const image = element.querySelector("img");

          if (!image) return;

          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: element,
              start: "top 85%",
              once: true,
            },
          });

          tl.fromTo(
            element,
            {
              clipPath: "inset(0 100% 0 0)",
            },
            {
              clipPath: "inset(0 0% 0 0)",
              duration: 1.2,
              ease: "power4.inOut",
            }
          ).fromTo(
            image,
            {
              scale: 1.15,
            },
            {
              scale: 1,
              duration: 1.4,
              ease: "power3.out",
            },
            "<"
          );
        });

      // -----------------------------------------
      // Refresh ScrollTrigger
      // -----------------------------------------

      ScrollTrigger.refresh();
    });

    return () => {
      ctx.revert();
    };
  }, []);

  return null;
}