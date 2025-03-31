
import React from 'react';
import PageLayout from '@/components/layouts/PageLayout';
import { BarChart3, Construction } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProjectManagement = () => {
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
      
      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <div className="bg-fe-blue bg-opacity-10 p-4 inline-block rounded-lg mb-6">
                <BarChart3 className="h-12 w-12 text-fe-teal" />
              </div>
              <h2 className="text-3xl font-bold text-fe-blue mb-6">End-to-End Project Coordination</h2>
              <p className="text-gray-700 mb-6">
                Our experienced project managers oversee every aspect of your project, from initial planning through successful completion, ensuring seamless coordination between all stakeholders.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="text-fe-orange mr-2 mt-1">●</span>
                  <span className="text-gray-700">Project planning and scheduling</span>
                </li>
                <li className="flex items-start">
                  <span className="text-fe-orange mr-2 mt-1">●</span>
                  <span className="text-gray-700">Budget development and management</span>
                </li>
                <li className="flex items-start">
                  <span className="text-fe-orange mr-2 mt-1">●</span>
                  <span className="text-gray-700">Contractor selection and management</span>
                </li>
                <li className="flex items-start">
                  <span className="text-fe-orange mr-2 mt-1">●</span>
                  <span className="text-gray-700">Quality assurance and control</span>
                </li>
              </ul>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1171&auto=format&fit=crop" 
                alt="Project Management" 
                className="w-full h-full object-cover" 
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center lg:grid-flow-dense">
            <div className="lg:col-start-2">
              <div className="bg-fe-blue bg-opacity-10 p-4 inline-block rounded-lg mb-6">
                <Construction className="h-12 w-12 text-fe-teal" />
              </div>
              <h2 className="text-3xl font-bold text-fe-blue mb-6">Construction Phase Management</h2>
              <p className="text-gray-700 mb-6">
                During construction, our project managers serve as your on-site representatives, monitoring progress, resolving issues, and ensuring adherence to design specifications and quality standards.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="text-fe-orange mr-2 mt-1">●</span>
                  <span className="text-gray-700">On-site supervision and coordination</span>
                </li>
                <li className="flex items-start">
                  <span className="text-fe-orange mr-2 mt-1">●</span>
                  <span className="text-gray-700">Progress monitoring and reporting</span>
                </li>
                <li className="flex items-start">
                  <span className="text-fe-orange mr-2 mt-1">●</span>
                  <span className="text-gray-700">Change order management</span>
                </li>
                <li className="flex items-start">
                  <span className="text-fe-orange mr-2 mt-1">●</span>
                  <span className="text-gray-700">Final inspection and project closeout</span>
                </li>
              </ul>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl lg:col-start-1">
              <img 
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1170&auto=format&fit=crop" 
                alt="Construction Management" 
                className="w-full h-full object-cover" 
              />
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
