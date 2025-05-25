import React from 'react'

export default function BlogLayout({
  children,
  frontMatter,
}: {
  children: React.ReactNode
  frontMatter: any
}) {
  return (
    <main className="p-6">
      <h1 className="text-4xl font-bold mb-2">{frontMatter.title}</h1>
      <p className="text-sm text-gray-500">By {frontMatter.author} on {frontMatter.date}</p>
      <hr className="my-4" />
      <article className="prose dark:prose-invert max-w-none">
        {children}
      </article>
    </main>
  )
}
