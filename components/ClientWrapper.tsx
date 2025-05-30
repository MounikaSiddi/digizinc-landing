// components/ClientWrapper.tsx
'use client';

import React, { useState, createContext, useContext } from 'react';
import ContactUs from './Contactus';
import SaviBot from './SaviBot';
import WhatsappButton from './Whatsapp'; // Import the WhatsApp component

// Define the shape of our context
interface ContactModalContextType {
  openContactModal: (industry?: string) => void;
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
  const [showBot, setShowBot] = useState(false)
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [modalIndustry, setModalIndustry] = useState<string | undefined>(undefined);

  const openContactModal = (industry?: string) => {
    setModalIndustry(industry);
    setIsContactModalOpen(true);
  };

  const closeContactModal = () => {
    setIsContactModalOpen(false);
    setModalIndustry(undefined);
  };

  // Provide the openContactModal function through context
  const contextValue = { openContactModal };

  return (
    <ContactModalContext.Provider value={contextValue}>
      {children} {/* Render any children passed to ClientWrapper */}

      {/* Render the ContactUs modal here, at a high level within the client-side tree */}
      {isContactModalOpen && (
        <ContactUs
          isModal={true}
          defaultIndustry={modalIndustry}
          onClose={closeContactModal}
        />
      )}
      
      {/* WhatsApp Button - positioned above the SaviBot button */}
      <div className="fixed bottom-24 right-6 z-40">
        <div className="bg-white dark:bg-secondary-800 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
          <WhatsappButton />
        </div>
      </div>
      
      <button
        onClick={() => setShowBot(!showBot)}
        className="fixed bottom-6 right-6 bg-gradient-primary p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-40"
        aria-label="Open Savi AI assistant"
      >
        <div className="relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-white"
          >
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
          <span className="absolute -top-2 -right-2 bg-secondary-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
            AI
          </span>
        </div>
      </button>

      <SaviBot isOpen={showBot} onClose={() => setShowBot(false)} />
    </ContactModalContext.Provider>
  );
}