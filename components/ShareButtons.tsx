"use client"

import { Facebook, Twitter, Linkedin } from "lucide-react"

export function ShareButtons({ title, slug }: { title: string; slug: string }) {
  const url = `https://www.digizinc.com/blog/${slug}`

  return (
    <div className="flex gap-4 mt-10 border-t pt-6">
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${url}`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:underline flex items-center gap-1"
      >
        <Facebook className="h-4 w-4" />
        Facebook
      </a>
      <a
        href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${url}`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-sky-500 hover:underline flex items-center gap-1"
      >
        <Twitter className="h-4 w-4" />
        Twitter
      </a>
      <a
        href={`https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=${encodeURIComponent(title)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-700 hover:underline flex items-center gap-1"
      >
        <Linkedin className="h-4 w-4" />
        LinkedIn
      </a>
    </div>
  )
}
