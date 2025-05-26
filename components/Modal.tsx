// components/Modal.tsx
import React, { useEffect, useRef } from 'react';
import { X } from 'lucide-react'; // Import the close icon

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
  className?: string; // Optional for custom modal width/styling
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children, title, className }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden'; // Prevent scrolling background
    } else {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset'; // Re-enable scrolling
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div
        ref={modalRef}
        className={`relative w-full max-w-md md:max-w-lg bg-white dark:bg-secondary-900 rounded-lg shadow-lg transform transition-all duration-300 ease-out scale-100 opacity-100 ${className || ''}`}
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
      >
        <button
          type="button"
          className="absolute top-3 right-3 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
          onClick={onClose}
        >
          <X className="w-5 h-5" />
          <span className="sr-only">Close modal</span>
        </button>
        {title && (
          <div className="px-6 py-4 border-b border-gray-200 dark:border-secondary-800">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">{title}</h3>
          </div>
        )}
        <div className="p-6">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;