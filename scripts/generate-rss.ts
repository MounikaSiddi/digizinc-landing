import fs from 'fs'
import { getAllPosts } from '../lib/posts'

const siteUrl = 'https://www.digizinc.com'
const rssPath = './public/rss.xml'

function generateRSS(posts: ReturnType<typeof getAllPosts>) {
  const items = posts.map(post => `
    <item>
      <title>${post.title}</title>
      <link>${siteUrl}/blog/${post.slug}</link>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      <description>${post.excerpt}</description>
    </item>
  `).join('\n')

  return `<?xml version="1.0" encoding="UTF-8" ?>
  <rss version="2.0">
    <channel>
      <title>Digizinc Blog</title>
      <link>${siteUrl}/blog</link>
      <description>Latest blog posts from Digizinc</description>
      ${items}
    </channel>
  </rss>`
}

function writeRSS() {
  const posts = getAllPosts()
  const rss = generateRSS(posts)
  fs.writeFileSync(rssPath, rss)
  console.log('RSS feed generated!')
}

writeRSS()
