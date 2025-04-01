
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
  delay?: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  title, 
  description, 
  icon, 
  link,
  delay = 0
}) => {
  return (
    <div 
      className="p-6 bg-white rounded-lg shadow-md transition-all duration-500 hover:shadow-xl card-hover reveal-on-scroll group border-t-4 border-transparent hover:border-t-4 hover:border-fe-teal"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="bg-fe-blue bg-opacity-10 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-6 group-hover:bg-fe-teal group-hover:bg-opacity-20 transition-all duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-medium text-fe-blue mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <Link 
        to={link} 
        className="group inline-flex items-center text-fe-teal font-medium"
      >
        Learn More 
        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
      </Link>
    </div>
  );
};

export default ServiceCard;
