'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowLeft, CheckCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { IService } from '@/lib/services-data';
import { portfolioProjects } from '@/lib/portfolio-data.tsx';

interface ServicePageClientProps {
  service: IService;
}

const ServicePageClient: React.FC<ServicePageClientProps> = ({ service }) => {
  const relatedProjects = portfolioProjects.filter(p => p.services.includes(service.title));

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-100 dark:from-[#0d0d0d] dark:via-[#1a0f2a] dark:to-[#0d0d0d]">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div initial="hidden" animate="visible" variants={fadeIn}>
          <div className="mb-8">
            <Link href="/#services" className="inline-flex items-center text-purple-500 font-semibold hover:underline">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Services
            </Link>
          </div>

          <header className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4 text-gray-900 dark:text-white">
              {service.title}
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              {service.description}
            </p>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <motion.div
                className="prose prose-lg dark:prose-invert max-w-none bg-white dark:bg-gray-900/50 p-8 rounded-2xl shadow-lg border border-purple-500/20"
                variants={fadeIn}
              >
                <h2 className="font-heading text-3xl font-bold text-gray-900 dark:text-white">How We Amplify with AI</h2>
                {service.content}
              </motion.div>

              <motion.div
                className="mt-12 bg-white dark:bg-gray-900/50 p-8 rounded-2xl shadow-lg border border-purple-500/20"
                variants={fadeIn}
              >
                <h2 className="font-heading text-3xl font-bold mb-6 text-gray-900 dark:text-white">Key Benefits</h2>
                <motion.ul className="space-y-4" variants={staggerContainer}>
                  {service.benefits.map((benefit, index) => (
                    <motion.li key={index} className="flex items-start" variants={fadeIn}>
                      <CheckCircle className="h-6 w-6 text-purple-500 mr-4 mt-1 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">{benefit}</span>
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>
            </div>

            <div className="lg:col-span-1">
              <motion.div
                className="bg-white dark:bg-gray-900/50 p-6 rounded-2xl shadow-lg sticky top-24 border border-purple-500/20"
                variants={fadeIn}
              >
                <h3 className="text-2xl font-bold font-heading mb-6 text-gray-900 dark:text-white">Related Projects</h3>
                <div className="space-y-6">
                  {relatedProjects.map(project => (
                    <Link key={project.id} href={`/portfolio/${project.slug}`}>
                      <div className="group flex items-center gap-4 hover:bg-gray-100 dark:hover:bg-gray-800/50 p-3 rounded-lg transition-colors duration-300">
                        <Image src={project.image} alt={project.title} width={80} height={80} className="w-20 h-20 rounded-lg object-cover border-2 border-purple-500/30 group-hover:border-purple-500 transition-all duration-300" />
                        <div>
                          <h4 className="font-semibold text-gray-900 dark:text-white group-hover:text-purple-500 transition-colors duration-300">{project.title}</h4>
                          <p className="text-sm text-gray-500 dark:text-gray-400">{project.services.join(', ')}</p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
                <Button className="w-full mt-8 bg-gradient-primary text-white font-semibold py-3 rounded-lg hover:scale-105 transition-transform duration-300">
                  Get a Quote <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicePageClient;