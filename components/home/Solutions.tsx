import React from "react";
import { motion } from "framer-motion";
import { Search, Zap, Smartphone, Share2, Mail, Users, BarChart3, Award } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useContactModal } from "../ClientWrapper";

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
const services = [
  {
    title: "Affiliate Marketing",
    icon: <Zap className="text-pink-500" />,
    image: "/Marketing Solutions/Affiliate Marketing.png",
  },
  {
    title: "AI-Driven Strategies",
    icon: <Search className="text-pink-500" />,
    image: "/Marketing Solutions/AI-Driven Strategies.png",
  },
  {
    title: "Social Media Marketing",
    icon: <Smartphone className="text-pink-500" />,
    image: "/Marketing Solutions/Social Media Marketing.jpg",
  },
];

const Solutions = () => {
  const { openContactModal } = useContactModal();
  return (
    // <section id="solutions" className="py-12 md:py-16 bg-gray-50 dark:bg-secondary-950"> {/* Reduced from py-16 md:py-24 */}
    //   <div className="container px-2 md:px-4">
    //     <motion.div
    //       className="text-center mb-8" /* Reduced from mb-12 */
    //       initial="hidden"
    //       whileInView="visible"
    //       viewport={{ once: true, margin: "-100px" }}
    //       variants={fadeIn}
    //     >
    //       <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 leading-tight text-foreground"> {/* Use text-foreground for the general heading text */}
    //         Digizinc :<span className="bg-gradient-primary to-secondary text-transparent bg-clip-text"> Your Intelligent</span>  Partner
    //       </h2>
    //       <p className="text-foreground text-lg md:text-xl max-w-5xl mx-auto leading-relaxed">
    //         Digizinc provides comprehensive digital marketing solutions to help your business grow and succeed online.
    //       </p>
    //     </motion.div>

    //     <motion.div
    //       className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
    //       initial="hidden"
    //       whileInView="visible"
    //       viewport={{ once: true, margin: "-50px" }}
    //       variants={staggerContainer}
    //     >
    //       {[
    //         {
    //           icon: <Zap className="h-8 w-8" />,
    //           title: "AI-Driven Strategies",
    //           description: "Leverage AI algorithms to optimize your marketing campaigns and drive better results.",
    //         },
    //         {
    //           icon: <Search className="h-8 w-8" />,
    //           title: "SEO Optimization",
    //           description: "Boost your website's rankings and drive more organic traffic to your business.",
    //         },
    //         {
    //           icon: <Smartphone className="h-8 w-8" />,
    //           title: "Mobile Marketing",
    //           description: "Reach customers on the go with SMS, in-app, and responsive mobile campaigns.",
    //         },
    //         {
    //           icon: <Share2 className="h-8 w-8" />,
    //           title: "Social Media Marketing",
    //           description: "Build a strong social presence allowing followers to connect with your audience.",
    //         },
    //         {
    //           icon: <Mail className="h-8 w-8" />,
    //           title: "Email Marketing",
    //           description: "Create targeted email campaigns to nurture leads and maintain customer relationships.",
    //         },
    //         {
    //           icon: <Users className="h-8 w-8" />,
    //           title: "Influencer Marketing",
    //           description: "Collaborate with influencers to promote your products or services to their followers.",
    //         },
    //         {
    //           icon: <Award className="h-8 w-8" />,
    //           title: "Affiliate Marketing",
    //           description:
    //             "Partner with affiliates who promote your products and earn commissions for driving sales.",
    //         },
    //         {
    //           icon: <BarChart3 className="h-8 w-8" />,
    //           title: "Analytics & Data",
    //           description: "Use data tools to measure, analyze, and optimize your marketing strategies.",
    //         },
    //       ].map((solution, index) => (
    //         <motion.div key={index} variants={fadeIn}>
    //           <Card
    //             className="group relative  bg-white dark:bg-secondary-900 backdrop-blur-md
    //             border border-primary-600/20 dark:border-border
    //             hover:border-primary-800/40 dark:hover:border-primary/40
    //             ring-1 ring-secondary-600/20 dark:ring-0
    //             hover:ring-primary-800/30 dark:hover:ring-primary/20
    //             shadow-sm shadow-secondary-600/5 dark:shadow-none
    //             hover:shadow-lg hover:shadow-primary-800/10 dark:hover:shadow-primary/10
    //             rounded-xl
    //             transition-all duration-300 ease-out
    //             hover:scale-[1.02] hover:-translate-y-1
    //             h-full overflow-hidden
    //             before:absolute before:inset-0 before:bg-gradient-to-b before:from-secondary-900 before:to-secondary-600 before:opacity-0 hover:before:opacity-10 before:transition-opacity before:duration-300"
    //           >
    //             <CardContent className="p-8 flex flex-col h-full">
    //               <div
    //                 className="relative mb-6 w-10 h-10 rounded-2xl bg-gradient-primary to-secondary p-0.5 group-hover:scale-110 transition-all duration-300 transform group-hover:rotate-6"
    //               >
    //                 <div
    //                   className="absolute inset-0 bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] opacity-20 rounded-2xl group-hover:opacity-30 transition-opacity duration-300"
    //                 ></div>
    //                 <div
    //                   className="relative h-full w-full flex items-center justify-center bg-background/80 rounded-2xl"
    //                 >
    //                   <div
    //                     className=" text-primary-500 group-hover:text-white transition-colors duration-300 transform group-hover:scale-110"
    //                   >
    //                     {React.cloneElement(solution.icon, { className: "h-5 w-5" })}
    //                   </div>
    //                 </div>
    //               </div>
    //               <h3
    //                 // Title text gradient
    //                 className="text-2xl font-semibold font-heading mb-4 text-foreground  bg-clip-text"
    //               >
    //                 {solution.title}
    //               </h3>
    //               <p
    //                 // Description text
    //                 className="text-foreground text-base flex-grow leading-relaxed" // Keep muted-foreground for description
    //               >
    //                 {solution.description}
    //               </p>
    //             </CardContent>
    //           </Card>
    //         </motion.div>
    //       ))}
    //     </motion.div>

    //     <motion.div
    //       className="mt-16 text-center"
    //       initial="hidden"
    //       whileInView="visible"
    //       viewport={{ once: true }}
    //       variants={fadeIn}
    //     >
    //       <Button
    //         // Ensure button uses your gradient and foreground text
    //         className="rounded-full bg-gradient-primary to-secondary hover:opacity-90 transition-opacity shadow-lg text-primary-foreground"
    //         size="xl"
    //         onClick={() => openContactModal(undefined)} 
    //       >
    //         Book A Call For Free
    //       </Button>
    //     </motion.div>
    //   </div>
    // </section>
     <section className="bg-[#0b0014] text-white py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-semibold mb-4">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-400">
            AI-Powered
          </span>{" "}
          Marketing Solutions
        </h2>

        {/* Subtext */}
        <p className="text-gray-300 max-w-3xl mx-auto mb-12">
          We provide comprehensive digital marketing solutions to help your
          business grow and succeed online.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gradient-to-b from-[#1a0125] to-[#0b0014] rounded-3xl p-6 shadow-[0_0_25px_rgba(255,0,255,0.05)] hover:shadow-[0_0_35px_rgba(255,0,255,0.2)] transition-all duration-500"
            >
              {/* Icon + Title */}
              <div className="flex items-center space-x-2 mb-4 p-3">
                <div className="bg-[#1f012b] p-2 rounded-md text-xl">
                  {service.icon}
                </div>
                <h3 className="font-semibold text-lg">{service.title}</h3>
              </div>

              {/* Image */}
              <div className="rounded-2xl overflow-hidden bg-gradient-to-b from-purple-700/30 to-black/50">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;