
import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pb-16">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-fe-blue opacity-40"></div>
        <img 
          src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1170&auto=format&fit=crop" 
          alt="Modern construction site" 
          className="w-full h-full object-cover" 
        />
      </div>
      
      <div className="container mx-auto px-4 pt-24 relative z-10 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in opacity-0" style={{ animationDelay: '300ms' }}>
            Building <span className="text-fe-orange">Structures</span><br /> 
            with <span className="text-fe-orange">Precision</span> & <span className="text-fe-orange">Innovation</span>
          </h1>
          
          <p className="text-gray-200 text-lg md:text-xl mb-8 animate-fade-in opacity-0" style={{ animationDelay: '600ms' }}>
            Leading structural engineering solutions for complex challenges, delivering excellence in every project.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in opacity-0" style={{ animationDelay: '900ms' }}>
            <Link to="/services" className="button-primary">
              Explore Our Services
            </Link>
            <Link to="/portfolio" className="button-secondary border-white text-white hover:bg-white hover:text-fe-blue">
              View Our Projects
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
