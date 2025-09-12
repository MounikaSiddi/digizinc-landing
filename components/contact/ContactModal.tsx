'use client'

import React from 'react';
import Modal from '@/components/Modal';
import { ContactForm } from './ContactForm';
import { CheckCircle } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultIndustry?: string;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose, defaultIndustry }) => {
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

      <ContactForm defaultIndustry={defaultIndustry} />

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
          <ContactForm defaultIndustry={defaultIndustry} />
        </div>
      </div>
    </div>
  );

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={`Contact Us for ${defaultIndustry || 'Digizinc Solutions'}`}>
      <div className="md:hidden">
        {mobileModalContent}
      </div>
      <div className="hidden md:block">
        {desktopModalContent}
      </div>
    </Modal>
  );
};