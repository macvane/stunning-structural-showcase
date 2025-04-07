
import React from 'react';
import { MapPin, Clock, Building } from 'lucide-react';
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
          <p className="text-gray-200 text-lg mb-6 reveal-on-scroll" 
             style={{ animationDelay: '500ms' }}>
            Join our team of professionals and contribute to innovative engineering projects.
          </p>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-5 border border-white/20 reveal-on-scroll" 
               style={{ animationDelay: '700ms' }}>
            <h2 className="text-white text-xl font-medium mb-3">About This Position</h2>
            <div className="space-y-3">
              <div className="flex items-center">
                <Building className="h-5 w-5 text-fe-teal mr-2" />
                <span className="text-gray-100">Department: Engineering</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 text-fe-teal mr-2" />
                <span className="text-gray-100">Location: Nairobi, Kenya (On-site)</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-5 w-5 text-fe-teal mr-2" />
                <span className="text-gray-100">Full-time position (40 hours/week)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobApplicationHero;
