"use client";

import { useEffect, useState } from "react";
import { LogoFull } from "./Logo";

const LINKS = [
  { href: "#process", label: "Process" },
  { href: "#work", label: "Services" },
  { href: "#projects", label: "Our Works" },
  { href: "#pricing", label: "Pricing" },
  // { href: "#faq", label: "FAQ" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-ink/85 backdrop-blur-sm border-b border-line-soft" : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-5 md:px-8 h-16 md:h-[72px] flex items-center justify-between">
        <a href="#home" aria-label="Axxentra Labs home" className="group">
          <LogoFull className="h-12 w-14 transition-transform duration-300 group-hover:scale-[1.04]" />
        </a>

        <ul className="hidden md:flex items-center gap-9">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="link-underline text-sm text-black hover:text-gray-800 transition-colors pb-0.5"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-fog text-white text-sm font-medium px-5 py-2.5 transition-all duration-300 hover:shadow-[0_8px_24px_-6px_rgba(11,13,24,0.4)] hover:-translate-y-0.5 active:translate-y-0"
          >
            Book a call
          </a>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden text-fog p-2 -mr-2"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            {open ? (
              <path d="M5 5L17 17M17 5L5 17" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            ) : (
              <>
                <path d="M3 6H19" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                <path d="M3 11H19" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                <path d="M3 16H19" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              </>
            )}
          </svg>
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-ink border-t border-line-soft px-5 pb-6 pt-2 flex flex-col gap-1">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="py-3 text-base text-muted hover:text-fog hover:pl-1.5 transition-all duration-200 border-b border-line-soft/60"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-4 text-center rounded-full bg-fog text-white text-sm font-medium px-5 py-3 transition-transform active:scale-95"
          >
            Book a call
          </a>
        </div>
      )}
    </header>
  );
}


// "use client";

// import { useEffect, useState } from "react";
// import { LogoFull } from "./Logo";

// const LINKS = [
//   { href: "#process", label: "Process" },
//   { href: "#work", label: "Services" },
//   { href: "#projects", label: "Our Works" },
//   { href: "#pricing", label: "Pricing" },
//   // { href: "#faq", label: "FAQ" },
// ];

// export function Navbar() {
//   const [scrolled, setScrolled] = useState(false);
//   const [open, setOpen] = useState(false);

//   useEffect(() => {
//     const onScroll = () => setScrolled(window.scrollY > 12);
//     onScroll();
//     window.addEventListener("scroll", onScroll, { passive: true });
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   return (
//     <header
//       className={`fixed top-3 sm:top-4 inset-x-0 z-50 transition-all duration-300 mx-3 sm:mx-6 rounded-2xl ${
//         scrolled
//           ? "bg-ink/85 backdrop-blur-md border border-line-soft shadow-xl"
//           : "bg-ink/50 backdrop-blur-sm border border-line-soft/40 shadow-md"
//       }`}
//     >
//       <nav className="max-w-7xl mx-auto px-4 sm:px-6 h-16 md:h-[72px] flex items-center justify-between">
//         {/* Logo – explicitly on the left */}
//         <a
//           href="#home"
//           aria-label="Axxentra Labs home"
//           className="group flex-shrink-0"
//         >
//           <LogoFull className="transition-transform duration-300 group-hover:scale-[1.04]" />
//         </a>

//         {/* Desktop nav links – centered */}
//         <ul className="hidden md:flex items-center gap-8 lg:gap-10">
//           {LINKS.map((l) => (
//             <li key={l.href}>
//               <a
//                 href={l.href}
//                 className="link-underline text-sm text-black/80 hover:text-black transition-colors pb-0.5"
//               >
//                 {l.label}
//               </a>
//             </li>
//           ))}
//         </ul>

//         {/* Desktop CTA */}
//         <div className="hidden md:block">
//           <a
//             href="#contact"
//             className="inline-flex items-center gap-2 rounded-full bg-fog text-white text-sm font-medium px-5 py-2.5 transition-all duration-300 hover:shadow-[0_8px_24px_-6px_rgba(11,13,24,0.4)] hover:-translate-y-0.5 active:translate-y-0"
//           >
//             Book a call
//           </a>
//         </div>

//         {/* Mobile menu toggle */}
//         <button
//           onClick={() => setOpen((v) => !v)}
//           className="md:hidden text-fog p-2 -mr-2"
//           aria-label="Toggle menu"
//           aria-expanded={open}
//         >
//           <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
//             {open ? (
//               <path
//                 d="M5 5L17 17M17 5L5 17"
//                 stroke="currentColor"
//                 strokeWidth="1.6"
//                 strokeLinecap="round"
//               />
//             ) : (
//               <>
//                 <path
//                   d="M3 6H19"
//                   stroke="currentColor"
//                   strokeWidth="1.6"
//                   strokeLinecap="round"
//                 />
//                 <path
//                   d="M3 11H19"
//                   stroke="currentColor"
//                   strokeWidth="1.6"
//                   strokeLinecap="round"
//                 />
//                 <path
//                   d="M3 16H19"
//                   stroke="currentColor"
//                   strokeWidth="1.6"
//                   strokeLinecap="round"
//                 />
//               </>
//             )}
//           </svg>
//         </button>
//       </nav>

//       {/* Mobile menu dropdown – rounded bottom to match header */}
//       {open && (
//         <div className="md:hidden bg-ink/95 backdrop-blur-sm border-t border-line-soft/60 px-5 pb-6 pt-2 flex flex-col gap-1 rounded-b-2xl">
//           {LINKS.map((l) => (
//             <a
//               key={l.href}
//               href={l.href}
//               onClick={() => setOpen(false)}
//               className="py-3 text-base text-muted hover:text-fog hover:pl-1.5 transition-all duration-200 border-b border-line-soft/40"
//             >
//               {l.label}
//             </a>
//           ))}
//           <a
//             href="#contact"
//             onClick={() => setOpen(false)}
//             className="mt-4 text-center rounded-full bg-fog text-white text-sm font-medium px-5 py-3 transition-transform active:scale-95"
//           >
//             Book a call
//           </a>
//         </div>
//       )}
//     </header>
//   );
// }
