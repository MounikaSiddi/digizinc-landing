import React from 'react';
import Link from 'next/link'; // If you're using Next.js

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="dark:bg-secondary-900 bg-gray-50 text-gray-600 dark:text-gray-400 py-12 md:py-16 lg:py-20 transition-colors duration-200">
      <div className="container mx-auto px-4 md:px-6 flex flex-col items-center text-sm md:text-base">
        <div className="mb-8 md:mb-10 text-center">
          <h4 className="text-xl md:text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-200">IN SEARCH FOR SOME ACTION</h4>
          <ul className="flex flex-wrap gap-6 justify-center">
            <li>
              <Link href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </Link>
            </li>
            <li>
              <Link href="https://youtube.com/" target="_blank" rel="noopener noreferrer">
                YouTube
              </Link>
            </li>
            <li>
              <Link href="https://instagram.com/" target="_blank" rel="noopener noreferrer">
                Instagram
              </Link>
            </li>
            <li>
              <Link href="https://facebook.com/" target="_blank" rel="noopener noreferrer">
                Facebook
              </Link>
            </li>
            <li>
              <Link href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                Twitter
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between w-full gap-4 md:gap-6">
          <div className="text-center md:text-left">
            &copy; {currentYear} SaaVik Solutions Pvt. Ltd. || All rights reserved.
          </div>
          <ul className="flex flex-wrap gap-4 justify-center md:justify-end">
            <li>
              <Link href="/privacy-policy">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms-of-service">
                Terms of Service
              </Link>
            </li>
            <li>
              <Link href="/cookie-policy">
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