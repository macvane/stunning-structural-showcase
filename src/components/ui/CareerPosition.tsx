
import React, { useEffect, useRef } from 'react';
import { MapPin, Clock, DollarSign } from 'lucide-react';
import { Link } from 'react-router-dom';

interface CareerPositionProps {
  id: string;
  title: string;
  location: string;
  type: 'Full-time' | 'Part-time' | 'Contract' | 'Remote';
  salaryRange: string;
  description: string;
  delay?: number;
}

const CareerPosition: React.FC<CareerPositionProps> = ({
  id,
  title,
  location,
  type,
  salaryRange,
  description,
  delay = 0
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    
    if (cardRef.current) {
      observer.observe(cardRef.current);
    }
    
    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);
  
  return (
    <div 
      ref={cardRef}
      className="border border-gray-200 rounded-lg p-6 hover:border-fe-teal transition-all duration-300 opacity-0 transform translate-y-4 hover:shadow-lg"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <h3 className="text-xl font-semibold text-fe-blue mb-3">{title}</h3>
      
      <div className="flex flex-wrap gap-4 mb-4 text-sm">
        <div className="flex items-center text-gray-600">
          <MapPin className="h-4 w-4 mr-1 text-fe-teal" />
          {location}
        </div>
        <div className="flex items-center text-gray-600">
          <Clock className="h-4 w-4 mr-1 text-fe-teal" />
          {type}
        </div>
        <div className="flex items-center text-gray-600">
          <DollarSign className="h-4 w-4 mr-1 text-fe-teal" />
          {salaryRange || 'Competitive'}
        </div>
      </div>
      
      <p className="text-gray-600 mb-6 line-clamp-3">{description}</p>
      
      <div className="flex space-x-3">
        <Link 
          to={`/careers/apply/${id}`} 
          className="button-primary transition-transform hover:scale-105"
        >
          Apply Now
        </Link>
        <Link 
          to={`/careers/${id}`} 
          className="button-secondary transition-transform hover:scale-105"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default CareerPosition;
