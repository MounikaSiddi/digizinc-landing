'use client'
import { motion } from "framer-motion"
import { useTheme } from "next-themes"
import { useState, useEffect } from "react"
import { useContactModal } from "../ClientWrapper";
import ToggleSwitch from "@/components/ui/toggle-switch"; // Import the ToggleSwitch component

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, staggerChildren: 0.2 },
  },
}

const Hero = () => {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const { openContactModal } = useContactModal();

  useEffect(() => {
    setMounted(true);
  }, []);

  const backgroundClass = theme === 'dark' ? 'bg-gradient-dark-hero' : 'bg-gradient-light-hero';

  return (
    <section
      className={`relative py-10 min-h-[calc(100vh-80px)] flex flex-col justify-center items-center ${backgroundClass}`}>

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
  className="font-heading text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight md:leading-tight mb-8 dark:text-white w-full"
  variants={fadeIn}
>
  <span className="text-3xl md:text-4xl xl:text-5xl">We support </span>

  {/* Growth word with toggle */}
  <span className="inline-flex items-center text-6xl sm:text-7xl md:text-8xl xl:text-9xl whitespace-nowrap">
    gr<ToggleSwitch className="mx-2" />wth
  </span>

  <span className="block text-3xl md:text-4xl xl:text-5xl mt-4 md:mt-2">
    of your business
  </span>
</motion.h1>


          <motion.p
            className="text-lg lg:text-xl dark:text-white/90 mx-auto lg:mx-0 leading-relaxed"
            variants={fadeIn}
          >
            We turn ideas into working products
          </motion.p>
        </motion.div>
      </div>

      {/* ✨ Custom CSS for stars + gradient animation */}
      <style jsx>{`
        .stars {
          background: transparent;
          box-shadow:
            20px 40px var(--star-color),
            100px 200px var(--star-color),
            300px 150px var(--star-color),
            500px 400px var(--star-color),
            700px 250px var(--star-color),
            900px 300px var(--star-color),
            1100px 200px var(--star-color);
          animation: twinkle 2s infinite alternate;
        }

        .stars::after {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          box-shadow: inherit;
          animation: twinkle 3s infinite alternate;
        }

        @keyframes twinkle {
          from { opacity: 0.5; }
          to { opacity: 1; }
        }

        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        .animate-gradient {
          animation: gradient 6s ease infinite;
        }
      `}</style>
    </section>
  )
}

export default Hero;