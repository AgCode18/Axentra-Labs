// import { LogoFull, LogoMark } from "./Logo";

// export function Footer() {
//   return (
//     <footer className="bg-ink border-t border-line-soft">
//       <div className="max-w-7xl mx-auto px-5 md:px-8 py-16">
//         <div className="flex flex-col md:flex-row justify-between gap-12">
//           <div className="max-w-xs group w-fit">
//             <LogoMark className="transition-transform duration-300 group-hover:scale-[1.03] w-fit" />
//             <p className="text-muted text-sm mt-5 leading-relaxed">
//               Full-stack product studio. SaaS and MVP builds, designed and
//               shipped in 21 days.
//             </p>
//           </div>

//           <div className="grid grid-cols-2 sm:grid-cols-3 gap-10">
//             <div>
//               <span className="font-mono text-[11px] tracking-widest text-muted-2">NAVIGATE</span>
//               <ul className="mt-4 space-y-3">
//                 {[
//                   ["Process", "#process"],
//                   ["Services", "#work"],
//                   ["Pricing", "#pricing"],
//                   ["FAQ", "#faq"],
//                 ].map(([label, href]) => (
//                   <li key={href}>
//                     <a href={href} className="link-underline text-sm text-black hover:text-fog transition-colors pb-0.5">
//                       {label}
//                     </a>
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             <div>
//               <span className="font-mono text-[11px] tracking-widest text-muted-2">SERVICES</span>
//               <ul className="mt-4 space-y-3">
//                 {["SaaS MVPs", "Websites", "Landing Pages", "Re-Designs", "Fin-tech"].map((s) => (
//                   <li key={s} className="text-sm text-black hover:text-fog transition-colors cursor-default">{s}</li>
//                 ))}
//               </ul>
//             </div>

//             <div>
//               <span className="font-mono text-[11px] tracking-widest text-muted-2">CONTACT</span>
//               <ul className="mt-4 space-y-3">
//                 <li>
//                   <a href="mailto:axentralabsofficial@gmail.com" className="link-underline text-sm text-black hover:text-fog transition-colors pb-0.5">
//                     Email
//                   </a>
//                 </li>
//                 <li className="text-sm text-black">Jaipur, India</li>
//               </ul>
//             </div>
//           </div>
//         </div>

//         <div className="mt-16 pt-8 border-t border-line-soft flex flex-col sm:flex-row justify-between gap-4">
//           <span className="text-xs text-muted-2">© {new Date().getFullYear()} Axentra Labs. All rights reserved.</span>
//           <span className="font-mono text-xs text-muted-2">BUILT ON NEXT.JS · SHIPPED IN 21 DAYS</span>
//         </div>
//       </div>
//     </footer>
//   );
// }



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
        <div className="grid gap-16 border-t border-white/10 py-16 md:grid-cols-[2fr_1fr_1fr]">
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

        {/* Bottom */}
        <div className="flex flex-col gap-5 border-t border-white/10 pt-6 text-xs text-black/30 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} Axxentra. All rights reserved.
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
      </div>
    </footer>
  );
}