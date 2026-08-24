import { Reveal } from "./Reveal";
import { LogoMark } from "./Logo";

interface CTAProps {
  onContactClick: () => void;
}

export function CTA({ onContactClick }: CTAProps) {
  return (
    <section
      id="contact"
      className="relative bg-surface py-28 md:py-36 overflow-hidden"
    >
      <div
        aria-hidden
        className="absolute inset-0 bg-grad-radial-fade opacity-70"
      />

      <div
        aria-hidden
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.06]"
      >
        <LogoMark className="h-[420px] w-[420px]" />
      </div>

      <div className="relative max-w-3xl mx-auto px-5 md:px-8 text-center">
        <Reveal>
          <span className="font-mono text-xs tracking-[0.25em] text-blue-soft">
            LET&apos;S BUILD
          </span>

          <h2 className="font-display font-semibold text-4xl md:text-6xl mt-5 leading-[1.05]">
            Have an idea worth 21 days?
          </h2>

          <p className="mt-6 text-muted text-base md:text-lg max-w-xl mx-auto">
            Tell us what you&apos;re building. We&apos;ll scope it, quote it,
            and if it&apos;s a fit, have your MVP live before the month is out.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            {/* Changed from <a> to <button> */}
            <button
              type="button"
              onClick={onContactClick}
              className="shine-wrap group inline-flex items-center gap-2 rounded-full bg-grad-brand text-white text-sm font-medium px-7 py-4 shadow-glow transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_40px_-12px_rgba(62,107,255,0.5)] active:translate-y-0"
            >
              Start Your Project

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
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}