
import React, { useEffect, useRef } from 'react';
import PageLayout from '@/components/layouts/PageLayout';
import { 
  Building2, FileDigit, Ruler, Activity, HardHat, BarChart3, Construction, 
  BadgeCheck, SearchCheck, Cog, Microscope, Wrench, ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  // Animation references
  const titleRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<(HTMLDivElement | null)[]>([]);
  
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }
    
    servicesRef.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => {
      if (titleRef.current) {
        observer.unobserve(titleRef.current);
      }
      servicesRef.current.forEach(ref => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  // Core services
  const coreServices = [
    {
      id: 'civil-structural-engineering',
      title: 'Civil & Structural Engineering',
      description: 'Our comprehensive engineering services cover all aspects of structural design, from conceptual design through construction documentation. We provide innovative and cost-effective solutions for buildings and infrastructure projects.',
      icon: <Building2 className="h-12 w-12 text-fe-teal" />,
      features: [
        'Residential and commercial building design',
        'Multi-story building frameworks',
        'Foundation systems and retaining walls',
        'Lateral force-resisting systems',
        'Structural renovation and adaptive reuse'
      ],
      link: '/services/civil-structural-engineering'
    },
    {
      id: 'structural-consultancy',
      title: 'Structural Consultancy',
      description: 'Our expert consultancy services provide valuable insights and solutions for complex structural challenges. We offer professional advice to architects, contractors, and property owners to ensure structural integrity and code compliance.',
      icon: <SearchCheck className="h-12 w-12 text-fe-teal" />,
      features: [
        'Structural condition assessments',
        'Forensic investigations',
        'Peer review services',
        'Code compliance evaluation',
        'Value engineering'
      ],
      link: '/services/structural-consultancy'
    },
    {
      id: 'project-management',
      title: 'Project Management',
      description: 'Our project management services ensure your project is delivered on time, within budget, and to the highest standards. We coordinate all aspects of the project from planning through completion.',
      icon: <HardHat className="h-12 w-12 text-fe-teal" />,
      features: [
        'Schedule development and monitoring',
        'Budget management and cost control',
        'Quality assurance and control',
        'Risk assessment and mitigation',
        'Stakeholder communication'
      ],
      link: '/services/project-management'
    },
    {
      id: 'steel-fabrication',
      title: 'Steel Fabrication',
      description: 'Our steel fabrication services provide custom structural steel elements for construction projects. We manufacture high-quality steel components according to precise specifications.',
      icon: <Construction className="h-12 w-12 text-fe-teal" />,
      features: [
        'Custom steel component fabrication',
        'Structural steel assemblies',
        'Connection details and hardware',
        'Quality control and testing',
        'Installation coordination'
      ],
      link: '/services/steel-fabrication'
    },
    {
      id: 'design-build',
      title: 'Design-Build Services',
      description: 'Our design-build approach integrates design and construction services under a single contract, streamlining project delivery and improving coordination between design and construction phases.',
      icon: <Cog className="h-12 w-12 text-fe-teal" />,
      features: [
        'Integrated project delivery',
        'Streamlined communication',
        'Cost and schedule optimization',
        'Reduced change orders',
        'Single-source responsibility'
      ],
      link: '/services/design-build'
    },
    {
      id: 'structural-training',
      title: 'Structural Training',
      description: 'Our training programs provide professionals with the knowledge and skills needed for structural engineering practice. We offer specialized courses on design codes, software usage, and advanced analysis techniques.',
      icon: <FileDigit className="h-12 w-12 text-fe-teal" />,
      features: [
        'Building code workshops',
        'Structural software training',
        'Advanced analysis techniques',
        'Professional development courses',
        'Customized training programs'
      ],
      link: '/services/structural-training'
    }
  ];

  // Additional services
  const additionalServices = [
    {
      title: 'Building Information Modeling',
      description: 'Comprehensive 3D modeling for coordination and visualization of structural systems.',
      icon: <Ruler className="h-8 w-8 text-fe-teal" />,
      link: '/services/civil-structural-engineering'
    },
    {
      title: 'Seismic Engineering',
      description: 'Specialized design solutions for structures in seismic zones.',
      icon: <Activity className="h-8 w-8 text-fe-teal" />,
      link: '/services/civil-structural-engineering'
    },
    {
      title: 'Performance-Based Design',
      description: 'Advanced design approach focused on achieving specific performance objectives.',
      icon: <BarChart3 className="h-8 w-8 text-fe-teal" />,
      link: '/services/civil-structural-engineering'
    },
    {
      title: 'Structural Health Monitoring',
      description: 'Implementation of monitoring systems to assess existing structures.',
      icon: <BadgeCheck className="h-8 w-8 text-fe-teal" />,
      link: '/services/structural-consultancy'
    },
    {
      title: 'Large Format Printing',
      description: 'High-quality printing services for construction plans and documents.',
      icon: <Microscope className="h-8 w-8 text-fe-teal" />,
      link: '/services/large-format-printing'
    },
    {
      title: 'Temporary Structures',
      description: 'Design of scaffolding, shoring, and other temporary support systems.',
      icon: <Wrench className="h-8 w-8 text-fe-teal" />,
      link: '/services/steel-fabrication'
    }
  ];

  return (
    <PageLayout>
      {/* Hero Section - Updated to match other pages */}
      <section className="relative pt-32 pb-20 bg-fe-blue overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
            <pattern id="pattern-grid" width="30" height="30" patternUnits="userSpaceOnUse">
              <path d="M 30 0 L 0 0 0 30" fill="none" stroke="white" strokeWidth="1"/>
            </pattern>
            <rect width="100%" height="100%" fill="url(#pattern-grid)" />
          </svg>
        </div>
        
        {/* Add decorative elements similar to other pages */}
        <div className="absolute -right-64 -top-64 w-[800px] h-[800px] rounded-full bg-gradient-to-br from-fe-teal/30 to-fe-teal/5 blur-3xl overflow-hidden"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div ref={titleRef} className="max-w-3xl opacity-0 transform translate-y-8">
            <h1 className="text-white text-4xl md:text-5xl font-bold mb-6 animate-pulse-soft">
              Our <span className="text-fe-light-blue">Services</span>
            </h1>
            <p className="text-gray-200 text-lg max-w-2xl mb-8">
              We provide comprehensive structural engineering solutions tailored to meet the unique requirements of each project, combining technical expertise with innovative approaches.
            </p>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20 animate-fade-in">
              <h2 className="text-white text-2xl font-semibold mb-3">
                Expert Engineering Solutions for Every Challenge
              </h2>
              <p className="text-gray-200">
                From complex structural designs to detailed consultancy services, our team of experienced engineers 
                delivers excellence at every stage of your project. We combine cutting-edge technology with years 
                of industry expertise to provide solutions that are innovative, cost-effective, and built to last.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Core Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div ref={titleRef} className="text-center max-w-3xl mx-auto mb-16 opacity-0 transform translate-y-4">
            <span className="text-fe-light-blue font-medium">What We Offer</span>
            <h2 className="text-3xl md:text-4xl font-bold text-fe-blue mt-2 mb-6">
              Core Engineering Services
            </h2>
            <p className="text-gray-700">
              Our expertise spans all aspects of structural engineering, providing tailored solutions for projects of any scale and complexity.
            </p>
          </div>
          
          <div className="space-y-20">
            {coreServices.map((service, index) => (
              <div 
                key={service.id} 
                id={service.id}
                ref={el => servicesRef.current[index] = el}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center opacity-0 transform ${
                  index % 2 === 0 ? 'translate-x-10' : '-translate-x-10'
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="bg-fe-blue bg-opacity-10 p-4 inline-block rounded-lg mb-6">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-fe-blue mb-4">{service.title}</h3>
                  <p className="text-gray-700 mb-6">{service.description}</p>
                  
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start group">
                        <span className="text-fe-light-blue mr-2 mt-1 transition-transform group-hover:scale-125">●</span>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link 
                    to={service.link}
                    className="inline-flex items-center text-fe-teal font-medium group"
                  >
                    Learn More About This Service
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-2" />
                  </Link>
                </div>
                
                <div className={`rounded-lg overflow-hidden shadow-xl transition-all duration-500 hover:shadow-2xl hover:scale-[1.02] ${
                  index % 2 === 1 ? 'lg:order-1' : ''
                }`}>
                  <img 
                    src={`/lovable-uploads/${
                      index % 3 === 0 ? 'd93315b4-7fa2-43fd-9a33-32cb25b60a8a.png' : 
                      index % 3 === 1 ? 'aeb304dd-e51e-4c82-87d5-1d997a4858d0.png' : 
                      '850ee037-d3e1-429c-adb4-1eb8ac43182c.png'
                    }`} 
                    alt={service.title} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" 
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Additional Services */}
      <section className="py-20 bg-gray-50 relative overflow-hidden">
        <div className="absolute -left-64 -bottom-64 w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-fe-light-blue/20 to-fe-light-blue/5 blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 opacity-0 transform translate-y-4" ref={el => servicesRef.current[servicesRef.current.length] = el}>
            <span className="text-fe-light-blue font-medium">Beyond The Basics</span>
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
                className="bg-white p-6 rounded-lg shadow-md transition-all duration-500 hover:shadow-xl hover:-translate-y-2 opacity-0 transform translate-y-4 group"
                style={{ transitionDelay: `${index * 100}ms` }}
                ref={el => servicesRef.current[servicesRef.current.length] = el}
              >
                <Link to={service.link} className="block">
                  <div className="bg-fe-blue bg-opacity-10 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-6 group-hover:bg-fe-teal group-hover:bg-opacity-20 transition-all duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-medium text-fe-blue mb-3 group-hover:text-fe-teal transition-colors">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                  <div className="mt-4 text-fe-light-blue opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center">
                    <span>View service</span>
                    <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
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
        
        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white/10 to-transparent"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center opacity-0 transform translate-y-4" ref={el => servicesRef.current[servicesRef.current.length] = el}>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 animate-pulse-soft">
              Need a Custom Engineering Solution?
            </h2>
            <p className="text-gray-100 text-lg mb-8 max-w-2xl mx-auto">
              Our team of experienced engineers is ready to help you with your specific project requirements. Contact us today to discuss how we can bring your vision to life.
            </p>
            <Link 
              to="/contact" 
              className="button-primary bg-white text-fe-blue hover:bg-gray-100 transform transition-transform hover:scale-105"
            >
              Request a Consultation
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Services;
