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
    // <section
    //   className={`relative py-10 min-h-[calc(100vh-80px)] flex flex-col justify-center items-center bg-gradient-to-b from-white to-gray-100 dark:from-[#0d0d0d] dark:via-[#240840] dark:to-[#0d0d0d]`}>
      
    //   {/* Neon Glow Orbs */}
    //   <div className="absolute -top-40 -left-40 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
    //   <div className="absolute bottom-0 right-0 w-[28rem] h-[28rem] bg-secondary/20 rounded-full blur-3xl"></div>

    //   {/* ⭐ Stars layer */}
    //   <div className="stars absolute inset-0 -z-10"></div>

    //   {/* Content */}
    //   <div className="container relative z-10 px-4 lg:px-6 flex flex-col items-center justify-center gap-12">
    //     <motion.div
    //       className="max-w-3xl text-center space-y-8 w-full"
    //       initial="hidden"
    //       animate="visible"
    //       variants={fadeIn}
    //     >
    //      <motion.h1
    //         className="font-heading text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight md:leading-tight mb-8 text-foreground w-full"
    //         variants={fadeIn}
    //       >
    //         <span className="text-3xl md:text-4xl xl:text-5xl">
    //           AI driven
    //         </span>
    //         <span className="text-7xl md:text-8xl xl:text-9xl block">gr
    //           {mounted ? (
    //             <ToggleSwitch
    //               className="mx-1 inline-block w-[100px] h-[50px] md:w-[120px] md:h-[60px] lg:w-[150px] lg:h-[75px] align-middle"
    //               checked={theme === 'dark'}
    //               onCheckedChange={(checked) => {
    //                 setTheme(checked ? 'dark' : 'light');
    //                 if (checked) {
    //                 }
    //               }}
    //             />
    //           ) : (
    //             <span className="inline-block w-[100px] h-[50px] md:w-[120px] md:h-[60px] lg:w-[150px] lg:h-[75px] align-middle bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse"></span>
    //           )}
    //         wth</span>
    //         <span className="text-3xl md:text-4xl xl:text-5xl">for your business</span>
    //       </motion.h1>


    //       <motion.p
    //         className="text-lg lg:text-xl text-muted-foreground mx-auto leading-relaxed"
    //         variants={fadeIn}
    //       >
    //         Digizinc merges design, storytelling, and {"AI-powered intelligence"}  
    //         to help brands scale faster and stand out in a crowded market.
    //       </motion.p>

    //       <motion.div variants={fadeIn} className="flex flex-wrap gap-4 justify-center mt-8">
    //         <Button
    //           onClick={() => openContactModal(undefined)}
    //           variant="gradient"
    //           className="rounded-full px-8 py-4 text-lg font-semibold shadow-lg text-primary-foreground hover:scale-105 transition"
    //         >
    //           🚀 Start Your Project
    //         </Button>
    //         <Button
    //           variant="outline"
    //           onClick={() => {
    //             const servicesSection = document.getElementById('services');
    //             if (servicesSection) {
    //               servicesSection.scrollIntoView({ behavior: 'smooth' });
    //             }
    //           }}
    //           className="rounded-full px-8 py-4 text-lg font-semibold border-primary text-primary dark:text-primary-foreground hover:bg-primary/10 transition"
    //         >
    //           Explore Services
    //         </Button>
    //       </motion.div>
    //     </motion.div>
    //   </div>

    //   {/* ✨ Stars CSS */}
    //   <style jsx>{`
    //     .stars {
    //       background: transparent;
    //       box-shadow:
    //         20px 40px ${starColor},
    //         100px 200px ${starColor},
    //         300px 150px ${starColor},
    //         500px 400px ${starColor},
    //         700px 250px ${starColor},
    //         900px 300px ${starColor},
    //         1100px 200px ${starColor};
    //       animation: twinkle 2s infinite alternate;
    //     }
    //     .stars::after {
    //       content: "";
    //       position: absolute;
    //       top: 0; left: 0;
    //       width: 100%; height: 100%;
    //       box-shadow: inherit;
    //       animation: twinkle 3s infinite alternate;
    //     }
    //     @keyframes twinkle {
    //       from { opacity: 0.5; }
    //       to { opacity: 1; }
    //     }
    //   `}</style>
    // </section>
    <section className="relative text-white bg-cover bg-center bg-no-repeat p-4 sm:p-6 lg:p-8 text-white overflow-hidden"
  
    style={{
      backgroundImage: `linear-gradient(to top, rgba(253,44,181,0.4) 20%, rgba(0,0,0,0.9) 100%), url("/Mask group.png")`,
    }}
    >
      {/* Overlay gradient effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,0,255,0.3),_transparent_50%)] opacity-60"></div>

      <div className="relative z-10 container mx-auto px-6 py-20 flex flex-col items-center text-center">
        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-bold leading-tight max-w-4xl">
          We build{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-400">
            AI-Powered
          </span>{" "}
          Designs that delivers.
        </h1>

        {/* Subtext */}
        <p className="mt-4 text-gray-300 max-w-2xl">
          From scroll-stopping visuals to smart campaigns—we deliver
          data-backed creativity for brands that want more than likes.
        </p>

        {/* Button */}
        <button className="mt-8 px-6 py-3 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 hover:from-purple-500 hover:to-pink-500 text-white font-medium shadow-lg transition-all">
          Explore Services
        </button>

        {/* Image Grid */}
        
      </div>
       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-7xl mx-auto p-4 md:max-h-[100px] overflow-hidden">
  {/* Left Column */}
  <div className="flex flex-col gap-4">
    <div className="rounded-3xl overflow-hidden border-2 border-secondary/20 hover:border-secondary/50 transition-all shadow-lg shadow-secondary/20 bg-[#ffffff]/40 p-2">
      <img 
        src="/Rectangle 11631.png" 
        alt="AI Code Interface with Flowing Data" 
        className="w-full h-auto object-cover rounded-3xl"
      />
    </div>
    <div className="rounded-3xl overflow-hidden border-2 border-primary/20 hover:border-primary/50 transition-all shadow-lg shadow-primary/20 bg-[#ffffff]/40 p-2">
      <img 
        src="/Rectangle 11632.png"
        alt="E-commerce Shopping Cart with Neon Effects" 
        className="w-full h-auto object-cover rounded-3xl"
      />
    </div>
  </div>

  {/* Middle Column */}
  <div className="flex flex-col gap-4">
    <div className="rounded-3xl overflow-hidden border-2 border-primary/20 hover:border-primary/50 transition-all shadow-lg shadow-primary/20 bg-[#ffffff]/40 p-2">
      <img 
        src="/Rectangle 11630.png"
        alt="Digital Books with Holographic Effects" 
        className="w-full h-auto object-cover rounded-3xl"
      />
    </div>
    <div className="rounded-3xl overflow-hidden border-2 border-primary/20 hover:border-primary/50 transition-all shadow-lg shadow-primary/20 bg-[#ffffff]/40 p-2">
      <img 
        src="/Rectangle 11635.png"
        alt="Neon City Skyline" 
        className="w-full h-auto object-cover rounded-3xl"
      />
    </div>
  </div>

  {/* Right Column */}
  <div className="rounded-3xl overflow-hidden border-2 border-secondary/20 hover:border-secondary/50 transition-all shadow-lg shadow-secondary/20 bg-[#ffffff]/40 p-2">
    <img 
      src="/Rectangle 11634.png"
      alt="DNA Technology Visualization" 
      className="w-full h-auto object-cover rounded-3xl"
    />
  </div>
</div>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/1234567890"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 p-3 rounded-full shadow-lg hover:scale-110 transition-transform duration-300"
      >
        
      </a>
    </section>
  )
}

export default HeroGrowth
