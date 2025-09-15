import { Metadata } from 'next';
import { companyLocations } from '@/lib/company-locations';
import { MapPin, ExternalLink } from 'lucide-react';

export const metadata: Metadata = {
  title: "Our Locations - Digizinc",
  description: "Find Digizinc offices in India, Dubai, and USA. Get in touch with our global teams.",
  keywords: ["Digizinc locations", "contact us", "offices", "India", "Dubai", "USA", "Hyderabad", "Houston"],
};

const LocationsPage = () => {
  return (
    <section className="bg-background">
      {/* Hero Section */}
      <div className="relative py-20 md:py-32 text-center bg-gradient-to-b from-white to-gray-100 dark:from-[#0d0d0d] dark:via-[#240840] dark:to-[#0d0d0d] min-h-[calc(50vh)] flex flex-col justify-center items-center">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 bg-gradient-primary bg-clip-text text-transparent leading-tight">
            Our Global Footprint
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Connecting with clients and partners across continents. Find a Digizinc office near you.
          </p>
        </div>
        {/* Background gradients for hero */}
        <div className="absolute -top-1/4 -left-1/4 w-96 h-96 bg-primary/10 dark:bg-[#f22ee5]/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob -z-10"></div>
        <div className="absolute -bottom-1/4 -right-1/4 w-96 h-96 bg-secondary/10 dark:bg-[#902ef2]/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000 -z-10"></div>
      </div>

      {/* Locations Grid Section */}
      <div className="py-12 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-heading text-foreground">
            Find an Office
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {companyLocations.map((location) => (
              <div
                key={location.id}
                className="bg-card border border-border rounded-lg shadow-lg p-6 flex flex-col items-start transition-transform duration-300 hover:scale-105 hover:shadow-xl"
              >
                <div className="flex items-center mb-4">
                  <MapPin className="w-6 h-6 text-primary mr-3 flex-shrink-0" />
                  <h3 className="text-xl font-bold font-heading text-foreground">{location.name}</h3>
                </div>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${location.address}, ${location.city}, ${location.state}, ${location.zip}, ${location.country}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start text-base text-muted-foreground hover:text-primary transition-colors duration-200 group"
                >
                  <span>
                    {location.address}, {location.city}, {location.state} {location.zip}, {location.country}
                  </span>
                  <ExternalLink className="w-4 h-4 ml-2 flex-shrink-0 text-primary group-hover:text-primary-foreground" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationsPage;