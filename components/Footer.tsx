"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const links = [
  {
    title: "Explore",
    items: [
      { label: "Home", href: "/" },
      { label: "Services", href: "#services" },
      { label: "Work", href: "#work" },
      { label: "About", href: "#about" },
    ],
  },
  {
    title: "Connect",
    items: [
      { label: "axentralabsofficial@gmail.com", href: "mailto:axentralabsofficial@gmail.com" },
      { label: "+91 76652 27565", href: "tel:+917665227565" },
      { label: "LinkedIn", href: "#" },
      { label: "Instagram", href: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#f3f4f9] px-5 pb-8 text-black md:px-8">
      <div className="mx-auto max-w-[1400px]">
        {/* Main Footer */}
        <div className="grid gap-16 border-t border-white/10 py-16 md:grid-cols-[2fr_1fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="inline-block text-3xl font-black tracking-[-0.08em]"
            >
              <img src="/axxe2.png" alt="Axentra Labs" className="h-8 w-auto" />
            </Link>

            <p className="mt-6 max-w-sm text-base leading-relaxed text-black">
              Digital products, websites and software built for ambitious
              businesses.
            </p>
          </div>

          {/* Links */}
          {links.map((group) => (
            <div key={group.title}>
              <p className="mb-6 text-xs font-medium uppercase tracking-[0.2em] text-black/30">
                {group.title}
              </p>

              <div className="flex flex-col gap-4">
                {group.items.map((item) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    whileHover={{ x: 5 }}
                    className="w-fit text-sm text-black/65 transition-colors hover:text-black"
                  >
                    {item.label}
                  </motion.a>
                ))}
              </div>
            </div>

          ))}



        </div>
      </div>  

      {/* Bottom */}
      <div className="flex flex-col gap-5 border-t border-white/10 pt-6 text-xs text-black/30 md:flex-row md:items-center md:justify-between">
        <p>
          © {new Date().getFullYear()} Axentra. All rights reserved.
        </p>

        <div className="flex gap-6">
          {/* <Link
              href="#"
              className="transition-colors hover:text-black"
            >
              Privacy
            </Link>

            <Link
              href="#"
              className="transition-colors hover:text-black"
            >
              Terms
            </Link> */}
        </div>

        <p>Built with intention.</p>
      </div>
    </footer>
  );
}