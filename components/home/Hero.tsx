import Image from "next/image"
import { motion } from "framer-motion"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import { useTheme } from "next-themes" // Assuming you're using next-themes for theme management
import { useState, useEffect } from "react"

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
}

const clientLogos = [
  {
    name: "Google",
    lightLogo: "/logoipsum-1-light.svg", // Ensure these paths are correct
    darkLogo: "/logoipsum-1-dark.svg",
    width: 120,
    height: 40,
  },
  {
    name: "Microsoft",
    lightLogo: "/logoipsum-2-light.svg",
    darkLogo: "/logoipsum-2-dark.svg", // Make sure you have a dark version for each logo
    width: 140,
    height: 40,
  },
  {
    name: "Amazon",
    lightLogo: "/logoipsum-3-light.svg",
    darkLogo: "/logoipsum-1-dark.svg",
    width: 100,
    height: 40,
  },
  {
    name: "Netflix",
    lightLogo: "/logoipsum-4-light.svg",
    darkLogo: "/logoipsum-1-dark.svg",
    width: 110,
    height: 40,
  },
  {
    name: "Spotify",
    lightLogo: "/logoipsum-5-light.svg",
    darkLogo: "/logoipsum-1-dark.svg",
    width: 120,
    height: 40,
  },
  {
    name: "Adobe",
    lightLogo: "/logoipsum-6-light.svg",
    darkLogo: "/logoipsum-1-dark.svg",
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

  return (
    <section className="relative py-16 md:py-20 overflow-hidden bg-white dark:bg-gradient-to-b dark:from-secondary-950 dark:to-secondary-800 dark:bg-opacity-[0.06] rounded-b-lg">
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

      <div className="container relative z-10 px-4 md:px-6">
        <motion.div
          className="max-w-4xl mx-auto text-center space-y-8"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[80px] md:leading-[90px] mb-8"> {/* Increased text size and line height */}
            Transform Your{" "}
            <span
              className="text-transparent bg-clip-text bg-gradient-primary"
            >
              Digital
              <br /> Presence
            </span>{" "}
            with AI
          </h1>
          <p className="text-xl md:text-2xl text-foreground/80 mx-auto leading-relaxed"> {/* Use text-foreground/80 */}
            Digizinc offers cutting-edge AI solutions and comprehensive digital marketing services to help your
            business thrive in the digital era...
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6 pt-8 px-4">
            <div className="relative w-full max-w-2xl mx-auto group">
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 h-6 w-6 text-primary-50/70 dark:text-[#FFD6FC]/70 group-hover:text-primary-50 dark:group-hover:text-[#FFD6FC] transition-colors duration-300 pointer-events-none" />
              <Input
                placeholder="Explore SaaVik AI"
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
            </div>
          </div>
        </motion.div>

        {/* Trusted By Section - Adjusted positioning */}
        <motion.div
          className="mt-16 pb-4" /* Reduced top margin and added bottom padding */
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <div className="text-center mb-6"> {/* Reduced bottom margin */}
            <p className="text-sm font-medium text-foreground uppercase tracking-wider">
              Trusted by Industry Leaders
            </p>
          </div>

          <div className="relative overflow-hidden">
            {/* Gradient overlays for seamless loop effect (optional, depends on visual) */}
            {/* These were originally for fading logos but can be removed if not needed with filter */}
            {/* <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-background to-transparent z-20 pointer-events-none"></div>
            <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-background to-transparent z-20 pointer-events-none"></div> */}

            <div className="flex animate-marquee gap-16 opacity-80 hover:opacity-100 transition-opacity duration-500">
              {/* First set of logos */}
              {clientLogos.map((logo, i) => (
                <div
                  key={`first-${i}`}
                  className="flex-shrink-0 transition-all duration-300 hover:scale-110"
                >
                  {mounted && (
                    <Image
                      src={isDark ? logo.darkLogo : logo.lightLogo}
                      alt={`${logo.name} logo`}
                      width={logo.width}
                      height={logo.height}
                      className="h-10 w-auto object-contain transition-all duration-300"
                      priority={i < 3}
                    />
                  )}
                </div>
              ))}

              {/* Duplicate set for seamless loop */}
              {clientLogos.map((logo, i) => (
                <div
                  key={`second-${i}`}
                  className="flex-shrink-0 transition-all duration-300 hover:scale-110"
                >
                  {mounted && (
                    <Image
                      src={isDark ? logo.darkLogo : logo.lightLogo}
                      alt={`${logo.name} logo`}
                      width={logo.width}
                      height={logo.height}
                      // Same logic for filter as above
                      className="h-10 w-auto object-contain transition-all duration-300"
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

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

        /* Define the gradient animation if not already in your globals.css */
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