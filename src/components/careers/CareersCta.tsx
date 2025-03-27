
import React from 'react';
import { Link } from 'react-router-dom';

const CareersCta: React.FC = () => {
  return (
    <section className="py-16 bg-fe-orange">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center reveal-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            No Suitable Openings?
          </h2>
          <p className="text-white text-lg mb-8 max-w-2xl mx-auto opacity-90">
            We're always interested in connecting with talented professionals. Submit your resume for future opportunities, and we'll contact you when a suitable position becomes available.
          </p>
          <Link 
            to="/contact" 
            className="button-primary bg-white text-fe-orange hover:bg-gray-100"
          >
            Submit Your Resume
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CareersCta;
