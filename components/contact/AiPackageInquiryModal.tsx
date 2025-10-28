'use client'

import React from 'react';
import dynamic from 'next/dynamic';
import Modal from '@/components/Modal'; // Assuming you have a generic Modal component

interface AiPackageInquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  packageName: string;
}

const DynamicAiPackageInquiryForm = dynamic(() =>
  import('./AiPackageInquiryForm').then(mod => mod.AiPackageInquiryForm),
  {
    ssr: false,
    loading: () => <p className="p-4 text-center">Loading form...</p>,
  }
);

export const AiPackageInquiryModal: React.FC<AiPackageInquiryModalProps> = ({ isOpen, onClose, packageName }) => {

  const mobileModalContent = (
    <div className="p-6">
      <h3 className="font-heading text-xl font-bold text-gray-900 dark:text-white mb-4">
        Tell us about your goals for the <span className="text-transparent bg-clip-text bg-gradient-primary">{packageName}</span> package.
      </h3>
      <DynamicAiPackageInquiryForm packageName={packageName} onClose={onClose} />
    </div>
  );

  const desktopModalContent = (
    <div className="max-w-4xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[500px]">
        <div className="p-8 flex flex-col justify-center">
          <h2 className="font-heading text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Inquire About: <span className="text-transparent bg-clip-text bg-gradient-primary">{packageName}</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Tell us about your specific needs and goals for this AI-powered solution.
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
                <span className="font-semibold">Custom AI solution</span> tailored to your goals
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
              <Image
                src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt="Client"
                width={32}
                height={32}
                className="w-8 h-8 rounded-full border-2 border-white dark:border-secondary-900 object-cover"
                loading="lazy"
              />
              <Image
                src="https://images.pexels.com/photos/3776932/pexels-photo-3776932.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt="Client"
                width={32}
                height={32}
                className="w-8 h-8 rounded-full border-2 border-white dark:border-secondary-900 object-cover"
                loading="lazy"
              />
              <Image
                src="https://images.pexels.com/photos/3776939/pexels-photo-3776939.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt="Client"
                width={32}
                height={32}
                className="w-8 h-8 rounded-full border-2 border-white dark:border-secondary-900 object-cover"
                loading="lazy"
              />
            </div>
            <div className="text-xs text-gray-600 dark:text-gray-400">
              <span className="text-primary-500 font-semibold">100+</span> businesses trust us
            </div>
          </div>
        </div>
        <div className="bg-gray-50 dark:bg-secondary-800 p-8 flex flex-col justify-center">
          <DynamicAiPackageInquiryForm packageName={packageName} onClose={onClose} />
        </div>
      </div>
    </div>
  );

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={`Inquire About: ${packageName}`}>
      <div className="md:hidden">
        {mobileModalContent}
      </div>
      <div className="hidden md:block">
        {desktopModalContent}
      </div>
    </Modal>
  );
};
