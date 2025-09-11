// components/ContactUs.tsx
'use client';

import React, { useState, useEffect } from 'react';
import { CheckCircle } from 'lucide-react';
import Modal from './Modal';
import { toast, ToastContainer } from 'react-toastify';

interface ContactUsProps {
  defaultIndustry?: string;
  onClose?: () => void;
  isModal?: boolean;
}

const ContactUs: React.FC<ContactUsProps> = ({ defaultIndustry, onClose, isModal }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [industry, setIndustry] = useState(defaultIndustry || '');
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (defaultIndustry) {
      setIndustry(defaultIndustry);
    }
  }, [defaultIndustry]);

  const scriptURL = 'https://script.google.com/macros/s/AKfycbw3mNXSZUGhpRs4TJdCEZXQLXHekPQf6O1n0xeBdXyIHFhPc9XKGZbhT0xVZ6ZMnDPD/exec';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('firstName', firstName);
    formData.append('lastName', lastName);
    formData.append('email', email);
    formData.append('company', company);
    formData.append('industry', industry);
    formData.append('message', message);

    fetch(scriptURL, {
      method: 'POST',
      body: formData,
    })
      .then(() => {
        toast.success("Submitted successfully!");
        setFirstName('');
        setLastName('');
        setEmail('');
        setCompany('');
        setIndustry('');
        setMessage('');
        if (isModal && onClose) onClose();
      })
      .catch((error) => {
        toast.error("Submission failed!");
        console.error("Error submitting to Google Sheet:", error);
      });
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
          className="w-full px-3 py-2 bg-white dark:bg-secondary-900 border border-gray-200 dark:border-secondary-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 transition-all duration-200 resize-none"
          placeholder="Tell us about your project or needs..."
        ></textarea>
      </div>

      <div>
        <button
          type="submit"
          className="w-full bg-gradient-primary text-white font-medium py-3 px-6 rounded-lg hover:shadow-lg hover:shadow-primary-500/20 transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]"
        >
          Get Started with DigiZinc
        </button>
      </div>
    </form>
  );

  const mobileModalContent = (
    <div className="p-6">
      <div className="mb-6">
        <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary-50 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-sm font-medium mb-3">
          <span className="flex h-2 w-2 rounded-full bg-primary-500 mr-2"></span>
          {defaultIndustry ? `${defaultIndustry} Solutions` : 'Let\'s work together'}
        </div>
        
        <h3 className="font-heading text-xl font-bold text-gray-900 dark:text-white mb-2">
          Ready to get started?
        </h3>
        
        <p className="text-sm text-gray-600 dark:text-gray-300">
          Fill out the form below and we'll be in touch shortly.
        </p>
      </div>

      {formContent}

      <div className="mt-6 pt-6 border-t border-gray-200 dark:border-secondary-700">
        <div className="flex items-center justify-center space-x-4">
          <div className="flex -space-x-2">
            <img
              src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt="Client"
              className="w-8 h-8 rounded-full border-2 border-white dark:border-secondary-900 object-cover"
            />
            <img
              src="https://images.pexels.com/photos/3776932/pexels-photo-3776932.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt="Client"
              className="w-8 h-8 rounded-full border-2 border-white dark:border-secondary-900 object-cover"
            />
            <img
              src="https://images.pexels.com/photos/3776939/pexels-photo-3776939.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt="Client"
              className="w-8 h-8 rounded-full border-2 border-white dark:border-secondary-900 object-cover"
            />
          </div>
          <div className="text-xs text-gray-600 dark:text-gray-400">
            <span className="text-primary-500 font-semibold">100+</span> businesses trust us
          </div>
        </div>
      </div>
    </div>
  );

  const desktopModalContent = (
    <div className="max-w-4xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[500px]">
        <div className="p-8 flex flex-col justify-center">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-secondary-50 dark:bg-secondary-900/50 text-secondary-700 dark:text-secondary-300 text-sm font-medium mb-6">
            <span className="flex h-2 w-2 rounded-full bg-secondary-500 mr-2"></span>
            Let's work together
          </div>

          <h2 className="font-heading text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Ready to transform your <span className="text-transparent bg-clip-text bg-gradient-primary">digital presence</span>?
          </h2>

          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Get started with our AI-powered solutions tailored to your industry needs.
          </p>

          <div className="space-y-3 mb-6">
            <div className="flex items-start">
              <CheckCircle className="h-5 w-5 text-primary-500 mr-3 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-gray-700 dark:text-gray-300">
                <span className="font-semibold">Personalized consultation</span> to understand your needs
              </p>
            </div>
            <div className="flex items-start">
              <CheckCircle className="h-5 w-5 text-primary-500 mr-3 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-gray-700 dark:text-gray-300">
                <span className="font-semibold">Custom AI solution</span> for your industry
              </p>
            </div>
            <div className="flex items-start">
              <CheckCircle className="h-5 w-5 text-primary-500 mr-3 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-gray-700 dark:text-gray-300">
                <span className="font-semibold">Comprehensive support</span> throughout implementation
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="flex -space-x-2">
              <img
                src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt="Client"
                className="w-8 h-8 rounded-full border-2 border-white dark:border-secondary-900 object-cover"
              />
              <img
                src="https://images.pexels.com/photos/3776932/pexels-photo-3776932.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt="Client"
                className="w-8 h-8 rounded-full border-2 border-white dark:border-secondary-900 object-cover"
              />
              <img
                src="https://images.pexels.com/photos/3776939/pexels-photo-3776939.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt="Client"
                className="w-8 h-8 rounded-full border-2 border-white dark:border-secondary-900 object-cover"
              />
            </div>
            <div className="text-xs text-gray-600 dark:text-gray-400">
              <span className="text-primary-500 font-semibold">100+</span> businesses trust us
            </div>
          </div>
        </div>

        <div className="bg-gray-50 dark:bg-secondary-800 p-8 flex flex-col justify-center">
          {formContent}
        </div>
      </div>
    </div>
  );

  const fullContactContent = (
    <section id="contact" className="py-12 md:py-16 relative overflow-hidden min-h-[80vh] flex items-center">
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
                Ready to transform your <span className="text-transparent bg-clip-text bg-gradient-primary">digital presence</span> with DigiZinc?
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
                  <span className="text-primary-500 font-semibold">100+</span> businesses already using our services
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

  if (isModal) {
    return (
      <Modal isOpen={true} onClose={onClose!} title={`Contact Us for ${defaultIndustry || 'DigiZinc Solutions'}`}>
        <div className="md:hidden">
          {mobileModalContent}
        </div>
        <div className="hidden md:block">
          {desktopModalContent}
        </div>
      </Modal>
    );
  }

  return fullContactContent;
};

export default ContactUs;
