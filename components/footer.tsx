import React from "react";
import Link from "next/link";
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background text-foreground py-16 md:py-24 border-t border-primary-700/20 relative overflow-hidden
      before:absolute before:inset-0 before:bg-gradient-to-b before:from-primary-700/5 before:to-transparent before:pointer-events-none
      after:absolute after:inset-0 after:bg-grid-white/[0.02] after:pointer-events-none">
      <div className="container px-4 md:px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative">
        {/* Company Info & Logo */}
        <div className="space-y-6 backdrop-blur-sm p-4 rounded-lg border border-primary-700/10 hover:border-primary-700/20 transition-colors">
          <Link href="/" className="flex items-center gap-2 font-bold text-2xl text-foreground group">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] group-hover:opacity-80 transition-opacity">
              SaaVik AI
            </span>
          </Link>
          <p className="text-foreground/80 max-w-xs hover:text-foreground transition-colors">
            Leveraging cutting-edge AI to redefine digital marketing strategies and drive unparalleled growth for your business.
          </p>
          <div className="flex space-x-4 p-2 rounded-lg bg-primary-700/5 backdrop-blur-sm">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" 
               className="text-foreground/70 hover:text-primary transition-colors hover:scale-110 transform duration-200">
              <Facebook size={20} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors">
              <Twitter size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors">
              <Instagram size={20} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="backdrop-blur-sm p-4 rounded-lg border border-primary-700/10 hover:border-primary-700/20 transition-colors">
          <h3 className="font-semibold text-lg mb-6 text-foreground/90 hover:text-foreground transition-colors">
            Quick Links
          </h3>
          <ul className="space-y-4">
            <li>
              <Link href="/about" 
                    className="text-foreground/70 hover:text-primary transition-colors flex items-center gap-2 group">
                <span className="w-1 h-1 rounded-full bg-primary-700/50 group-hover:w-2 transition-all"></span>
                About Us
              </Link>
            </li>
            <li>
              <Link href="/solutions" className="text-foreground hover:text-primary transition-colors">
                Our Solutions
              </Link>
            </li>
            <li>
              <Link href="/industries" className="text-foreground hover:text-primary transition-colors">
                Industries
              </Link>
            </li>
            <li>
              <Link href="/testimonials" className="text-foreground hover:text-primary transition-colors">
                Testimonials
              </Link>
            </li>
            <li>
              <Link href="/blog" className="text-foreground hover:text-primary transition-colors">
                Blog
              </Link>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-semibold text-lg mb-6 text-foreground">Services</h3>
          <ul className="space-y-4">
            <li>
              <Link href="/services/seo" className="text-foreground hover:text-primary transition-colors">
                SEO Optimization
              </Link>
            </li>
            <li>
              <Link href="/services/social-media" className="text-foreground hover:text-primary transition-colors">
                Social Media Marketing
              </Link>
            </li>
            <li>
              <Link href="/services/email-marketing" className="text-foreground hover:text-primary transition-colors">
                Email Marketing
              </Link>
            </li>
            <li>
              <Link href="/services/ai-strategies" className="text-foreground hover:text-primary transition-colors">
                AI-Driven Strategies
              </Link>
            </li>
            <li>
              <Link href="/services/analytics" className="text-foreground hover:text-primary transition-colors">
                Analytics & Data
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact & Newsletter */}
        <div className="space-y-6">
          <h3 className="font-semibold text-lg mb-6 text-foreground">Get In Touch</h3>
          <address className="not-italic space-y-4">
            <div className="flex items-center gap-3">
              <Mail size={18} className="text-primary" />
              <a href="mailto:info@saavik.ai" className="text-foreground hover:text-primary transition-colors">
                info@saavik.ai
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Phone size={18} className="text-primary" />
              <a href="tel:+1234567890" className="text-foreground hover:text-primary transition-colors">
                +1 (234) 567-890
              </a>
            </div>
            <div className="flex items-start gap-3">
              <MapPin size={18} className="text-primary mt-1" />
              <span className="text-foreground">
                123 AI Avenue, <br /> Smart City, ST 12345
              </span>
            </div>
          </address>
          {/* Optional: Simple Newsletter Signup */}
          <h3 className="font-semibold text-lg pt-4 text-foreground">Stay Updated</h3>
          <form className="flex gap-2">
            <input
              type="email"
              placeholder="Your email"
              className="flex-grow p-3 rounded-lg border border-input bg-input text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button
              type="submit"
              className="px-5 py-3 rounded-lg bg-gradient-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Copyright and Legal */}
      <div className="container px-4 md:px-6 mt-16 text-center text-sm text-foreground border-t border-border pt-8">
        <p>&copy; {currentYear} SaaVik AI. All rights reserved.</p>
        <div className="flex justify-center space-x-6 mt-4">
          <Link href="/privacy-policy" className="hover:text-primary transition-colors">
            Privacy Policy
          </Link>
          <Link href="/terms-of-service" className="hover:text-primary transition-colors">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;