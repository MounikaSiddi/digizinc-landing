import React from "react";
import { Star } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image"; // Import Image component
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
  {
    content: "Working with this team completely transformed our online presence. They don’t just run ads, they actually understand the brand voice and create campaigns that feel authentic. Super happy with the results!",
    author: "Anirban Saha",
    role: "Founder",
    rating: 5,
    avatar: "/placeholder-user.jpg"
  },
  {
    content: "They brought fresh energy to our social media pages. Engagement is up, leads are better qualified, and the content actually gets people talking. Highly recommend them.",
    author: "Priya Menon",
    role: "Marketing Head",
    rating: 5,
    avatar: "/placeholder-user.jpg"
  },
  {
    content: "I was skeptical about digital marketing agencies, but these guys proved me wrong. Our campaigns are running smoothly, the ROI is clear, and the support is excellent.",
    author: "Rohit Kulkarni",
    role: "Director",
    rating: 5,
    avatar: "/placeholder-user.jpg"
  },
  {
    content: "From creatives to strategy, everything is handled professionally. The best part is their quick turnaround time and attention to detail. It feels like having an in-house team.",
    author: "Sneha Chatterjee",
    role: "Co-Founder",
    rating: 5,
    avatar: "/placeholder-user.jpg"
  },
  {
    content: "They know exactly how to mix design and marketing. Our brand looks sharper online and we’re reaching audiences we couldn’t tap earlier.",
    author: "Vikram Nair",
    role: "CEO",
    rating: 5,
    avatar: "/placeholder-user.jpg"
  },
  {
    content: "Our website and ads were outdated before. After they took over, traffic doubled in less than two months. Honestly, one of the best decisions we made.",
    author: "Neha Kapoor",
    role: "Brand Manager",
    rating: 5,
    avatar: "/placeholder-user.jpg"
  },
  {
    content: "What I really liked is how transparent they are. Weekly updates, clear reports, and they actually explain the data in simple terms. No jargon, just results.",
    author: "Arjun Deshmukh",
    role: "Operations Head",
    rating: 5,
    avatar: "/placeholder-user.jpg"
  },
  {
    content: "We’ve worked with agencies before, but this one feels different. They care about long-term growth, not just one-time campaigns. That’s rare to find.",
    author: "Radhika Sharma",
    role: "Founder",
    rating: 5,
    avatar: "/placeholder-user.jpg"
  },
  {
    content: "From day one, they were aligned with our vision. The creatives are classy, the ads are smart, and the brand positioning feels premium now.",
    author: "Kunal Verma",
    role: "Managing Partner",
    rating: 5,
    avatar: "/placeholder-user.jpg"
  },
  {
    content: "I love their design-first approach. The content doesn’t feel pushy; it feels engaging and storytelling-driven. Our followers have literally doubled in 3 months.",
    author: "Aditi Rao",
    role: "Marketing Lead",
    rating: 5,
    avatar: "/placeholder-user.jpg"
  },
  {
    content: "They have a knack for simplifying complex ideas into visuals that sell. Whether it’s healthcare or lifestyle, their adaptability is impressive.",
    author: "Manish Iyer",
    role: "Director",
    rating: 5,
    avatar: "/placeholder-user.jpg"
  },
  {
    content: "Super responsive, highly creative, and always willing to go the extra mile. I’ve already recommended them to two more businesses in my circle.",
    author: "Tanvi Joshi",
    role: "Creative Head",
    rating: 5,
    avatar: "/placeholder-user.jpg"
  }
];

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex gap-1 mb-4">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`w-5 h-5 ${
            i < rating
              ? 'fill-yellow-500 text-yellow-500'
              : 'fill-muted text-muted dark:fill-muted-foreground/30 dark:text-muted-foreground/30'
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            What Our Clients Say
          </h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Discover how DigiZinc is transforming businesses worldwide
          </p>
        </motion.div>

        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full"
        >
          <CarouselContent>
            {testimonials.map((testimonial, i) => (
              <CarouselItem key={i} className="md:basis-1/2 lg:basis-1/3">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="group bg-card/30 backdrop-blur-sm p-8 rounded-2xl h-full
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
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;