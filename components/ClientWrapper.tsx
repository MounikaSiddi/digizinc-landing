// components/ClientWrapper.tsx
'use client';

import React, { useState, createContext, useContext } from 'react';
import dynamic from 'next/dynamic';
import WhatsappButton from './Whatsapp'; // Import the WhatsApp component

// Define the shape of our context
interface ContactModalContextType {
  openContactModal: (industry?: string, packageTitle?: string) => void;
  openAiPackageInquiryModal: (packageName: string) => void;
}

// Create the context
const ContactModalContext = createContext<ContactModalContextType | undefined>(undefined);
// Custom hook to use the contact modal context
export const useContactModal = () => {
  const context = useContext(ContactModalContext);
  if (context === undefined) {
    throw new Error('useContactModal must be used within a ContactModalProvider');
  }
  return context;
};

interface ClientWrapperProps {
  children?: React.ReactNode; // Add children prop if you want to wrap other client components
}

export default function ClientWrapper({ children }: ClientWrapperProps) {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [modalIndustry, setModalIndustry] = useState<string | undefined>(undefined);
  const [modalPackageTitle, setModalPackageTitle] = useState<string | undefined>(undefined);

  const [isAiPackageInquiryModalOpen, setIsAiPackageInquiryModalOpen] = useState(false);
  const [aiPackageName, setAiPackageName] = useState('');

  const openContactModal = (industry?: string, packageTitle?: string) => {
    setModalIndustry(industry);
    setModalPackageTitle(packageTitle);
    setIsContactModalOpen(true);
  };

  const closeContactModal = () => {
    setIsContactModalOpen(false);
    setModalIndustry(undefined);
    setModalPackageTitle(undefined);
  };

  const openAiPackageInquiryModal = (packageName: string) => {
    setAiPackageName(packageName);
    setIsAiPackageInquiryModalOpen(true);
  };

  const closeAiPackageInquiryModal = () => {
    setIsAiPackageInquiryModalOpen(false);
    setAiPackageName('');
  };

  // Provide the openContactModal function through context
  const contextValue = { openContactModal, openAiPackageInquiryModal };

  // Define DynamicContactModal here, before the final return statement
  const DynamicContactModal = dynamic(() => import('./contact/ContactModal').then(mod => mod.ContactModal), {
    ssr: false,
    loading: () => <p>Loading form...</p>,
  });

  const DynamicAiPackageInquiryModal = dynamic(() => import('./contact/AiPackageInquiryModal').then(mod => mod.AiPackageInquiryModal), {
    ssr: false,
    loading: () => <p>Loading inquiry form...</p>,
  });

  return (
    <ContactModalContext.Provider value={contextValue}>
      {children} {/* Render any children passed to ClientWrapper */}

      {/* Render the ContactUs modal here, at a high level within the client-side tree */}
      {isContactModalOpen && (
        <DynamicContactModal
          isOpen={isContactModalOpen}
          defaultIndustry={modalIndustry}
          packageTitle={modalPackageTitle}
          onClose={closeContactModal}
        />
      )}

      {/* Render the AI Package Inquiry modal */}
      {isAiPackageInquiryModalOpen && (
        <DynamicAiPackageInquiryModal
          isOpen={isAiPackageInquiryModalOpen}
          packageName={aiPackageName}
          onClose={closeAiPackageInquiryModal}
        />
      )}

      {/* WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <div className="bg-white dark:bg-secondary-800 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
          <WhatsappButton />
        </div>
      </div>

    </ContactModalContext.Provider>
  );
}