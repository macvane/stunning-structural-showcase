
import React from 'react';
import { Star } from 'lucide-react';
import { cn } from '@/lib/utils';

interface TestimonialCardProps {
  quote: string;
  author: string;
  position: string;
  company: string;
  rating: number;
  image?: string;
  delay?: number;
  variant?: 'default' | 'featured';
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  author,
  position,
  company,
  rating,
  image,
  delay = 0,
  variant = 'default',
}) => {
  const isFeatured = variant === 'featured';
  
  return (
    <div 
      className={cn(
        "flex flex-col rounded-xl p-6 shadow-lg transition-all reveal-on-scroll",
        isFeatured 
          ? "bg-fe-blue text-white border border-fe-light-teal/30" 
          : "bg-white border border-gray-100",
      )}
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Rating */}
      <div className="flex mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star 
            key={i} 
            size={18} 
            className={cn(
              "mr-1",
              i < rating 
                ? isFeatured ? "text-fe-light-teal fill-fe-light-teal" : "text-fe-orange fill-fe-orange" 
                : isFeatured ? "text-gray-400" : "text-gray-300"
            )} 
          />
        ))}
      </div>
      
      {/* Quote */}
      <div className="mb-6">
        <p className={cn(
          "italic text-lg mb-4",
          isFeatured ? "text-gray-100" : "text-gray-700"
        )}>
          "{quote}"
        </p>
      </div>
      
      {/* Author */}
      <div className="mt-auto flex items-center">
        {image && (
          <div className="mr-3">
            <img 
              src={image} 
              alt={author} 
              className="w-12 h-12 rounded-full object-cover border-2 border-gray-200" 
            />
          </div>
        )}
        <div>
          <h4 className={cn(
            "font-bold",
            isFeatured ? "text-white" : "text-fe-blue"
          )}>
            {author}
          </h4>
          <p className={cn(
            "text-sm",
            isFeatured ? "text-gray-200" : "text-gray-600"
          )}>
            {position}, {company}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
