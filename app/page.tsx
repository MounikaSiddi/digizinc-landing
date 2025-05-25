'use client'
import Hero from "@/components/home/Hero";
import Solutions from "@/components/home/Solutions";
import IndustryTabs from "@/components/home/IndustryTabs";
import Testimonials from "@/components/home/Testimonials";

import CTA from "@/components/home/CTA";
import Services from "@/components/home/Services";

export default function Home() {
  return (
    <main className="bg-background">
      <Hero />
      <Solutions />
      <Services />
      <IndustryTabs />
      <Testimonials />
     
      <CTA />
    </main>
  );
}
