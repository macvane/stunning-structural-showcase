
import React from 'react';
import PageLayout from '@/components/layouts/PageLayout';
import { Building2, HardHat } from 'lucide-react';
import { Link } from 'react-router-dom';

const DesignBuild = () => {
  return (
    <PageLayout>
      {/* Hero Section */}
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
              Design <span className="text-fe-orange">Build</span>
            </h1>
            <p className="text-gray-200 text-lg max-w-2xl">
              Integrated design-build services that streamline your project delivery through a single point of responsibility from concept to completion.
            </p>
          </div>
        </div>
      </section>
      
      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <div className="bg-fe-blue bg-opacity-10 p-4 inline-block rounded-lg mb-6">
                <Building2 className="h-12 w-12 text-fe-teal" />
              </div>
              <h2 className="text-3xl font-bold text-fe-blue mb-6">Integrated Project Delivery</h2>
              <p className="text-gray-700 mb-6">
                Our design-build approach combines design and construction services under a single contract, creating a seamless process that reduces costs, accelerates timelines, and improves quality.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="text-fe-orange mr-2 mt-1">●</span>
                  <span className="text-gray-700">Single-source responsibility</span>
                </li>
                <li className="flex items-start">
                  <span className="text-fe-orange mr-2 mt-1">●</span>
                  <span className="text-gray-700">Streamlined communication</span>
                </li>
                <li className="flex items-start">
                  <span className="text-fe-orange mr-2 mt-1">●</span>
                  <span className="text-gray-700">Early cost certainty</span>
                </li>
                <li className="flex items-start">
                  <span className="text-fe-orange mr-2 mt-1">●</span>
                  <span className="text-gray-700">Faster project delivery</span>
                </li>
              </ul>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=1169&auto=format&fit=crop" 
                alt="Design Build Project" 
                className="w-full h-full object-cover" 
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center lg:grid-flow-dense">
            <div className="lg:col-start-2">
              <div className="bg-fe-blue bg-opacity-10 p-4 inline-block rounded-lg mb-6">
                <HardHat className="h-12 w-12 text-fe-teal" />
              </div>
              <h2 className="text-3xl font-bold text-fe-blue mb-6">Collaborative Design-Build Process</h2>
              <p className="text-gray-700 mb-6">
                Our collaborative approach brings together designers, engineers, and construction professionals from the earliest stages, fostering innovation and ensuring constructability.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="text-fe-orange mr-2 mt-1">●</span>
                  <span className="text-gray-700">Integrated design and construction teams</span>
                </li>
                <li className="flex items-start">
                  <span className="text-fe-orange mr-2 mt-1">●</span>
                  <span className="text-gray-700">Concurrent engineering and construction planning</span>
                </li>
                <li className="flex items-start">
                  <span className="text-fe-orange mr-2 mt-1">●</span>
                  <span className="text-gray-700">Value engineering throughout the process</span>
                </li>
                <li className="flex items-start">
                  <span className="text-fe-orange mr-2 mt-1">●</span>
                  <span className="text-gray-700">Reduced change orders and delays</span>
                </li>
              </ul>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl lg:col-start-1">
              <img 
                src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=1170&auto=format&fit=crop" 
                alt="Design Build Collaboration" 
                className="w-full h-full object-cover" 
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-fe-teal relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
            <pattern id="pattern-circles" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="5" fill="none" stroke="white" strokeWidth="1"/>
            </pattern>
            <rect width="100%" height="100%" fill="url(#pattern-circles)" />
          </svg>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready for a Streamlined Project Experience?
            </h2>
            <p className="text-gray-100 text-lg mb-8 max-w-2xl mx-auto">
              Contact us to learn how our design-build approach can deliver your project faster, more efficiently, and with superior results.
            </p>
            <Link 
              to="/contact" 
              className="button-primary bg-white text-fe-blue hover:bg-gray-100"
            >
              Start Your Design-Build Project
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default DesignBuild;
