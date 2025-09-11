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

  return (
    <section
      className={`relative py-10 overflow-hidden min-h-[calc(100vh-80px)] flex flex-col justify-center items-center
      text-white`}>
      {/* 🌌 Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#D9D9D9] via-[#F22EE5] to-[#561F8C] -z-20"></div>

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
            className="text-lg lg:text-xl text-white/90 mx-auto lg:mx-0 leading-relaxed"
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
            20px 40px white,
            100px 200px white,
            300px 150px white,
            500px 400px white,
            700px 250px white,
            900px 300px white,
            1100px 200px white;
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