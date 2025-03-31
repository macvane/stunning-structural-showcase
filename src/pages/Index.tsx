
import React from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '@/components/layouts/PageLayout';
import ServiceCard from '@/components/ui/ServiceCard';
import { ArrowRight, Building2, HardHat, FileDigit, Activity, BarChart3, Ruler } from 'lucide-react';

const Index = () => {
  // Services data
  const services = [
    {
      id: 'structural-design',
      title: 'Structural Design',
      description: 'Comprehensive structural engineering solutions for commercial, residential, and industrial projects.',
      icon: <Building2 className="h-8 w-8 text-fe-teal" />,
      link: '/services#structural-design'
    },
    {
      id: 'finite-element-analysis',
      title: 'Finite Element Analysis',
      description: 'Advanced computational modeling for complex structural systems and detailed stress analysis.',
      icon: <FileDigit className="h-8 w-8 text-fe-teal" />,
      link: '/services#finite-element-analysis'
    },
    {
      id: 'building-information-modeling',
      title: 'BIM Integration',
      description: 'State-of-the-art Building Information Modeling for enhanced project coordination and visualization.',
      icon: <Ruler className="h-8 w-8 text-fe-teal" />,
      link: '/services#building-information-modeling'
    },
    {
      id: 'seismic-engineering',
      title: 'Seismic Engineering',
      description: 'Specialized analysis and design for structures in seismic zones to ensure safety and compliance.',
      icon: <Activity className="h-8 w-8 text-fe-teal" />,
      link: '/services#seismic-engineering'
    },
    {
      id: 'construction-support',
      title: 'Construction Support',
      description: 'On-site consulting and support services throughout the construction phase of your project.',
      icon: <HardHat className="h-8 w-8 text-fe-teal" />,
      link: '/services#construction-support'
    },
    {
      id: 'performance-based-design',
      title: 'Performance-Based Design',
      description: 'Innovative design approaches focused on building performance beyond code compliance.',
      icon: <BarChart3 className="h-8 w-8 text-fe-teal" />,
      link: '/services#performance-based-design'
    }
  ];

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pb-16">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-fe-blue opacity-80"></div>
          <img 
            src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1170&auto=format&fit=crop" 
            alt="Modern construction site" 
            className="w-full h-full object-cover" 
          />
        </div>
        
        <div className="container mx-auto px-4 pt-24 relative z-10 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in opacity-0" style={{ animationDelay: '300ms' }}>
              Building <span className="text-fe-orange">Structures</span><br /> 
              with <span className="text-fe-orange">Precision</span> & <span className="text-fe-orange">Innovation</span>
            </h1>
            
            <p className="text-gray-200 text-lg md:text-xl mb-8 animate-fade-in opacity-0" style={{ animationDelay: '600ms' }}>
              Leading structural engineering solutions for complex challenges, delivering excellence in every project.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in opacity-0" style={{ animationDelay: '900ms' }}>
              <Link to="/services" className="button-primary">
                Explore Our Services
              </Link>
              <Link to="/portfolio" className="button-secondary border-white text-white hover:bg-white hover:text-fe-blue">
                View Our Projects
              </Link>
            </div>
          </div>
          
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <a href="#about" aria-label="Scroll down">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-10 w-10 text-white opacity-80" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </a>
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="reveal-on-scroll">
              <img 
                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=1170&auto=format&fit=crop" 
                alt="Construction engineer reviewing plans" 
                className="w-full h-auto rounded-lg shadow-xl" 
              />
            </div>
            
            <div className="reveal-on-scroll" style={{ animationDelay: '300ms' }}>
              <span className="text-fe-orange font-medium">About Our Company</span>
              <h2 className="text-3xl md:text-4xl font-bold text-fe-blue mt-2 mb-6">
                Engineering Excellence Since 2005
              </h2>
              
              <p className="text-gray-700 mb-6">
                At Finite Element Designs Ltd, we combine innovative engineering approaches with technical precision to deliver outstanding structural solutions for our clients worldwide. Our team of experienced engineers works tirelessly to ensure each project meets the highest standards of safety, efficiency, and sustainability.
              </p>
              
              <p className="text-gray-700 mb-8">
                With expertise spanning residential, commercial, industrial, and infrastructure projects, we pride ourselves on tackling complex engineering challenges and transforming them into elegant, functional structures that stand the test of time.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Link to="/about" className="button-primary">
                  Learn More About Us
                </Link>
                <Link to="/contact" className="button-secondary">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
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
          
          <div className="text-center mt-12 reveal-on-scroll">
            <Link to="/services" className="group inline-flex items-center text-fe-orange font-medium text-lg">
              View All Services
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Projects Showcase Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
            <div className="max-w-2xl reveal-on-scroll">
              <span className="text-fe-orange font-medium">Featured Projects</span>
              <h2 className="text-3xl md:text-4xl font-bold text-fe-blue mt-2 mb-4">
                Our Recent Work
              </h2>
              <p className="text-gray-700">
                Explore our portfolio of innovative structural engineering projects that showcase our expertise and commitment to excellence.
              </p>
            </div>
            
            <Link 
              to="/portfolio" 
              className="button-primary mt-6 md:mt-0 reveal-on-scroll"
              style={{ animationDelay: '200ms' }}
            >
              View All Projects
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="reveal-on-scroll">
              <Link to="/portfolio/1" className="group block relative rounded-lg overflow-hidden shadow-lg h-80">
                <img 
                  src="https://images.unsplash.com/photo-1486192133801-f346d66b986e?q=80&w=1170&auto=format&fit=crop" 
                  alt="Commercial high-rise project" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-fe-blue via-transparent to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <span className="text-sm font-medium uppercase tracking-wider text-fe-light-teal">Commercial</span>
                  <h3 className="text-xl font-semibold mt-1 transition-transform duration-300 group-hover:translate-x-2">Azure Tower</h3>
                  <p className="text-sm text-gray-200">San Francisco, CA</p>
                </div>
              </Link>
            </div>
            
            <div className="reveal-on-scroll" style={{ animationDelay: '200ms' }}>
              <Link to="/portfolio/2" className="group block relative rounded-lg overflow-hidden shadow-lg h-80">
                <img 
                  src="https://images.unsplash.com/photo-1545296758-4d9ac7602a8f?q=80&w=1170&auto=format&fit=crop" 
                  alt="Bridge engineering project" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-fe-blue via-transparent to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <span className="text-sm font-medium uppercase tracking-wider text-fe-light-teal">Infrastructure</span>
                  <h3 className="text-xl font-semibold mt-1 transition-transform duration-300 group-hover:translate-x-2">Riverfront Bridge</h3>
                  <p className="text-sm text-gray-200">Portland, OR</p>
                </div>
              </Link>
            </div>
            
            <div className="reveal-on-scroll" style={{ animationDelay: '400ms' }}>
              <Link to="/portfolio/3" className="group block relative rounded-lg overflow-hidden shadow-lg h-80">
                <img 
                  src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1171&auto=format&fit=crop" 
                  alt="Institutional building project" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-fe-blue via-transparent to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <span className="text-sm font-medium uppercase tracking-wider text-fe-light-teal">Institutional</span>
                  <h3 className="text-xl font-semibold mt-1 transition-transform duration-300 group-hover:translate-x-2">Science Innovation Center</h3>
                  <p className="text-sm text-gray-200">Boston, MA</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 relative bg-fe-blue">
        <div className="absolute inset-0 opacity-10">
          <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
            <pattern id="pattern-grid" width="30" height="30" patternUnits="userSpaceOnUse">
              <path d="M 30 0 L 0 0 0 30" fill="none" stroke="white" strokeWidth="1"/>
            </pattern>
            <rect width="100%" height="100%" fill="url(#pattern-grid)" />
          </svg>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="max-w-3xl mx-auto reveal-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Bring Your Project to Life?
            </h2>
            <p className="text-gray-200 text-lg mb-8">
              Our team of expert engineers is ready to help you achieve your structural engineering goals with precision and innovation.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/contact" className="button-primary bg-white text-fe-blue hover:bg-gray-100">
                Get in Touch
              </Link>
              <Link to="/services" className="button-secondary border-white text-white hover:bg-white hover:text-fe-blue">
                Explore Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Index;
