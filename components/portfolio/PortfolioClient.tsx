'use client'

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { portfolioProjects, getAllServices } from '@/lib/portfolio-data';
import { ArrowRight } from 'lucide-react';

const PortfolioClient = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const allServices = getAllServices();

  const filteredProjects = activeFilter === 'All'
    ? portfolioProjects
    : portfolioProjects.filter(p => p.services.includes(activeFilter));

  const featuredProject = filteredProjects[0];
  const otherProjects = filteredProjects.slice(1);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-100 dark:from-[#0d0d0d] dark:via-[#1a0f2a] dark:to-[#0d0d0d]">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4 text-gray-900 dark:text-white">
            Our <span className="bg-gradient-primary bg-clip-text text-transparent">Portfolio</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A selection of projects that showcase our expertise in blending creativity and AI.
          </p>
        </motion.div>

        <div className="flex justify-center flex-wrap gap-3 mb-12">
          {allServices.map(service => (
            <Button
              key={service}
              variant={activeFilter === service ? 'default' : 'outline'}
              onClick={() => setActiveFilter(service)}
              className="rounded-full transition-all duration-300"
            >
              {service}
            </Button>
          ))}
        </div>

        {featuredProject && (
          <motion.div
            className="mb-16 group"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <Link href={`/portfolio/${featuredProject.slug}`}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-white dark:bg-gray-900/50 rounded-2xl shadow-lg overflow-hidden border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
                <div className="relative h-80 lg:h-full">
                  <img
                    src={featuredProject.image}
                    alt={featuredProject.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
                <div className="p-8">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {featuredProject.services.map(service => (
                      <span key={service} className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-500/10 text-purple-500">
                        {service}
                      </span>
                    ))}
                  </div>
                  <h2 className="text-3xl font-bold font-heading text-gray-900 dark:text-white mb-4 group-hover:text-purple-500 transition-colors duration-300">
                    {featuredProject.title}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 text-lg mb-6">
                    {featuredProject.description}
                  </p>
                  <div className="flex items-center text-purple-500 font-semibold">
                    Read Case Study
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {otherProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="group"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: index * 0.1 } },
              }}
              layout
            >
              <Link href={`/portfolio/${project.slug}`}>
                <div className="bg-white dark:bg-gray-900/50 rounded-2xl shadow-lg overflow-hidden border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
                  <div className="relative h-64">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold font-heading text-gray-900 dark:text-white mb-2 group-hover:text-purple-500 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.services.map(service => (
                        <span key={service} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-500/10 text-purple-500">
                          {service}
                        </span>
                      ))}
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      {project.description}
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioClient;
