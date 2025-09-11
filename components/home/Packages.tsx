'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Rocket, Share2, Film, Palette } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useContactModal } from '../ClientWrapper';

interface Package {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  ctaText: string;
}

const packages: Package[] = [
  {
    id: 'startup-branding',
    icon: <Rocket className="h-8 w-8 text-primary-500" />,
    title: 'Startup Branding Package',
    description: 'Establish a strong foundation for your new venture.',
    features: [
      'Logo Design',
      'Brand Strategy & Visual Identity',
      'Business Card & Stationery Design',
      'Brand Guidelines',
    ],
    ctaText: 'Get Started with Branding',
  },
  {
    id: 'social-media-domination',
    icon: <Share2 className="h-8 w-8 text-primary-500" />,
    title: 'Social Media Domination Package',
    description: 'Amplify your presence and engage your audience online.',
    features: [
      'Social Media Creative Assets (10 posts/month)',
      'Content Strategy & Copywriting',
      'Motion Graphics & Video Editing',
      'Banner & Display Ads',
    ],
    ctaText: 'Dominate Social Media',
  },
  {
    id: 'video-motion-mastery',
    icon: <Film className="h-8 w-8 text-primary-500" />,
    title: 'Video & Motion Mastery Package',
    description: 'Bring your brand to life with dynamic visual storytelling.',
    features: [
      'Explainer Videos',
      'Social Media Reels & Shorts',
      'Video Editing & Post-Production',
      'Cinematic Ad Production',
    ],
    ctaText: 'Master Video Content',
  },
  {
    id: 'full-creative-suite',
    icon: <Palette className="h-8 w-8 text-primary-500" />,
    title: 'Full Creative Suite',
    description: 'A comprehensive solution for all your creative needs.',
    features: [
      'Branding & Identity',
      'Website UI/UX Design',
      'Social Media Management',
      'Ad Creatives',
      'Video & Motion Production',
      'Priority Support',
    ],
    ctaText: 'Unlock Full Potential',
  },
];

const Packages = () => {
  const { openContactModal } = useContactModal();

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
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <section id="packages" className="py-12 md:py-16 bg-gray-50 dark:bg-secondary-950">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeIn}
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-foreground">
            Our <span className="bg-gradient-primary bg-clip-text text-transparent">Flexible Packages</span>
          </h2>
          <p className="text-foreground text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Choose the perfect creative solution tailored to your business needs.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={staggerContainer}
        >
          {packages.map((pkg, index) => (
            <motion.div key={pkg.id} variants={fadeIn}>
              <div
                className="bg-white dark:bg-secondary-900 rounded-xl shadow-lg border border-primary-600/20 dark:border-border
                           hover:border-primary-800/40 dark:hover:border-primary/40
                           ring-1 ring-secondary-600/20 dark:ring-0
                           hover:ring-primary-800/30 dark:hover:ring-primary/20
                           shadow-sm shadow-secondary-600/5 dark:shadow-none
                           hover:shadow-xl hover:shadow-primary-800/10 dark:hover:shadow-primary/10
                           transition-all duration-300 ease-out
                           hover:scale-[1.02] hover:-translate-y-1
                           h-full flex flex-col p-8"
              >
                <div className="mb-6 text-center">
                  <div className="w-16 h-16 mx-auto rounded-full bg-gradient-primary flex items-center justify-center mb-4">
                    {pkg.icon}
                  </div>
                  <h3 className="text-2xl font-semibold font-heading text-foreground mb-2">
                    {pkg.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {pkg.description}
                  </p>
                </div>

                <ul className="space-y-3 mb-8 flex-grow">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-foreground">
                      <CheckCircle className="h-5 w-5 text-primary-500 mr-3 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className="w-full rounded-full bg-gradient-primary text-primary-foreground font-semibold shadow-lg hover:opacity-90 transition-opacity transform hover:scale-105"
                  size="lg"
                  onClick={() => openContactModal(pkg.title)}
                >
                  {pkg.ctaText}
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Packages;
