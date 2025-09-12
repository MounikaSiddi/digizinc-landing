'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Briefcase, Award, Heart, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useContactModal } from '@/components/ClientWrapper';

const CareersClient = () => {
  const { openContactModal } = useContactModal();

  const benefits = [
    { icon: <Award className="h-6 w-6 text-primary" />, text: "Competitive Salary & Equity" },
    { icon: <Heart className="h-6 w-6 text-primary" />, text: "Comprehensive Health Benefits" },
    { icon: <Briefcase className="h-6 w-6 text-primary" />, text: "Flexible Work Hours & Remote Options" },
    { icon: <Users className="h-6 w-6 text-primary" />, text: "Collaborative & Inclusive Culture" },
    { icon: <CheckCircle className="h-6 w-6 text-primary" />, text: "Professional Development & Training" },
    { icon: <Briefcase className="h-6 w-6" />, text: "Cutting-Edge AI Tools & Tech" },
  ];

  const jobOpenings = [
    { title: "AI Creative Strategist", location: "Remote", type: "Full-time" },
    { title: "Prompt Engineer (Generative AI)", location: "Hyderabad, India", type: "Full-time" },
    { title: "Senior UI/UX Designer", location: "Remote", type: "Full-time" },
    { title: "Full Stack Developer (Next.js/Node.js)", location: "Hyderabad, India", type: "Full-time" },
  ];

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
            Join Our Team
          </h1>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Be part of a visionary team shaping the future of digital creativity with AI.
          </p>
        </motion.div>

        {/* Culture Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold font-heading text-center mb-8 text-foreground">
            Our Culture: Where Innovation Meets Impact
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-8">
            At DigiZinc, we foster an environment of relentless innovation, creative freedom, and mutual respect. We believe in empowering our team members to push boundaries, learn continuously, and make a tangible impact on our clients' success.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-card p-6 rounded-lg shadow-md border border-border">
              <h3 className="text-xl font-semibold font-heading mb-2 text-foreground">Innovate Fearlessly</h3>
              <p className="text-muted-foreground">We encourage bold ideas and experimentation, leveraging cutting-edge AI to redefine creative possibilities.</p>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-md border border-border">
              <h3 className="text-xl font-semibold font-heading mb-2 text-foreground">Collaborate & Grow</h3>
              <p className="text-muted-foreground">Our diverse team thrives on collaboration, sharing knowledge, and supporting each other's professional growth.</p>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-md border border-border">
              <h3 className="text-xl font-semibold font-heading mb-2 text-foreground">Impact Driven</h3>
              <p className="text-muted-foreground">Every project is an opportunity to deliver measurable results and transform our clients' digital presence.</p>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-md border border-border">
              <h3 className="text-xl font-semibold font-heading mb-2 text-foreground">Work-Life Harmony</h3>
              <p className="text-muted-foreground">We believe in sustainable productivity, offering flexibility and support to maintain a healthy work-life balance.</p>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold font-heading text-center mb-8 text-foreground">
            What We Offer
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center bg-card p-4 rounded-lg shadow-sm border border-border">
                {benefit.icon}
                <p className="ml-3 text-lg text-foreground">{benefit.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Job Openings Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold font-heading text-center mb-8 text-foreground">
            Current Openings
          </h2>
          <div className="space-y-6">
            {jobOpenings.map((job, index) => (
              <div key={index} className="bg-card p-6 rounded-lg shadow-md border border-border flex flex-col md:flex-row justify-between items-start md:items-center">
                <div>
                  <h3 className="text-xl font-semibold font-heading text-foreground mb-1">{job.title}</h3>
                  <p className="text-muted-foreground text-sm">{job.location} | {job.type}</p>
                </div>
                <Button
                  variant="outline"
                  className="mt-4 md:mt-0 rounded-full border-primary text-primary hover:bg-primary/10"
                  onClick={() => openContactModal(job.title)} // Pass job title to contact form
                >
                  Apply Now
                </Button>
              </div>
            ))}
          </div>
          <p className="text-center text-muted-foreground mt-8">
            Don't see a role that fits? Send us your resume anyway! We're always looking for talented individuals.
          </p>
          <div className="text-center mt-4">
            <Button
              className="rounded-full bg-gradient-primary text-primary-foreground font-semibold shadow-lg hover:opacity-90 transition-transform hover:scale-105"
              onClick={() => openContactModal(undefined)}
            >
              Submit General Application
            </Button>
          </div>
        </div>

        {/* Testimonials Section (Placeholder) */}
        {/* <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold font-heading text-center mb-8 text-foreground">
            Hear From Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Employee Testimonial Card */}
            {/* <div className="bg-card p-6 rounded-lg shadow-md border border-border">
              <p className="text-muted-foreground mb-4">"Working at DigiZinc has been an incredible journey. The focus on innovation and the supportive team environment make every day exciting."</p>
              <p className="font-semibold text-foreground">Jane Doe, AI Creative Strategist</p>
            </div> */}
            {/* Add more testimonials */}
          {/* </div>
        </div> */}

      </div>
    </section>
  );
};

export default CareersClient;
