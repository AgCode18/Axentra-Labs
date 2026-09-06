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
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      {/* NAVBAR */}
      <header
        className={`
          fixed inset-x-0 top-0 z-50
          w-full max-w-full overflow-x-clip
          transition-all duration-500
          ${scrolled ? "px-4 pt-4" : "px-4 pt-5 md:px-8 md:pt-6"}
        `}
      >
        <nav
          className={`
            mx-auto flex w-full max-w-7xl
            items-center justify-between
            overflow-visible
            transition-all duration-500
            ${
              scrolled
                ? "rounded-full border border-[#DDE1EC]/80 bg-white/85 px-5 py-3 shadow-[0_10px_40px_rgba(17,26,58,0.08)] backdrop-blur-xl md:px-6"
                : "px-1 py-2"
            }
          `}
        >
          {/* LOGO */}
          <Magnetic strength={0.15}>
            <Link
              href="#home"
              className="group flex items-center"
              onClick={closeMenu}
            >
              <img
                src="/axxe2.png"
                alt="Axentra Labs"
                className="h-8 w-auto max-w-full"
              />
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
                  onClick={closeMenu}
                  className="
                    group relative py-2
                    text-[13px] font-medium
                    text-[#68708A]
                    transition-colors duration-300
                    hover:text-[#111A3A]
                  "
                >
                  {item.label}

                  <span
                    className="
                      absolute bottom-0 left-1/2
                      h-px w-0
                      -translate-x-1/2
                      bg-[#4B20FF]
                      transition-all duration-300
                      group-hover:w-full
                    "
                  />
                </Link>
              </Magnetic>
            ))}
          </div>

          {/* DESKTOP CTA */}
          <div className="hidden lg:block">
            <Magnetic strength={0.25}>
              <button
                type="button"
                onClick={onContactClick}
                className="
                  group relative flex items-center
                  overflow-hidden rounded-full
                  bg-[#111A3A]
                  px-5 py-3
                  text-xs font-semibold text-white
                "
              >
                <span className="relative z-10">
                  Contact Us
                </span>

                <span
                  className="
                    absolute inset-0
                    -translate-x-full
                    bg-[#4B20FF]
                    transition-transform duration-500
                    group-hover:translate-x-0
                  "
                />
              </button>
            </Magnetic>
          </div>

          {/* MOBILE BUTTON */}
          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((prev) => !prev)}
            className="
              relative flex h-11 w-11
              shrink-0 items-center justify-center
              rounded-full
              border border-[#DDE1EC]
              bg-white
              lg:hidden
            "
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
            className="
              fixed inset-0 z-40
              h-dvh w-full max-w-full
              overflow-hidden
              bg-[#F8F9FC]
              lg:hidden
            "
          >
            <div className="flex h-full flex-col px-6 pb-10 pt-32">
              <div className="flex flex-1 flex-col justify-center">
                <p className="mb-7 text-xs font-semibold uppercase tracking-[0.2em] text-[#4B20FF]">
                  Navigation
                </p>

                <div className="flex flex-col">
                  {navItems.map((item, index) => (
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
                        delay: 0.08 * index,
                        duration: 0.6,
                        ease: "easeOut",
                      }}
                    >
                      <Link
                        href={item.href}
                        onClick={closeMenu}
                        className="
                          group flex items-center
                          justify-between
                          border-b border-[#DDE1EC]
                          py-5
                        "
                      >
                        <span
                          className="
                            text-4xl font-semibold
                            tracking-[-0.04em]
                            text-[#111A3A]
                          "
                        >
                          {item.label}
                        </span>

                        
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* MOBILE FOOTER */}
              <div
                className="
                  flex items-end justify-between
                  border-t border-[#DDE1EC]
                  pt-6
                "
              >
                <div className="min-w-0">
                  <p className="text-xs uppercase tracking-[0.15em] text-[#68708A]">
                    Let's build something
                  </p>

                  <p className="mt-2 break-all text-sm font-semibold text-[#111A3A]">
                    axentralabsofficial@gmail.com
                  </p>
                </div>

                <div
                  className="
                    ml-4 flex h-10 w-10 shrink-0
                    items-center justify-center
                    rounded-full
                    bg-[#111A3A]
                    text-white
                  "
                >
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