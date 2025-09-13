'use client'

import React, { useEffect } from 'react';
import { useContactForm } from '@/hooks/useContactForm';
import { industryOptions } from '@/lib/services-data';

interface ContactFormProps {
  defaultIndustry?: string;
  packageTitle?: string;
}

export const ContactForm: React.FC<ContactFormProps> = ({ defaultIndustry, packageTitle }) => {
  const {
    firstName, setFirstName,
    lastName, setLastName,
    email, setEmail,
    company, setCompany,
    industry, setIndustry,
    message, setMessage,
    isSubmitting,
    handleSubmit,
  } = useContactForm(defaultIndustry);

  useEffect(() => {
    if (packageTitle) {
      setMessage(`I'm interested in the "${packageTitle}" package.`);
    }
  }, [packageTitle, setMessage]);

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="first-name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            First Name
          </label>
          <input
            type="text"
            id="first-name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="w-full px-3 py-2 bg-white dark:bg-secondary-900 border border-gray-200 dark:border-secondary-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 transition-all duration-200"
            placeholder="John"
            required
          />
        </div>
        <div>
          <label htmlFor="last-name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Last Name
          </label>
          <input
            type="text"
            id="last-name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="w-full px-3 py-2 bg-white dark:bg-secondary-900 border border-gray-200 dark:border-secondary-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 transition-all duration-200"
            placeholder="Doe"
            required
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Email
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-3 py-2 bg-white dark:bg-secondary-900 border border-gray-200 dark:border-secondary-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 transition-all duration-200"
          placeholder="john@example.com"
          required
        />
      </div>

      <div>
        <label htmlFor="company" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Company
        </label>
        <input
          type="text"
          id="company"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          className="w-full px-3 py-2 bg-white dark:bg-secondary-900 border border-gray-200 dark:border-secondary-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 transition-all duration-200"
          placeholder="Your Company"
        />
      </div>

      <div>
        <label htmlFor="industry" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Industry
        </label>
        <input
          type="text"
          id="industry"
          list="industry-options"
          value={industry}
          onChange={(e) => setIndustry(e.target.value)}
          className="w-full px-3 py-2 bg-white dark:bg-secondary-900 border border-gray-200 dark:border-secondary-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 transition-all duration-200"
          placeholder="Select or type industry"
        />
        <datalist id="industry-options">
          {industryOptions.map(option => <option key={option} value={option} />)}
        </datalist>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Message
        </label>
        <textarea
          id="message"
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full px-3 py-2 bg-white dark:bg-secondary-900 border border-gray-200 dark:border-secondary-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 transition-all duration-200 resize-none"
          placeholder="Tell us about your project or needs..."
        ></textarea>
      </div>

      <div>
        <button
          type="submit"
          className="w-full bg-gradient-primary text-white font-medium py-3 px-6 rounded-lg hover:shadow-lg hover:shadow-primary-500/20 transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="http://www.w3.org/2000/svg">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Submitting...
            </>
          ) : (
            "Get Started with Digizinc"
          )}
        </button>
      </div>
    </form>
  );
};
