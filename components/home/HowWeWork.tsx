'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Users, Rocket, CheckCircle } from 'lucide-react';

const steps = [
  {
    icon: (
      <motion.div
        whileHover={{ scale: 1.1, rotate: 5 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <Lightbulb className="h-10 w-10" />
      </motion.div>
    ),
    title: '1. Discovery & Strategy',
    description: 'We begin by understanding your vision, goals, and challenges. Through in-depth consultations, we define a tailored strategy that aligns with your brand and market.',
  },
  {
    icon: (
      <motion.div
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <Users className="h-10 w-10" />
      </motion.div>
    ),
    title: '2. Creative & AI Integration',
    description: 'Our team of designers and AI specialists collaborate to bring your ideas to life. We leverage cutting-edge AI tools to enhance creativity, efficiency, and impact.',
  },
  {
    icon: (
      <motion.div
        whileHover={{ y: -5, rotate: -5 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <Rocket className="h-10 w-10" />
      </motion.div>
    ),
    title: '3. Development & Refinement',
    description: 'We build and refine your digital assets, ensuring pixel-perfect execution and seamless functionality. Iterative feedback loops ensure the final product exceeds expectations.',
  },
  {
    icon: (
      <motion.div
        whileHover={{ scale: 1.1, rotate: 10 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <CheckCircle className="h-10 w-10" />
      </motion.div>
    ),
    title: '4. Launch & Optimization',
    description: 'Your solution goes live! We continuously monitor performance, gather insights, and optimize campaigns to ensure sustained growth and measurable results.',
  },
];

const HowWeWork = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <section id="how-we-work" className="py-12 md:py-16 bg-white dark:bg-dark">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeIn}
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-foreground">
            Our <span className="bg-gradient-primary bg-clip-text text-transparent">Process</span>
          </h2>
          <p className="text-foreground text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            A streamlined approach to transform your vision into digital reality.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={staggerContainer}
        >
          {steps.map((step, index) => (
            <motion.div key={index} variants={fadeIn}>
              <div
                className="bg-gray-50 dark:bg-secondary-900 rounded-xl shadow-lg border border-primary-600/20 dark:border-border
                           hover:border-primary-800/40 dark:hover:border-primary/40
                           ring-1 ring-secondary-600/20 dark:ring-0
                           hover:ring-primary-800/30 dark:hover:ring-primary/20
                           shadow-sm shadow-secondary-600/5 dark:shadow-none
                           hover:shadow-xl hover:shadow-primary-800/10 dark:hover:shadow-primary/10
                           transition-all duration-300 ease-out
                           hover:scale-[1.02] hover:-translate-y-1
                           h-full flex flex-col p-8 text-center"
              >
                <div className="relative mb-6 mx-auto w-20 h-20 rounded-2xl bg-gradient-primary to-secondary p-1 group-hover:scale-110 transition-all duration-300 transform group-hover:rotate-6">
  <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] opacity-20 rounded-2xl group-hover:opacity-30 transition-opacity duration-300"></div>
  <div className="relative h-full w-full flex items-center justify-center bg-background/80 rounded-2xl">
    <div className=" transition-colors duration-300 transform group-hover:scale-110">
      {step.icon}
    </div>
  </div>
</div>
                <h3 className="text-2xl font-semibold font-heading text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-base flex-grow">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HowWeWork;
