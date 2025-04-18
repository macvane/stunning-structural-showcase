
import React from 'react';
import { MapPin, Clock } from 'lucide-react';

interface JobDetailHeroProps {
  title: string;
  location: string;
  type: string;
}

const JobDetailHero: React.FC<JobDetailHeroProps> = ({ title, location, type }) => {
  return (
    <section className="relative pt-32 pb-20 bg-fe-blue">
      <div className="absolute inset-0 opacity-10">
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
          <pattern id="pattern-grid" width="30" height="30" patternUnits="userSpaceOnUse">
            <path d="M 30 0 L 0 0 0 30" fill="none" stroke="white" strokeWidth="1"/>
          </pattern>
          <rect width="100%" height="100%" fill="url(#pattern-grid)" />
        </svg>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-white text-4xl md:text-5xl font-bold mb-6">
            {title}
          </h1>
          <div className="flex flex-wrap gap-6 mb-8">
            <div className="flex items-center text-gray-200">
              <MapPin className="h-5 w-5 mr-2 text-fe-light-teal" />
              {location}
            </div>
            <div className="flex items-center text-gray-200">
              <Clock className="h-5 w-5 mr-2 text-fe-light-teal" />
              {type}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobDetailHero;
