'use client'
import Image from "next/image"
import { motion } from "framer-motion"

const topRowLogos = [
  { name: "Coffee & Crisps", logo: "/logo-coffeeandcrisps.png", url: "https://www.instagram.com/coffeeandcrispscafe/" },
  { name: "Blakku Coffee", logo: "/logo-blakkucoffee.png", url: "https://www.instagram.com/blakku_coffee/" },
  { name: "The Hole in the Wall Cafe", logo: "/logo-theholeinthewallcafe.png", url: "https://www.instagram.com/theholeinthewallcafe_hyd/" },
  { name: "One Grasp", logo: "/logo-onegrasp.png", url: "https://www.instagram.com/onegrasp/" },
  { name: "Corsa Sports", logo: "/logo-corsasports.png", url: "https://www.instagram.com/corsasportsllp/" },
];

const bottomRowLogos = [
  { name: "Porch Studio", logo: "/logo-porchstudio.png", url: "https://www.instagram.com/porchstudiodesigns/" },
  { name: "NR Allied", logo: "/logo-nrallied.png", url: "https://www.nrallied.com/" },
  { name: "Flameback Capital", logo: "/logo-flamebackcapital.png", url: "https://www.instagram.com/flameback_capital/" },
  { name: "Jayanthi Hospitals", logo: "/logo-jayanthihospitals.png", url: "https://www.instagram.com/jayanthihospitals/" },
  { name: "VSP Kitchen", logo: "/logo-vspkitchen.png", url: "https://www.instagram.com/vspkitchenhyd/" },
  { name: "Ekaanivita", logo: "/logo-ekaanivita.png", url: "https://www.instagram.com/ekaanivita/" },
];

const DigitalPartners = () => {
  return (
    <motion.div
      className="py-16 font-bricolage container mx-auto px-4 md:px-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.5 }}
    >
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bricolage font-bricolage-heading md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
          Our Digital Partners
        </h2>
      </div>

      <div className="flex flex-col items-center justify-center space-y-8">
        {/* Top Row */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-x-12 gap-y-10 md:gap-x-16 lg:gap-x-20">
          {topRowLogos.map((logo, i) => (
            <a
              key={i}
              href={logo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center items-center transition-all duration-300 hover:scale-110 hover:opacity-80"
            >
              <Image
                src={logo.logo}
                alt={`${logo.name} logo`}
                width={200}
                height={75}
                className="h-20 w-auto object-contain invert dark:invert-0"
              />
            </a>
          ))}
        </div>

        {/* Bottom Row */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-12 gap-y-10 md:gap-x-16 lg:gap-x-20">
          {bottomRowLogos.map((logo, i) => (
            <a
              key={i}
              href={logo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center items-center transition-all duration-300 hover:scale-110 hover:opacity-80"
            >
              <Image
                src={logo.logo}
                alt={`${logo.name} logo`}
                width={200}
                height={75}
                className="h-20 w-auto object-contain invert dark:invert-0"
              />
            </a>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default DigitalPartners