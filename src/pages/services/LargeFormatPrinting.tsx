
import React from 'react';
import PageLayout from '@/components/layouts/PageLayout';
import { Printer, FileDigit } from 'lucide-react';
import { Link } from 'react-router-dom';

const LargeFormatPrinting = () => {
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
              Large Format <span className="text-fe-orange">Printing</span>
            </h1>
            <p className="text-gray-200 text-lg max-w-2xl">
              High-quality large format printing services for architectural plans, engineering drawings, construction documents, and more.
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
                <Printer className="h-12 w-12 text-fe-teal" />
              </div>
              <h2 className="text-3xl font-bold text-fe-blue mb-6">Technical Document Printing</h2>
              <p className="text-gray-700 mb-6">
                Our large format printing services are ideal for engineering and construction professionals who need precise, high-resolution prints of technical documents and plans.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="text-fe-orange mr-2 mt-1">●</span>
                  <span className="text-gray-700">Architectural blueprints and plans</span>
                </li>
                <li className="flex items-start">
                  <span className="text-fe-orange mr-2 mt-1">●</span>
                  <span className="text-gray-700">Engineering drawings and schematics</span>
                </li>
                <li className="flex items-start">
                  <span className="text-fe-orange mr-2 mt-1">●</span>
                  <span className="text-gray-700">Construction documentation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-fe-orange mr-2 mt-1">●</span>
                  <span className="text-gray-700">Site plans and surveys</span>
                </li>
              </ul>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1476231682828-37e571bc172f?q=80&w=1074&auto=format&fit=crop" 
                alt="Technical Document Printing" 
                className="w-full h-full object-cover" 
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center lg:grid-flow-dense">
            <div className="lg:col-start-2">
              <div className="bg-fe-blue bg-opacity-10 p-4 inline-block rounded-lg mb-6">
                <FileDigit className="h-12 w-12 text-fe-teal" />
              </div>
              <h2 className="text-3xl font-bold text-fe-blue mb-6">Comprehensive Printing Solutions</h2>
              <p className="text-gray-700 mb-6">
                Beyond basic printing, we offer a full range of services to meet your document management needs for engineering and construction projects.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="text-fe-orange mr-2 mt-1">●</span>
                  <span className="text-gray-700">Digital file conversion and formatting</span>
                </li>
                <li className="flex items-start">
                  <span className="text-fe-orange mr-2 mt-1">●</span>
                  <span className="text-gray-700">Document scanning and archiving</span>
                </li>
                <li className="flex items-start">
                  <span className="text-fe-orange mr-2 mt-1">●</span>
                  <span className="text-gray-700">Custom binding and finishing options</span>
                </li>
                <li className="flex items-start">
                  <span className="text-fe-orange mr-2 mt-1">●</span>
                  <span className="text-gray-700">Delivery and distribution services</span>
                </li>
              </ul>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl lg:col-start-1">
              <img 
                src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?q=80&w=1170&auto=format&fit=crop" 
                alt="Document Management" 
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
              Need Professional Printing Services?
            </h2>
            <p className="text-gray-100 text-lg mb-8 max-w-2xl mx-auto">
              Contact us today for high-quality, precise printing of your technical documents and plans.
            </p>
            <Link 
              to="/contact" 
              className="button-primary bg-white text-fe-blue hover:bg-gray-100"
            >
              Get a Printing Quote
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default LargeFormatPrinting;
