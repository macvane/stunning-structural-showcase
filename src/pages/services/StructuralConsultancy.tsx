
import React from 'react';
import PageLayout from '@/components/layouts/PageLayout';
import { Activity, SearchCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const StructuralConsultancy = () => {
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
              Structural Engineering <span className="text-fe-orange">Consultancy</span>
            </h1>
            <p className="text-gray-200 text-lg max-w-2xl">
              Expert advice and solutions for all your structural engineering challenges, from initial assessment to detailed recommendations.
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
                <SearchCheck className="h-12 w-12 text-fe-teal" />
              </div>
              <h2 className="text-3xl font-bold text-fe-blue mb-6">Expert Structural Assessment</h2>
              <p className="text-gray-700 mb-6">
                Our consultancy services provide thorough evaluations of existing structures, identifying potential issues and offering practical solutions to enhance structural integrity and performance.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="text-fe-orange mr-2 mt-1">●</span>
                  <span className="text-gray-700">Structural condition assessments</span>
                </li>
                <li className="flex items-start">
                  <span className="text-fe-orange mr-2 mt-1">●</span>
                  <span className="text-gray-700">Failure investigation and remediation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-fe-orange mr-2 mt-1">●</span>
                  <span className="text-gray-700">Retrofit and renovation consulting</span>
                </li>
                <li className="flex items-start">
                  <span className="text-fe-orange mr-2 mt-1">●</span>
                  <span className="text-gray-700">Code compliance review</span>
                </li>
              </ul>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1484959014842-cd1d967a39cf?q=80&w=1170&auto=format&fit=crop" 
                alt="Structural Assessment" 
                className="w-full h-full object-cover" 
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center lg:grid-flow-dense">
            <div className="lg:col-start-2">
              <div className="bg-fe-blue bg-opacity-10 p-4 inline-block rounded-lg mb-6">
                <Activity className="h-12 w-12 text-fe-teal" />
              </div>
              <h2 className="text-3xl font-bold text-fe-blue mb-6">Specialized Technical Consulting</h2>
              <p className="text-gray-700 mb-6">
                We offer specialized consulting services for complex structural challenges, leveraging our deep technical expertise to develop innovative solutions.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="text-fe-orange mr-2 mt-1">●</span>
                  <span className="text-gray-700">Seismic risk assessment and mitigation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-fe-orange mr-2 mt-1">●</span>
                  <span className="text-gray-700">Vibration analysis and control</span>
                </li>
                <li className="flex items-start">
                  <span className="text-fe-orange mr-2 mt-1">●</span>
                  <span className="text-gray-700">Forensic engineering investigations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-fe-orange mr-2 mt-1">●</span>
                  <span className="text-gray-700">Expert witness services</span>
                </li>
              </ul>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl lg:col-start-1">
              <img 
                src="https://images.unsplash.com/photo-1578574577315-3fbeb0cecdc2?q=80&w=1172&auto=format&fit=crop" 
                alt="Technical Consulting" 
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
              Need Expert Structural Consulting?
            </h2>
            <p className="text-gray-100 text-lg mb-8 max-w-2xl mx-auto">
              Our team of experienced structural engineers is ready to help you solve your most challenging structural problems.
            </p>
            <Link 
              to="/contact" 
              className="button-primary bg-white text-fe-blue hover:bg-gray-100"
            >
              Schedule a Consultation
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default StructuralConsultancy;
