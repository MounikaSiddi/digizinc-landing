'use client'

import React, { useEffect } from 'react';
import { useContactForm } from '@/hooks/useContactForm';
import { industryOptions } from '@/lib/services-data';

interface ContactFormProps {
  defaultIndustry?: string;
  packageTitle?: string;
}

import React, { useEffect, useState } from 'react';
import { useContactForm } from '@/hooks/useContactForm';
import { industryOptions } from '@/lib/services-data';
import { Button } from '@/components/ui/button';

interface ContactFormProps {
  defaultIndustry?: string;
  packageTitle?: string;
}

export const ContactForm: React.FC<ContactFormProps> = ({ defaultIndustry, packageTitle }) => {
  const [step, setStep] = useState(1);
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

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      {step === 1 && (
        <div>
          <h3 className="text-lg font-semibold mb-4">Personal Information</h3>
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
          <Button onClick={nextStep} className="w-full mt-4">Next</Button>
        </div>
      )}

      {step === 2 && (
        <div>
          <h3 className="text-lg font-semibold mb-4">Company Information</h3>
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
          <div className="flex justify-between mt-4">
            <Button onClick={prevStep} variant="outline">Previous</Button>
            <Button onClick={nextStep}>Next</Button>
          </div>
        </div>
      )}

      {step === 3 && (
        <div>
          <h3 className="text-lg font-semibold mb-4">Message</h3>
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
          <div className="flex justify-between mt-4">
            <Button onClick={prevStep} variant="outline">Previous</Button>
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Submitting...' : 'Get Started with Digizinc'}
            </Button>
          </div>
        </div>
      )}
    </form>
  );
};
