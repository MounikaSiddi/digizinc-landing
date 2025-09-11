"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { Search, MessageCircle } from "lucide-react"

type PostMeta = {
  title: string
  date: string
  tags: string[]
  author: string
  excerpt: string
  slug: string
  category: string
  readTime?: string
  image?: string
  featured?: boolean
}

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
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

export default function BlogClient({ posts }: { posts: PostMeta[] }) {
  const [activeCategory, setActiveCategory] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")

  const filteredPosts = posts
    .filter((post) =>
      activeCategory === "All" ? true : post.category === activeCategory
    )
   .filter((post) =>
  (post.title ?? "").toLowerCase().includes(searchQuery.toLowerCase())
)


  return (
    <div className="bg-background min-h-screen">
      {/* Header */}
      <section className="py-16 md:py-24 text-center">
        <motion.div
          className="container max-w-3xl mx-auto space-y-6"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <h1 className="text-4xl md:text-6xl font-bold">
            Digizinc <span className="text-primary">Blogs</span>
          </h1>
          <p className="text-muted-foreground text-lg">
            Stay updated with the latest insights on AI, digital marketing, and growth strategies.
          </p>
          <div className="relative max-w-md mx-auto mt-6">
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
            <Input
              placeholder="Search Articles"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
        </motion.div>
      </section>

      {/* Category Filters */}
      <section className="pb-10">
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
                  className="rounded-full px-4"
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </Button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-10">
        <div className="container">
          {filteredPosts.length === 0 ? (
            <p className="text-center text-muted-foreground">No posts found.</p>
          ) : (
            <motion.div
              className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              {filteredPosts.map((post) => (
                <motion.div key={post.slug} variants={fadeIn}>
                  <Link href={`/blog/${post.slug}`}>
                    <Card className="overflow-hidden transition-transform duration-300 hover:scale-[1.02] hover:shadow-xl border-muted relative">
                      {post.featured && (
                        <span className="absolute top-2 right-2 bg-yellow-500 text-xs text-white px-2 py-0.5 rounded z-10">
                          Featured
                        </span>
                      )}

                      <div className="relative h-48 w-full">
                        <Image
                          src={post.image || "/placeholder.svg"}
                          alt={post.title}
                          fill
                          className="object-cover"
                        />
                      </div>

                      <CardContent className="p-6 bg-[#1A0A30]/90 text-white">
                        <h3 className="font-semibold text-xl mb-2 leading-tight line-clamp-2">
                          {post.title}
                        </h3>
                        <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
                          {post.excerpt}
                        </p>

                        <div className="flex justify-between text-xs text-muted-foreground">
                          <span>{post.author}</span>
                          <span>{post.date}</span>
                        </div>

                        <div className="flex flex-wrap gap-2 mt-3">
                          {post.tags?.map((tag) => (
                            <span
                              key={tag}
                              className="text-xs bg-muted text-foreground px-2 py-0.5 rounded"
                            >
                              #{tag}
                            </span>
                          ))}
                        </div>

                        {post.readTime && (
                          <p className="mt-2 text-xs text-right text-muted-foreground italic">
                            {post.readTime} min read
                          </p>
                        )}
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          )}
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
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to Revolutionize Your Digital Presence?
            </h2>
            <p className="text-muted-foreground mb-8">
              Partner with Digizinc to transform your business.
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
          <Button
            size="icon"
            className="h-14 w-14 rounded-full bg-primary hover:bg-primary/90 shadow-lg"
            aria-label="Open Chat"
          >
            <MessageCircle className="h-6 w-6" />
          </Button>
        </motion.div>
      </div>
    </div>
  )
}
