import React from 'react';
import Link from 'next/link';
import { getAllCategories } from '@/lib/posts';

const CategoryList = () => {
  const categories = getAllCategories();

  return (
    <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
      <h4 className="text-lg font-semibold mb-4">Categories</h4>
      <ul className="space-y-2">
        {categories.map((category) => (
          <li key={category}>
            <Link href={`/blog/category/${category.toLowerCase()}`}>
              <a className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200">
                {category}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryList;
