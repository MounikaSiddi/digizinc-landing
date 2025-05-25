import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemoteSerializeResult } from 'next-mdx-remote'

const postsDirectory = path.join(process.cwd(), 'posts')

export interface PostMeta {
  title: string
  date: string
  tags: string[]
  author: string
  excerpt: string
  slug: string
  category: string
}

export async function getPostBySlug(slug: string): Promise<{
  meta: PostMeta
  mdxSource: MDXRemoteSerializeResult
}> {
  const fullPath = path.join(postsDirectory, `${slug}.mdx`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  const { data, content } = matter(fileContents)
  const mdxSource = await serialize(content)

  return {
    meta: {
      ...(data as Omit<PostMeta, 'slug'>),
      slug
    },
    mdxSource
  }
}

export function getAllPosts(): PostMeta[] {
  const fileNames = fs.readdirSync(postsDirectory)

  return fileNames.map((fileName) => {
    const slug = fileName.replace(/\.mdx$/, '')
    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data } = matter(fileContents)

    return {
      ...(data as Omit<PostMeta, 'slug'>),
      slug
    }
  })
}
