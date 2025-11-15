"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Search, Zap, Smartphone } from "lucide-react";

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
  return (
    <section className="bg-[#0b0014] text-white py-20 px-6 md:px-12 lg:px-20 overflow-hidden">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-semibold mb-4">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-400">
            AI-Powered
          </span>{" "}
          Marketing Solutions
        </h2>

        <p className="text-gray-300 max-w-3xl mx-auto mb-12">
          We provide comprehensive digital marketing solutions to help your
          business grow and succeed online.
        </p>

        {/* Infinite Carousel */}
        <div className="relative w-full overflow-hidden py-6">
          <motion.div
            className="flex gap-8"
            animate={{ x: ["0%", "-100%"] }}
            transition={{
              repeat: Infinity,
              duration: 30,
              ease: "linear",
            }}
          >
            {/* duplicate services array to create seamless loop */}
            {[...services, ...services].map((service, index) => (
              <div
                key={index}
                className="group bg-gradient-to-b from-[#1a0125] to-[#0b0014] rounded-3xl p-6 min-w-[320px] max-w-[330px] shadow-[0_0_25px_rgba(255,0,255,0.05)] hover:shadow-[0_0_40px_rgba(255,0,255,0.3)] transition-all duration-500"
              >
                <div className="flex items-center space-x-3 mb-5">
                  <div className="bg-[#2b013a] p-3 rounded-xl text-xl text-purple-400 group-hover:text-pink-400 transition-colors duration-300">
                    {service.icon}
                  </div>
                  <h3 className="font-semibold text-lg text-white group-hover:text-purple-300 transition-colors duration-300">
                    {service.title}
                  </h3>
                </div>

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
          </motion.div>

          {/* Edge fade gradients */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#0b0014] to-transparent"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#0b0014] to-transparent"></div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
