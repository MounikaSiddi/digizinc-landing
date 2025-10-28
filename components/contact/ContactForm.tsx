'use client'

import React, { useEffect, useState } from 'react';
import { useContactForm } from '@/hooks/useContactForm';
import { industryOptions } from '@/lib/services-data';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Loader2, CheckCircle } from 'lucide-react';


interface ContactFormProps {
  
  defaultIndustry?: string;
  packageTitle?: string;
}

export const ContactForm: React.FC<ContactFormProps> = ({ defaultIndustry, packageTitle }) => {
  const [step, setStep] = useState(1);
  const {
    firstName, setFirstName, firstNameError, validateFirstName,
    lastName, setLastName, lastNameError, validateLastName,
    email, setEmail, emailError, validateEmail,
    company, setCompany,
    industry, setIndustry,
    message, setMessage,
    isSubmitting,
    handleSubmit,
  } = useContactForm(defaultIndustry);

  useEffect(() => {
    if (packageTitle) {
      setMessage(`I'm interested in the "${packageTitle}" package.`);
    }
  }, [packageTitle, setMessage]);

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const canProceedToStep2 = !firstNameError && !lastNameError && !emailError && firstName.trim() !== '' && lastName.trim() !== '' && email.trim() !== '';

  return (
    <Card className="p-6 md:p-8 shadow-lg border-border/50 dark:border-secondary-700">
      <CardContent className="p-0">
        {/* Step Indicator */}
        <div className="mb-6 flex justify-center space-x-2">
          {[1, 2, 3].map((s) => (
            <div
              key={s}
              className={`h-2 w-8 rounded-full transition-all duration-300 ${
                step >= s ? 'bg-primary' : 'bg-gray-200 dark:bg-gray-700'
              }`}
            ></div>
          ))}
        </div>
        {/* End Step Indicator */}

        <form className="space-y-4" onSubmit={handleSubmit}>
          {step === 1 && (
            <div>
              <h3 className="text-lg font-semibold mb-4">Personal Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="first-name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    First Name
                  </label>
                                      <Input
                                        type="text"
                                        id="first-name"
                                        value={firstName}
                                        onChange={(e) => setFirstName(e.target.value)}
                                        onBlur={validateFirstName}
                                        placeholder="John"
                                        required
                                      />
                                      {firstNameError && <p className="text-red-500 text-xs mt-1">{firstNameError}</p>}                </div>
                <div>
                  <label htmlFor="last-name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Last Name
                  </label>
                  <Input
                    type="text"
                    id="last-name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    onBlur={validateLastName}
                    placeholder="Doe"
                    required
                  />
                  {lastNameError && <p className="text-red-500 text-xs mt-1">{lastNameError}</p>}
                </div>
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
                  onBlur={validateEmail}
                  placeholder="john@example.com"
                  required
                />
                {emailError && <p className="text-red-500 text-xs mt-1">{emailError}</p>}
              </div>
              <Button onClick={nextStep} className="w-full mt-4" variant="gradient" disabled={!canProceedToStep2}>Next</Button>
            </div>
          )}

          {step === 2 && (
            <div>
              <h3 className="text-lg font-semibold mb-4">Company Information</h3>
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Company (Optional)
                </label>
                <Input
                  type="text"
                  id="company"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  placeholder="Your Company"
                />
              </div>
              <div>
                <label htmlFor="industry" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Industry (Optional)
                </label>
                <Input
                  type="text"
                  id="industry"
                  list="industry-options"
                  value={industry}
                  onChange={(e) => setIndustry(e.target.value)}
                  placeholder="Select or type industry"
                />
                <datalist id="industry-options">
                  {industryOptions.map(option => <option key={option} value={option} />)}
                </datalist>
              </div>
              <div className="flex justify-between mt-4">
                <Button onClick={prevStep} variant="outline">Previous</Button>
                <Button onClick={nextStep} variant="gradient">Next</Button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div>
              <h3 className="text-lg font-semibold mb-4">Message</h3>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Message
                </label>
                <Textarea
                  id="message"
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell us about your project or needs..."
                ></Textarea>
              </div>
              <div className="flex justify-between mt-4">
                <Button onClick={prevStep} variant="outline">Previous</Button>
                <Button type="submit" disabled={isSubmitting} variant="gradient">
                  {isSubmitting ? 'Submitting...' : 'Get Started with Digizinc'}
                </Button>
              </div>
            </div>
          )}
        </form>
      </CardContent>
    </Card>
  );
};
