'use client';

import Link from "next/link"
import React, { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, MapPin, Mail, Share2, X, CheckCircle, AlertCircle } from 'lucide-react';
import { FaXTwitter, FaLinkedin } from 'react-icons/fa6';

// Toast Component
type ToastProps = {
  message: string;
  type: 'success' | 'error';
  onClose: () => void;
};

const Toast = ({ message, type, onClose }: ToastProps) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  const bgColor = type === 'success' ? 'bg-green-500' : 'bg-red-500';
  const Icon = type === 'success' ? CheckCircle : AlertCircle;

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      className={`fixed top-4 right-4 z-50 ${bgColor} text-white px-6 py-3 rounded-lg shadow-lg flex items-center space-x-2`}
    >
      <Icon className="w-5 h-5" />
      <span>{message}</span>
    </motion.div>
  );
};

// Modal Component
type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl w-full max-w-md p-6"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
              Share Your Contact Details
            </h3>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          {children}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

const DigitalBusinessCard = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const [showModal, setShowModal] = useState(false);
  const [visitorName, setVisitorName] = useState('');
  const [visitorPhone, setVisitorPhone] = useState('');
  const [visitorEmail, setVisitorEmail] = useState('');
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Founder and Company Details
  const founder = {
    name: "Bhargava Raj",
    title: "Founder & CEO",
    photo: "/founder-image.jpg",
    social: {
      twitter: "https://twitter.com/raj",
      linkedin: "https://www.linkedin.com/in/raj",
      email: "Raj@digizinc.com",
    },
  };

  const company = {
    name: "Digizinc",
    logoLight: "/digizinc-header-logo-dark.png",
    logoDark: "/digizinc-header-logo-light.png",
    address: "123 AI Street, Tech City, 500081 Hyderabad, Telangana, India",
    phone: "+91 98765 43210",
    social: {
      twitter: "https://twitter.com/digizinc",
      linkedin: "https://www.linkedin.com/company/digizinc",
      email: "info@digizinc.com",
      website: 'https://saaviksolutions.com'
    },
  };

  interface ShowToastProps {
    message: string;
    type: 'success' | 'error';
  }

  const showToast = (message: string, type: 'success' | 'error'): void => {
    setToast({ message, type });
  };

  const closeToast = () => {
    setToast(null);
  };

  const generateVCard = () => {
    const vCardData = `BEGIN:VCARD
VERSION:3.0
FN:${founder.name}
ORG:${company.name}
TITLE:${founder.title}
TEL;TYPE=WORK,VOICE:${company.phone}
ADR;TYPE=WORK,PREF:;;${company.address}
EMAIL;TYPE=INTERNET,WORK,PREF:${founder.social.email}
URL;type=linkedin:${company.social.linkedin}
URL;type=linkedin:${founder.social.linkedin}
X-SOCIALPROFILE;type=twitter:${founder.social.twitter}
X-SOCIALPROFILE;type=twitter:${company.social.twitter}
END:VCARD`;

    const blob = new Blob([vCardData], { type: 'text/vcard;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `${founder.name.replace(/\s/g, '_')}_Contact.vcf`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleAddToContacts = () => {
    generateVCard();
    showToast('Contact downloaded successfully!', 'success');
    
    // Show modal after a brief delay
    setTimeout(() => {
      setShowModal(true);
    }, 1000);
  };

  interface VisitorData {
    name: string;
    phone: string;
    email?: string;
  }

  interface EmailData {
    to: string;
    subject: string;
    html: string;
  }

  interface SendVisitorInfoResult {
    success: boolean;
    error?: string;
  }

 const sendVisitorInfo = async (visitorData: VisitorFormData) => {
  try {
    const response = await fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        visitorName: visitorData.name,
        visitorPhone: visitorData.phone,
        visitorEmail: visitorData.email,
        founderName: founder.name,
        companyName: company.name,
      }),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.error || 'Failed to send email');
    }

    return { success: true };
  } catch (error) {
    console.error('Error sending email:', error);
    return { 
      success: false, 
      error: typeof error === 'object' && error !== null && 'message' in error 
        ? String((error as { message: unknown }).message) 
        : 'An unknown error occurred' 
    };
  }
};

  interface HandleSubmitVisitorInfoEvent extends React.FormEvent<HTMLFormElement> {}

  interface VisitorFormData {
    name: string;
    phone: string;
    email?: string;
  }

  const handleSubmitVisitorInfo = async (e: HandleSubmitVisitorInfoEvent): Promise<void> => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const visitorData: VisitorFormData = {
        name: visitorName,
        phone: visitorPhone,
        email: visitorEmail
      };

      const result = await sendVisitorInfo(visitorData);

      if (result.success) {
        showToast('Your contact details have been shared successfully!', 'success');
        setShowModal(false);
        setVisitorName('');
        setVisitorPhone('');
        setVisitorEmail('');
      } else {
        showToast('Failed to share contact details. Please try again.', 'error');
      }
    } catch (error) {
      showToast('An error occurred. Please try again.', 'error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, staggerChildren: 0.1 } },
  };

  const itemFadeIn = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-white dark:bg-black transition-colors duration-300 relative overflow-hidden">
      {/* Toast Notification */}
      <AnimatePresence>
        {toast && (
          <Toast
            message={toast.message}
            type={toast.type}
            onClose={closeToast}
          />
        )}
      </AnimatePresence>

      {/* Background gradients */}
      <div className="absolute -top-1/4 -left-1/4 w-96 h-96 bg-primary/10 dark:bg-[#f22ee5]/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob -z-10"></div>
      <div className="absolute -bottom-1/4 -right-1/4 w-96 h-96 bg-secondary/10 dark:bg-[#902ef2]/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000 -z-10"></div>

      <motion.div
        className="relative bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/60 dark:to-pink-900/60 p-6 md:p-10 rounded-3xl shadow-2xl w-full max-w-md backdrop-blur-sm border border-white/20 dark:border-white/10"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        {/* Company Logo */}
        <Link href="/">
          <Image
            src="/digizinc-header-logo-light.png"
            alt="Digizinc Logo"
            width={120}
            height={30}
            className="h-auto w-auto block dark:hidden mx-auto my-4 object-contain"
          />
          <Image
            src="/digizinc-header-logo-dark.png"
            alt="Digizinc Logo"
            width={120}
            height={30}
            className="w-auto hidden dark:block mx-auto h-auto my-4 object-contain"
          />
        </Link>

        {/* Founder Photo and Details */}
        <motion.div variants={itemFadeIn} className="text-center mb-8">
          <div className="relative w-32 h-32 rounded-full overflow-hidden mx-auto mb-4 border-4 border-white dark:border-gray-800 shadow-md">
            <Image
              src={founder.photo}
              alt={founder.name}
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-300 hover:scale-105"
            />
          </div>
          <h1 className="text-2xl md:text-3xl font-bold font-heading text-gray-900 dark:text-white mb-2">
            {founder.name}
          </h1>
          <p className="text-lg text-primary-700 dark:text-primary-300 mb-4">{founder.title}</p>
        </motion.div>

        {/* Contact Information */}
        <motion.div variants={itemFadeIn} className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-6 mb-8">
          <div className="flex items-center text-gray-800 dark:text-gray-200">
            <Phone className="w-5 h-5 mr-3 text-primary-600 dark:text-primary-400" />
            <a href={`tel:${company.phone}`} className="hover:underline transition-colors duration-200">
              {company.phone}
            </a>
          </div>
          <div className="flex items-center text-gray-800 dark:text-gray-200">
            <Mail className="w-5 h-5 mr-3 text-primary-600 dark:text-primary-400" />
            <a href={`mailto:${founder.social.email}`} className="hover:underline transition-colors duration-200">
              {founder.social.email}
            </a>
          </div>
        </motion.div>

        {/* Location Information */}
        <div className="flex place-items-start justify-center text-gray-800 dark:text-gray-200 mb-8">
          <MapPin className="w-5 h-5 mr-3 text-primary-600 dark:text-primary-400 flex-shrink-0" />
          <span>{company.address}</span>
        </div>

        {/* Founder Social Handles */}
        <motion.div variants={itemFadeIn} className="flex justify-center gap-6 mb-8">
          {founder.social.twitter && (
            <a
              href={founder.social.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
              aria-label="Founder's Twitter"
            >
              <FaXTwitter className="w-7 h-7" />
            </a>
          )}
          {founder.social.linkedin && (
            <a
              href={founder.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
              aria-label="Founder's LinkedIn"
            >
              <FaLinkedin className="w-7 h-7" />
            </a>
          )}
        </motion.div>

        {/* Add to Contacts Button */}
        <motion.div variants={itemFadeIn} className="text-center">
          <button
            onClick={handleAddToContacts}
            className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-gradient-to-r from-[#f22ee5] to-[#902ef2] text-white font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 transform"
          >
            <Phone className="w-5 h-5 mr-3" /> Add to Contacts
          </button>
        </motion.div>
      </motion.div>

      {/* Modal for Visitor Information */}
      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <p className="text-center text-gray-700 dark:text-gray-300 mb-6">
          Thank you for downloading my contact! Would you like to share your details so I can connect with you?
        </p>
        <form onSubmit={handleSubmitVisitorInfo} className="space-y-4">
          <div>
            <label htmlFor="visitorName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Your Name *
            </label>
            <input
              type="text"
              id="visitorName"
              placeholder="Enter your full name"
              className="w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f22ee5] focus:border-transparent transition-all duration-200"
              value={visitorName}
              onChange={(e) => setVisitorName(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="visitorPhone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Mobile Number *
            </label>
            <input
              type="tel"
              id="visitorPhone"
              placeholder="Enter your mobile number"
              className="w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f22ee5] focus:border-transparent transition-all duration-200"
              value={visitorPhone}
              onChange={(e) => setVisitorPhone(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="visitorEmail" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Email Address (Optional)
            </label>
            <input
              type="email"
              id="visitorEmail"
              placeholder="Enter your email address"
              className="w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f22ee5] focus:border-transparent transition-all duration-200"
              value={visitorEmail}
              onChange={(e) => setVisitorEmail(e.target.value)}
            />
          </div>
          <div className="flex space-x-3 pt-4">
            <button
              type="button"
              onClick={() => setShowModal(false)}
              className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
              disabled={isSubmitting}
            >
              Skip
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 inline-flex items-center justify-center px-4 py-2 rounded-lg bg-gradient-to-r from-[#f22ee5] to-[#902ef2] text-white font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 transform disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  Sharing...
                </>
              ) : (
                <>
                  <Share2 className="w-4 h-4 mr-2" />
                  Share Contact
                </>
              )}
            </button>
          </div>
        </form>
      </Modal>

      {/* Custom CSS for blob animation */}
      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0, 0) scale(1);
          }
          30% {
            transform: translate(-10%, 20%) scale(1.1);
          }
          60% {
            transform: translate(15%, -10%) scale(0.9);
          }
          100% {
            transform: translate(0, 0) scale(1);
          }
        }
        .animate-blob {
          animation: blob 8s infinite alternate;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </div>
  );
};

export default DigitalBusinessCard;