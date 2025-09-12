import ServicePageClient from "@/components/services/ServicePageClient";
import { getServiceBySlug } from "@/lib/services-data";
import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const service = getServiceBySlug(params.slug);

  if (!service) {
    return {
      title: 'Service Not Found',
      description: 'The service you are looking for does not exist.',
    };
  }

  const baseUrl = 'https://digizinc.com'; // Replace with your actual base URL

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url: `${baseUrl}/services/${service.slug}`,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: service.metaTitle,
      description: service.metaDescription,
    },
    alternates: {
      canonical: `${baseUrl}/services/${service.slug}`,
    },
  };
}

const ServicePage = ({ params }: { params: { slug: string } }) => {
  const service = getServiceBySlug(params.slug);

  if (!service) {
    return <div>Service not found</div>;
  }

  const baseUrl = 'https://digizinc.com'; // Replace with your actual base URL

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": service.title,
    "description": service.description,
    "provider": {
      "@type": "Organization",
      "name": "DigiZinc",
      "url": "https://digizinc.com"
    },
    "areaServed": {
      "@type": "Place",
      "name": "Worldwide"
    },
    "url": `https://digizinc.com/services/${service.slug}`
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
        "name": "Services",
        "item": `${baseUrl}/#services`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": service.title,
        "item": `${baseUrl}/services/${service.slug}`
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <ServicePageClient service={service} />
    </>
  );
};

export default ServicePage;
