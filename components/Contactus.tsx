"use client";

import { useState, useEffect } from "react";
import { CheckCircle } from 'lucide-react';

interface ContactUsProps {
  defaultIndustry?: string;
  onClose?: () => void;
  isModal?: boolean;
}

export default function ContactUs({ defaultIndustry, onClose, isModal }: ContactUsProps) {
  const [industry, setIndustry] = useState("");

  useEffect(() => {
    if (defaultIndustry) {
      setIndustry(defaultIndustry);
    }
  }, [defaultIndustry]);

  return (
    <div className={`${isModal ? '' : 'py-16 md:py-24 relative overflow-hidden'}`}>
      {!isModal && (
        <>
          <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50 dark:from-dark dark:to-secondary-950 -z-10"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary-200/20 dark:bg-primary-900/10 rounded-full blur-3xl -z-10"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary-200/20 dark:bg-secondary-900/10 rounded-full blur-3xl -z-10"></div>
        </>
      )}

      <div className={`${isModal ? '' : 'w-full mx-auto px-4 md:px-6'}`}>
        <div className={`${isModal ? 'rounded-lg' : 'w-full mx-auto bg-white dark:bg-secondary-900 rounded-2xl shadow-xl overflow-hidden border border-gray-100 dark:border-secondary-800'}`}>
          <div className="grid grid-cols-1 lg:grid-cols-2 max-h-[90vh] w-full overflow-y-auto">
            <div className="p-4 sm:p-6 md:p-8 lg:sticky lg:top-0">
              {!isModal && (
                <div className="inline-flex items-center px-2 sm:px-3 py-1 rounded-full bg-secondary-50 dark:bg-secondary-900/50 text-secondary-700 dark:text-secondary-300 text-xs sm:text-sm font-medium mb-4 sm:mb-6">
                  <span className="flex h-2 w-2 rounded-full bg-secondary-500 mr-2"></span>
                  Let's work together
                </div>
              )}

              <h2 className={`font-heading ${isModal ? 'text-lg sm:text-xl md:text-2xl mb-3 sm:mb-4' : 'text-2xl sm:text-3xl md:text-4xl mb-4 sm:mb-6'} font-bold text-gray-900 dark:text-white`}>
                Ready to transform your <span className="text-transparent bg-clip-text bg-gradient-primary">digital presence</span> with Savi AI?
              </h2>

              <p className={`text-base sm:text-lg text-gray-600 dark:text-gray-300 ${isModal ? 'mb-3 sm:mb-4' : 'mb-6 sm:mb-8'}`}>
                Get started with our AI-powered solutions tailored to your industry needs. Fill out the form and we'll be in touch shortly.
              </p>

              {!isModal && (
                <div className="space-y-4 mb-8">
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-primary-500 mr-3 flex-shrink-0" />
                    <p className="text-gray-700 dark:text-gray-300">
                      <span className="font-semibold">Personalized consultation</span> to understand your specific needs
                    </p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-primary-500 mr-3 flex-shrink-0" />
                    <p className="text-gray-700 dark:text-gray-300">
                      <span className="font-semibold">Custom AI solution</span> designed for your industry
                    </p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-primary-500 mr-3 flex-shrink-0" />
                    <p className="text-gray-700 dark:text-gray-300">
                      <span className="font-semibold">Comprehensive support</span> throughout implementation
                    </p>
                  </div>
                </div>
              )}

              {!isModal && (
                <div className="flex items-center space-x-4">
                  <div className="flex -space-x-2">
                    <img
                      src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1600"
                      alt="Client"
                      className="w-10 h-10 rounded-full border-2 border-white dark:border-secondary-900 object-cover"
                    />
                    <img
                      src="https://images.pexels.com/photos/3776932/pexels-photo-3776932.jpeg?auto=compress&cs=tinysrgb&w=1600"
                      alt="Client"
                      className="w-10 h-10 rounded-full border-2 border-white dark:border-secondary-900 object-cover"
                    />
                    <img
                      src="https://images.pexels.com/photos/3776939/pexels-photo-3776939.jpeg?auto=compress&cs=tinysrgb&w=1600"
                      alt="Client"
                      className="w-10 h-10 rounded-full border-2 border-white dark:border-secondary-900 object-cover"
                    />
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    <span className="text-primary-500 font-semibold">100+</span> businesses already using Savi AI
                  </div>
                </div>
              )}
            </div>

            <div className={`${isModal ? 'p-6 md:p-8' : 'bg-gray-50 dark:bg-secondary-800 p-8 md:p-12'}`}>
              <form className="space-y-4 lg:max-w-xl lg:mx-auto">
                <div>
                  <label htmlFor="first-name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="first-name"
                    className="w-full px-4 py-3 bg-white dark:bg-secondary-900 border border-gray-200 dark:border-secondary-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label htmlFor="last-name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="last-name"
                    className="w-full px-4 py-3 bg-white dark:bg-secondary-900 border border-gray-200 dark:border-secondary-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400"
                    placeholder="Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 bg-white dark:bg-secondary-900 border border-gray-200 dark:border-secondary-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    className="w-full px-4 py-3 bg-white dark:bg-secondary-900 border border-gray-200 dark:border-secondary-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400"
                    placeholder="Your Company"
                  />
                </div>

                <div>
                  <label htmlFor="industry" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Industry
                  </label>
                  <select
                    id="industry"
                    className="w-full px-4 py-3 bg-white dark:bg-secondary-900 border border-gray-200 dark:border-secondary-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400"
                    value={industry}
                    onChange={(e) => setIndustry(e.target.value)}
                  >
                    <option value="">Select Industry</option>
                    <option value="branding">Branding & Identity</option>
                    <option value="graphic">Graphic & Visual Design</option>
                    <option value="advertising">Advertising & Marketing</option>
                    <option value="content">Content Creation & Storytelling</option>
                    <option value="ux">UI/UX & Digital Experience</option>
                    <option value="motion">Motion & Video Production</option>
                    <option value="illustration">Illustration & Custom Artwork</option>
                    <option value="interactive">Experiential & Interactive Design</option>
                    <option value="photography">Photography & Visual Content</option>
                    <option value="print">Print & Packaging</option>
                    <option value="education">Education</option>
                    <option value="ecommerce">E-Commerce</option>
                    <option value="realestate">Real Estate</option>
                    <option value="healthcare">Healthcare</option>
                    <option value="nonprofit">Non-Profit</option>
                    <option value="tech">IT & Product</option>
                    <option value="entertainment">Entertainment</option>
                    <option value="corporate">Corporate</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 bg-white dark:bg-secondary-900 border border-gray-200 dark:border-secondary-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400"
                    placeholder="Tell us about your project or needs..."
                  ></textarea>
                </div>

                <div>
                  <button
                    type="submit"
                    className="w-full bg-gradient-primary text-white font-medium py-2 sm:py-3 px-4 sm:px-6 rounded-lg hover:shadow-lg hover:shadow-primary-500/20 transition-all duration-300 text-sm sm:text-base"
                  >
                    Get Started with Savi AI
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}