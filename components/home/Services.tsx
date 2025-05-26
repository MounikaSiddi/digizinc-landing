'use client'; // Required for client-side state like useState

import React, { useState, useRef, useEffect } from 'react';
import {
  Brush, Image, Laptop, Layout, MessageSquare, FilmIcon,
  PenTool, Palette, Wand2, BarChart3
} from 'lucide-react';
import ContactUs from '../Contactus';

interface Service {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  items: string[];
}

const Services: React.FC = () => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState('branding');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalIndustry, setModalIndustry] = useState<string | undefined>(undefined);

  const handleLearnMoreClick = (title: string) => {
    setModalIndustry(title);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setModalIndustry(undefined); // Clear the industry when closing
  };

  const services: Service[] = [
    { id: 'branding', icon: <Palette className="h-6 w-6" />, title: "Branding & Identity", description: "Create a distinctive brand identity with our AI-enhanced branding solutions.", items: ["Logo Design", "Brand Strategy & Positioning", "Visual Identity Development", "Brand Guidelines", "Corporate Rebranding", "Naming & Tagline Creation"] },
    { id: 'graphic', icon: <Brush className="h-6 w-6" />, title: "Graphic & Visual Design", description: "Transform your visual communications with AI-powered design solutions.", items: ["Print & Digital Design", "Packaging Design", "Business Cards & Stationery", "Infographic Design", "Merchandise & Apparel Design", "Editorial & Magazine Design"] },
    { id: 'advertising', icon: <BarChart3 className="h-6 w-6" />, title: "Advertising & Marketing", description: "Enhance your marketing campaigns with AI-driven creative solutions.", items: ["Ad Campaign Design (Print, Digital, OOH)", "Social Media Creative Assets", "Banner & Display Ads", "Email Marketing Design", "Brochure & Flyer Design", "Presentation & Pitch Deck Design"] },
    { id: 'content', icon: <MessageSquare className="h-6 w-6" />, title: "Content Creation & Storytelling", description: "Create compelling narratives with our AI content generation tools.", items: ["Copywriting & Content Strategy", "Scriptwriting (Ads, Explainers, Social)", "Blog & Article Writing", "Social Media Captions & Content", "Product Descriptions & Sales Copy"] },
    { id: 'ux', icon: <Layout className="h-6 w-6" />, title: "UI/UX & Digital Experience", description: "Create seamless digital experiences with AI-enhanced design.", items: ["Website Design & Development", "App Interface Design", "Dashboard & SaaS UI Design", "Wireframing & Prototyping", "User Experience (UX) Audits"] },
    { id: 'motion', icon: <FilmIcon className="h-6 w-6" />, title: "Motion & Video Production", description: "Bring your brand to life with AI-powered motion graphics and video.", items: ["Animation (2D, 3D, Motion Graphics)", "Video Editing & Post-Production", "Explainer Videos", "Brand Story Videos", "Social Media Reels & Shorts", "Cinematic Ad Production"] },
    { id: 'illustration', icon: <PenTool className="h-6 w-6" />, title: "Illustration & Custom Artwork", description: "Create unique visuals with our AI-assisted illustration services.", items: ["Digital & Hand-drawn Illustrations", "Character Design", "Vector Art & Iconography", "Custom GIFs & Stickers", "Storyboarding for Ads/Videos"] },
    { id: 'interactive', icon: <Wand2 className="h-6 w-6" />, title: "Experiential & Interactive Design", description: "Create immersive experiences with AI-powered interactive design.", items: ["Augmented Reality (AR) & Virtual Reality (VR) Design", "3D Modeling & Rendering", "Interactive Web Experiences", "Event & Exhibition Design", "Projection Mapping"] },
    { id: 'photography', icon: <Image className="h-6 w-6" />, title: "Photography & Visual Content", description: "Enhance your visual content with AI-powered photography solutions.", items: ["Product Photography", "Brand Lifestyle Shoots", "Corporate Headshots", "Editorial & Fashion Photography", "Retouching & Image Manipulation"] },
    { id: 'print', icon: <Laptop className="h-6 w-6" />, title: "Print & Packaging", description: "Create standout print materials with AI-optimized design.", items: ["Product Packaging Design", "Label & Sticker Design", "Billboard & Poster Design", "Book & Album Cover Design", "Trade Show Booth Design"] }
  ];

  // Move this line after the 'services' array declaration
  const activeService = services.find(service => service.id === activeTab) || services[0];

  useEffect(() => {
    const isMobileOrTablet = window.innerWidth < 1024;
    if (isMobileOrTablet && contentRef.current) {
      contentRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }, [activeTab]);

  return (
    <section id="services" className="py-16 md:py-24 bg-white dark:bg-dark">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Our <span className="text-transparent bg-clip-text bg-gradient-primary">Services</span>
          </h2>
          <p className="text-lg -gray-300">
            Comprehensive end-to-end media solutions powered by AI for every industry
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 min-h-[600px]">
          <div className="lg:w-1/3 flex flex-col">
            <div className="bg-gradient-to-b from-[#401967] to-[#7F32CD] rounded-xl p-4 sticky top-24 flex-1">
              <h3 className="font-heading text-lg font-semibold text-white mb-4">
                Service Categories
              </h3>
              <nav className="flex flex-col space-y-1">
                {services.map(service => (
                  <button
                    key={service.id}
                    onClick={() => setActiveTab(service.id)}
                    className={`flex items-center px-4 py-3 rounded-lg text-left transition-all duration-200 ${
                      activeTab === service.id
                        ? 'bg-gradient-primary text-white shadow-lg scale-[1.02]'
                        : 'text-gray-300 hover:bg-secondary-800 hover:scale-[1.01]'
                    }`}
                  >
                    <span className="mr-3 transition-transform group-hover:scale-110">{service.icon}</span>
                    <span className="font-medium">{service.title}</span>
                  </button>
                ))}
              </nav>
            </div>
          </div>

          <div ref={contentRef} className="lg:w-2/3 flex flex-col">
            <div className="bg-gradient-to-b from-[#401967] to-[#7F32CD] rounded-2xl p-6 md:p-8 shadow-lg border border-gray-100/10 dark:border-secondary-800 flex-1">
              <div className="flex items-start mb-8">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary-600/20 to-secondary-600/20 flex items-center justify-center mr-4 transform hover:scale-110 transition-transform shadow-sm">
                  {activeService.icon}
                </div>
                <div className="space-y-1">
                  <h3 className="text-2xl font-semibold font-heading text-white">
                    {activeService.title}
                  </h3>
                  <p className="text-gray-400 font-medium text-base leading-relaxed">
                    {activeService.description}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
                {activeService.items.map((item, index) => (
                  <div
                    key={index}
                    className="p-5 rounded-xl bg-secondary-800/60 hover:bg-secondary-700
                      border border-primary-500 hover:border-primary-500
                      group hover:shadow-xl hover:scale-[1.025] transition-all duration-300"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-2.5 h-2.5 rounded-full bg-primary-600/50 group-hover:bg-primary-600 transition-colors"></div>
                      <p className="text-gray-300 group-hover:text-white transition-colors text-sm">
                        {item}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4 flex justify-end">
                <button
                  onClick={() => handleLearnMoreClick(activeService.title)}
                  className="inline-flex items-center px-5 py-2.5 rounded-lg bg-gradient-primary text-white font-medium
                    hover:shadow-lg hover:scale-105 transition-all duration-300"
                >
                  Learn more about {activeService.title}
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>

                {/* Render ContactUs as a modal */}
                {isModalOpen && (
                  <ContactUs
                    isModal={true}
                    defaultIndustry={modalIndustry}
                    onClose={handleCloseModal}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;