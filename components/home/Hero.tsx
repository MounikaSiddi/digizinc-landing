'use client'
import Image from "next/image"
import { motion } from "framer-motion"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import { useTheme } from "next-themes"
import { useState, useEffect } from "react"
import { TypeAnimation } from 'react-type-animation';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, staggerChildren: 0.2 },
  },
}

const clientLogos = [
  {
    name: "Google",
    lightLogo: "/logoipsum-1-light.svg",
    darkLogo: "/logoipsum-1-dark.svg",
    width: 120,
    height: 40,
  },
  {
    name: "Microsoft",
    lightLogo: "/logoipsum-2-light.svg",
    darkLogo: "/logoipsum-2-dark.svg",
    width: 140,
    height: 40,
  },
  {
    name: "Amazon",
    lightLogo: "/logoipsum-3-light.svg",
    darkLogo: "/logoipsum-3-dark.svg",
    width: 100,
    height: 40,
  },
  {
    name: "Netflix",
    lightLogo: "/logoipsum-4-light.svg",
    darkLogo: "/logoipsum-4-dark.svg",
    width: 110,
    height: 40,
  },
  {
    name: "Spotify",
    lightLogo: "/logoipsum-5-light.svg",
    darkLogo: "/logoipsum-5-dark.svg",
    width: 120,
    height: 40,
  },
  {
    name: "Adobe",
    lightLogo: "/logoipsum-6-light.svg",
    darkLogo: "/logoipsum-6-dark.svg",
    width: 100,
    height: 40,
  },
]

const Hero = () => {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const isDark = theme === "dark"

  useEffect(() => {
    setMounted(true)
  }, [])

  const typingPlaceholders = [
    'Help with SaaVik AI...',
    2000,
    'How to achieve SEO optimization...',
    2000,
    'How to make my product have a digital presence...',
    2000,
    'Automate content creation...',
    2000,
  ];

  return (
    <section className={`relative py-16 md:py-20 overflow-hidden min-h-[calc(100vh-80px)] flex flex-col justify-center
      bg-white dark:bg-black transition-colors duration-300`}>
      {/* Background image with low opacity */}
      <div
        className="absolute inset-0 bg-[url('/hero-bg.png')] bg-cover bg-center bg-no-repeat opacity-[0.03] dark:opacity-[0.02]"
        style={{ mixBlendMode: 'multiply' }}
      ></div>

      {/* Background grid with adjusted opacity */}
      <div className="absolute inset-0 bg-grid-white/[0.02] dark:bg-grid-white/[0.06] bg-[size:75px_75px]"></div>

      {/* Accent gradients */}
      <div className="absolute -top-10 -right-10 w-64 h-64 bg-primary/5 dark:bg-primary/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute top-40 -left-20 w-72 h-72 bg-secondary/5 dark:bg-secondary/5 rounded-full blur-3xl -z-10"></div>

      <div className="container relative z-10 px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Left Section: Text and Search Bar */}
        <motion.div
          className="max-w-2xl text-center md:text-left space-y-8 md:w-1/2"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <motion.h1
            className="font-heading text-3xl md:text-4xl lg:text-6xl font-bold leading-tight md:leading-tight mb-8 text-gray-900 dark:text-white"
            variants={fadeIn}
          >
            Transform Your{" "}
            <span
              className="text-transparent bg-clip-text bg-gradient-primary"
            >
              Digital
              <br /> Presence
            </span>{" "}
            <br />
            with AI
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mx-auto md:mx-0 leading-relaxed"
            variants={fadeIn}
          >
            Digizinc offers cutting-edge AI solutions and comprehensive digital marketing services to help your
            business thrive in the digital era...
          </motion.p>
          <motion.div variants={fadeIn} className="flex flex-col sm:flex-row justify-center md:justify-start gap-6 pt-8 px-0">
            <div className="relative w-full max-w-xl group">
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 h-6 w-6 text-primary-50/70 dark:text-[#FFD6FC]/70 group-hover:text-primary-50 dark:group-hover:text-[#FFD6FC] transition-colors duration-300 pointer-events-none" />
              <Input
                className="w-full pl-16 pr-8 py-6 text-lg font-medium rounded-full
                  bg-dark dark:bg-gradient-to-r dark:from-[#743E71] dark:to-[#2B0029]
                  border-2 border-primary/20 dark:border-[#FFD6FC]/20
                  hover:border-primary/40 dark:hover:border-[#FFD6FC]/40
                  focus:border-primary/60 dark:focus:border-[#FFD6FC]/60
                  focus:ring-4 focus:ring-primary/20 dark:focus:ring-[#FFD6FC]/20
                  focus:ring-offset-0
                  transition-all duration-300
                  shadow-xl shadow-primary/5
                  placeholder:text-primary-50/50 dark:placeholder:text-[#FFD6FC]/40
                  text-primary-50 dark:text-[#FFD6FC]"
              />
              <div className="absolute inset-y-0 left-16 right-8 flex items-center pointer-events-none">
                <TypeAnimation
                  sequence={typingPlaceholders}
                  wrapper="span"
                  cursor={true}
                  repeat={Infinity}
                  className="text-primary-50/50 dark:text-[#FFD6FC]/40 text-lg font-medium"
                />
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Section: Header Image */}
        <motion.div
          className="w-full md:w-1/2 flex justify-center md:justify-end mt-12 md:mt-0"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <Image
            src="/header-img.png"
            alt="Digital presence with AI"
            width={700}
            height={500}
            priority
            className="rounded-lg object-contain w-full h-auto max-w-[600px]"
          />
        </motion.div>
      </div>

      {/* Trusted By Section - COMMENTED OUT AS REQUESTED */}
      {/*
      <motion.div
        className="mt-20 pb-8 container mx-auto px-4 md:px-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <div className="text-center mb-6">
          <p className="text-sm font-medium text-gray-700 dark:text-gray-300 uppercase tracking-wider">
            Trusted by Industry Leaders
          </p>
        </div>

        <div className="relative overflow-hidden">
          <div className="flex animate-marquee gap-16 opacity-80 hover:opacity-100 transition-opacity duration-500 py-4">
            {mounted && clientLogos.map((logo, i) => (
              <div
                key={`first-${i}`}
                className="flex-shrink-0 transition-all duration-300 hover:scale-110"
              >
                <Image
                  src={isDark ? logo.darkLogo : logo.lightLogo}
                  alt={`${logo.name} logo`}
                  width={logo.width}
                  height={logo.height}
                  className="h-10 w-auto object-contain transition-all duration-300"
                  priority={i < 3}
                />
              </div>
            ))}

            {mounted && clientLogos.map((logo, i) => (
              <div
                key={`second-${i}`}
                className="flex-shrink-0 transition-all duration-300 hover:scale-110"
              >
                <Image
                  src={isDark ? logo.darkLogo : logo.lightLogo}
                  alt={`${logo.name} logo`}
                  width={logo.width}
                  height={logo.height}
                  className="h-10 w-auto object-contain transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </motion.div>
      */}

      {/* Custom CSS for marquee animation and gradient animation */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-marquee {
          animation: marquee 30s linear infinite;
        }

        .animate-marquee:hover {
          animation-play-state: paused;
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
      `}</style>
    </section>
  )
}

export default Hero