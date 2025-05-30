"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { Search, MessageCircle } from "lucide-react"

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
}

const categories = [
  "All",
  "AI & Technology",
  "Marketing Strategy",
  "Content Creation",
  "SEO",
  "Branding",
  "Social Media",
]

export default function BlogClient({ posts }: { posts: any[] }) {
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredPosts =
    activeCategory === "All"
      ? posts
      : posts.filter((post) => post.category === activeCategory)

  return (
    <div className="bg-background min-h-screen">
      {/* Header Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <motion.div
            className="text-center space-y-6 max-w-3xl mx-auto"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <h1 className="text-4xl md:text-6xl font-bold">
              Digizinc <span className="text-primary">Blogs</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              Stay updated with the latest insights on AI technology, digital marketing trends, and industry best
              practices
            </p>

            <div className="relative max-w-md mx-auto mt-8">
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
              <Input placeholder="Search Articles" className="pl-10 bg-background border-input" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="pb-8">
        <div className="container">
          <motion.div
            className="flex flex-wrap justify-center gap-3"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            {categories.map((category) => (
              <motion.div key={category} variants={fadeIn}>
                <Button
                  variant={activeCategory === category ? "default" : "outline"}
                  className={activeCategory === category ? "bg-primary hover:bg-primary/90" : ""}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </Button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-12 md:py-16">
        <div className="container">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            {filteredPosts.map((post) => (
              <motion.div key={post.id || post.slug} variants={fadeIn}>
                <Link href={`/blog/${post.slug}`}>
                  <Card className="overflow-hidden h-full hover:shadow-lg transition-shadow border-muted">
                    <div className="relative h-48 w-full">
                      <Image
                        src={post.image || "/placeholder.svg"}
                        alt={post.title || "blogs picture"}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardContent className="p-6 bg-[#1A0A30]">
                      <h3 className="font-semibold text-lg mb-2 line-clamp-2">{post.title}</h3>
                      <div className="flex justify-between items-center text-sm text-muted-foreground mt-4">
                        <span>{post.author?.name || "Unknown Author"}</span>
                        <span>{post.date}</span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-[#1E0E3E]">
        <div className="container">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Revolutionize Your Digital Presence?</h2>
            <p className="text-muted-foreground mb-8">
              Partner with Digizinc and leverage the power of AI to transform your business. Our team of experts is
              ready to help you achieve your digital marketing goals.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button className="bg-primary hover:bg-primary/90">Get Started</Button>
              <Button variant="outline">Explore Services</Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Chat Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1, type: "spring" }}
        >
          <Button size="icon" className="h-14 w-14 rounded-full bg-primary hover:bg-primary/90 shadow-lg">
            <MessageCircle className="h-6 w-6" />
          </Button>
        </motion.div>
      </div>
    </div>
  )
}
