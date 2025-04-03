
import React from 'react';
import ServiceCard from '../ui/ServiceCard';
import { Building2, HardHat, FileDigit, Activity, BarChart3, Ruler } from 'lucide-react';

const ServicesSection = () => {
  // Services data
  const services = [
    {
      id: 'structural-design',
      title: 'Civil & Structural Engineering Services',
      description: 'Expert structural engineering, design, and analysis for buildings, bridges, and infrastructure built for strength and reliability.',
      icon: <Building2 className="h-8 w-8 text-fe-teal" />,
      link: '/services/civil-structural-engineering'
    },
    {
      id: 'finite-element-analysis',
      title: 'Structural Engineering Training',
      description: 'Master structural engineering with expert-led training designed for real-world applications.',
      icon: <FileDigit className="h-8 w-8 text-fe-teal" />,
      link: '/services/structural-training'
    },
    {
      id: 'building-information-modeling',
      title: 'Structural Engineering Consultancy',
      description: 'Expert structural engineering consultancy for safe, efficient, and innovative designs.',
      icon: <Ruler className="h-8 w-8 text-fe-teal" />,
      link: '/services/structural-consultancy'
    },
    {
      id: 'seismic-engineering',
      title: 'Design-Build',
      description: 'Integrated design-build services for streamlined, efficient, and high-quality project delivery.',
      icon: <Activity className="h-8 w-8 text-fe-teal" />,
      link: '/services/design-build'
    },
    {
      id: 'construction-support',
      title: 'Steel Fabrication',
      description: 'Precision steel fabrication for durable, high-quality, and custom-built structures.',
      icon: <HardHat className="h-8 w-8 text-fe-teal" />,
      link: '/services/steel-fabrication'
    },
    {
      id: 'performance-based-design',
      title: 'Large Format Printing',
      description: 'High-quality large format printing for bold, vibrant, and eye-catching visuals.',
      icon: <BarChart3 className="h-8 w-8 text-fe-teal" />,
      link: '/large-format-printing'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 reveal-on-scroll">
          <span className="text-fe-orange font-medium">Our Services</span>
          <h2 className="text-3xl md:text-4xl font-bold text-fe-blue mt-2 mb-6">
            Comprehensive Structural Engineering Solutions
          </h2>
          <p className="text-gray-700">
            We offer a wide range of engineering services tailored to meet the specific needs of your project, from conceptual design to construction support.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={service.id}
              title={service.title}
              description={service.description}
              icon={service.icon}
              link={service.link}
              delay={index * 150}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
