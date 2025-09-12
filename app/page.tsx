'use client'
import { motion } from "framer-motion";
import Hero from "@/components/home/Hero";
import ConfettiToggle from '@/components/ConfettiToggle';
import Solutions from "@/components/home/Solutions";
import IndustryTabs from "@/components/home/IndustryTabs";
import Testimonials from "@/components/home/Testimonials";
import DigitalPartners from "@/components/home/DigitalPartners";
import CTA from "@/components/home/CTA";
import Services from "@/components/home/Services";
import Packages from "@/components/home/Packages";
import HowWeWork from "@/components/home/HowWeWork";

const sectionAnimation = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const SectionWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
    variants={sectionAnimation}
  >
    {children}
  </motion.div>
);

export default function Home() {
  const handleToggleChange = (isOn: boolean) => {
    console.log('Confetti toggle is now:', isOn);
    // Here you would trigger your actual confetti animation
    // For example: if (isOn) { triggerConfetti(); }
  };

  return (
    <main className="bg-background">
      <Hero />

      <SectionWrapper>
        <Solutions />
      </SectionWrapper>

      <SectionWrapper>
        <Services />
      </SectionWrapper>

      <SectionWrapper>
        <Packages />
      </SectionWrapper>

      <SectionWrapper>
        <HowWeWork />
      </SectionWrapper>

      <SectionWrapper>
        <IndustryTabs />
      </SectionWrapper>

      <SectionWrapper>
        <DigitalPartners />
      </SectionWrapper>

      <SectionWrapper>
        <Testimonials />
      </SectionWrapper>

      <SectionWrapper>
        <CTA />
      </SectionWrapper>
    </main>
  );
}