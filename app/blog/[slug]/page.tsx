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

  const baseUrl = 'https://digizinc.com'; // Replace with your actual base URL
  const postUrl = `${baseUrl}/blog/${params.slug}`;

  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": data.title,
    "image": "https://digizinc.com/digizinc-main-logo.jpg", // Placeholder, ideally a specific blog post image
    "datePublished": data.date,
    "dateModified": data.date, // Assuming date is also the modified date for now
    "author": {
      "@type": "Person",
      "name": data.author
    },
    "publisher": {
      "@type": "Organization",
      "name": "DigiZinc",
      "logo": {
        "@type": "ImageObject",
        "url": "https://digizinc.com/digizinc-main-logo.jpg"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": postUrl
    },
    "description": data.description || `Read about ${data.title} on the DigiZinc blog.` // Use data.description if available, otherwise generic
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": baseUrl
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Blog",
        "item": `${baseUrl}/blog`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": data.title,
        "item": postUrl
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <BlogLayout frontMatter={data}>
        <MDXRemote source={content} />
      </BlogLayout>
    </>
  )
}
