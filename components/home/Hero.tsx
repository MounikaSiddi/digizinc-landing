'use client'
import { motion } from "framer-motion"
import { useTheme } from "next-themes"
import { useState, useEffect, useRef } from "react"
import { useContactModal } from "../ClientWrapper";
import { Button } from "@/components/ui/button";
import ToggleSwitch from "@/components/ui/toggle-switch"; 
import { useToast } from '@/hooks/use-toast';
import { useConfetti } from '@/contexts/ConfettiContext';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, staggerChildren: 0.2 } }
}

const HeroGrowth = () => {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const { openContactModal } = useContactModal();
  const [isAI, setIsAI] = useState(true)
  const { toast } = useToast();
  const { showConfetti } = useConfetti();
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    setMounted(true);
    audioRef.current = new Audio('/confetti_sound.mp3');
    audioRef.current.load();
  }, []);

  const handleToggleChange = (checked: boolean) => {
    setIsAI(checked);
    if (checked) {
      audioRef.current?.play().catch(() => {});
      toast({
        title: "🚀 Growth Activated",
        description: "Your business journey with Digizinc begins!",
        duration: 3000,
      });
      showConfetti();
    }
  };

  const backgroundClass = theme === 'dark'
    ? 'bg-gradient-to-b from-[#0d0d0d] via-[#240840] to-[#0d0d0d]'
    : 'bg-gradient-to-b from-white to-gray-100';

  return (
    <section
      className={`relative py-10 min-h-[calc(100vh-80px)] flex flex-col justify-center items-center ${backgroundClass}`}>
      
      {/* Neon Glow Orbs */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-[#f22ee5]/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-[28rem] h-[28rem] bg-[#902ef2]/20 rounded-full blur-3xl"></div>

      {/* ⭐ Stars layer */}
      <div className="stars absolute inset-0 -z-10"></div>

      {/* Content */}
      <div className="container relative z-10 px-4 lg:px-6 flex flex-col items-center justify-center gap-12">
        <motion.div
          className="max-w-3xl text-center space-y-8 w-full"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
         <motion.h1
            className="font-heading text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight md:leading-tight mb-8 text-white w-full"
            variants={fadeIn}
          >
            <span className="text-3xl md:text-4xl xl:text-5xl">We support </span>
            <span className="text-7xl md:text-8xl xl:text-9xl block">gr<ToggleSwitch className="mx-1 align-middle" />wth</span>
            <span className="text-3xl md:text-4xl xl:text-5xl"> of your business</span>
          </motion.h1>


          <motion.p
            className="text-lg lg:text-xl dark:text-white/90 mx-auto leading-relaxed"
            variants={fadeIn}
          >
            Digizinc merges design, storytelling, and {isAI ? "AI-powered intelligence" : "human creativity"}  
            to help brands scale faster and stand out in a crowded market.
          </motion.p>

          <motion.div variants={fadeIn} className="flex flex-wrap gap-4 justify-center mt-8">
            <Button
              onClick={() => openContactModal(undefined)}
              className="rounded-full px-8 py-4 text-lg font-semibold shadow-lg bg-gradient-to-r from-[#f22ee5] via-[#902ef2] to-[#561f8c] text-white hover:scale-105 transition"
            >
              🚀 Start Your Project
            </Button>
            <Button
              variant="outline"
              onClick={() => {
                const servicesSection = document.getElementById('services');
                if (servicesSection) {
                  servicesSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="rounded-full px-8 py-4 text-lg font-semibold border-[#902ef2] text-[#902ef2] hover:bg-[#902ef2]/10 transition"
            >
              Explore Services
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* ✨ Stars CSS */}
      <style jsx>{`
        .stars {
          background: transparent;
          box-shadow:
            20px 40px var(--star-color, #fff),
            100px 200px var(--star-color, #fff),
            300px 150px var(--star-color, #fff),
            500px 400px var(--star-color, #fff),
            700px 250px var(--star-color, #fff),
            900px 300px var(--star-color, #fff),
            1100px 200px var(--star-color, #fff);
          animation: twinkle 2s infinite alternate;
        }
        .stars::after {
          content: "";
          position: absolute;
          top: 0; left: 0;
          width: 100%; height: 100%;
          box-shadow: inherit;
          animation: twinkle 3s infinite alternate;
        }
        @keyframes twinkle {
          from { opacity: 0.5; }
          to { opacity: 1; }
        }
      `}</style>
    </section>
  )
}

export default HeroGrowth
