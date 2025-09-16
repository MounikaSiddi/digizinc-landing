'use client'

import React from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Send } from 'lucide-react';

const NewsletterSignup = () => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-bold text-foreground">Subscribe to our Newsletter</h3>
      <p className="text-muted-foreground text-sm">Get the latest news, articles, and resources, sent to your inbox weekly.</p>
      <form className="flex items-center gap-2">
        <Input type="email" placeholder="Enter your email" className="flex-grow" />
        <Button type="submit" size="icon" aria-label="Subscribe">
          <Send className="h-4 w-4" />
        </Button>
      </form>
    </div>
  );
};

export default NewsletterSignup;