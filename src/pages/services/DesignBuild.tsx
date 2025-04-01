
import React from 'react';
import PageLayout from '@/components/layouts/PageLayout';
import { Building2, HardHat, Ruler, Clock, FileCheck, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const DesignBuild = () => {
  // Design build process steps
  const processSteps = [
    {
      title: "Conceptual Design",
      description: "Our design-build process begins with a collaborative conceptual design phase, where our team works closely with clients to understand their vision, objectives, and project requirements. Leveraging our engineering expertise and creativity, we develop innovative design concepts that balance aesthetic appeal, functionality, and structural integrity.",
      icon: <Ruler className="h-10 w-10 text-fe-teal" />,
      image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1171&auto=format&fit=crop"
    },
    {
      title: "Engineering Expertise",
      description: "Finite Element Designs Limited boasts a team of experienced structural engineers who specialize in designing concrete and steel structures. Using advanced computational tools and analysis techniques, we develop detailed structural designs that optimize performance, durability, and safety while minimizing material usage and construction costs.",
      icon: <Building2 className="h-10 w-10 text-fe-teal" />,
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=1170&auto=format&fit=crop"
    },
    {
      title: "Construction Capabilities",
      description: "As a design-build firm, we have the unique advantage of combining engineering expertise with construction capabilities. Our skilled construction team is equipped to execute projects efficiently and effectively, ensuring that designs are translated into high-quality structures that meet or exceed client expectations.",
      icon: <HardHat className="h-10 w-10 text-fe-teal" />,
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1170&auto=format&fit=crop"
    },
    {
      title: "Streamlined Project Delivery",
      description: "By offering design-build services, Finite Element Designs Limited provides clients with a single point of contact and accountability throughout the entire project lifecycle. From initial concept development to final construction, our team manages all aspects of the project, ensuring seamless coordination and communication.",
      icon: <Clock className="h-10 w-10 text-fe-teal" />,
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=1170&auto=format&fit=crop"
    },
    {
      title: "Quality Assurance",
      description: "At Finite Element Designs Limited, we are committed to delivering projects of the highest quality standards. Our design-build process incorporates rigorous quality assurance measures at every stage, from material selection and construction techniques to final inspections and commissioning.",
      icon: <FileCheck className="h-10 w-10 text-fe-teal" />,
      image: "https://images.unsplash.com/photo-1556156653-e5a7676c5723?q=80&w=1171&auto=format&fit=crop"
    }
  ];

  // Benefits
  const benefits = [
    {
      title: "Time Savings",
      description: "Save time with overlapping design and construction phases"
    },
    {
      title: "Cost Efficiency",
      description: "Reduced costs through integrated project delivery"
    },
    {
      title: "Single Point of Responsibility",
      description: "One team accountable for the entire project"
    },
    {
      title: "Reduced Risk",
      description: "Minimized unforeseen issues through comprehensive planning"
    },
    {
      title: "Enhanced Communication",
      description: "Streamlined communication between all project stakeholders"
    },
    {
      title: "Value Engineering",
      description: "Continuous optimization of design for constructability and cost"
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
              Design <span className="text-fe-teal">Build</span>
            </h1>
            <p className="text-gray-200 text-lg max-w-2xl">
              Integrated design-build services that streamline your project delivery through a single point of responsibility from concept to completion.
            </p>
          </div>
        </div>
      </section>
      
      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-fe-blue bg-opacity-10 p-4 inline-block rounded-lg mb-6">
                <Building2 className="h-12 w-12 text-fe-teal" />
              </div>
              <h2 className="text-3xl font-bold text-fe-blue mb-6">Design Build Services in Concrete & Steel</h2>
              <p className="text-gray-700 mb-6">
                Finite Element Designs Limited offers comprehensive design-build services for projects involving concrete and steel structures. With expertise in both structural engineering and construction, we provide integrated solutions that streamline project delivery from conceptual design to construction, ensuring efficiency, cost-effectiveness, and quality at every stage.
              </p>
              <p className="text-gray-700">
                Our integrated approach eliminates the traditional barriers between design and construction, resulting in faster project delivery, reduced costs, and improved quality control. By managing both aspects of your project, we ensure seamless coordination and a single point of accountability.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=1169&auto=format&fit=crop" 
                alt="Design Build Project" 
                className="w-full h-full object-cover" 
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Process Steps */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-fe-blue mb-12 text-center">Our Design-Build Process</h2>
          
          <div className="space-y-16">
            {processSteps.map((step, index) => (
              <div 
                key={index} 
                className={`bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 ${
                  index % 2 === 0 ? '' : 'lg:flex-row-reverse'
                }`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="p-8">
                    <div className="flex items-center mb-6">
                      <div className="bg-fe-blue bg-opacity-10 p-3 rounded-full flex items-center justify-center mr-4">
                        {step.icon}
                      </div>
                      <div className="bg-fe-teal text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                        {index + 1}
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-fe-blue mb-4">{step.title}</h3>
                    <p className="text-gray-700">{step.description}</p>
                  </div>
                  <div className="h-64 lg:h-auto">
                    <img 
                      src={step.image} 
                      alt={step.title} 
                      className="w-full h-full object-cover" 
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Benefits */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="bg-fe-blue bg-opacity-10 p-4 inline-block rounded-lg mb-6">
              <Users className="h-12 w-12 text-fe-teal" />
            </div>
            <h2 className="text-3xl font-bold text-fe-blue mb-4">Benefits of Our Design-Build Approach</h2>
            <p className="text-gray-700 max-w-3xl mx-auto">
              Our integrated design-build approach offers numerous advantages over traditional project delivery methods, resulting in more efficient, cost-effective, and successful projects.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-all duration-300 border-l-4 border-fe-teal"
              >
                <h3 className="text-xl font-bold text-fe-blue mb-2">{benefit.title}</h3>
                <p className="text-gray-700">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Project Types */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-fe-blue mb-10 text-center">Project Types We Handle</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { 
                type: "Commercial Buildings", 
                image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=1172&auto=format&fit=crop",
                description: "Office buildings, retail spaces, and commercial facilities"
              },
              { 
                type: "Industrial Structures", 
                image: "https://images.unsplash.com/photo-1565166843795-2500004c126a?q=80&w=1170&auto=format&fit=crop", 
                description: "Manufacturing plants, warehouses, and industrial facilities"
              },
              { 
                type: "Institutional Buildings", 
                image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1170&auto=format&fit=crop", 
                description: "Schools, healthcare facilities, and government buildings"
              }
            ].map((project, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 h-full card-hover"
              >
                <div className="h-48">
                  <img 
                    src={project.image} 
                    alt={project.type} 
                    className="w-full h-full object-cover" 
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-fe-blue mb-2">{project.type}</h3>
                  <p className="text-gray-700">{project.description}</p>
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
              Ready for a Streamlined Project Experience?
            </h2>
            <p className="text-gray-100 text-lg mb-8 max-w-2xl mx-auto">
              Contact us to learn how our design-build approach can deliver your project faster, more efficiently, and with superior results.
            </p>
            <Link 
              to="/contact" 
              className="bg-white text-fe-teal px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition-all"
            >
              Start Your Design-Build Project
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default DesignBuild;
