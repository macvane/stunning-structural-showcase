
import React from 'react';
import PageLayout from '@/components/layouts/PageLayout';
import { Building2, FileDigit, Ruler, Activity, HardHat, BarChart3, Construction, BadgeCheck, SearchCheck, Cog, Microscope, Wrench } from 'lucide-react';

const Services = () => {
  // Core services
  const coreServices = [
    {
      id: 'structural-design',
      title: 'Structural Design',
      description: 'Our comprehensive structural design services cover all aspects of building engineering, from conceptual design through construction documentation. We provide innovative and cost-effective solutions for buildings of all types and sizes.',
      icon: <Building2 className="h-12 w-12 text-fe-teal" />,
      features: [
        'Steel, concrete, wood, and masonry design',
        'Multi-story building frameworks',
        'Foundation systems',
        'Lateral force-resisting systems',
        'Structural renovation and adaptive reuse'
      ]
    },
    {
      id: 'finite-element-analysis',
      title: 'Finite Element Analysis',
      description: 'Our advanced finite element analysis capabilities enable us to model complex structural behaviors with precision. We utilize state-of-the-art software to simulate real-world conditions and optimize designs.',
      icon: <FileDigit className="h-12 w-12 text-fe-teal" />,
      features: [
        'Non-linear structural analysis',
        'Dynamic response simulation',
        'Thermal and vibration analysis',
        'Composite material modeling',
        'Stress and strain optimization'
      ]
    },
    {
      id: 'building-information-modeling',
      title: 'BIM Integration',
      description: 'Our Building Information Modeling services provide comprehensive 3D visualization and coordination for your project. We integrate structural models with architectural and MEP systems to identify and resolve conflicts before construction.',
      icon: <Ruler className="h-12 w-12 text-fe-teal" />,
      features: [
        '3D structural modeling and coordination',
        'Clash detection and resolution',
        'Construction sequencing visualization',
        'Design optimization',
        'As-built documentation'
      ]
    },
    {
      id: 'seismic-engineering',
      title: 'Seismic Engineering',
      description: 'We specialize in designing structures to withstand seismic forces, ensuring safety and compliance with local building codes. Our seismic engineering services include analysis, design, and retrofit solutions.',
      icon: <Activity className="h-12 w-12 text-fe-teal" />,
      features: [
        'Seismic risk assessment',
        'Performance-based seismic design',
        'Building retrofit and strengthening',
        'Non-linear time history analysis',
        'Seismic isolation systems'
      ]
    },
    {
      id: 'construction-support',
      title: 'Construction Support',
      description: 'Our construction support services ensure that your project is built according to design specifications. We provide on-site consultation, review shop drawings, and address structural issues that arise during construction.',
      icon: <HardHat className="h-12 w-12 text-fe-teal" />,
      features: [
        'Site visits and inspections',
        'Shop drawing review',
        'RFI responses',
        'As-built verification',
        'Construction sequencing consultation'
      ]
    },
    {
      id: 'performance-based-design',
      title: 'Performance-Based Design',
      description: 'Our performance-based design approach focuses on achieving specific performance objectives beyond code minimum requirements. We tailor designs to meet unique project goals, considering factors such as sustainability, resilience, and lifecycle costs.',
      icon: <BarChart3 className="h-12 w-12 text-fe-teal" />,
      features: [
        'Custom performance criteria development',
        'Advanced modeling and simulation',
        'Risk-based design optimization',
        'Enhanced resilience strategies',
        'Life-cycle cost analysis'
      ]
    }
  ];

  // Additional services
  const additionalServices = [
    {
      title: 'Forensic Engineering',
      description: 'Investigation of structural failures and development of remediation strategies.',
      icon: <Microscope className="h-8 w-8 text-fe-teal" />
    },
    {
      title: 'Peer Review',
      description: 'Independent third-party review of structural designs to ensure quality and compliance.',
      icon: <SearchCheck className="h-8 w-8 text-fe-teal" />
    },
    {
      title: 'Structural Health Monitoring',
      description: 'Implementation of monitoring systems to assess the condition of existing structures.',
      icon: <BadgeCheck className="h-8 w-8 text-fe-teal" />
    },
    {
      title: 'Industrial Structures',
      description: 'Specialized design for manufacturing facilities, warehouses, and process equipment supports.',
      icon: <Cog className="h-8 w-8 text-fe-teal" />
    },
    {
      title: 'Value Engineering',
      description: 'Optimization of structural systems to balance cost, constructability, and performance.',
      icon: <Wrench className="h-8 w-8 text-fe-teal" />
    },
    {
      title: 'Temporary Structures',
      description: 'Design of scaffolding, shoring, and other temporary support systems for construction.',
      icon: <Construction className="h-8 w-8 text-fe-teal" />
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
              Our <span className="text-fe-orange">Services</span>
            </h1>
            <p className="text-gray-200 text-lg max-w-2xl">
              We provide comprehensive structural engineering solutions tailored to meet the unique requirements of each project, combining technical expertise with innovative approaches.
            </p>
          </div>
        </div>
      </section>
      
      {/* Core Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 reveal-on-scroll">
            <span className="text-fe-orange font-medium">What We Offer</span>
            <h2 className="text-3xl md:text-4xl font-bold text-fe-blue mt-2 mb-6">
              Core Engineering Services
            </h2>
            <p className="text-gray-700">
              Our expertise spans all aspects of structural engineering, providing tailored solutions for projects of any scale and complexity.
            </p>
          </div>
          
          <div className="space-y-16">
            {coreServices.map((service, index) => (
              <div 
                key={service.id} 
                id={service.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center reveal-on-scroll ${
                  index % 2 === 1 ? 'lg:grid-flow-dense' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="bg-fe-blue bg-opacity-10 p-4 inline-block rounded-lg mb-6">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-fe-blue mb-4">{service.title}</h3>
                  <p className="text-gray-700 mb-6">{service.description}</p>
                  
                  <ul className="space-y-3">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-fe-orange mr-2 mt-1">●</span>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className={`rounded-lg overflow-hidden shadow-xl ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <img 
                    src={`/lovable-uploads/${
                      index % 3 === 0 ? 'd93315b4-7fa2-43fd-9a33-32cb25b60a8a.png' : 
                      index % 3 === 1 ? 'aeb304dd-e51e-4c82-87d5-1d997a4858d0.png' : 
                      '850ee037-d3e1-429c-adb4-1eb8ac43182c.png'
                    }`} 
                    alt={service.title} 
                    className="w-full h-full object-cover" 
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Additional Services */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 reveal-on-scroll">
            <span className="text-fe-orange font-medium">Beyond The Basics</span>
            <h2 className="text-3xl md:text-4xl font-bold text-fe-blue mt-2 mb-6">
              Additional Specialized Services
            </h2>
            <p className="text-gray-700">
              We offer a range of specialized engineering services to address unique project requirements and challenges.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl reveal-on-scroll"
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
              Need a Custom Engineering Solution?
            </h2>
            <p className="text-gray-100 text-lg mb-8 max-w-2xl mx-auto">
              Our team of experienced engineers is ready to help you with your specific project requirements. Contact us today to discuss how we can bring your vision to life.
            </p>
            <a 
              href="/contact" 
              className="button-primary bg-white text-fe-blue hover:bg-gray-100"
            >
              Request a Consultation
            </a>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Services;
