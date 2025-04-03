
import React from 'react';
import { Link } from 'react-router-dom';

const CtaSection = () => {
  return (
    <section className="py-16 relative bg-fe-blue">
      <div className="absolute inset-0 opacity-10">
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
          <pattern id="pattern-grid" width="30" height="30" patternUnits="userSpaceOnUse">
            <path d="M 30 0 L 0 0 0 30" fill="none" stroke="white" strokeWidth="1"/>
          </pattern>
          <rect width="100%" height="100%" fill="url(#pattern-grid)" />
        </svg>
      </div>
      
      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="max-w-3xl mx-auto reveal-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Bring Your Project to Life?
          </h2>
          <p className="text-gray-200 text-lg mb-8">
            Our team of expert engineers is ready to help you achieve your structural engineering goals with precision and innovation.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact" className="button-primary bg-white text-fe-blue hover:bg-gray-100">
              Get in Touch
            </Link>
            <Link to="/services" className="button-secondary border-white text-white hover:bg-white hover:text-fe-blue">
              Explore Our Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
