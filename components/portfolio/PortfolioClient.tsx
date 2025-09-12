'use client'

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { portfolioProjects, getAllServices, IPortfolioProject } from '@/lib/portfolio-data';

const PortfolioClient = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const allServices = getAllServices();

  const filteredProjects = activeFilter === 'All'
    ? portfolioProjects
    : portfolioProjects.filter(p => p.services.includes(activeFilter));

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Our Work
          </h1>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            A selection of projects that showcase our expertise in blending creativity and AI.
          </p>
        </motion.div>

        <div className="flex justify-center flex-wrap gap-2 mb-12">
          {allServices.map(service => (
            <Button
              key={service}
              variant={activeFilter === service ? 'default' : 'outline'}
              onClick={() => setActiveFilter(service)}
              className="rounded-full"
            >
              {service}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              className="group bg-card rounded-xl overflow-hidden shadow-lg border border-border hover:shadow-primary/20 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: project.id * 0.1 }}
              layout
            >
              <div className="relative h-56">
                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300"></div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  {project.services.map((service) => (
                    <span key={service} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary">
                      {service}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-bold font-heading text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <Link href={`/portfolio/${project.slug}`}>
                  <Button variant="link" className="p-0 h-auto text-primary">
                    Read Case Study
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioClient;