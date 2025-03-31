
import React from 'react';
import PageLayout from '@/components/layouts/PageLayout';
import { 
  BarChart3, 
  Construction, 
  ClipboardList, 
  Compass, 
  CircleDollarSign, 
  AlertTriangle, 
  LineChart, 
  Users, 
  CheckSquare,
  Clock,
  Target,
  Gem
} from 'lucide-react';
import { Link } from 'react-router-dom';

const ProjectManagement = () => {
  // Project management services
  const pmServices = [
    {
      title: "Project Planning & Execution",
      icon: <ClipboardList className="h-6 w-6 text-fe-teal" />,
      description: "Comprehensive project plans covering scope, objectives, deliverables and timelines with expert oversight."
    },
    {
      title: "Feasibility Studies",
      icon: <Compass className="h-6 w-6 text-fe-teal" />,
      description: "Thorough assessment of project viability, site suitability, and regulatory compliance before commencement."
    },
    {
      title: "Budgeting & Resource Management",
      icon: <CircleDollarSign className="h-6 w-6 text-fe-teal" />,
      description: "Detailed cost estimation, budget allocation, and resource optimization for efficient project execution."
    },
    {
      title: "Risk Assessment & Mitigation",
      icon: <AlertTriangle className="h-6 w-6 text-fe-teal" />,
      description: "Proactive identification and mitigation of potential risks to project timelines, costs, and quality."
    },
    {
      title: "Project Monitoring & Control",
      icon: <LineChart className="h-6 w-6 text-fe-teal" />,
      description: "Real-time tracking of progress with key performance indicators and timely corrective actions."
    },
    {
      title: "Stakeholder Communication",
      icon: <Users className="h-6 w-6 text-fe-teal" />,
      description: "Clear and transparent updates, progress reports, and documentation throughout the project lifecycle."
    }
  ];

  // Why choose us
  const advantages = [
    {
      title: "Expertise",
      icon: <Gem className="h-8 w-8 text-white" />,
      description: "Our team comprises experienced engineers and project managers with in-depth knowledge."
    },
    {
      title: "Timeliness",
      icon: <Clock className="h-8 w-8 text-white" />,
      description: "We consistently deliver projects on schedule, helping you avoid costly delays."
    },
    {
      title: "Quality Assurance",
      icon: <CheckSquare className="h-8 w-8 text-white" />,
      description: "Our rigorous quality control ensures compliance with industry standards."
    },
    {
      title: "Client-Centric Approach",
      icon: <Target className="h-8 w-8 text-white" />,
      description: "We prioritize client satisfaction, fostering collaborative partnerships."
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
              Project <span className="text-fe-orange">Management</span>
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
              <div className="bg-fe-blue bg-opacity-10 p-4 inline-block rounded-lg mb-6">
                <BarChart3 className="h-12 w-12 text-fe-teal" />
              </div>
              <h2 className="text-3xl font-bold text-fe-blue mb-6">Comprehensive Project Management</h2>
              <p className="text-gray-700 mb-6">
                Finite Element Designs Limited specializes in providing comprehensive project management services tailored to the unique needs of construction projects. Our experienced team of engineers, project managers, and industry experts ensures the successful planning, execution, and delivery of construction initiatives, adhering to quality standards, timelines, and budgetary constraints.
              </p>
              <div className="flex items-center p-4 bg-gray-50 rounded-lg border border-gray-200">
                <div className="bg-fe-orange bg-opacity-20 p-2 rounded-full mr-4">
                  <Target className="h-6 w-6 text-fe-orange" />
                </div>
                <p className="text-gray-700 italic">
                  "Our mission is to bring your projects to successful completion through expert management, clear communication, and rigorous quality control."
                </p>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1171&auto=format&fit=crop" 
                alt="Project Management" 
                className="w-full h-full object-cover" 
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-fe-orange font-medium">Our Services</span>
            <h2 className="text-3xl font-bold text-fe-blue mt-2 mb-4">Project Management Solutions</h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              We offer a comprehensive suite of project management services tailored to your specific needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pmServices.map((service, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full flex flex-col"
              >
                <div className="bg-fe-blue bg-opacity-10 p-3 rounded-full inline-flex mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-fe-blue mb-3">{service.title}</h3>
                <p className="text-gray-600 flex-grow">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Construction Management */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1170&auto=format&fit=crop" 
                alt="Construction Management" 
                className="w-full h-full object-cover" 
              />
            </div>
            <div className="order-1 lg:order-2">
              <div className="bg-fe-blue bg-opacity-10 p-4 inline-block rounded-lg mb-6">
                <Construction className="h-12 w-12 text-fe-teal" />
              </div>
              <h2 className="text-3xl font-bold text-fe-blue mb-6">Construction Phase Management</h2>
              <p className="text-gray-700 mb-6">
                During construction, our project managers serve as your on-site representatives, monitoring progress, resolving issues, and ensuring adherence to design specifications and quality standards.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-fe-orange bg-opacity-10 p-1 rounded-full mr-3 mt-1">
                    <span className="text-fe-orange">✓</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-fe-blue">On-site Supervision</h4>
                    <p className="text-gray-600">Expert coordination of construction activities and contractors</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-fe-orange bg-opacity-10 p-1 rounded-full mr-3 mt-1">
                    <span className="text-fe-orange">✓</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-fe-blue">Progress Monitoring</h4>
                    <p className="text-gray-600">Regular reporting and tracking of project milestones</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-fe-orange bg-opacity-10 p-1 rounded-full mr-3 mt-1">
                    <span className="text-fe-orange">✓</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-fe-blue">Change Management</h4>
                    <p className="text-gray-600">Efficient handling of change orders and scope adjustments</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-fe-orange bg-opacity-10 p-1 rounded-full mr-3 mt-1">
                    <span className="text-fe-orange">✓</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-fe-blue">Project Closeout</h4>
                    <p className="text-gray-600">Thorough final inspection and documentation</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Why Choose Us */}
      <section className="py-16 bg-fe-blue">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-fe-orange font-medium">Our Advantages</span>
            <h2 className="text-3xl font-bold text-white mt-2 mb-4">Why Choose FED Ltd for Project Management</h2>
            <p className="text-gray-200 max-w-2xl mx-auto">
              Our approach to project management delivers measurable advantages for your construction projects.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((item, index) => (
              <div 
                key={index} 
                className="bg-fe-blue bg-opacity-30 p-6 rounded-lg border border-fe-blue border-opacity-30 backdrop-blur-sm"
              >
                <div className="bg-gradient-to-br from-fe-teal to-fe-blue p-4 rounded-full inline-flex mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
                <p className="text-gray-200">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Project Lifecycle */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-fe-orange font-medium">Our Process</span>
            <h2 className="text-3xl font-bold text-fe-blue mt-2 mb-4">The Project Management Lifecycle</h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              We follow a structured approach to manage your projects from initiation to closure.
            </p>
          </div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-fe-blue bg-opacity-20 transform -translate-x-1/2"></div>
            
            {/* Timeline items */}
            <div className="space-y-12">
              {/* Item 1 */}
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 md:text-right mb-6 md:mb-0">
                  <h3 className="text-xl font-semibold text-fe-blue mb-2">Initiation & Planning</h3>
                  <p className="text-gray-600">Defining project scope, objectives, and requirements. Developing detailed plans and establishing baseline metrics.</p>
                </div>
                <div className="md:w-0 relative flex justify-center items-center">
                  <div className="hidden md:block h-8 w-8 rounded-full bg-fe-blue border-4 border-white shadow"></div>
                </div>
                <div className="md:w-1/2 md:pl-12">
                  <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1170&auto=format&fit=crop" alt="Planning" className="rounded-lg shadow-md w-full h-48 object-cover" />
                </div>
              </div>
              
              {/* Item 2 */}
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 order-2 md:order-1">
                  <img src="https://images.unsplash.com/photo-1581094794329-c8112c4e25d6?q=80&w=1170&auto=format&fit=crop" alt="Execution" className="rounded-lg shadow-md w-full h-48 object-cover" />
                </div>
                <div className="md:w-0 relative flex justify-center items-center order-1 md:order-2">
                  <div className="hidden md:block h-8 w-8 rounded-full bg-fe-blue border-4 border-white shadow"></div>
                </div>
                <div className="md:w-1/2 md:pl-12 mb-6 md:mb-0 order-1 md:order-3 md:text-left">
                  <h3 className="text-xl font-semibold text-fe-blue mb-2">Execution & Construction</h3>
                  <p className="text-gray-600">Coordinating resources, implementing plans, and managing construction activities with precision and oversight.</p>
                </div>
              </div>
              
              {/* Item 3 */}
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 md:text-right mb-6 md:mb-0">
                  <h3 className="text-xl font-semibold text-fe-blue mb-2">Monitoring & Control</h3>
                  <p className="text-gray-600">Tracking progress, measuring performance against plans, and implementing corrective actions as needed.</p>
                </div>
                <div className="md:w-0 relative flex justify-center items-center">
                  <div className="hidden md:block h-8 w-8 rounded-full bg-fe-blue border-4 border-white shadow"></div>
                </div>
                <div className="md:w-1/2 md:pl-12">
                  <img src="https://images.unsplash.com/photo-1573497019236-61f323667ef0?q=80&w=1170&auto=format&fit=crop" alt="Monitoring" className="rounded-lg shadow-md w-full h-48 object-cover" />
                </div>
              </div>
              
              {/* Item 4 */}
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 order-2 md:order-1">
                  <img src="https://images.unsplash.com/photo-1577563908411-5077b6dc7624?q=80&w=1170&auto=format&fit=crop" alt="Completion" className="rounded-lg shadow-md w-full h-48 object-cover" />
                </div>
                <div className="md:w-0 relative flex justify-center items-center order-1 md:order-2">
                  <div className="hidden md:block h-8 w-8 rounded-full bg-fe-blue border-4 border-white shadow"></div>
                </div>
                <div className="md:w-1/2 md:pl-12 mb-6 md:mb-0 order-1 md:order-3 md:text-left">
                  <h3 className="text-xl font-semibold text-fe-blue mb-2">Completion & Handover</h3>
                  <p className="text-gray-600">Finalizing all deliverables, conducting final inspections, and transferring the completed project to the client.</p>
                </div>
              </div>
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
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Streamline Your Project?
            </h2>
            <p className="text-gray-100 text-lg mb-8 max-w-2xl mx-auto">
              Our project management team can help ensure your next construction or engineering project is a success from start to finish.
            </p>
            <Link 
              to="/contact" 
              className="button-primary bg-white text-fe-blue hover:bg-gray-100"
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
