import React from 'react';
import AdCopyGenerator from './AdCopyGenerator';

const AiInActionPage = () => {
  return (
    <section id="ai-in-action" className="py-16 md:py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-gray-900 dark:text-white">
            AI in <span className="bg-gradient-primary bg-clip-text text-transparent">Action</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            See how we leverage AI to create stunning visuals and high-performing campaigns.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AdCopyGenerator />
        </div>
      </div>
    </section>
  );
};

export default AiInActionPage;
