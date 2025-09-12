'use client'

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { CheckCircle } from 'lucide-react';

const AboutUsClient = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Our Story
          </h1>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Discover the passion and vision behind DigiZinc.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <Image
              src="/founder-image.jpg"
              alt="Bhargava Raj, Founder & CEO of Digizinc"
              width={600}
              height={400}
              className="rounded-lg shadow-xl object-cover w-full h-auto"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <h2 className="text-3xl font-bold font-heading mb-4 text-foreground">
              A Message from Our Founder
            </h2>
            <p className="text-lg text-muted-foreground mb-4">
              "At DigiZinc, we believe in the power of creativity amplified by intelligence. Our journey began with a vision to transform how brands connect with their audience in the digital age. We saw the immense potential of AI not just as a tool, but as a partner in crafting compelling narratives and delivering measurable impact."
            </p>
            <p className="text-lg font-semibold text-foreground">
              — Bhargava Raj, Founder & CEO
            </p>
          </motion.div>
        </div>

        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold font-heading mb-4 text-foreground">
            Our Mission & Values
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Our core principles guide everything we do, ensuring we deliver excellence and build lasting partnerships.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <div className="bg-card p-6 rounded-lg shadow-md border border-border">
              <h3 className="text-xl font-semibold font-heading mb-2 text-foreground">Mission</h3>
              <p className="text-muted-foreground">
                To empower brands with creative solutions that blend design, technology, and AI for measurable impact.
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-md border border-border">
              <h3 className="text-xl font-semibold font-heading mb-2 text-foreground">Vision</h3>
              <p className="text-muted-foreground">
                To become a global creative agency recognized for futuristic, bold, and innovative brand transformations.
              </p>
            </div>
            <div className="md:col-span-2 bg-card p-6 rounded-lg shadow-md border border-border">
              <h3 className="text-xl font-semibold font-heading mb-2 text-foreground">Core Values</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center"><CheckCircle className="h-5 w-5 text-primary mr-2" /> Creativity: Pushing boundaries of design & storytelling.</li>
                <li className="flex items-center"><CheckCircle className="h-5 w-5 text-primary mr-2" /> Innovation: Leveraging Gen AI and modern tech.</li>
                <li className="flex items-center"><CheckCircle className="h-5 w-5 text-primary mr-2" /> Excellence: Delivering premium and performance-driven outcomes.</li>
                <li className="flex items-center"><CheckCircle className="h-5 w-5 text-primary mr-2" /> Collaboration: Building long-term partnerships with clients.</li>
                <li className="flex items-center"><CheckCircle className="h-5 w-5 text-primary mr-2" /> Adaptability: Evolving with trends, industries, and platforms.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Optional: Team Section */}
        {/* <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold font-heading mb-8 text-foreground">
            Meet the Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Team Member Card */}
            {/* <div className="bg-card p-6 rounded-lg shadow-md border border-border text-center">
              <Image
                src="/placeholder-user.jpg"
                alt="Team Member Name"
                width={120}
                height={120}
                className="rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold font-heading text-foreground">Jane Doe</h3>
              <p className="text-muted-foreground">Lead Designer</p>
            </div> */}
            {/* Add more team members */}
          {/* </div>
        </div> */}

      </div>
    </section>
  );
};

export default AboutUsClient;
