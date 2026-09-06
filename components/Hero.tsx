"use client";

export function Hero() {
  const stats = [
    ["21", "day build cycle"],
    ["Fixed", "price, no surprise invoices"],
    ["100%", "code ownership on handoff"],
  ];

  return (
    <section
      id="home"
      className="
        relative
        w-full
        max-w-full
        overflow-hidden
        pt-32
        pb-0
        md:pt-40
      "
    >
      {/* Ambient gradient */}
      <div
        aria-hidden
        className="
          pointer-events-none
          absolute inset-0
          bg-grad-radial-fade
        "
      />

      {/* Noise */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 noise-layer"
      />

      {/* Violet glow */}
      <div
        aria-hidden
        className="
          pointer-events-none
          absolute
          -right-[10%]
          -top-40
          h-[560px]
          w-[560px]
          max-w-[80vw]
          rounded-full
          bg-violet/10
          blur-[140px]
          animate-float-slow
        "
      />

      {/* Blue glow */}
      <div
        aria-hidden
        className="
          pointer-events-none
          absolute
          -left-[10%]
          top-20
          h-[480px]
          w-[480px]
          max-w-[80vw]
          rounded-full
          bg-blue/10
          blur-[140px]
          animate-float
        "
      />

      {/* CONTENT */}
      <div
        className="
          relative
          mx-auto
          w-full
          max-w-7xl
          min-w-0
          px-5
          md:px-8
        "
      >
        <div className="flex min-w-0 flex-col items-start">
          {/* Badge */}
          <div
            className="
              mb-8
              inline-flex
              max-w-full
              items-center
              gap-2
              rounded-full
              border
              border-line
              bg-surface/60
              px-4
              py-1.5
              animate-fade-up
            "
          >
            <span className="relative flex h-1.5 w-1.5 shrink-0" />
          </div>

          {/* HERO HEADING */}
          <h1
            className="
              w-full
              max-w-5xl
              min-w-0
              break-words
              font-display
              font-semibold
              leading-[0.92]
              tracking-[-0.055em]
              text-[clamp(3.5rem,10vw,7.4rem)]
              animate-fade-up
              opacity-0
              [animation-delay:80ms]
            "
          >
            <span className="block">
              We Build Websites &amp; Software
            </span>

            <span
              className="
                block
                max-w-full
                break-words
                text-gradient
              "
            >
              That Grow Your Business
            </span>
          </h1>

          {/* DESCRIPTION */}
          <p
            className="
              mt-8
              w-full
              max-w-xl
              text-base
              leading-relaxed
              text-black
              md:text-lg
              animate-fade-up
              opacity-0
              [animation-delay:180ms]
            "
          >
            Axentra Labs helps startups and growing businesses turn ideas
            and business problems into modern websites, web applications,
            e-commerce platforms, and custom software.
          </p>

          {/* BUTTONS */}
          <div
            className="
              mt-10
              flex
              w-full
              max-w-full
              flex-wrap
              items-center
              gap-4
              animate-fade-up
              opacity-0
              [animation-delay:260ms]
            "
          >
            <a
              href="#contact"
              className="
                shine-wrap
                group
                inline-flex
                shrink-0
                items-center
                gap-2
                rounded-full
                bg-grad-brand
                px-6
                py-3.5
                text-sm
                font-medium
                text-white
                shadow-glow
                transition-all
                duration-300
                hover:-translate-y-0.5
                active:translate-y-0
              "
            >
              Start your build

              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                <path
                  d="M2 7H12M12 7L7.5 2.5M12 7L7.5 11.5"
                  stroke="white"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>

            <a
              href="#work"
              className="
                group
                inline-flex
                shrink-0
                items-center
                gap-2
                rounded-full
                border
                border-line
                px-6
                py-3.5
                text-sm
                font-medium
                text-fog
                transition-all
                duration-300
                hover:-translate-y-0.5
                active:translate-y-0
              "
            >
              See how we build

              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                <path
                  d="M2 7H12M12 7L7.5 2.5M12 7L7.5 11.5"
                  stroke="#0B0D18"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>

          {/* STATS */}
          <div
            className="
              mt-14
              flex
              w-full
              max-w-full
              flex-wrap
              items-center
              gap-x-10
              gap-y-4
              pb-16
              animate-fade-up
              opacity-0
              [animation-delay:340ms]
            "
          >
            {stats.map(([big, small]) => (
              <div
                key={small}
                className="
                  group
                  flex
                  min-w-0
                  items-baseline
                  gap-2
                  cursor-default
                "
              >
                <span
                  className="
                    shrink-0
                    font-display
                    text-2xl
                    font-semibold
                    text-fog
                    transition-colors
                    duration-300
                    group-hover:text-blue
                    md:text-3xl
                  "
                >
                  {big}
                </span>

                <span
                  className="
                    max-w-[8rem]
                    break-words
                    font-mono
                    text-[11px]
                    leading-tight
                    text-black-2
                  "
                >
                  {small}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="relative h-16 w-full max-w-full md:h-24">
        <div
          aria-hidden
          className="
            absolute
            inset-x-0
            bottom-0
            h-full
            w-full
            bg-surface
          "
          style={{
            clipPath: "polygon(0 100%, 50% 0, 100% 100%)",
          }}
        />
      </div>
    </section>
  );
}