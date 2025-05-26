// components/ContactUs.tsx
'use client'; // Required for client-side state

import React, { useState, useEffect } from 'react';
import { CheckCircle } from 'lucide-react';
import Modal from './Modal';
 // Import the new Modal component

interface ContactUsProps {
  defaultIndustry?: string; // Optional prop to pre-fill the industry
  onClose?: () => void; // Optional: function to close the modal if it's used as one
  isModal?: boolean; // Optional: flag to indicate if it's being used as a modal
}

const ContactUs: React.FC<ContactUsProps> = ({ defaultIndustry, onClose, isModal }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [industry, setIndustry] = useState(defaultIndustry || ''); // Initialize with prop or empty
  const [message, setMessage] = useState('');

  // Update industry state if defaultIndustry prop changes
  useEffect(() => {
    if (defaultIndustry) {
      setIndustry(defaultIndustry);
    }
  }, [defaultIndustry]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log({
      firstName,
      lastName,
      email,
      company,
      industry,
      message,
    });
    // Add your form submission logic here (e.g., API call)

    // Optionally close the modal after submission
    if (isModal && onClose) {
      onClose();
    }
    // You might want to show a success message or clear the form
  };

  const formContent = (
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
            className="w-full px-3 py-2 bg-white dark:bg-secondary-900 border border-gray-200 dark:border-secondary-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400"
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
            className="w-full px-3 py-2 bg-white dark:bg-secondary-900 border border-gray-200 dark:border-secondary-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400"
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
          className="w-full px-3 py-2 bg-white dark:bg-secondary-900 border border-gray-200 dark:border-secondary-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400"
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
          className="w-full px-3 py-2 bg-white dark:bg-secondary-900 border border-gray-200 dark:border-secondary-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400"
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
          className="w-full px-3 py-2 bg-white dark:bg-secondary-900 border border-gray-200 dark:border-secondary-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400"
          placeholder="Select or type industry"
        />
        <datalist id="industry-options">
          <option value="Branding & Identity"></option>
          <option value="Graphic & Visual Design"></option>
          <option value="Advertising & Marketing"></option>
          <option value="Content Creation & Storytelling"></option>
          <option value="UI/UX & Digital Experience"></option>
          <option value="Motion & Video Production"></option>
          <option value="Illustration & Custom Artwork"></option>
          <option value="Experiential & Interactive Design"></option>
          <option value="Photography & Visual Content"></option>
          <option value="Print & Packaging"></option>
          <option value="Education"></option>
          <option value="E-Commerce"></option>
          <option value="Real Estate"></option>
          <option value="Healthcare"></option>
          <option value="Non-Profit"></option>
          <option value="IT & Product"></option>
          <option value="Entertainment"></option>
          <option value="Corporate"></option>
          <option value="Finance"></option>
          <option value="Other"></option>
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
          className="w-full px-3 py-2 bg-white dark:bg-secondary-900 border border-gray-200 dark:border-secondary-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400"
          placeholder="Tell us about your project or needs..."
        ></textarea>
      </div>

      <div>
        <button
          type="submit"
          className="w-full bg-gradient-primary text-white font-medium py-3 px-6 rounded-lg hover:shadow-lg hover:shadow-primary-500/20 transition-all duration-300"
        >
          Get Started with Savi AI
        </button>
      </div>
    </form>
  );

  if (isModal) {
    return (
      <Modal isOpen={true} onClose={onClose!} title={`Contact Us for ${defaultIndustry || 'Savi AI Solutions'}`}>
        {formContent}
      </Modal>
    );
  }

  // Original standalone section rendering
  return (
    <section id="contact" className="py-12 md:py-16 relative overflow-hidden min-h-[80vh] flex items-center">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50 dark:from-dark dark:to-secondary-950 -z-10"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-200/20 dark:bg-primary-900/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary-200/20 dark:bg-secondary-900/10 rounded-full blur-3xl -z-10"></div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto bg-white dark:bg-secondary-900 rounded-2xl shadow-xl overflow-hidden border border-gray-100 dark:border-secondary-800">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 md:p-12">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-secondary-50 dark:bg-secondary-900/50 text-secondary-700 dark:text-secondary-300 text-sm font-medium mb-6">
                <span className="flex h-2 w-2 rounded-full bg-secondary-500 mr-2"></span>
                Let's work together
              </div>

              <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Ready to transform your <span className="text-transparent bg-clip-text bg-gradient-primary">digital presence</span> with Savi AI?
              </h2>

              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                Get started with our AI-powered solutions tailored to your industry needs. Fill out the form and we'll be in touch shortly.
              </p>

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
            </div>

            <div className="bg-gray-50 dark:bg-secondary-800 p-8 md:p-12">
              {formContent}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;