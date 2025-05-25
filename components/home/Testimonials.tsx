import React from "react";
import { Star } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image"; // Import Image component

const testimonials = [
  {
    content: "SaaVik AI completely transformed our operations. The personalization and automation are top notch!",
    author: "Sarah Johnson",
    role: "CEO, TechVision Inc",
    rating: 5,
    avatar: "/avatars/avatar-1.jpg", // Add avatar paths
  },
  {
    content: "The AI-driven insights have helped us make better decisions and grow our business exponentially.",
    author: "Michael Chen",
    role: "CTO, InnovateCorp",
    rating: 5,
    avatar: "/avatars/avatar-2.jpg",
  },
  {
    content: "Outstanding service and cutting-edge solutions. SaaVik AI has been a game-changer for our team.",
    author: "Emily Rodriguez",
    role: "Director, FutureScale",
    rating: 5,
    avatar: "/avatars/avatar-3.jpg",
  },
  // Add more testimonials here with unique avatars if needed
];

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex gap-1 mb-4">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`w-5 h-5 ${
            i < rating
              ? 'fill-yellow-500 text-yellow-500' // Brighter yellow for filled stars
              : 'fill-muted text-muted dark:fill-muted-foreground/30 dark:text-muted-foreground/30' // Use muted and muted-foreground for empty stars
          }`}
        />
      ))}
    </div>
  );
};

const Testimonials = () => {
  return (
    <section className="py-24 md:py-32 bg-background text-foreground relative overflow-hidden">
      {/* Optional: Add subtle background blobs/gradients for visual interest */}
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-primary/5 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-secondary/5 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

      <div className="container px-4 md:px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text">
            What Our Clients Say
          </h2>
          <p className="text-lg text-foreground max-w-2xl mx-auto">
            Discover how SaaVik AI is transforming businesses worldwide
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-card p-8 rounded-2xl shadow-lg border border-border transition-all duration-300
                         hover:shadow-xl hover:shadow-primary/10 hover:translate-y-[-5px]" // Enhanced hover effect
            >
              <StarRating rating={testimonial.rating} />
              <p className="text-foreground/90 mb-6 text-lg leading-relaxed italic">
                "{testimonial.content}"
              </p>
              <div className="border-t border-border pt-4 mt-auto flex items-center gap-4">
                {testimonial.avatar && (
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    width={56} // Increased size for better visibility
                    height={56}
                    className="rounded-full object-cover border-2 border-primary/20" // Add a subtle border
                  />
                )}
                <div>
                  <h4 className="font-semibold text-foreground">{testimonial.author}</h4>
                  <span className="text-sm text-muted-foreground">{testimonial.role}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Custom CSS for blob animation */}
      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0, 0) scale(1);
          }
        }

        .animate-blob {
          animation: blob 7s infinite cubic-bezier(0.6, 0.05, 0.35, 1);
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;