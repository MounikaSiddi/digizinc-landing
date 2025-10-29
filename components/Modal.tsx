// components/Modal.tsx
'use client';

import React, { useEffect } from 'react';
import { X } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 px-4 py-6 overflow-y-auto">
      <div className="relative bg-white dark:bg-secondary-900 rounded-2xl shadow-xl w-full max-w-6xl max-h-[90vh] overflow-hidden flex flex-col">
        {/* Modal Header */}
        <div className="flex justify-between items-center p-6 border-b border-gray-200 dark:border-secondary-700">
          <h3 className="font-heading text-xl font-bold text-gray-900 dark:text-white">{title}</h3>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Modal Body - Now with responsive handling for the contact content */}
        <div className="p-0 flex-grow overflow-y-auto">
          {/* Ensure the children (fullContactContent) are rendered here.
              We will apply responsive classes within the ContactUs component's structure
              or if the Modal wraps a generic child, handle it here.
              For this case, we're assuming 'children' is the entire <section> from ContactUs.
          */}
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;