// app/blog/page.tsx
import { getAllPosts, getAllCategories } from "@/lib/posts"
import BlogClient from "./BlogClient"


export default function BlogPage() {
  const posts = getAllPosts()
  const categories = getAllCategories()
  return <BlogClient posts={posts} categories={categories} />
}

