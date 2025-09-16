'use client'

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  FaDribbble,
  FaMedium,
  FaInstagram,
  FaBehance,
  FaXTwitter,
} from 'react-icons/fa6';
import { useTheme } from 'next-themes';
import NewsletterSignup from './NewsletterSignup';
import { companyLocations } from '@/lib/company-locations';
import { MapPin, Globe } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { theme } = useTheme();

  const socialLinks = [
    { href: "https://dribbble.com/digizinc_", icon: FaDribbble, name: "Dribbble" },
    { href: "https://medium.com/@digizinc_", icon: FaMedium, name: "Medium" },
    { href: "https://www.instagram.com/digizinc_", icon: FaInstagram, name: "Instagram" },
    { href: "https://www.behance.net/digizinc_", icon: FaBehance, name: "Behance" },
    { href: "https://x.com/digizinc_", icon: FaXTwitter, name: "X (Twitter)" },
  ];

  return (
    <footer className="dark:bg-secondary-950 bg-gray-50 text-gray-600 dark:text-gray-300 pt-12 md:pt-16 lg:pt-20 transition-colors duration-200">
      <div className="container mx-auto px-4 md:px-8 flex flex-col">

        {/* Top CTA Section */}
        <div className="text-center mb-10 md:mb-14">
          <h4 className="text-2xl md:text-3xl font-bold font-heading tracking-wide text-gray-900 dark:text-gray-100">
            IN SEARCH FOR SOME ACTION
          </h4>
          <ul className="flex justify-center gap-6 sm:gap-8 md:gap-10 mt-6">
            {socialLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.name}
                  className="group"
                >
                  <link.icon className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 text-gray-500 dark:text-gray-400 group-hover:text-primary-500 transition-transform duration-300 transform group-hover:scale-110" />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <hr className="w-full border-t border-gray-300 dark:border-gray-700 mb-12" />

        {/* Main Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-14 mb-12">
          {/* Logo + copyright */}
          <div className="flex flex-col items-start justify-start text-left">
            <Link href="/">
              <Image
                src="/digizinc-header-logo-light.png"
                alt="Digizinc Logo"
                width={140}
                height={35}
                className="h-auto w-auto block dark:hidden mb-4"
              />
              <Image
                src="/digizinc-header-logo-dark.png"
                alt="Digizinc Logo"
                width={140}
                height={35}
                className="h-auto w-auto hidden dark:block mb-4"
              />
            </Link>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              &copy; {currentYear} SaaVik Solutions Pvt. Ltd.<br />
              All rights reserved.
            </p>
          </div>

          {/* Newsletter */}
          <div>
            <NewsletterSignup />
          </div>

          {/* Legal Links */}
          <div className="text-left">
            <h4 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-100">Legal</h4>
            <ul className="flex flex-col gap-y-2 text-sm md:text-base">
              {[
                { href: "/privacy-policy", label: "Privacy Policy" },
                { href: "/terms-of-service", label: "Terms of Service" },
                { href: "/cookie-policy", label: "Cookie Policy" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div className="text-left">
            <h4 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-100">Our Locations</h4>
            <div className="flex flex-col gap-y-2 text-sm md:text-base mb-4">
              {companyLocations.map((location) => (
                <a
                  key={location.id}
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${location.address}, ${location.city}, ${location.state}, ${location.zip}, ${location.country}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center group"
                >
                  <MapPin className="w-4 h-4 mr-2 flex-shrink-0 text-primary-500 group-hover:text-primary-600" />
                  <span className="group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                    {location.city}, {location.country}
                  </span>
                </a>
              ))}
            </div>
            <Link
              href="/locations"
              className="inline-flex items-center text-sm md:text-base hover:underline text-primary-600 dark:text-primary-400 transition-colors"
            >
              <Globe className="w-4 h-4 mr-2" />
              Explore Our Global Reach
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
