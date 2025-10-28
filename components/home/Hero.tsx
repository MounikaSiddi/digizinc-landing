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
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const { openContactModal } = useContactModal();
  
  const { toast } = useToast();
  const { showConfetti } = useConfetti();
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    setMounted(true);
    audioRef.current = new Audio('/confetti_sound.mp3');
    audioRef.current.load();
  }, []);





  const starColor = theme === 'dark' ? '#fff' : '#333';



  return (
    <section
      className={`relative py-10 min-h-[calc(100vh-80px)] flex flex-col justify-center items-center bg-gradient-to-b from-white to-gray-100 dark:from-[#0d0d0d] dark:via-[#240840] dark:to-[#0d0d0d]`}>
      
      {/* Neon Glow Orbs */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-[28rem] h-[28rem] bg-secondary/20 rounded-full blur-3xl"></div>

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
            className="font-heading text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight md:leading-tight mb-8 text-foreground w-full"
            variants={fadeIn}
          >
            <span className="text-3xl md:text-4xl xl:text-5xl">
              AI driven
            </span>
            <span className="text-7xl md:text-8xl xl:text-9xl block">gr
              {mounted ? (
                <ToggleSwitch
                  className="mx-1 inline-block w-[100px] h-[50px] md:w-[120px] md:h-[60px] lg:w-[150px] lg:h-[75px] align-middle"
                  checked={theme === 'dark'}
                  onCheckedChange={(checked) => {
                    setTheme(checked ? 'dark' : 'light');
                    if (checked) {
                      toast({
                        title: "🚀 Growth Activated",
                        description: "Your business journey with Digizinc begins!",
                        duration: 3000,
                      });
                    }
                  }}
                />
              ) : (
                <span className="inline-block w-[100px] h-[50px] md:w-[120px] md:h-[60px] lg:w-[150px] lg:h-[75px] align-middle bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse"></span>
              )}
            wth</span>
            <span className="text-3xl md:text-4xl xl:text-5xl">for your business</span>
          </motion.h1>


          <motion.p
            className="text-lg lg:text-xl text-muted-foreground mx-auto leading-relaxed"
            variants={fadeIn}
          >
            Digizinc merges design, storytelling, and {"AI-powered intelligence"}  
            to help brands scale faster and stand out in a crowded market.
          </motion.p>

          <motion.div variants={fadeIn} className="flex flex-wrap gap-4 justify-center mt-8">
            <Button
              onClick={() => openContactModal(undefined)}
              variant="gradient"
              className="rounded-full px-8 py-4 text-lg font-semibold shadow-lg text-primary-foreground hover:scale-105 transition"
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
              className="rounded-full px-8 py-4 text-lg font-semibold border-primary text-primary dark:text-primary-foreground hover:bg-primary/10 transition"
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
            20px 40px ${starColor},
            100px 200px ${starColor},
            300px 150px ${starColor},
            500px 400px ${starColor},
            700px 250px ${starColor},
            900px 300px ${starColor},
            1100px 200px ${starColor};
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
