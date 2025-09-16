import React from 'react';
import { pricingData } from '@/lib/pricing-data';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Check } from 'lucide-react';

const PricingPage = () => {
  return (
    <section id="pricing" className="py-16 md:py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-gray-900 dark:text-white">
            Our <span className="bg-gradient-primary bg-clip-text text-transparent">Pricing</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Choose the plan that's right for you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pricingData.map((plan, index) => (
            <Card key={index} className="flex flex-col">
              <CardHeader>
                <CardTitle className="text-2xl font-bold font-heading">{plan.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col flex-grow">
                <p className="text-3xl font-bold mb-4">{plan.price}</p>
                <ul className="space-y-4 mb-8 flex-grow">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <Check className="w-6 h-6 text-green-500 mr-2" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild>
                  <a href="/connect">{plan.cta}</a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold font-heading mb-4">Don't see a plan that fits your needs?</h3>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">We can create a custom package just for you.</p>
          <Button asChild>
            <a href="/connect?subject=Custom%20Package%20Inquiry">Build Your Own Package</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PricingPage;
