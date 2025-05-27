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
    avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    content: "The AI-driven insights have helped us make better decisions and grow our business exponentially.",
    author: "Michael Chen",
    role: "CTO, InnovateCorp",
    rating: 5,
    avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    content: "Outstanding service and cutting-edge solutions. SaaVik AI has been a game-changer for our team.",
    author: "Emily Rodriguez",
    role: "Director, FutureScale",
    rating: 5,
    avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
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
    <section className="py-16 md:py-24 bg-gradient-to-b from-background to-background/95 text-foreground relative overflow-hidden">
      <div className="container px-4 md:px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            What Our Clients Say
          </h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
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
              className="group bg-card/30 backdrop-blur-sm p-8 rounded-2xl
                         border border-primary/20 dark:border-primary/10
                         transition-all duration-500 ease-out
                         hover:bg-card/50 hover:shadow-2xl hover:shadow-primary/20
                         hover:border-primary/30 dark:hover:border-primary/20
                         hover:-translate-y-1"
            >
              <StarRating rating={testimonial.rating} />
              <p className="text-foreground/90 mb-8 text-lg leading-relaxed italic">
                "{testimonial.content}"
              </p>
              <div className="flex items-center gap-4 pt-6 border-t border-primary/10 mt-auto group-hover:border-primary/20 transition-colors duration-500">
                <div className="relative w-16 h-16 rounded-full overflow-hidden ring-2 ring-primary/20 group-hover:ring-primary/40 transition-all duration-500">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    fill
                    className="object-cover object-center transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors duration-500">
                    {testimonial.author}
                  </h4>
                  <span className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-500">
                    {testimonial.role}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;