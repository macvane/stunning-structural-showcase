
import React, { useState } from 'react';

interface ProjectCardProps {
  id: string;
  title: string;
  category: string;
  location: string;
  imageUrl: string;
  delay?: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ 
  id, 
  title, 
  category, 
  location, 
  imageUrl,
  delay = 0
}) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="block group overflow-hidden rounded-lg shadow-md reveal-on-scroll"
      style={{ animationDelay: `${delay}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-64 overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title}
          className={`w-full h-full object-cover transition-transform duration-700 ${isHovered ? 'scale-110' : 'scale-100'}`}
        />
        <div className={`absolute inset-0 bg-gradient-to-t from-fe-blue via-transparent to-transparent opacity-70 transition-opacity duration-300 ${isHovered ? 'opacity-90' : 'opacity-70'}`}></div>
        
        <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
          <span className="text-sm font-medium uppercase tracking-wider text-fe-light-teal mb-2">{category}</span>
          <h3 className="text-xl font-semibold mb-1 transition-transform duration-300 group-hover:translate-x-2">{title}</h3>
          <p className="text-sm text-gray-200">{location}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
