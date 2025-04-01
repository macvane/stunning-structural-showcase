
import React from 'react';
import PageLayout from '@/components/layouts/PageLayout';
import { Building2, Building, Ruler, Droplets, Construction, AreaChart } from 'lucide-react';

const CivilStructuralEngineering = () => {
  const heroContent = {
    title: 'Civil & Structural Engineering',
    subtitle: 'Delivering robust and innovative engineering solutions for a sustainable future.',
    imageSrc: '/assets/civil-engineering-hero.jpg',
    imageAlt: 'Civil and Structural Engineering Services',
  };

  const servicesOffered = [
    {
      title: 'Structural Design & Analysis',
      description: 'Comprehensive structural design and analysis services for residential, commercial, and industrial buildings.',
      icon: <Building2 className="h-8 w-8 text-fe-teal" />,
    },
    {
      title: 'Infrastructure Development',
      description: 'Planning, design, and construction management of essential infrastructure projects, including roads, bridges, and water systems.',
      icon: <Building className="h-8 w-8 text-fe-teal" />,
    },
    {
      title: 'Sustainable Design Solutions',
      description: 'Incorporating sustainable practices and materials into designs to minimize environmental impact and enhance energy efficiency.',
      icon: <Ruler className="h-8 w-8 text-fe-teal" />,
    },
    {
      title: 'Water Resources Engineering',
      description: 'Expertise in water supply, wastewater treatment, and stormwater management to ensure efficient and sustainable water usage.',
      icon: <Droplets className="h-8 w-8 text-fe-teal" />,
    },
    {
      title: 'Construction Management',
      description: 'Overseeing construction projects from start to finish, ensuring quality, safety, and adherence to timelines and budgets.',
      icon: <Construction className="h-8 w-8 text-fe-teal" />,
    },
    {
      title: 'Geotechnical Engineering',
      description: 'Analyzing soil and rock properties to provide recommendations for foundation design, slope stability, and earthwork construction.',
      icon: <AreaChart className="h-8 w-8 text-fe-teal" />,
    },
  ];

  const whyChooseUs = {
    title: 'Why Choose Our Civil & Structural Engineering Services?',
    reasons: [
      'Experienced team of licensed professional engineers',
      'Commitment to sustainable and innovative design practices',
      'Proven track record of successful project delivery',
      'Utilization of advanced technology and software',
      'Client-focused approach with personalized solutions',
    ],
  };

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
              {heroContent.title}
            </h1>
            <p className="text-gray-200 text-lg max-w-2xl">
              {heroContent.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Services Offered Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 reveal-on-scroll">
            <span className="text-fe-orange font-medium">Our Expertise</span>
            <h2 className="text-3xl md:text-4xl font-bold text-fe-blue mt-2 mb-6">
              Comprehensive Services
            </h2>
            <p className="text-gray-700">
              We offer a wide range of civil and structural engineering services to meet the diverse needs of our clients.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesOffered.map((service, index) => (
              <div 
                key={index} 
                className="bg-gray-50 p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl reveal-on-scroll"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="bg-fe-blue bg-opacity-10 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-medium text-fe-blue mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="reveal-on-scroll">
              <img 
                src="/assets/civil-engineering-team.jpg"
                alt="Civil Engineering Team" 
                className="w-full h-auto rounded-lg shadow-xl" 
              />
            </div>
            
            <div className="reveal-on-scroll" style={{ animationDelay: '300ms' }}>
              <span className="text-fe-orange font-medium">{whyChooseUs.title}</span>
              <h2 className="text-3xl md:text-4xl font-bold text-fe-blue mt-2 mb-6">
                {whyChooseUs.title}
              </h2>
              
              <ul className="list-disc list-inside text-gray-700 space-y-3">
                {whyChooseUs.reasons.map((reason, index) => (
                  <li key={index}>{reason}</li>
                ))}
              </ul>
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
          <div className="max-w-4xl mx-auto text-center reveal-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Build a Sustainable Future Together?
            </h2>
            <p className="text-gray-100 text-lg mb-8 max-w-2xl mx-auto">
              Contact us today to discuss your civil and structural engineering needs. Let's collaborate to create innovative and sustainable solutions.
            </p>
            <a 
              href="/contact" 
              className="button-primary bg-white text-fe-blue hover:bg-gray-100"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default CivilStructuralEngineering;
