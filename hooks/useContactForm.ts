'use client'

import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbw3mNXSZUGhpRs4TJdCEZXQLXHekPQf6O1n0xeBdXyIHFhPc9XKGZbhT0xVZ6ZMnDPD/exec';

export const useContactForm = (defaultIndustry?: string) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [industry, setIndustry] = useState(defaultIndustry || '');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (defaultIndustry) {
      setIndustry(defaultIndustry);
    }
  }, [defaultIndustry]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData();
    formData.append('firstName', firstName);
    formData.append('lastName', lastName);
    formData.append('email', email);
    formData.append('company', company);
    formData.append('industry', industry);
    formData.append('message', message);

    try {
      await fetch(SCRIPT_URL, {
        method: 'POST',
        body: formData,
      });
      toast.success("Submitted successfully!");
      setFirstName('');
      setLastName('');
      setEmail('');
      setCompany('');
      setIndustry('');
      setMessage('');
    } catch (error) {
      toast.error("Submission failed!");
      console.error("Error submitting to Google Sheet:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    firstName, setFirstName,
    lastName, setLastName,
    email, setEmail,
    company, setCompany,
    industry, setIndustry,
    message, setMessage,
    isSubmitting,
    handleSubmit,
  };
};
