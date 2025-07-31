"use client"

import Link from "next/link"

export function TagList({ tags }: { tags: string[] }) {
  return (
    <div className="flex flex-wrap gap-2 mt-4 mb-6">
      {tags.map((tag) => (
        <Link key={tag} href={`/tags/${tag}`} className="text-sm px-3 py-1 bg-secondary rounded-full hover:underline">
          #{tag}
        </Link>
      ))}
    </div>
  )
}
