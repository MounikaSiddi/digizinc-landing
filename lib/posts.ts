import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { serialize } from 'next-mdx-remote/serialize'
import readingTime from 'reading-time'
import { MDXRemoteSerializeResult } from 'next-mdx-remote'

export interface PostMeta {
  title: string
  date: string // Original creation/update date
  publishDate?: string // Scheduled publication date
  tags: string[]
  author: string
  excerpt: string
  slug: string
  category: string
  image?: string
  readTime: string
}

const postsDirectory = path.join(process.cwd(), 'posts')

export async function getPostBySlug(slug: string): Promise<{
  meta: PostMeta
  mdxSource: MDXRemoteSerializeResult
}> {
  const fullPath = path.join(postsDirectory, `${slug}.mdx`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)
  const mdxSource = await serialize(content)
  const readTime = readingTime(content).text

  return {
    meta: {
      ...(data as Omit<PostMeta, 'slug' | 'readTime'>),
      slug,
      readTime,
    },
    mdxSource,
  }
}

export function getAllPosts(): PostMeta[] {
  const fileNames = fs.readdirSync(postsDirectory)

  return fileNames
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, '')
      const fullPath = path.join(postsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data } = matter(fileContents)

      if (!data.title || !data.date || !data.category) {
        console.warn(`Skipping post "${fileName}" due to missing frontmatter.`)
        return null
      }

      const publishDate = data.publishDate ? new Date(data.publishDate) : new Date(data.date);
      const now = new Date();

      if (publishDate > now) {
        return null; // Filter out future posts
      }

      return {
        ...(data as Omit<PostMeta, 'slug' | 'readTime'>),
        slug,
        readTime: readingTime(fileContents).text,
      }
    })
    .filter(Boolean) as PostMeta[]
}

export function getAllCategories(): string[] {
  const allPosts = getAllPosts();
  const allCategories = allPosts.map((post) => post.category);
  return ['All', ...new Set(allCategories)];
}
