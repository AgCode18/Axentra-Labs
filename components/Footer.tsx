import { LogoFull, LogoMark } from "./Logo";

export function Footer() {
  return (
    <footer className="bg-ink border-t border-line-soft">
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-16">
        <div className="flex flex-col md:flex-row justify-between gap-12">
          <div className="max-w-xs group w-fit">
            <LogoMark className="transition-transform duration-300 group-hover:scale-[1.03] w-fit" />
            <p className="text-muted text-sm mt-5 leading-relaxed">
              Full-stack product studio. SaaS and MVP builds, designed and
              shipped in 21 days.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-10">
            <div>
              <span className="font-mono text-[11px] tracking-widest text-muted-2">NAVIGATE</span>
              <ul className="mt-4 space-y-3">
                {[
                  ["Process", "#process"],
                  ["Services", "#work"],
                  ["Pricing", "#pricing"],
                  ["FAQ", "#faq"],
                ].map(([label, href]) => (
                  <li key={href}>
                    <a href={href} className="link-underline text-sm text-black hover:text-fog transition-colors pb-0.5">
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <span className="font-mono text-[11px] tracking-widest text-muted-2">SERVICES</span>
              <ul className="mt-4 space-y-3">
                {["SaaS MVPs", "Websites", "Landing Pages", "Re-Designs", "Fin-tech"].map((s) => (
                  <li key={s} className="text-sm text-black hover:text-fog transition-colors cursor-default">{s}</li>
                ))}
              </ul>
            </div>

            <div>
              <span className="font-mono text-[11px] tracking-widest text-muted-2">CONTACT</span>
              <ul className="mt-4 space-y-3">
                <li>
                  <a href="mailto:axentralabsofficial@gmail.com" className="link-underline text-sm text-black hover:text-fog transition-colors pb-0.5">
                    axentralabsofficial@gmail.com
                  </a>                
                  <br />
                  <a href="tel:+917665227565" className="link-underline text-sm text-black hover:text-fog transition-colors pb-0.5">
                    +91 76652 27565
                  </a>
                </li>
                <li className="text-sm text-black">Jaipur, India</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-line-soft flex flex-col sm:flex-row justify-between gap-4">
          <span className="text-xs text-muted-2">© {new Date().getFullYear()} Axentra Labs. All rights reserved.</span>
          <span className="font-mono text-xs text-muted-2">BUILT ON NEXT.JS · SHIPPED IN 21 DAYS</span>
        </div>
      </div>
    </footer>
  );
}
