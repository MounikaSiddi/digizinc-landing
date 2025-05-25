import React from "react";
import { motion } from "framer-motion";
import { Search, Zap, Smartphone, Share2, Mail, Users, BarChart3, Award } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
}
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const Solutions = () => {
  return (
    <section id="solutions" className="py-24 md:py-40 bg-background"> {/* Use bg-background for consistency */}
      <div className="container px-4 md:px-6">
        <motion.div
          className="text-center mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-foreground"> {/* Use text-foreground for the general heading text */}
            <span className="bg-gradient-primary to-secondary text-transparent bg-clip-text">Intelligent Solutions</span> for Your Business
          </h2>
          <p className="text-foreground text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Digizinc provides comprehensive digital marketing solutions to help your business grow and succeed online.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
        >
          {[
            {
              icon: <Zap className="h-8 w-8" />,
              title: "AI-Driven Strategies",
              description: "Leverage AI algorithms to optimize your marketing campaigns and drive better results.",
            },
            {
              icon: <Search className="h-8 w-8" />,
              title: "SEO Optimization",
              description: "Boost your website's rankings and drive more organic traffic to your business.",
            },
            {
              icon: <Smartphone className="h-8 w-8" />,
              title: "Mobile Marketing",
              description: "Reach customers on the go with SMS, in-app, and responsive mobile campaigns.",
            },
            {
              icon: <Share2 className="h-8 w-8" />,
              title: "Social Media Marketing",
              description: "Build a strong social presence allowing followers to connect with your audience.",
            },
            {
              icon: <Mail className="h-8 w-8" />,
              title: "Email Marketing",
              description: "Create targeted email campaigns to nurture leads and maintain customer relationships.",
            },
            {
              icon: <Users className="h-8 w-8" />,
              title: "Influencer Marketing",
              description: "Collaborate with influencers to promote your products or services to their followers.",
            },
            {
              icon: <Award className="h-8 w-8" />,
              title: "Affiliate Marketing",
              description:
                "Partner with affiliates who promote your products and earn commissions for driving sales.",
            },
            {
              icon: <BarChart3 className="h-8 w-8" />,
              title: "Analytics & Data",
              description: "Use data tools to measure, analyze, and optimize your marketing strategies.",
            },
          ].map((solution, index) => (
            <motion.div key={index} variants={fadeIn}>
              <Card
                // Use card background and border variables
                className="group relative  dark:bg-card backdrop-blur-md
                border border-primary-600/20 dark:border-border
                hover:border-primary-800/40 dark:hover:border-primary/40
                ring-1 ring-secondary-600/20 dark:ring-0
                hover:ring-primary-800/30 dark:hover:ring-primary/20
                shadow-sm shadow-secondary-600/5 dark:shadow-none
                hover:shadow-lg hover:shadow-primary-800/10 dark:hover:shadow-primary/10
                rounded-xl
                transition-all duration-300 ease-out
                hover:scale-[1.02] hover:-translate-y-1
                h-full overflow-hidden
                before:absolute before:inset-0 before:bg-gradient-to-b before:from-primary-600/5 before:to-secondary-600/5 dark:before:from-primary/5 dark:before:to-secondary/5 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300"
              >
                <CardContent className="p-8 flex flex-col h-full">
                  <div
                    // Icon container background and border using primary/secondary
                    className="relative mb-6 w-16 h-16 rounded-2xl bg-gradient-primary to-secondary p-0.5 group-hover:scale-110 transition-all duration-300"
                  >
                    <div
                      // Inner gradient overlay
                      className="absolute inset-0 bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] opacity-20 rounded-2xl group-hover:opacity-30 transition-opacity duration-300"
                    ></div>
                    <div
                      // Inner icon background
                      className="relative h-full w-full flex items-center justify-center bg-primary-300 rounded-2xl" // Use background for the inner circle
                    >
                      <div
                        // Icon color
                        className="text-primary group-hover:text-primary-800-foreground transition-colors duration-300" // Icon becomes foreground color on hover
                      >
                        {solution.icon}
                      </div>
                    </div>
                  </div>
                  <h3
                    // Title text gradient
                    className="text-2xl font-semibold mb-4 bg-gradient-to-r from-[var(--foreground)] to-[var(--foreground)]/90 text-transparent bg-clip-text"
                  >
                    {solution.title}
                  </h3>
                  <p
                    // Description text
                    className="text-foreground text-base flex-grow leading-relaxed" // Keep muted-foreground for description
                  >
                    {solution.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-16 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <Button
            // Ensure button uses your gradient and foreground text
            className="rounded-full bg-gradient-primary to-secondary hover:opacity-90 transition-opacity shadow-lg text-primary-foreground"
            size="xl"
          >
            Book A Call For Free
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Solutions;