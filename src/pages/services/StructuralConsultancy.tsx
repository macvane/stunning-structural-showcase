
import React from 'react';
import PageLayout from '@/components/layouts/PageLayout';
import { Activity, SearchCheck, Building, Home, Compass, HardHat, Ruler, FileCheck, Shield, Lightbulb } from 'lucide-react';
import { Link } from 'react-router-dom';

const StructuralConsultancy = () => {
  // Consultancy services
  const assessmentServices = [
    {
      title: "Structural Condition Assessments",
      icon: <SearchCheck className="h-6 w-6 text-fe-teal" />,
      description: "Comprehensive evaluation of existing structures to determine their current condition and identify potential issues."
    },
    {
      title: "Failure Investigation",
      icon: <Activity className="h-6 w-6 text-fe-teal" />,
      description: "Expert analysis to determine causes of structural failures and development of remediation strategies."
    },
    {
      title: "Retrofit & Renovation Consulting",
      icon: <Building className="h-6 w-6 text-fe-teal" />,
      description: "Specialized advice for updating and strengthening existing structures to meet current standards."
    },
    {
      title: "Code Compliance Review",
      icon: <FileCheck className="h-6 w-6 text-fe-teal" />,
      description: "Thorough reviews to ensure designs comply with local and international building codes and standards."
    }
  ];

  // Technical consulting services
  const technicalServices = [
    {
      title: "Private Housing Projects",
      icon: <Home className="h-6 w-6 text-fe-teal" />,
      description: "From single homes to residential complexes, we provide tailored structural solutions."
    },
    {
      title: "Bridge Design & Assessment",
      icon: <Compass className="h-6 w-6 text-fe-teal" />,
      description: "Expert design and evaluation of pedestrian and vehicular bridge structures."
    },
    {
      title: "Warehouse & Industrial Facilities",
      icon: <HardHat className="h-6 w-6 text-fe-teal" />,
      description: "Specialized designs that optimize space utilization and support heavy loads."
    },
    {
      title: "Steel Structure Design",
      icon: <Ruler className="h-6 w-6 text-fe-teal" />,
      description: "Innovative steel structure solutions for commercial and industrial applications."
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
              Structural Engineering <span className="text-fe-orange">Consultancy</span>
            </h1>
            <p className="text-gray-200 text-lg max-w-2xl">
              Expert advice and solutions for all your structural engineering challenges, from initial assessment to detailed recommendations.
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
                <SearchCheck className="h-12 w-12 text-fe-teal" />
              </div>
              <h2 className="text-3xl font-bold text-fe-blue mb-6">Expert Structural Assessment</h2>
              <p className="text-gray-700 mb-6">
                Our consultancy services provide thorough evaluations of existing structures, identifying potential issues and offering practical solutions to enhance structural integrity and performance.
              </p>
              <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
                <div className="flex items-center mb-3">
                  <Shield className="h-5 w-5 text-fe-orange mr-2" />
                  <h3 className="text-lg font-medium text-fe-blue">Why Choose Our Consultancy?</h3>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-fe-orange mr-2 mt-1">•</span>
                    <span className="text-gray-700">Experienced structural engineers with specialized expertise</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-fe-orange mr-2 mt-1">•</span>
                    <span className="text-gray-700">Comprehensive analysis using advanced computational tools</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-fe-orange mr-2 mt-1">•</span>
                    <span className="text-gray-700">Practical, cost-effective recommendations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-fe-orange mr-2 mt-1">•</span>
                    <span className="text-gray-700">Thorough documentation and clear explanations</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1484959014842-cd1d967a39cf?q=80&w=1170&auto=format&fit=crop" 
                alt="Structural Assessment" 
                className="w-full h-full object-cover" 
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Assessment Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-fe-orange font-medium">Our Expertise</span>
            <h2 className="text-3xl font-bold text-fe-blue mt-2 mb-4">Structural Assessment Services</h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              We provide comprehensive evaluation and analysis services to ensure your structures are safe, efficient, and compliant.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {assessmentServices.map((service, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex"
              >
                <div className="bg-fe-blue bg-opacity-10 p-3 rounded-full h-12 w-12 flex items-center justify-center mr-4 shrink-0">
                  {service.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-fe-blue mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Project Types Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1578574577315-3fbeb0cecdc2?q=80&w=1172&auto=format&fit=crop" 
                alt="Technical Consulting" 
                className="w-full h-full object-cover" 
              />
            </div>
            <div className="order-1 lg:order-2">
              <div className="bg-fe-blue bg-opacity-10 p-4 inline-block rounded-lg mb-6">
                <Activity className="h-12 w-12 text-fe-teal" />
              </div>
              <h2 className="text-3xl font-bold text-fe-blue mb-6">Specialized Technical Consulting</h2>
              <p className="text-gray-700 mb-6">
                We offer specialized consulting services for complex structural challenges, leveraging our deep technical expertise to develop innovative solutions for various project types.
              </p>
              <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
                <div className="flex items-center mb-3">
                  <Lightbulb className="h-5 w-5 text-fe-orange mr-2" />
                  <h3 className="text-lg font-medium text-fe-blue">Our Approach</h3>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-fe-orange mr-2 mt-1">•</span>
                    <span className="text-gray-700">Thorough initial assessment to understand project needs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-fe-orange mr-2 mt-1">•</span>
                    <span className="text-gray-700">Advanced analysis using cutting-edge software</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-fe-orange mr-2 mt-1">•</span>
                    <span className="text-gray-700">Collaborative development of optimal solutions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-fe-orange mr-2 mt-1">•</span>
                    <span className="text-gray-700">Ongoing support throughout implementation</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Technical Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-fe-orange font-medium">Project Types</span>
            <h2 className="text-3xl font-bold text-fe-blue mt-2 mb-4">Our Consulting Portfolio</h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              We provide expert structural design consultancy across a wide range of sectors and project types.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {technicalServices.map((service, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex"
              >
                <div className="bg-fe-blue bg-opacity-10 p-3 rounded-full h-12 w-12 flex items-center justify-center mr-4 shrink-0">
                  {service.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-fe-blue mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-10 p-6 bg-fe-blue bg-opacity-5 rounded-lg text-center">
            <p className="text-gray-700 italic">
              "In addition to our design expertise, we offer comprehensive site supervision services to ensure that construction activities proceed smoothly and safely. Our site supervisors work closely with contractors, subcontractors, and other stakeholders to verify compliance with design specifications, quality standards, and regulatory requirements."
            </p>
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
