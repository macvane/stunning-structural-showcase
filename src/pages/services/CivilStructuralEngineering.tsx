
import React from 'react';
import PageLayout from '@/components/layouts/PageLayout';
import { Building2, FileDigit, Home, Landmark, Road, Droplet, Factory, School, Compass, Layout } from 'lucide-react';
import { Link } from 'react-router-dom';

const CivilStructuralEngineering = () => {
  // Structural services cards
  const structuralServices = [
    {
      title: "High-rise Buildings",
      icon: <Building2 className="h-6 w-6 text-fe-teal" />,
      description: "Expert design for multi-story structures with complex loading requirements."
    },
    {
      title: "Offices",
      icon: <Layout className="h-6 w-6 text-fe-teal" />,
      description: "Modern office facilities designed with functionality and aesthetics in mind."
    },
    {
      title: "Institutions",
      icon: <School className="h-6 w-6 text-fe-teal" />,
      description: "Schools, hospitals, and public institutions engineered for safety and longevity."
    },
    {
      title: "Bridges",
      icon: <Compass className="h-6 w-6 text-fe-teal" />,
      description: "Robust bridge structures designed to withstand environmental and traffic loads."
    },
    {
      title: "Residential",
      icon: <Home className="h-6 w-6 text-fe-teal" />,
      description: "Housing developments from single homes to apartment complexes."
    },
    {
      title: "Industrial",
      icon: <Factory className="h-6 w-6 text-fe-teal" />,
      description: "Warehouses, workshops, and industrial facilities engineered for specific needs."
    }
  ];

  // Civil services cards
  const civilServices = [
    {
      title: "Water Supply Networks",
      icon: <Droplet className="h-6 w-6 text-fe-teal" />,
      description: "Design and optimization of water distribution systems."
    },
    {
      title: "Water Treatment Plants",
      icon: <Landmark className="h-6 w-6 text-fe-teal" />,
      description: "Engineering solutions for clean water processing facilities."
    },
    {
      title: "Waste Water Management",
      icon: <Landmark className="h-6 w-6 text-fe-teal" />,
      description: "Collection systems and treatment facilities for sewage and waste water."
    },
    {
      title: "Storm Water Drainage",
      icon: <Droplet className="h-6 w-6 text-fe-teal" />,
      description: "Systems designed to manage runoff and prevent flooding."
    },
    {
      title: "Roads & Transportation",
      icon: <Road className="h-6 w-6 text-fe-teal" />,
      description: "Access roads, highways, and transportation infrastructure design."
    }
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
              Civil & <span className="text-fe-orange">Structural Engineering</span>
            </h1>
            <p className="text-gray-200 text-lg max-w-2xl">
              Comprehensive engineering solutions for buildings, infrastructure, and development projects, delivered with precision and expertise.
            </p>
          </div>
        </div>
      </section>
      
      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-fe-blue bg-opacity-10 p-4 inline-block rounded-lg mb-6">
                <Building2 className="h-12 w-12 text-fe-teal" />
              </div>
              <h2 className="text-3xl font-bold text-fe-blue mb-6">Structural Engineering Services</h2>
              <p className="text-gray-700 mb-6">
                Finite Element Designs Limited is responsible for structural engineering design and structural analysis. We undertake planning, design, construction supervision and maintenance management of building structures, substation structures, bridges and other major road drainage and water retaining structures.
              </p>
              <div className="bg-gray-50 border-l-4 border-fe-teal p-4 rounded shadow-sm">
                <p className="text-gray-700 italic">
                  "Our structural engineering expertise ensures that your buildings and infrastructure are safe, efficient, and built to last."
                </p>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1171&auto=format&fit=crop" 
                alt="Structural Engineering" 
                className="w-full h-full object-cover" 
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Structural Services Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-fe-blue mb-4">We Build Structures Such As</h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Our comprehensive structural engineering services cover a wide range of buildings and infrastructure projects.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {structuralServices.map((service, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-start mb-4">
                  <div className="bg-fe-blue bg-opacity-10 p-3 rounded-full mr-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-fe-blue">{service.title}</h3>
                </div>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Civil Engineering Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1590486803833-1c5dc8ddd4c8?q=80&w=1387&auto=format&fit=crop" 
                alt="Civil Engineering" 
                className="w-full h-full object-cover" 
              />
            </div>
            <div className="order-1 lg:order-2">
              <div className="bg-fe-blue bg-opacity-10 p-4 inline-block rounded-lg mb-6">
                <Road className="h-12 w-12 text-fe-teal" />
              </div>
              <h2 className="text-3xl font-bold text-fe-blue mb-6">Civil Engineering Services</h2>
              <p className="text-gray-700 mb-6">
                We deal with planning, design, construction supervision and maintenance of access roads, water supply, sewerage, and storm water drainage. Our expertise extends to site and service schemes and infrastructural services for substations, industrial, commercial and residential developments.
              </p>
              <div className="bg-gray-50 border-l-4 border-fe-teal p-4 rounded shadow-sm">
                <p className="text-gray-700 italic">
                  "From water treatment to transportation engineering, our civil services ensure efficient infrastructure development for modern communities."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Civil Services Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-fe-blue mb-4">Civil Engineering Expertise</h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              We provide comprehensive civil engineering solutions across various infrastructure disciplines.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {civilServices.map((service, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-start mb-4">
                  <div className="bg-fe-blue bg-opacity-10 p-3 rounded-full mr-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-fe-blue">{service.title}</h3>
                </div>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
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
