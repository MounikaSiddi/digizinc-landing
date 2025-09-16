import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const LabsPage = () => {
  return (
    <section id="labs" className="py-16 md:py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-gray-900 dark:text-white">
            Digizinc <span className="bg-gradient-primary bg-clip-text text-transparent">Labs</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A showcase of our creative experiments and internal projects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Experiment 001</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Coming Soon</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default LabsPage;
