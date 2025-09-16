import BlogClient from '@/app/blog/BlogClient';
import { getAllPosts } from '@/lib/posts';

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const allPosts = getAllPosts();
  const filteredPosts = allPosts.filter(
    (post) => post.category.toLowerCase() === params.slug
  );

  return <BlogClient posts={filteredPosts} />;
}
