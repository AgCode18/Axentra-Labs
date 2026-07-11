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

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
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
      <CTA />
      <Footer />
    </main>
  );
}
