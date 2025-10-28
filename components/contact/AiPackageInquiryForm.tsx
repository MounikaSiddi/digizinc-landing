'use client'

import React from 'react';
import { useAiPackageInquiryForm } from '@/hooks/useAiPackageInquiryForm';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Loader2 } from 'lucide-react';

interface AiPackageInquiryFormProps {
  packageName: string;
  onClose: () => void; // To close the modal after submission
}

export const AiPackageInquiryForm: React.FC<AiPackageInquiryFormProps> = ({ packageName, onClose }) => {
  const {
    fullName, setFullName,
    email, setEmail,
    message, setMessage,
    isSubmitting,
    handleSubmit,
  } = useAiPackageInquiryForm(packageName);

  const handleFormSubmit = async (e: React.FormEvent) => {
    await handleSubmit(e);
    // Optionally close modal after successful submission
    // if (!isSubmitting) { // This check might be tricky due to async nature
    //   onClose();
    // }
  };

  return (
    <form className="space-y-4 p-4" onSubmit={handleFormSubmit}>
      <div>
        <label htmlFor="full-name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Full Name
        </label>
        <Input
          type="text"
          id="full-name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          placeholder="Your Full Name"
          required
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Email
        </label>
        <Input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@example.com"
          required
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          What are you hoping to achieve with {packageName}?
        </label>
        <Textarea
          id="message"
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder={`Tell us about your goals for the "${packageName}" package...`}
          required
        ></Textarea>
      </div>
      <Button type="submit" disabled={isSubmitting} variant="gradient" className="w-full">
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Submitting...
          </>
        ) : (
          'Get My Personalized AI Solution'
        )}
      </Button>
    </form>
  );
};
