"use client"

import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { TechMarquee } from "@/components/TechMarquee";
import { WhyUs } from "@/components/WhyUs";
import { Process } from "@/components/Process";
import { SpeedCompare } from "@/components/SpeedCompare";
import { Services } from "@/components/Services";
import { Pricing } from "@/components/Pricing";
import { FAQ } from "@/components/FAQ";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";
import { BuildMeter } from "@/components/BuildMeter";
import { Projects } from "@/components/Projects";
import { ContactModal } from "@/components/ContactModal";



export default function Home() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <main className="relative">
      <Navbar
        onContactClick={() => setIsContactOpen(true)}
      />

      <BuildMeter />

      <Hero />

      <TechMarquee />

      <WhyUs />

      <Process />

      <SpeedCompare />

      <Services />

      <Projects />

      <Pricing />

      <FAQ />

      <CTA
        onContactClick={() => setIsContactOpen(true)}
      />

      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />

      <Footer />
    </main>
  );
}