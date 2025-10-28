'use client'

import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbw3mNXSZUGhpRs4TJdCEZXQLXHekPQf6O1n0xeBdXyIHFhPc9XKGZbhT0xVZ6ZMnDPD/exec'; // Reusing the same Google Sheet endpoint for now

export const useAiPackageInquiryForm = (packageName: string) => {
  const { toast } = useToast();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState(`I'm interested in the "${packageName}" package. I'd like to achieve...`);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData();
    formData.append('Package Name', packageName); // Add package name
    formData.append('Full Name', fullName);
    formData.append('Email', email);
    formData.append('Message', message);

    try {
      await fetch(SCRIPT_URL, {
        method: 'POST',
        body: formData,
      });
      toast({
        title: "Inquiry sent!",
        description: "We've received your inquiry and will get back to you shortly.",
        variant: "default",
      });
      setFullName('');
      setEmail('');
      setMessage(`I'm interested in the "${packageName}" package. I'd like to achieve...`); // Reset message
    } catch (error) {
      toast({
        title: "Submission failed!",
        description: "Please try again later.",
        variant: "destructive",
      });
      console.error("Error submitting AI package inquiry:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    fullName, setFullName,
    email, setEmail,
    message, setMessage,
    isSubmitting,
    handleSubmit,
  };
};
