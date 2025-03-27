
import React from 'react';
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
  return (
    <div 
      className="border border-gray-200 rounded-lg p-6 hover:border-fe-teal transition-all duration-300 reveal-on-scroll"
      style={{ animationDelay: `${delay}ms` }}
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
          {salaryRange}
        </div>
      </div>
      
      <p className="text-gray-600 mb-6 line-clamp-3">{description}</p>
      
      <div className="flex space-x-3">
        <Link 
          to={`/careers/${id}`} 
          className="button-primary"
        >
          Apply Now
        </Link>
        <Link 
          to={`/careers/${id}`} 
          className="button-secondary"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default CareerPosition;
