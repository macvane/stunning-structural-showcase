
import React from 'react';
import PageLayout from '@/components/layouts/PageLayout';
import { BarChart3, ClipboardCheck, Target, AlertTriangle, LineChart, Users, CheckSquare } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProjectManagement = () => {
  // Project management services
  const services = [
    {
      title: "Project Planning and Execution",
      description: "FED Ltd collaborates closely with clients to develop robust project plans that encompass scope, objectives, deliverables, and timelines. Our project managers oversee all aspects of project execution, ensuring alignment with client goals and industry best practices.",
      icon: <ClipboardCheck className="h-10 w-10 text-fe-teal" />
    },
    {
      title: "Feasibility Studies and Site Assessments",
      description: "Before project commencement, FED Ltd conducts comprehensive feasibility studies and site assessments to evaluate project viability and identify potential challenges. Our team assesses factors such as site suitability, environmental impact, regulatory compliance, and technical feasibility.",
      icon: <Target className="h-10 w-10 text-fe-teal" />
    },
    {
      title: "Budgeting and Resource Management",
      description: "Effective budgeting and resource management are critical for project success. FED Ltd offers expertise in cost estimation, budget allocation, and resource optimization. We develop detailed project budgets, monitor expenditures, and implement contingency plans.",
      icon: <BarChart3 className="h-10 w-10 text-fe-teal" />
    },
    {
      title: "Risk Assessment and Mitigation",
      description: "Identifying and mitigating project risks is essential to minimize disruptions and ensure smooth project execution. FED Ltd conducts thorough risk assessments, identifying potential threats to project timelines, costs, and quality.",
      icon: <AlertTriangle className="h-10 w-10 text-fe-teal" />
    },
    {
      title: "Project Monitoring and Control",
      description: "FED Ltd employs robust monitoring and control mechanisms to track project progress in real-time. Our project managers conduct regular inspections, monitor key performance indicators, and analyze project data to identify deviations from the plan.",
      icon: <LineChart className="h-10 w-10 text-fe-teal" />
    },
    {
      title: "Stakeholder Communication and Reporting",
      description: "Clear and transparent communication is paramount in successful project management. FED Ltd maintains open lines of communication with stakeholders, providing regular updates, progress reports, and documentation throughout the project lifecycle.",
      icon: <Users className="h-10 w-10 text-fe-teal" />
    },
    {
      title: "Closure and Handover",
      description: "Upon project completion, FED Ltd facilitates a comprehensive closure and handover process. Our team conducts final inspections, verifies compliance with specifications and regulations, and prepares detailed documentation, including as-built drawings and project reports.",
      icon: <CheckSquare className="h-10 w-10 text-fe-teal" />
    }
  ];

  // Advantages
  const advantages = [
    {
      title: "Expertise",
      description: "Our team comprises experienced engineers and project managers with in-depth knowledge of construction project management."
    },
    {
      title: "Tailored Solutions",
      description: "We customize our services to align with project requirements, ensuring efficient and cost-effective solutions."
    },
    {
      title: "Quality Assurance",
      description: "FED Ltd prioritizes quality and compliance, adhering to industry standards and regulatory requirements."
    },
    {
      title: "Client-Centric Approach",
      description: "We prioritize client satisfaction, fostering collaborative partnerships and delivering results that exceed expectations."
    },
    {
      title: "Proven Track Record",
      description: "With a history of successful project deliveries, FED Ltd is a trusted partner for construction project management."
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
              Project <span className="text-fe-teal">Management</span>
            </h1>
            <p className="text-gray-200 text-lg max-w-2xl">
              Comprehensive project management services ensuring your construction and engineering projects are delivered on time, within budget, and to the highest standards.
            </p>
          </div>
        </div>
      </section>
      
      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-fe-blue mb-6">Comprehensive Project Management</h2>
              <p className="text-gray-700 mb-6">
                Finite Element Designs Limited specializes in providing comprehensive project management services tailored to the unique needs of construction projects. Our experienced team of engineers, project managers, and industry experts ensures the successful planning, execution, and delivery of construction initiatives, adhering to quality standards, timelines, and budgetary constraints.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1507537362848-9c7e70b7f5a1?q=80&w=1170&auto=format&fit=crop" 
                alt="Project Management Team" 
                className="w-full h-full object-cover" 
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-fe-blue mb-12 text-center">Our Project Management Services</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="bg-fe-blue bg-opacity-10 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-fe-blue mb-3">{service.title}</h3>
                <p className="text-gray-700">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Project Management Process */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-fe-blue mb-12 text-center">Our Project Management Process</h2>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-0.5 bg-fe-teal transform -translate-x-1/2"></div>
            
            {/* Timeline items */}
            {[
              { phase: "Initiation", description: "Project definition, feasibility studies, and stakeholder identification" },
              { phase: "Planning", description: "Detailed project planning, resource allocation, and risk assessment" },
              { phase: "Execution", description: "Implementation of project plans, monitoring progress, and managing resources" },
              { phase: "Monitoring & Control", description: "Tracking performance, managing changes, and implementing corrective actions" },
              { phase: "Closure", description: "Project completion, handover, and lessons learned documentation" }
            ].map((item, index) => (
              <div key={index} className="mb-12 md:mb-24 relative flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-8 text-right hidden md:block">
                  {index % 2 === 0 && (
                    <>
                      <h3 className="text-xl font-bold text-fe-blue mb-2">{item.phase}</h3>
                      <p className="text-gray-700">{item.description}</p>
                    </>
                  )}
                </div>
                
                <div className="z-10 flex items-center justify-center w-12 h-12 rounded-full bg-fe-teal text-white font-bold shadow-lg">
                  {index + 1}
                </div>
                
                <div className="md:w-1/2 md:pl-8 text-left md:block">
                  {index % 2 === 1 || !window.matchMedia("(min-width: 768px)").matches ? (
                    <>
                      <h3 className="text-xl font-bold text-fe-blue mb-2">{item.phase}</h3>
                      <p className="text-gray-700">{item.description}</p>
                    </>
                  ) : null}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Why Choose Us Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-fe-blue mb-12 text-center">Why Choose FED Ltd for Project Management?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {advantages.map((advantage, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border-t-4 border-fe-teal"
              >
                <h3 className="text-xl font-bold text-fe-blue mb-3">{advantage.title}</h3>
                <p className="text-gray-700">{advantage.description}</p>
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
              Ready to Streamline Your Project?
            </h2>
            <p className="text-gray-100 text-lg mb-8 max-w-2xl mx-auto">
              Our project management team can help ensure your next construction or engineering project is a success from start to finish.
            </p>
            <Link 
              to="/contact" 
              className="bg-white text-fe-teal px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition-all"
            >
              Discuss Your Project Needs
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default ProjectManagement;
