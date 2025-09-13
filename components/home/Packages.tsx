'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { CheckCircle, Rocket, Share2, Film, Palette } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useContactModal } from '../ClientWrapper'

interface Package {
  id: string
  Icon: React.ElementType
  title: string
  description: string
  features: string[]
  ctaText: string
  hoverAnimation?: object
}

const packages: Package[] = [
  {
    id: 'startup-branding',
    Icon: Rocket,
    title: 'Startup Branding Package',
    description: 'Establish a strong foundation for your new venture with AI-enhanced branding.',
    features: [
      'AI-assisted Logo Design',
      'Brand Strategy & AI-driven Visual Identity',
      'Business Card & Stationery Design',
      'Comprehensive Brand Guidelines',
    ],
    ctaText: 'Get Started with Branding',
    hoverAnimation: { y: -5, rotate: -5 },
  },
  {
    id: 'social-media-domination',
    Icon: Share2,
    title: 'Social Media Domination Package',
    description: 'Amplify your presence with AI-powered content and strategies.',
    features: [
      'AI-generated Creative Assets (10 posts/month)',
      'AI-optimized Content Strategy & Copywriting',
      'Motion Graphics & AI-enhanced Video Editing',
      'Performance-driven Banner & Display Ads',
    ],
    ctaText: 'Dominate Social Media',
    hoverAnimation: { scale: 1.1, rotate: 10 },
  },
  {
    id: 'video-motion-mastery',
    Icon: Film,
    title: 'Video & Motion Mastery Package',
    description: 'Bring your brand to life with dynamic, AI-powered visual storytelling.',
    features: [
      'AI-assisted Explainer Videos',
      'Engaging Social Media Reels & Shorts',
      'Advanced AI-powered Video Editing & Post-Production',
      'Cinematic Ad Production',
    ],
    ctaText: 'Master Video Content',
    hoverAnimation: { scale: 1.1 },
  },
  {
    id: 'full-creative-suite',
    Icon: Palette,
    title: 'Full Creative Suite',
    description: 'A comprehensive, AI-amplified solution for all your creative needs.',
    features: [
      'End-to-End Branding & Identity',
      'Futuristic Website UI/UX Design',
      'AI-driven Social Media Management',
      'High-performance Ad Creatives',
      'Full-scale Video & Motion Production',
      'Priority Support & AI Consultation',
    ],
    ctaText: 'Unlock Full Potential',
    hoverAnimation: { scale: 1.1, rotate: 5 },
  },
]

const Packages = () => {
  const { openContactModal } = useContactModal()

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
      transition: { staggerChildren: 0.15 },
    },
  }

  return (
    <section
      id="packages"
      className="py-12 md:py-16 bg-gray-50 dark:bg-secondary-950"
    >
      <div className="container mx-auto px-4 md:px-6">
        {/* Heading */}
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeIn}
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-foreground">
            Our{' '}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              AI-Powered Packages
            </span>
          </h2>
          <p className="text-foreground/80 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Choose the perfect creative solution, amplified by AI, tailored to your business needs.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={staggerContainer}
        >
          {packages.map((pkg) => {
            const productSchema = {
              "@context": "https://schema.org",
              "@type": "Product",
              "name": pkg.title,
              "description": pkg.description,
              "offers": {
                "@type": "Offer",
                "priceCurrency": "USD",
                "price": "0.00", // Placeholder, as prices are not defined
                "itemCondition": "https://schema.org/NewCondition",
                "availability": "https://schema.org/InStock",
                "url": "https://digizinc.com/connect" // Link to contact form
              },
              "brand": {
                "@type": "Brand",
                "name": "DigiZinc"
              },
              "aggregateRating": { // Placeholder, if testimonials are linked
                "@type": "AggregateRating",
                "ratingValue": "5",
                "reviewCount": "12"
              }
            };

            return (
              <motion.div key={pkg.id} variants={fadeIn}>
                <script
                  type="application/ld+json"
                  dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
                />
                <div className="group bg-white dark:bg-secondary-900 rounded-xl border border-primary-600/20 dark:border-border
                hover:border-primary-800/40 dark:hover:border-primary/40
                ring-1 ring-secondary-600/20 dark:ring-0
                hover:ring-primary-800/30 dark:hover:ring-primary/20
                shadow-sm shadow-secondary-600/5 dark:shadow-none
                hover:shadow-lg hover:shadow-primary-800/10 dark:hover:shadow-primary/10
                transition-all duration-300 ease-out
                hover:scale-[1.02] hover:-translate-y-1
                h-full flex flex-col p-8
                before:absolute before:inset-0 before:bg-gradient-to-b before:from-secondary-900 before:to-secondary-600 before:opacity-0 hover:before:opacity-10 before:transition-opacity before:duration-300"
              >
                  {/* Icon */}
                  <div className="mb-6 text-center">
                    <div className="relative mb-4 mx-auto w-16 h-16 rounded-2xl bg-gradient-primary p-0.5 transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110">
                      <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] opacity-20 rounded-2xl group-hover:opacity-30 transition-opacity"></div>
                      <div className="relative h-full w-full flex items-center justify-center bg-background/80 rounded-2xl">
                        <motion.div
                          whileHover={pkg.hoverAnimation}
                          transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                        >
                          <pkg.Icon className="h-8 w-8 text-foreground" />
                        </motion.div>
                      </div>
                    </div>
                    <h3 className="text-2xl font-semibold font-heading text-foreground mb-2">
                      {pkg.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">{pkg.description}</p>
                  </div>

                  {/* Features */}
                  <ul className="space-y-3 mb-8 flex-grow">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-foreground">
                        <CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Button
                    className="w-full rounded-full bg-gradient-primary text-primary-foreground font-semibold shadow-lg hover:opacity-90 transition-transform hover:scale-105"
                    size="lg"
                    onClick={() => openContactModal(undefined, pkg.title)}
                  >
                    {pkg.ctaText}
                  </Button>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default Packages