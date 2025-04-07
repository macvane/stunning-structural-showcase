
import React from 'react';
import { MapPin, Clock } from 'lucide-react';
import { cn } from '@/lib/utils';

interface JobApplicationHeroProps {
  title: string;
}

const JobApplicationHero: React.FC<JobApplicationHeroProps> = ({ title }) => {
  return (
    <section className="relative pt-32 pb-16 bg-fe-blue">
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
          <h1 className="text-white text-3xl md:text-4xl font-bold mb-6 reveal-on-scroll" 
              style={{ animationDelay: '300ms' }}>
            Apply for {title}
          </h1>
          <p className="text-gray-200 text-lg reveal-on-scroll" 
             style={{ animationDelay: '500ms' }}>
            Join our team of professionals and contribute to innovative engineering projects.
          </p>
        </div>
      </div>
    </section>
  );
};

export default JobApplicationHero;
