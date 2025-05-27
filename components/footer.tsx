'use client'


import React from 'react';
import Link from 'next/link';
import Image from 'next/image'; // Import Next.js Image component for optimized images

// Import social media icons from react-icons/fa6 (or the specific library you use)
import {
  FaDribbble,
  FaMedium,
  FaInstagram,
  FaBehance,
  FaXTwitter, // Renamed FaXTwitter for clarity as it's often used for X
} from 'react-icons/fa6';
import { useTheme } from 'next-themes';


const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { theme } = useTheme();
  // Define social media links with their respective icons
  const socialLinks = [
    { href: "https://dribbble.com/digizinc_", icon: FaDribbble, name: "Dribbble" },
    { href: "https://medium.com/@digizinc_", icon: FaMedium, name: "Medium" },
    { href: "https://www.instagram.com/digizinc_", icon: FaInstagram, name: "Instagram" },
    { href: "https://www.behance.net/digizinc_", icon: FaBehance, name: "Behance" },
    { href: "https://x.com/digizinc_", icon: FaXTwitter, name: "X (Twitter)" },
  ];

  return (
    <footer className="dark:bg-secondary-900 bg-gray-50 text-gray-600 dark:text-gray-200 py-10 md:py-16 lg:py-20 transition-colors duration-200 min-h-[50vh]">
      <div className="container mx-auto px-4 md:px-6 flex flex-col items-center">

        {/* Top Section: In Search For Some Action & Social Media Icons */}
        <div className="w-full text-center mb-12 md:mb-16">
          <h4 className="text-2xl md:text-3xl font-extrabold font-heading mb-8 text-gray-800 dark:text-gray-100  tracking-wide">
            IN SEARCH FOR SOME ACTION
          </h4>
          <ul className="flex justify-center gap-6 sm:gap-8 md:gap-10 pt-4">
            {socialLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.name}
                  className="text-gray-600 dark:text-gray-50 hover:text-purple-400 dark:hover:text-purple-500 transition-colors duration-300 transform hover:scale-110"
                >
                  <link.icon className="w-7 h-7 sm:w-8 sm:h-8 lg:w-9 lg:h-9" />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Horizontal Divider */}
        <hr className="w-full border-t border-gray-300 dark:border-gray-700 mb-12 md:mb-16" />

        {/* Bottom Section: Logo, Copyright, and Policy Links */}
        <div className="flex flex-col md:flex-row items-center justify-between w-full gap-8 md:gap-6">
          {/* DigiZinc Logo */}
          <div className="mb-6 md:mb-0">
            <Link href="/" aria-label="DigiZinc Home">
              {theme === "dark" ? (
                <Image
                  src="/digizinc-header-logo-light.png"
                  alt="DigiZinc Logo"
                  width={150}
                  height={40}
                />
              ) : (
                <Image
                  src="/digizinc-header-logo-dark.png"
                  alt="DigiZinc Logo"
                  width={150}
                  height={40}
                />
              )}
            </Link>
          </div>

          {/* Copyright Information */}
          <div className="text-center text-sm md:text-base order-last md:order-none">
            &copy; {currentYear} SaaVik Solutions Pvt. Ltd. || All rights reserved.
          </div>

          {/* Policy Links */}
          <ul className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm md:text-base">
            <li>
              <Link href="/privacy-policy" className="hover:text-gray-900 dark:hover:text-gray-50 transition-colors duration-200">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms-of-service" className="hover:text-gray-900 dark:hover:text-gray-50 transition-colors duration-200">
                Terms of Service
              </Link>
            </li>
            <li>
              <Link href="/cookie-policy" className="hover:text-gray-900 dark:hover:text-gray-50 transition-colors duration-200">
                Cookie Policy
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
