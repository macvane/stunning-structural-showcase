
import React from 'react';
import PageLayout from '@/components/layouts/PageLayout';
import { Building2, Ruler, Droplets, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';

const CivilStructuralEngineering = () => {
  // Sample building types for structural engineering
  const buildingTypes = [
    "High-rise Buildings",
    "Offices",
    "Institutions/Schools/Hospitals",
    "Bridges",
    "Residential development",
    "Industrial, Warehouses, Workshops"
  ];

  // Civil engineering services
  const civilServices = [
    "Access Roads",
    "Water Supply",
    "Sewerage",
    "Storm Water Drainage"
  ];

  // Water specialties
  const waterSpecialties = [
    "Water supply network",
    "Water treatment plants",
    "Waste water collection and treatment",
    "Storm water drainage management",
    "Roads and transportation engineering"
  ];

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
              Civil & <span className="text-fe-teal">Structural Engineering</span>
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
              <h2 className="text-3xl font-bold text-fe-blue mb-6">Structural Engineering Services</h2>
              <p className="text-gray-700 mb-6">
                Finite Element Designs Limited is responsible for structural engineering design and structural analysis. We undertake planning, design, construction supervision and maintenance management of building structures, substation structures, bridges and other major road drainage and water retaining structures.
              </p>
              
              <h3 className="text-xl font-semibold text-fe-blue mb-4">We build structures such as:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-8">
                {buildingTypes.map((type, index) => (
                  <Card key={index} className="border-l-4 border-fe-teal card-hover">
                    <CardContent className="p-4">
                      <p className="text-gray-700">{type}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
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
                <Droplets className="h-12 w-12 text-fe-teal" />
              </div>
              <h2 className="text-3xl font-bold text-fe-blue mb-6">Civil Engineering Services</h2>
              <p className="text-gray-700 mb-6">
                We deal with planning, design, construction supervision and maintenance of infrastructure services. As well as planning, design, construction supervision and maintenance of site and service schemes and infrastructural services for substations, industrial, commercial and residential developments.
              </p>
              
              <h3 className="text-xl font-semibold text-fe-blue mb-4">Our civil engineering services include:</h3>
              <div className="space-y-3 mb-8">
                {civilServices.map((service, index) => (
                  <div key={index} className="flex items-start bg-gray-50 p-3 rounded-md hover:bg-gray-100 transition-colors">
                    <span className="text-fe-teal mr-2 mt-1">●</span>
                    <span className="text-gray-700">{service}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl lg:col-start-1">
              <img 
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1171&auto=format&fit=crop" 
                alt="Civil Engineering Services" 
                className="w-full h-full object-cover" 
              />
            </div>
          </div>
          
          <div className="mt-16">
            <div className="text-center mb-10">
              <div className="bg-fe-blue bg-opacity-10 p-4 inline-block rounded-lg mb-6">
                <Ruler className="h-12 w-12 text-fe-teal mx-auto" />
              </div>
              <h2 className="text-3xl font-bold text-fe-blue">Water & Infrastructure Engineering</h2>
              <p className="text-gray-700 mt-4 max-w-3xl mx-auto">
                We deal with specialized areas of water management and infrastructure development, ensuring sustainable and efficient solutions.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {waterSpecialties.map((specialty, index) => (
                <div 
                  key={index} 
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border-t-4 border-fe-teal"
                >
                  <BookOpen className="h-8 w-8 text-fe-teal mb-4" />
                  <h3 className="text-xl font-medium text-fe-blue mb-2">{specialty}</h3>
                  <p className="text-gray-600">
                    Our expert engineers provide comprehensive solutions for {specialty.toLowerCase()} with a focus on sustainability and efficiency.
                  </p>
                </div>
              ))}
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
              className="bg-white text-fe-teal px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition-all"
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
