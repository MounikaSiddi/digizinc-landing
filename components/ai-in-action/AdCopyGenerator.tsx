'use client'
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const AdCopyGenerator = () => {
  const [product, setProduct] = useState('');
  const [audience, setAudience] = useState('');
  const [generatedCopy, setGeneratedCopy] = useState<string[]>([]);

  const templates = [
    `Unlock the power of {product} for {audience}. Get yours today!`,
    `The ultimate solution for {audience} is here. Discover {product}!`,
    `Tired of the old way? {product} is the new way for {audience}.`,
    `Experience the future of {product}, designed for {audience}.`,
  ];

  const generateCopy = () => {
    if (product && audience) {
      const newCopy = templates.map((template) =>
        template.replace('{product}', product).replace('{audience}', audience)
      );
      setGeneratedCopy(newCopy);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Creative Ad Copy Generator</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <div>
            <Label htmlFor="product">Product</Label>
            <Input
              id="product"
              value={product}
              onChange={(e) => setProduct(e.target.value)}
              placeholder="e.g., a new SaaS product"
            />
          </div>
          <div>
            <Label htmlFor="audience">Target Audience</Label>
            <Input
              id="audience"
              value={audience}
              onChange={(e) => setAudience(e.target.value)}
              placeholder="e.g., busy professionals"
            />
          </div>
          <Button onClick={generateCopy}>Generate Ad Copy</Button>
        </div>

        {generatedCopy.length > 0 && (
          <div className="mt-8">
            <h4 className="text-lg font-semibold mb-4">Generated Ad Copy:</h4>
            <ul className="space-y-4">
              {generatedCopy.map((copy, index) => (
                <li key={index} className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
                  {copy}
                </li>
              ))}
            </ul>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default AdCopyGenerator;
