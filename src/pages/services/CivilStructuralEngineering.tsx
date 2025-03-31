
import React from 'react';
import PageLayout from '@/components/layouts/PageLayout';
import { Building2, FileDigit } from 'lucide-react';
import { Link } from 'react-router-dom';

const CivilStructuralEngineering = () => {
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
              Civil & <span className="text-fe-orange">Structural Engineering</span>
            </h1>
            <p className="text-gray-200 text-lg max-w-2xl">
              Our comprehensive structural engineering solutions ensure the safety, efficiency, and sustainability of your buildings and infrastructure projects.
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
              <h2 className="text-3xl font-bold text-fe-blue mb-6">Comprehensive Structural Solutions</h2>
              <p className="text-gray-700 mb-6">
                Our civil and structural engineering services cover all aspects of building engineering, from conceptual design through construction documentation. We provide innovative and cost-effective solutions for buildings of all types and sizes.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="text-fe-orange mr-2 mt-1">●</span>
                  <span className="text-gray-700">Steel, concrete, wood, and masonry design</span>
                </li>
                <li className="flex items-start">
                  <span className="text-fe-orange mr-2 mt-1">●</span>
                  <span className="text-gray-700">Multi-story building frameworks</span>
                </li>
                <li className="flex items-start">
                  <span className="text-fe-orange mr-2 mt-1">●</span>
                  <span className="text-gray-700">Foundation systems engineering</span>
                </li>
                <li className="flex items-start">
                  <span className="text-fe-orange mr-2 mt-1">●</span>
                  <span className="text-gray-700">Lateral force-resisting systems</span>
                </li>
              </ul>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1170&auto=format&fit=crop" 
                alt="Civil Engineering Project" 
                className="w-full h-full object-cover" 
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center lg:grid-flow-dense">
            <div className="lg:col-start-2">
              <div className="bg-fe-blue bg-opacity-10 p-4 inline-block rounded-lg mb-6">
                <FileDigit className="h-12 w-12 text-fe-teal" />
              </div>
              <h2 className="text-3xl font-bold text-fe-blue mb-6">Advanced Analysis Capabilities</h2>
              <p className="text-gray-700 mb-6">
                We utilize state-of-the-art software and engineering principles to analyze complex structures and ensure they meet all safety and performance requirements.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="text-fe-orange mr-2 mt-1">●</span>
                  <span className="text-gray-700">Non-linear structural analysis</span>
                </li>
                <li className="flex items-start">
                  <span className="text-fe-orange mr-2 mt-1">●</span>
                  <span className="text-gray-700">Dynamic response simulation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-fe-orange mr-2 mt-1">●</span>
                  <span className="text-gray-700">Seismic performance evaluation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-fe-orange mr-2 mt-1">●</span>
                  <span className="text-gray-700">Construction phase engineering support</span>
                </li>
              </ul>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl lg:col-start-1">
              <img 
                src="https://images.unsplash.com/photo-1517420704952-d9f39e95b43e?q=80&w=1170&auto=format&fit=crop" 
                alt="Structural Analysis" 
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
              Ready to Start Your Engineering Project?
            </h2>
            <p className="text-gray-100 text-lg mb-8 max-w-2xl mx-auto">
              Contact our team today to discuss how our civil and structural engineering services can help bring your project to life.
            </p>
            <Link 
              to="/contact" 
              className="button-primary bg-white text-fe-blue hover:bg-gray-100"
            >
              Request a Consultation
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default CivilStructuralEngineering;
