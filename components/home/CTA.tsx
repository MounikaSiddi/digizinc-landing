'use client'
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion"
import { useContactModal } from "../ClientWrapper";
import Image from "next/image"; // Import Image for optimized avatars
import { CheckCircle } from "lucide-react"; // Import CheckCircle icon

const CTA = () => {
  const { openContactModal } = useContactModal();

  return (
    <section className="relative py-8 md:py-16 overflow-hidden bg-white dark:bg-black transition-colors duration-200"> {/* Reduced vertical padding, simplified dark background */}
      {/* Optional: Subtle background gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 opacity-30 pointer-events-none"></div>

      <div className="container relative z-10">
        <motion.div
          className="text-center max-w-6xl mx-auto"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* New Content Start */}
          <div className="p-4 sm:p-8 md:p-12 bg-white dark:bg-secondary-900/20  dark:border-secondary-800"> {/* Added padding, background, border, shadow */}
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-secondary-50 dark:bg-secondary-900/50 text-secondary-700 dark:text-secondary-300 text-sm font-medium mb-6">
              <span className="flex h-2 w-2 rounded-full bg-secondary-500 mr-2"></span>
              Let's work together
            </div>

            <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              Ready to transform your <span className="text-transparent bg-clip-text bg-gradient-primary">digital presence</span> with DigiZinc?
            </h2>

            <p className="text-lg text-left px-10 text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Get started with our AI-powered solutions tailored to your industry needs.
            </p>

            <div className="space-y-4 max-w-5xl px-8 mb-8 text-left"> {/* Aligned list to left */}
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary-500 mr-3 flex-shrink-0" />
                <p className="text-gray-700 dark:text-gray-300">
                  <span className="font-semibold">Personalized consultation</span> to understand your specific needs
                </p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary-500 mr-3 flex-shrink-0" />
                <p className="text-gray-700 dark:text-gray-300">
                  <span className="font-semibold">Custom solution</span> designed for your industry
                </p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary-500 mr-3 flex-shrink-0" />
                <p className="text-gray-700 dark:text-gray-300">
                  <span className="font-semibold">Comprehensive support</span> throughout implementation
                </p>
              </div>
            </div>

            

            {/* Primary Gradient Button */}
            <Button
              className="px-8 py-3 rounded-full bg-gradient-primary text-primary-foreground font-semibold shadow-lg hover:opacity-90 transition-opacity transform hover:scale-105"
              size="lg"
              onClick={() => openContactModal(undefined)}
            >
              Get Started
            </Button>
          </div>
          {/* New Content End */}
        </motion.div>
      </div>

      {/* Custom CSS for animation (if not already in globals.css) */}
      <style jsx>{`
        @keyframes fadeInOutUp {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fadeInOutUp 0.6s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default CTA;