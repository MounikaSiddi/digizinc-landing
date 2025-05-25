

import { getAllPosts } from "@/lib/getPosts"
import BlogClient from "./BlogClient"
 // We'll create this below

export default function BlogPage() {
  const posts = getAllPosts()

  return <BlogClient posts={posts} />
}
