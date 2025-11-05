import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Search, Zap, Smartphone, Share2, Mail, Users, BarChart3, Award } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useContactModal } from "../ClientWrapper";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
}
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}
const services = [
  {
    title: "Affiliate Marketing",
    icon: <Zap className="text-pink-500" />,
    image: "/Marketing Solutions/Affiliate Marketing.png",
  },
  {
    title: "AI-Driven Strategies",
    icon: <Search className="text-pink-500" />,
    image: "/Marketing Solutions/AI-Driven Strategies.png",
  },
  {
    title: "Social Media Marketing",
    icon: <Smartphone className="text-pink-500" />,
    image: "/Marketing Solutions/Social Media Marketing.jpg",
  },
   {
    title: "SEO Optimization",
    icon: <Zap className="text-pink-500" />,
    image: "/Marketing Solutions/SEO Optimization.jpg",
  },
  {
    title: "Email Marketing",
    icon: <Search className="text-pink-500" />,
    image: "/Marketing Solutions/Email Marketing.jpg",
  },
  {
    title: "Mobile Marketing",
    icon: <Smartphone className="text-pink-500" />,
    image: "/Marketing Solutions/Mobile Marketing.jpg",
  },
  {
    title: "Influencer Marketing",
    icon: <Smartphone className="text-pink-500" />,
    image: "/Marketing Solutions/Influencer Marketing.jpg",
  },
];

const Solutions = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="bg-[#0b0014] text-white py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-semibold mb-4">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-400">
            AI-Powered
          </span>{" "}
          Marketing Solutions
        </h2>

        {/* Subtext */}
        <p className="text-gray-300 max-w-3xl mx-auto mb-12">
          We provide comprehensive digital marketing solutions to help your
          business grow and succeed online.
        </p>

        {/* Card Container */}
        <div
          className={`w-full no-scrollbar ${
            isMobile
              ? "h-[500px] overflow-y-auto"
              : "overflow-x-auto overflow-y-hidden"
          }`}
        >
          <div
            className={`grid gap-8 p-2 scroll-smooth snap-mandatory ${
              isMobile
                ? "grid-cols-2 grid-rows-2 h-max snap-y"
                : "grid-flow-col auto-cols-[minmax(320px,1fr)] h-[450px] snap-x"
            }`}
          >
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-gradient-to-b from-[#1a0125] to-[#0b0014] rounded-3xl p-6 min-w-[320px] shadow-[0_0_25px_rgba(255,0,255,0.05)] hover:shadow-[0_0_40px_rgba(255,0,255,0.3)] transition-all duration-500 snap-center"
              >
                {/* Icon + Title */}
                <div className="flex items-center space-x-3 mb-5">
                  <div className="bg-[#2b013a] p-3 rounded-xl text-xl text-purple-400 group-hover:text-pink-400 transition-colors duration-300">
                    {service.icon}
                  </div>
                  <h3 className="font-semibold text-lg text-white group-hover:text-purple-300 transition-colors duration-300">
                    {service.title}
                  </h3>
                </div>

                {/* Image */}
                <div className="rounded-2xl overflow-hidden relative">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </div>
            ))}
          </div>

          {/* Hide scrollbar */}
          <style jsx>{`
            .no-scrollbar::-webkit-scrollbar {
              display: none;
            }
            .no-scrollbar {
              -ms-overflow-style: none; /* IE and Edge */
              scrollbar-width: none; /* Firefox */
            }
          `}</style>
        </div>
      </div>
    </section>
  );
};

export default Solutions;