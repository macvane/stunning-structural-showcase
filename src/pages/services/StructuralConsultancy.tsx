
import React from 'react';
import PageLayout from '@/components/layouts/PageLayout';
import { Building2, Ruler, Search, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';

const StructuralConsultancy = () => {
  // Service areas
  const serviceAreas = [
    {
      title: "Private Housing Projects",
      description: "Whether you're building your dream home or developing a residential complex, our team provides tailored structural design solutions to meet your specific requirements. From small-scale renovations to large-scale developments, we ensure that your project is structurally sound, aesthetically pleasing, and built to last.",
      icon: <Building2 className="h-10 w-10 text-fe-teal" />,
    },
    {
      title: "Bridges",
      description: "From pedestrian footbridges to large-span vehicular bridges, we have the expertise to design safe and efficient bridge structures that meet the demands of modern infrastructure projects. Our team considers factors such as traffic loads, environmental conditions, and geological characteristics to deliver innovative and cost-effective bridge designs.",
      icon: <Ruler className="h-10 w-10 text-fe-teal" />,
    },
    {
      title: "Warehouses",
      description: "Efficient structural design is crucial for the construction of warehouses and industrial facilities. We specialize in designing warehouse structures that optimize space utilization, support heavy loads, and provide a safe and functional working environment. Whether you need a single-story warehouse or a multi-story distribution center, we can deliver tailored solutions to meet your needs.",
      icon: <Building2 className="h-10 w-10 text-fe-teal" />,
    },
    {
      title: "Steel Structures",
      description: "Steel is a versatile and durable building material commonly used in a wide range of structures, from commercial buildings to industrial facilities. Our team has extensive experience in designing steel structures that are both practical and visually striking. Whether you're constructing a steel-framed office building, a manufacturing facility, or a sports arena, we can provide innovative design solutions that maximize performance and efficiency.",
      icon: <Ruler className="h-10 w-10 text-fe-teal" />,
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
              Structural Design <span className="text-fe-teal">Consultancy</span>
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
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="bg-fe-blue bg-opacity-10 p-4 inline-block rounded-lg mb-6">
              <Search className="h-12 w-12 text-fe-teal" />
            </div>
            <h2 className="text-3xl font-bold text-fe-blue mb-6">Structural Design Consultancy & Site Supervision</h2>
            <p className="text-gray-700">
              Finite Element Designs Limited offers comprehensive structural design consultancy and site supervision services across a wide range of sectors and project types. With a team of experienced structural engineers and construction professionals, we provide expert guidance and support throughout every stage of your project, ensuring that your vision becomes a reality.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {serviceAreas.map((service, index) => (
              <Card key={index} className="shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden card-hover">
                <CardContent className="p-0">
                  <div className="p-6">
                    <div className="bg-fe-blue bg-opacity-10 p-4 inline-block rounded-lg mb-4">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold text-fe-blue mb-3">{service.title}</h3>
                    <p className="text-gray-700 mb-4">{service.description}</p>
                  </div>
                  <div className="border-t border-gray-100 p-4 bg-gray-50">
                    <Link 
                      to="/contact" 
                      className="flex items-center text-fe-teal font-medium hover:text-fe-blue transition-colors"
                    >
                      Inquire about {service.title} <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="bg-gray-50 p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-fe-blue mb-4">Site Supervision Services</h3>
            <p className="text-gray-700 mb-6">
              In addition to our design expertise, we offer comprehensive site supervision services to ensure that construction activities proceed smoothly and safely. Our site supervisors work closely with contractors, subcontractors, and other stakeholders to verify compliance with design specifications, quality standards, and regulatory requirements.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-md shadow-sm">
                <h4 className="font-semibold text-fe-blue mb-2">Quality Assurance</h4>
                <p className="text-gray-600 text-sm">We verify construction materials and methods meet project specifications and standards.</p>
              </div>
              <div className="bg-white p-4 rounded-md shadow-sm">
                <h4 className="font-semibold text-fe-blue mb-2">Progress Monitoring</h4>
                <p className="text-gray-600 text-sm">Regular site visits to track construction progress and adherence to schedules.</p>
              </div>
              <div className="bg-white p-4 rounded-md shadow-sm">
                <h4 className="font-semibold text-fe-blue mb-2">Issue Resolution</h4>
                <p className="text-gray-600 text-sm">Prompt identification and resolution of construction issues to minimize delays.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Project Gallery Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-fe-blue mb-10 text-center">Our Consultancy Projects</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=1172&auto=format&fit=crop",
                title: "Residential Tower",
                location: "Nairobi, Kenya"
              },
              {
                image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?q=80&w=1170&auto=format&fit=crop",
                title: "Highway Bridge",
                location: "Mombasa, Kenya"
              },
              {
                image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1170&auto=format&fit=crop",
                title: "Commercial Complex",
                location: "Kisumu, Kenya"
              }
            ].map((project, index) => (
              <div key={index} className="overflow-hidden rounded-lg shadow-md group">
                <div className="relative h-64">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 w-full">
                      <h3 className="text-white font-bold">{project.title}</h3>
                      <p className="text-gray-300 text-sm">{project.location}</p>
                    </div>
                  </div>
                </div>
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
              Need Expert Structural Consulting?
            </h2>
            <p className="text-gray-100 text-lg mb-8 max-w-2xl mx-auto">
              Choose Finite Element Designs Limited for all your structural design consultancy and site supervision needs. Contact us today to learn more about our services and how we can help bring your vision to life.
            </p>
            <Link 
              to="/contact" 
              className="bg-white text-fe-teal px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition-all"
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
