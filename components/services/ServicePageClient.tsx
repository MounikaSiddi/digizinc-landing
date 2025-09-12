'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowLeft, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import { IService } from '@/lib/services-data';
import { portfolioProjects } from '@/lib/portfolio-data.tsx';

interface ServicePageClientProps {
  service: IService;
}

const ServicePageClient: React.FC<ServicePageClientProps> = ({ service }) => {
  const relatedProjects = portfolioProjects.filter(p => p.services.includes(service.title));

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link href="/#services" className="inline-flex items-center text-primary mb-8 hover:underline">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Services
          </Link>

          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">{service.title}</h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-3xl">{service.description}</p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <h2 className="font-heading text-2xl font-bold">How We Amplify with AI</h2>
                {service.content}

                <h2 className="font-heading text-2xl font-bold mt-12">Key Benefits</h2>
                <ul className="space-y-4">
                  {service.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="lg:col-span-1">
              <div className="bg-card p-6 rounded-lg shadow-lg sticky top-24">
                <h3 className="text-xl font-bold font-heading mb-4">Related Projects</h3>
                <div className="space-y-4">
                  {relatedProjects.map(project => (
                    <Link key={project.id} href={`/portfolio/${project.slug}`}>
                      <div className="group flex items-center gap-4 hover:bg-accent p-2 rounded-lg transition-colors">
                        <img src={project.image} alt={project.title} className="w-16 h-16 rounded-lg object-cover" />
                        <div>
                          <h4 className="font-semibold group-hover:text-primary transition-colors">{project.title}</h4>
                          <p className="text-sm text-muted-foreground">{project.services.join(', ')}</p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
                <Button className="w-full mt-8">Get a Quote</Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicePageClient;
