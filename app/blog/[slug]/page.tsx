import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { MDXRemote } from 'next-mdx-remote/rsc'
import BlogLayout from '@/components/BlogLayout'


export async function generateStaticParams() {
  const files = fs.readdirSync(path.join(process.cwd(), 'posts'))

  return files.map((file) => ({
    slug: file.replace(/\.mdx$/, ''),
  }))
}

export default async function BlogPage({ params }: { params: { slug: string } }) {
  const filePath = path.join(process.cwd(), 'posts', `${params.slug}.mdx`)
  const source = fs.readFileSync(filePath, 'utf8')
  const { content, data } = matter(source)

  return (
    <BlogLayout frontMatter={data}>
      <MDXRemote source={content} />
    </BlogLayout>
  )
}
