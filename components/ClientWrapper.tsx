// components/ClientWrapper.tsx
'use client';

import React, { useState, createContext, useContext } from 'react';
import ContactUs from './Contactus';
 // Adjust path if necessary

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
    </ContactModalContext.Provider>
  );
}