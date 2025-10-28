'use client'

import { useState, useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';

const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbw3mNXSZUGhpRs4TJdCEZXQLXHekPQf6O1n0xeBdXyIHFhPc9XKGZbhT0xVZ6ZMnDPD/exec';

export const useContactForm = (defaultIndustry?: string) => {
  const { toast } = useToast();
  const [firstName, setFirstName] = useState('');
  const [firstNameError, setFirstNameError] = useState('');
  const [lastName, setLastName] = useState('');
  const [lastNameError, setLastNameError] = useState('');
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [company, setCompany] = useState('');
  const [industry, setIndustry] = useState(defaultIndustry || '');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateFirstName = () => {
    if (!firstName.trim()) {
      setFirstNameError('First name is required.');
      return false;
    }
    setFirstNameError('');
    return true;
  };

  const validateLastName = () => {
    if (!lastName.trim()) {
      setLastNameError('Last name is required.');
      return false;
    }
    setLastNameError('');
    return true;
  };

  const validateEmail = () => {
    if (!email.trim()) {
      setEmailError('Email is required.');
      return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setEmailError('Invalid email format.');
      return false;
    }
    setEmailError('');
    return true;
  };

  useEffect(() => {
    if (defaultIndustry) {
      setIndustry(defaultIndustry);
    }
  }, [defaultIndustry]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Perform all validations
    const isFirstNameValid = validateFirstName();
    const isLastNameValid = validateLastName();
    const isEmailValid = validateEmail();

    if (!isFirstNameValid || !isLastNameValid || !isEmailValid) {
      toast({
        title: "Validation Error",
        description: "Please fill in all required fields correctly.",
        variant: "destructive",
      });
      return;
    }

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
      toast({
        title: "Submitted successfully!",
        description: "We will get back to you shortly.",
        variant: "default",
      });
      setFirstName('');
      setLastName('');
      setEmail('');
      setCompany('');
      setIndustry('');
      setMessage('');
    } catch (error) {
      toast({
        title: "Submission failed!",
        description: "Please try again later.",
        variant: "destructive",
      });
      console.error("Error submitting to Google Sheet:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    firstName, setFirstName, firstNameError, validateFirstName,
    lastName, setLastName, lastNameError, validateLastName,
    email, setEmail, emailError, validateEmail,
    company, setCompany,
    industry, setIndustry,
    message, setMessage,
    isSubmitting,
    handleSubmit,
  };
};
