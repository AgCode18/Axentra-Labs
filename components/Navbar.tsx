// "use client";

// import { useEffect, useState } from "react";
// import { LogoFull } from "./Logo";

// interface NavbarProps {
//   onContactClick: () => void;
// }

// const LINKS = [
//   { href: "#process", label: "Process" },
//   { href: "#work", label: "Services" },
//   { href: "#projects", label: "Our Works" },
//   { href: "#pricing", label: "Pricing" },
//   // { href: "#faq", label: "FAQ" },
// ];

// export function Navbar({ onContactClick }: NavbarProps) {
//   const [scrolled, setScrolled] = useState(false);
//   const [open, setOpen] = useState(false);

//   useEffect(() => {
//     const onScroll = () => setScrolled(window.scrollY > 12);

//     onScroll();

//     window.addEventListener("scroll", onScroll, {
//       passive: true,
//     });

//     return () => {
//       window.removeEventListener("scroll", onScroll);
//     };
//   }, []);

//   return (
//     <header
//       className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
//         scrolled
//           ? "bg-ink/85 backdrop-blur-sm border-b border-line-soft"
//           : "bg-transparent border-b border-transparent"
//       }`}
//     >
//       <nav className="max-w-7xl mx-auto px-5 md:px-8 h-16 md:h-[72px] flex items-center justify-between">
//         {/* Logo */}
//         <a
//           href="#home"
//           aria-label="Axxentra Labs home"
//           className="group"
//         >
//           <LogoFull className="h-12 w-14 transition-transform duration-300 group-hover:scale-[1.04]" />
//         </a>

//         {/* Desktop Navigation */}
//         <ul className="hidden md:flex items-center gap-9">
//           {LINKS.map((l) => (
//             <li key={l.href}>
//               <a
//                 href={l.href}
//                 className="link-underline text-sm text-black hover:text-gray-800 transition-colors pb-0.5"
//               >
//                 {l.label}
//               </a>
//             </li>
//           ))}
//         </ul>

//         {/* Desktop CTA */}
//         <div className="hidden md:block">
//           <button
//             type="button"
//             onClick={onContactClick}
//             className="inline-flex items-center gap-2 rounded-full bg-fog text-white text-sm font-medium px-5 py-2.5 transition-all duration-300 hover:shadow-[0_8px_24px_-6px_rgba(11,13,24,0.4)] hover:-translate-y-0.5 active:translate-y-0"
//           >
//             Start a Project
//           </button>
//         </div>

//         {/* Mobile Menu Button */}
//         <button
//           type="button"
//           onClick={() => setOpen((v) => !v)}
//           className="md:hidden text-fog p-2 -mr-2"
//           aria-label="Toggle menu"
//           aria-expanded={open}
//         >
//           <svg
//             width="22"
//             height="22"
//             viewBox="0 0 22 22"
//             fill="none"
//           >
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

//       {/* Mobile Menu */}
//       {open && (
//         <div className="md:hidden bg-ink border-t border-line-soft px-5 pb-6 pt-2 flex flex-col gap-1">
//           {LINKS.map((l) => (
//             <a
//               key={l.href}
//               href={l.href}
//               onClick={() => setOpen(false)}
//               className="py-3 text-base text-muted hover:text-fog hover:pl-1.5 transition-all duration-200 border-b border-line-soft/60"
//             >
//               {l.label}
//             </a>
//           ))}

//           {/* Mobile CTA */}
//           <button
//             type="button"
//             onClick={() => {
//               setOpen(false);
//               onContactClick();
//             }}
//             className="mt-4 text-center rounded-full bg-fog text-white text-sm font-medium px-5 py-3 transition-transform active:scale-95"
//           >
//             Start a Project
//           </button>
//         </div>
//       )}
//     </header>
//   );
// }

"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import Magnetic from "./Magnetic";

interface NavbarProps {
  onContactClick: () => void;
}

const navItems = [
  {
    label: "Home",
    href: "#home",
  },
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Services",
    href: "#services",
  },
  {
    label: "Pricing",
    href: "#pricing",
  },
  {
    label: "Work",
    href: "#work",
  },
  
];

export default function Navbar({ onContactClick }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (!menuOpen) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      {/* DESKTOP / MAIN NAVBAR */}
      <header
        className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "px-4 pt-4"
            : "px-4 pt-5 md:px-8 md:pt-6"
        }`}
      >
        <nav
          className={`mx-auto flex max-w-7xl items-center justify-between transition-all duration-500 ${
            scrolled
              ? "rounded-full border border-[#DDE1EC]/80 bg-white/85 px-5 py-3 shadow-[0_10px_40px_rgba(17,26,58,0.08)] backdrop-blur-xl md:px-6"
              : "px-1 py-2"
          }`}
        >
          {/* LOGO */}
          <Magnetic strength={0.15}>
            <Link
              href="#home"
              className="group flex items-center gap-3"
              onClick={closeMenu}
            >
              
              <div className="hidden sm:block">
                {/* logo of company */}
                <img src="/axxe2.png" alt="Axentra Labs" className="h-8 w-auto" />

                
              </div>
            </Link>
          </Magnetic>

          {/* DESKTOP LINKS */}
          <div className="hidden items-center gap-8 lg:flex">
            {navItems.map((item) => (
              <Magnetic
                key={item.label}
                strength={0.2}
              >
                <Link
                  href={item.href}
                  onClick={(event) => {
                    if (item.label === "Contact") {
                      event.preventDefault();
                      onContactClick();
                    }
                    closeMenu();
                  }}
                  className="group relative py-2 text-[13px] font-medium text-[#68708A] transition-colors duration-300 hover:text-[#111A3A]"
                >
                  {item.label}

                  <span className="absolute bottom-0 left-1/2 h-px w-0 -translate-x-1/2 bg-[#4B20FF] transition-all duration-300 group-hover:w-full" />
                </Link>
              </Magnetic>
            ))}
          </div>

          {/* DESKTOP CTA */}
          <div className="hidden lg:block">
            <Magnetic strength={0.25}>
              <Link
                href="/contact"
                onClick={(event) => {
                  event.preventDefault();
                  onContactClick();
                }}
                className="group relative flex items-center gap-3 overflow-hidden rounded-full bg-[#111A3A] px-5 py-3 text-xs font-semibold text-white"
              >
                <span className="relative z-10">
                  Contact Us
                </span>               

                <span className="absolute inset-0 -translate-x-full bg-[#4B20FF] transition-transform duration-500 group-hover:translate-x-0" />
              </Link>
            </Magnetic>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            type="button"
            aria-label={
              menuOpen
                ? "Close menu"
                : "Open menu"
            }
            aria-expanded={menuOpen}
            onClick={() =>
              setMenuOpen((previous) => !previous)
            }
            className="relative flex h-11 w-11 items-center justify-center rounded-full border border-[#DDE1EC] bg-white lg:hidden"
          >
            <span className="relative flex h-4 w-5 flex-col justify-between">
              <motion.span
                animate={{
                  rotate: menuOpen ? 45 : 0,
                  y: menuOpen ? 7 : 0,
                }}
                className="block h-px w-full bg-[#111A3A]"
              />

              <motion.span
                animate={{
                  opacity: menuOpen ? 0 : 1,
                }}
                className="block h-px w-full bg-[#111A3A]"
              />

              <motion.span
                animate={{
                  rotate: menuOpen ? -45 : 0,
                  y: menuOpen ? -7 : 0,
                }}
                className="block h-px w-full bg-[#111A3A]"
              />
            </span>
          </button>
        </nav>
      </header>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{
              opacity: 0,
              clipPath: "inset(0 0 100% 0)",
            }}
            animate={{
              opacity: 1,
              clipPath: "inset(0 0 0% 0)",
            }}
            exit={{
              opacity: 0,
              clipPath: "inset(0 0 100% 0)",
            }}
            transition={{
              duration: 0.5,
              ease: [0.76, 0, 0.24, 1],
            }}
            className="fixed inset-0 z-40 bg-[#F8F9FC] lg:hidden"
          >
            <div className="flex h-full flex-col px-6 pb-10 pt-32">
              <div className="flex flex-1 flex-col justify-center">
                <p className="mb-7 text-xs font-semibold uppercase tracking-[0.2em] text-[#4B20FF]">
                  Navigation
                </p>

                <div className="flex flex-col">
                  {navItems.map(
                    (item, index) => (
                      <motion.div
                        key={item.label}
                        initial={{
                          opacity: 0,
                          y: 30,
                        }}
                        animate={{
                          opacity: 1,
                          y: 0,
                        }}
                        transition={{
                          delay:
                            0.08 * index,
                          duration: 0.6,
                          ease: "easeOut",
                        }}
                      >
                        <Link
                          href={item.href}
                          onClick={(event) => {
                            if (item.label === "Contact") {
                              event.preventDefault();
                              onContactClick();
                            }
                            closeMenu();
                          }}
                          className="group flex items-center justify-between border-b border-[#DDE1EC] py-5"
                        >
                          <span className="text-4xl font-semibold tracking-[-0.04em] text-[#111A3A]">
                            {item.label}
                          </span>

                          <span className="text-2xl text-[#4B20FF] transition-transform duration-300 group-hover:translate-x-2">
                            ↗
                          </span>
                        </Link>
                      </motion.div>
                    )
                  )}
                </div>
              </div>

              {/* Mobile footer */}
              <div className="flex items-end justify-between border-t border-[#DDE1EC] pt-6">
                <div>
                  <p className="text-xs uppercase tracking-[0.15em] text-[#68708A]">
                    Let's build something
                  </p>

                  <p className="mt-2 text-sm font-semibold text-[#111A3A]">
                    axentralabsofficial@gmail.com
                  </p>
                </div>

                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#111A3A] text-white">
                  A
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}