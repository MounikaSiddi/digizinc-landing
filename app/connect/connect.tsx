// components/DigitalBusinessCard.tsx
'use client';

import React from 'react';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Phone, MapPin, Linkedin, Twitter, Mail } from 'lucide-react'; // Added Mail for email, and icons for socials

const DigitalBusinessCard = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  // Founder and Company Details (Replace with your actual information)
  const founder = {
    name: "John Doe", // Replace with founder's name
    title: "Founder & CEO, Digizinc",
    photo: "/founder-photo.jpg", // Replace with path to founder's photo in public folder
    social: {
      twitter: "https://twitter.com/johndoe_ai", // Replace with founder's Twitter
      linkedin: "https://www.linkedin.com/in/johndoe", // Replace with founder's LinkedIn
      email: "john.doe@digizinc.com", // Replace with founder's email
    },
  };

  const company = {
    name: "Digizinc",
    logoLight: "/digizinc-logo-light.svg", // Replace with path to light logo
    logoDark: "/digizinc-logo-dark.svg",   // Replace with path to dark logo
    address: "123 AI Street, Tech City, 500081 Hyderabad, Telangana, India",
    phone: "+91 98765 43210", // Replace with actual phone number
    social: {
      twitter: "https://twitter.com/digizinc_ai", // Replace with Digizinc Twitter
      linkedin: "https://www.linkedin.com/company/digizinc", // Replace with Digizinc LinkedIn
      email: "info@digizinc.com", // Replace with Digizinc email
    },
  };

  const generateVCard = () => {
    const vCardData = `BEGIN:VCARD
VERSION:3.0
FN:${founder.name}
ORG:${company.name}
TITLE:${founder.title}
TEL;TYPE=WORK,VOICE:${company.phone}
ADR;TYPE=WORK,PREF:;;${company.address}
EMAIL;TYPE=INTERNET,WORK,PREF:${founder.social.email}
URL:${company.social.linkedin}
URL:${founder.social.linkedin}
X-SOCIALPROFILE;type=twitter:${founder.social.twitter}
X-SOCIALPROFILE;type=twitter:${company.social.twitter}
END:VCARD`;

    const blob = new Blob([vCardData], { type: 'text/vcard;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `${founder.name.replace(/\s/g, '_')}_Contact.vcf`); // Fixed template literal
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, staggerChildren: 0.1 } },
  };

  const itemFadeIn = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-white dark:bg-black transition-colors duration-300 relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute -top-1/4 -left-1/4 w-96 h-96 bg-primary/10 dark:bg-[#f22ee5]/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob -z-10"></div>
      <div className="absolute -bottom-1/4 -right-1/4 w-96 h-96 bg-secondary/10 dark:bg-[#902ef2]/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000 -z-10"></div>

      <motion.div
        className="relative bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/60 dark:to-pink-900/60 p-6 md:p-10 rounded-3xl shadow-2xl w-full max-w-md backdrop-blur-sm border border-white/20 dark:border-white/10"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        {/* Company Logo */}
        <motion.div variants={itemFadeIn} className="text-center mb-8">
          <Image
            src={isDark ? company.logoDark : company.logoLight}
            alt={`${company.name} Logo`} // Fixed template literal
            width={180}
            height={60}
            className="mx-auto h-auto object-contain"
          />
        </motion.div>

        {/* Founder Photo and Details */}
        <motion.div variants={itemFadeIn} className="text-center mb-8">
          <div className="relative w-32 h-32 rounded-full overflow-hidden mx-auto mb-4 border-4 border-white dark:border-gray-800 shadow-md">
            <Image
              src={founder.photo}
              alt={founder.name}
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-300 hover:scale-105"
            />
          </div>
          <h1 className="text-2xl md:text-3xl font-bold font-heading text-gray-900 dark:text-white mb-2">
            {founder.name}
          </h1>
          <p className="text-lg text-primary-700 dark:text-primary-300 mb-4">{founder.title}</p>
        </motion.div>

        {/* Contact Information */}
        <motion.div variants={itemFadeIn} className="space-y-4 mb-8">
          <div className="flex items-center justify-center text-gray-800 dark:text-gray-200">
            <Phone className="w-5 h-5 mr-3 text-primary-600 dark:text-primary-400" />
            <a href={`tel:${company.phone}`} className="hover:underline transition-colors duration-200"> // Fixed template literal
              {company.phone}
            </a>
          </div>
          <div className="flex items-center justify-center text-gray-800 dark:text-gray-200">
            <Mail className="w-5 h-5 mr-3 text-primary-600 dark:text-primary-400" />
            <a href={`mailto:${founder.social.email}`} className="hover:underline transition-colors duration-200"> // Fixed template literal
              {founder.social.email}
            </a>
          </div>
          <div className="flex items-center justify-center text-gray-800 dark:text-gray-200 text-center">
            <MapPin className="w-5 h-5 mr-3 text-primary-600 dark:text-primary-400 flex-shrink-0" />
            <span>{company.address}</span>
          </div>
        </motion.div>

        {/* Founder Social Handles */}
        <motion.div variants={itemFadeIn} className="flex justify-center gap-6 mb-8">
          {founder.social.twitter && (
            <a
              href={founder.social.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
              aria-label="Founder's Twitter"
            >
              <Twitter className="w-7 h-7" />
            </a>
          )}
          {founder.social.linkedin && (
            <a
              href={founder.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
              aria-label="Founder's LinkedIn"
            >
              <Linkedin className="w-7 h-7" />
            </a>
          )}
        </motion.div>

        {/* Digizinc Social Handles */}
        <motion.div variants={itemFadeIn} className="flex justify-center gap-6 mb-8">
          {company.social.twitter && (
            <a
              href={company.social.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 dark:text-gray-300 hover:text-secondary-600 dark:hover:text-secondary-400 transition-colors duration-200"
              aria-label="Digizinc Twitter"
            >
              <Twitter className="w-7 h-7" />
            </a>
          )}
          {company.social.linkedin && (
            <a
              href={company.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 dark:text-gray-300 hover:text-secondary-600 dark:hover:text-secondary-400 transition-colors duration-200"
              aria-label="Digizinc LinkedIn"
            >
              <Linkedin className="w-7 h-7" />
            </a>
          )}
          {company.social.email && (
            <a
              href={`mailto:${company.social.email}`} // Fixed template literal
              className="text-gray-700 dark:text-gray-300 hover:text-secondary-600 dark:hover:text-secondary-400 transition-colors duration-200"
              aria-label="Digizinc Email"
            >
              <Mail className="w-7 h-7" />
            </a>
          )}
        </motion.div>

        {/* Add to Contacts Button */}
        <motion.div variants={itemFadeIn} className="text-center">
          <button
            onClick={generateVCard}
            className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-gradient-to-r from-[#f22ee5] to-[#902ef2] text-white font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 transform"
          >
            <Phone className="w-5 h-5 mr-3" /> Add to Contacts
          </button>
        </motion.div>
      </motion.div>

      {/* Custom CSS for blob animation */}
      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0, 0) scale(1);
          }
          30% {
            transform: translate(-10%, 20%) scale(1.1);
          }
          60% {
            transform: translate(15%, -10%) scale(0.9);
          }
          100% {
            transform: translate(0, 0) scale(1);
          }
        }
        .animate-blob {
          animation: blob 8s infinite alternate;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </div>
  );
};

export default DigitalBusinessCard;