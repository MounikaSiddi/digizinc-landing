"use client"
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import { PostMeta } from '@/lib/posts'
import { TagList } from './TagList'
import { ShareButtons } from './ShareButtons'
import { Comments } from './Comments'


export default function BlogPost({ meta, mdxSource }: {
  meta: PostMeta
  mdxSource: MDXRemoteSerializeResult
}) {
  return (
    <article className="prose dark:prose-invert max-w-3xl mx-auto px-4 py-12">
      <h1>{meta.title}</h1>
      <p className="text-sm text-muted-foreground mb-4">
        By {meta.author} on {meta.date} • {meta.readTime}
      </p>
      <TagList tags={meta.tags} />
      <MDXRemote {...mdxSource} />
      <ShareButtons title={meta.title} slug={meta.slug} />
      <Comments slug={meta.slug} />
    </article>
  )
}
