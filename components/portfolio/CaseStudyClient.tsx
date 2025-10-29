'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { IPortfolioProject } from '@/lib/portfolio-data';
import { useContactModal } from '../ClientWrapper';
import CountUp from 'react-countup';

interface CaseStudyClientProps {
  project: IPortfolioProject;
}

import BeforeAfterSlider from '@/components/ui/BeforeAfterSlider';
import Image from 'next/image';

interface CaseStudyClientProps {
  project: IPortfolioProject;
}

const CaseStudyClient: React.FC<CaseStudyClientProps> = ({ project }) => {
  const { openAiPackageInquiryModal } = useContactModal();
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link href="/portfolio" className="inline-flex items-center text-primary mb-8 hover:underline">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Portfolio
          </Link>

          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">{project.title}</h1>
          <div className="flex items-center gap-2 mb-8">
            {project.services.map((service) => (
              <span key={service} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary">
                {service}
              </span>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              {project.beforeAfterImages && project.beforeAfterImages.length > 0 ? (
                project.beforeAfterImages.map((images, index) => (
                  <div key={index} className="mb-8">
                    <BeforeAfterSlider before={images.before} after={images.after} />
                  </div>
                ))
              ) : (
                <Image src={project.image} alt={project.title} width={1200} height={800} className="rounded-lg shadow-lg mb-8" />
              )}
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="lead">{project.description}</p>
                {project.content}
              </div>
            </div>
            <div className="lg:col-span-1">
              <div className="bg-card p-6 rounded-lg shadow-lg sticky top-24">
                <h3 className="text-xl font-bold font-heading mb-4">Project Details</h3>
                <ul className="space-y-4">
                  <li>
                    <h4 className="font-semibold">Client</h4>
                    <p className="text-muted-foreground">{project.client}</p>
                  </li>
                  <li>
                    <h4 className="font-semibold">Services</h4>
                    <p className="text-muted-foreground">{project.services.join(', ')}</p>
                  </li>
                  <li>
                    <h4 className="font-semibold">Results</h4>
                    <div className="text-muted-foreground space-y-2">
                      {project.results.map(result => (
                        <div key={result.label} className="flex justify-between items-center">
                          <span>{result.label}</span>
                          <span className="font-bold text-lg text-primary">
                            <CountUp end={result.value} duration={2.5} suffix={result.suffix} />
                          </span>
                        </div>
                      ))}
                    </div>
                  </li>
                </ul>
                <Button className="w-full rounded-full bg-gradient-primary text-primary-foreground font-semibold shadow-lg hover:opacity-90 transition-transform hover:scale-105 mt-8" onClick={() => openAiPackageInquiryModal(project.title)}>Start Your Project</Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudyClient;