import CaseStudyClient from "@/components/portfolio/CaseStudyClient";
import { getProjectBySlug } from "@/lib/portfolio-data";

import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    return {
      title: 'Project Not Found',
      description: 'The project you are looking for does not exist.',
    };
  }

  const baseUrl = 'https://digizinc.com'; // Replace with your actual base URL

  return {
    title: project.metaTitle,
    description: project.metaDescription,
    openGraph: {
      title: project.metaTitle,
      description: project.metaDescription,
      url: `${baseUrl}/portfolio/${project.slug}`,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: project.metaTitle,
      description: project.metaDescription,
    },
    alternates: {
      canonical: `${baseUrl}/portfolio/${project.slug}`,
    },
  };
}

const CaseStudyPage = ({ params }: { params: { slug: string } }) => {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    return <div>Project not found</div>;
  }

  const baseUrl = 'https://digizinc.com'; // Replace with your actual base URL

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
        "name": "Portfolio",
        "item": `${baseUrl}/portfolio`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": project.title,
        "item": `${baseUrl}/portfolio/${project.slug}`
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <CaseStudyClient project={project} />
    </>
  );
};

export default CaseStudyPage;
