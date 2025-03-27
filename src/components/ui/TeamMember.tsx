
import React from 'react';
import { Linkedin, Mail } from 'lucide-react';

interface TeamMemberProps {
  name: string;
  position: string;
  bio: string;
  imageUrl: string;
  email?: string;
  linkedin?: string;
  delay?: number;
}

const TeamMember: React.FC<TeamMemberProps> = ({
  name,
  position,
  bio,
  imageUrl,
  email,
  linkedin,
  delay = 0
}) => {
  return (
    <div 
      className="flex flex-col group reveal-on-scroll"
      style={{ animationDelay: `${delay}ms` }}  
    >
      <div className="relative overflow-hidden rounded-lg mb-4">
        <img 
          src={imageUrl} 
          alt={name} 
          className="w-full aspect-[3/4] object-cover object-center transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-fe-blue to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
        
        {/* Social icons */}
        <div className="absolute bottom-0 right-0 p-4 flex space-x-2 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          {email && (
            <a 
              href={`mailto:${email}`} 
              className="bg-white p-2 rounded-full text-fe-blue hover:text-fe-orange transition-colors duration-300"
              aria-label={`Email ${name}`}
            >
              <Mail size={18} />
            </a>
          )}
          {linkedin && (
            <a 
              href={linkedin} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-white p-2 rounded-full text-fe-blue hover:text-fe-orange transition-colors duration-300"
              aria-label={`${name}'s LinkedIn profile`}
            >
              <Linkedin size={18} />
            </a>
          )}
        </div>
      </div>
      
      <h3 className="text-lg font-semibold text-fe-blue">{name}</h3>
      <p className="text-sm text-fe-orange font-medium mb-3">{position}</p>
      <p className="text-gray-600 text-sm line-clamp-3">{bio}</p>
    </div>
  );
};

export default TeamMember;
