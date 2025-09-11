'use client'
import Hero from "@/components/home/Hero";
import Solutions from "@/components/home/Solutions";
import IndustryTabs from "@/components/home/IndustryTabs";
import Testimonials from "@/components/home/Testimonials";
import DigitalPartners from "@/components/home/DigitalPartners";

import CTA from "@/components/home/CTA";
import Services from "@/components/home/Services";
import Packages from "@/components/home/Packages";
import HowWeWork from "@/components/home/HowWeWork";

export default function Home() {
  return (
    <main className="bg-background">
      <Hero />
      <Solutions />
      <Services />
      <Packages />
      <HowWeWork />
      <IndustryTabs />
      <DigitalPartners />
      <Testimonials />
     
      <CTA />
    </main>
  );
}
