import { MetadataRoute } from 'next';

import fs from 'fs';
import path from 'path';
import { servicesData } from '@/lib/services-data';
import { portfolioProjects } from '@/lib/portfolio-data';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://digizinc.com';

  const staticPages = [
    '/',
    '/careers',
    '/connect',
    '/cookie-policy',
    '/privacy-policy',
    '/terms-of-service',
    '/blog',
    '/portfolio',
    '/services',
  ].map(route => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: 'monthly' as 'monthly',
    priority: route === '/' ? 1.0 : 0.8,
  }));

  const blogPostsDirectory = path.join(process.cwd(), 'posts');
  const blogPosts = fs.readdirSync(blogPostsDirectory)
    .filter(file => file.endsWith('.mdx'))
    .map(file => ({
      url: `${baseUrl}/blog/${file.replace(/\.mdx$/, '')}`,
      lastModified: new Date().toISOString().split('T')[0],
      changeFrequency: 'weekly' as 'weekly',
      priority: 0.7,
    }));

  const portfolioEntries = portfolioProjects.map(project => ({
    url: `${baseUrl}/portfolio/${project.slug}`,
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: 'monthly' as 'monthly',
    priority: 0.7,
  }));

  const serviceEntries = servicesData.map(service => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: 'monthly' as 'monthly',
    priority: 0.7,
  }));

  return [
    ...staticPages,
    ...blogPosts,
    ...portfolioEntries,
    ...serviceEntries,
  ];
}
