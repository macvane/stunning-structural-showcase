
import React from 'react';

const CareerHero: React.FC = () => {
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
            Join Our <span className="text-fe-orange">Team</span>
          </h1>
          <p className="text-gray-200 text-lg max-w-2xl">
            Discover exciting career opportunities at Finite Element Designs and become part of a team dedicated to innovation, excellence, and making a positive impact through structural engineering.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CareerHero;
