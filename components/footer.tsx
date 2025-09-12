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
import NewsletterSignup from './NewsletterSignup';


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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full items-start">
          <div className="text-center md:text-left">
            <h4 className="text-lg font-semibold mb-4 text-foreground">Stay Connected</h4>
            <NewsletterSignup />
          </div>

          <div className="text-center">
            <Link href="/" >
              <Image
                src="/digizinc-header-logo-light.png"
                alt="Digizinc Logo"
                width={120}
                height={30}
                className="h-auto w-auto block dark:hidden mx-auto my-4 object-contain"
              />
              <Image
                src="/digizinc-header-logo-dark.png"
                alt="Digizinc Logo"
                width={120}
                height={30}
                className=" w-auto hidden dark:block mx-auto h-auto my-4 object-contain"
              />
            </Link>
            <div className="text-sm md:text-base text-muted-foreground">
              &copy;SaaVik Solutions Pvt. Ltd. || All rights reserved.
            </div>
          </div>

          <div className="text-center md:text-right">
            <h4 className="text-lg font-semibold mb-4 text-foreground">Legal</h4>
            <ul className="flex flex-col gap-y-2 text-sm md:text-base">
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
      </div>
    </footer>
  );
};

export default Footer;