import { Button } from "@/components/ui/button";
import { motion } from "framer-motion"
import { useContactModal } from "../ClientWrapper";

const CTA = () => {
  const { openContactModal } = useContactModal();
  return (
    // FIX: Use 'bg-secondary' and 'text-secondary-foreground' for theme integration
    <section className="relative py-24 md:py-40 overflow-hidden bg-white dark:bg-gradient-to-b dark:from-secondary-800 dark:to-secondary-950 dark:bg-opacity-[0.06]">
      {/* Optional: Subtle background gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 opacity-30 pointer-events-none"></div>

      <div className="container relative z-10">
        <motion.div
          className="text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* Animated "Transform with AI" badge */}
          <div
            className={`
              inline-flex items-center gap-2
              bg-gradient-to-r from-[var(--primary)]/20 to-[var(--secondary)]/20
              px-4 py-1 rounded-full mb-6
              animate-fade-in-up transform-gpu translate-y-0
            `} // Using backticks for multi-line string for className
            style={{ animationDelay: '0.2s' }}
          >
            <span className="h-4 w-4 text-primary motion-safe:animate-pulse">⚡</span>
            <span className="text-sm font-medium text-foreground">Transform with AI</span>
          </div>

          {/* FIX: Use 'text-primary-foreground' for the main heading */}
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground leading-tight">
            Ready to Revolutionize Your Digital Presence?
          </h2>

          {/* FIX: Use 'text-secondary-foreground/90' for the paragraph text */}
          <p className="text-secondary-foreground/90 mb-8 text-lg md:text-xl max-w-2xl mx-auto">
            Partner with SaaVik AI and leverage the power of AI to transform your business. Our team of experts is
            ready to help you achieve your digital marketing goals.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            {/* Primary Gradient Button */}
            <Button
              className="px-8 py-3 rounded-full bg-gradient-primary text-primary-foreground font-semibold shadow-lg hover:opacity-90 transition-opacity transform hover:scale-105"
              size="lg"
              onClick={() => openContactModal(undefined)} 
            >
              Get Started
            </Button>
            {/* Outline Button adapted to theme */}
            
          </div>
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