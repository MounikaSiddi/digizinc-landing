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
  return (
    <Modal isOpen={isOpen} onClose={onClose} title={`Inquire About: ${packageName}`}>
      <div className="p-4">
        <h3 className="font-heading text-xl font-bold text-gray-900 dark:text-white mb-4">
          Tell us about your goals for the <span className="text-transparent bg-clip-text bg-gradient-primary">{packageName}</span> package.
        </h3>
        <DynamicAiPackageInquiryForm packageName={packageName} onClose={onClose} />
      </div>
    </Modal>
  );
};
