
import React from 'react';
import PageLayout from '@/components/layouts/PageLayout';
import { GraduationCap, Code, Cube, FileCheck, Users, Building2, Award, Clock, Laptop, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

const StructuralTraining = () => {
  // Training programs
  const trainingPrograms = [
    {
      title: "Prokon Software Training",
      icon: <Code className="h-6 w-6 text-fe-teal" />,
      description: "Comprehensive training in Prokon software for structural analysis, design, and detailing, certified by Prokon International."
    },
    {
      title: "Structural Modelling in 3D",
      icon: <Cube className="h-6 w-6 text-fe-teal" />,
      description: "Advanced training in creating detailed 3D models of structural systems for improved visualization and analysis."
    },
    {
      title: "Structural Detailing using Padds",
      icon: <FileCheck className="h-6 w-6 text-fe-teal" />,
      description: "Hands-on workshops in Parametric Drawing and Detailing System for precise structural component documentation."
    },
    {
      title: "Project Management Training",
      icon: <Users className="h-6 w-6 text-fe-teal" />,
      description: "Comprehensive programs in project planning, scheduling, budgeting, and execution for engineering projects."
    },
    {
      title: "Engineering Board Registration",
      icon: <Award className="h-6 w-6 text-fe-teal" />,
      description: "Support and guidance for graduate engineers preparing for registration with the Engineers Board of Kenya."
    }
  ];

  // Training benefits
  const trainingBenefits = [
    {
      title: "Industry-Recognized Certification",
      icon: <Award className="h-10 w-10 text-fe-orange" />,
      description: "Earn certifications recognized throughout East and Central Africa."
    },
    {
      title: "Expert-Led Instruction",
      icon: <GraduationCap className="h-10 w-10 text-fe-orange" />,
      description: "Learn from certified trainers with extensive industry experience."
    },
    {
      title: "Hands-On Learning",
      icon: <Laptop className="h-10 w-10 text-fe-orange" />,
      description: "Practice with real-world examples and actual software implementations."
    },
    {
      title: "Flexible Scheduling",
      icon: <Clock className="h-10 w-10 text-fe-orange" />,
      description: "In-person and online options to fit your professional schedule."
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
              Structural Engineering <span className="text-fe-orange">Training</span>
            </h1>
            <p className="text-gray-200 text-lg max-w-2xl">
              Specialized training programs designed to enhance professional skills and knowledge in structural engineering, delivered by certified experts.
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
                <GraduationCap className="h-12 w-12 text-fe-teal" />
              </div>
              <h2 className="text-3xl font-bold text-fe-blue mb-6">Expert Engineering Training</h2>
              <p className="text-gray-700 mb-6">
                Finite element Designs limited offers a wide range of trainings in the field of civil and structural engineering. Eng. Phares O. Atai, the lead trainer is certified by Prokon International, brings unparalleled expertise to the field of engineering training and certification in East and Central Africa.
              </p>
              <p className="text-gray-700 mb-6">
                We specialize in imparting essential skills and knowledge to engineers and structural engineering firms, particularly focusing on the utilization of cutting-edge software and industry best practices.
              </p>
              <div className="flex items-center space-x-4">
                <div className="bg-fe-orange bg-opacity-10 p-3 rounded-full">
                  <BookOpen className="h-6 w-6 text-fe-orange" />
                </div>
                <p className="text-gray-700 font-medium">
                  Practical, hands-on training designed for working professionals
                </p>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1544531585-9847b68c8c86?q=80&w=1170&auto=format&fit=crop" 
                alt="Engineering Training" 
                className="w-full h-full object-cover" 
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Training Programs */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-fe-orange font-medium">Our Programs</span>
            <h2 className="text-3xl font-bold text-fe-blue mt-2 mb-4">Specialized Training Courses</h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Our comprehensive training programs are designed to meet the needs of engineering professionals at all career stages.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trainingPrograms.map((program, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 h-full flex flex-col"
              >
                <div className="bg-fe-blue bg-opacity-10 p-3 rounded-full inline-flex mb-4">
                  {program.icon}
                </div>
                <h3 className="text-xl font-semibold text-fe-blue mb-3">{program.title}</h3>
                <p className="text-gray-600 flex-grow">{program.description}</p>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <button className="text-fe-teal font-medium hover:text-fe-orange transition-colors flex items-center">
                    Learn more <code className="ml-1">→</code>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Lead Trainer */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-fe-blue bg-opacity-5 rounded-lg p-8 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              <div className="md:col-span-1">
                <div className="rounded-full overflow-hidden border-4 border-fe-teal w-48 h-48 mx-auto">
                  <img 
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1287&auto=format&fit=crop" 
                    alt="Eng. Phares O. Atai" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="md:col-span-2">
                <h3 className="text-2xl font-bold text-fe-blue mb-2">Meet Our Lead Trainer</h3>
                <h4 className="text-lg text-fe-orange font-medium mb-4">Eng. Phares O. Atai</h4>
                <p className="text-gray-700 mb-4">
                  Certified by Prokon International, Eng. Phares brings unparalleled expertise to the field of engineering training and certification in East and Central Africa. With years of industry experience and a passion for education, he has helped countless engineers advance their careers through practical, results-oriented training.
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="inline-block bg-fe-teal bg-opacity-10 text-fe-teal px-3 py-1 rounded-full text-sm">Prokon Certified Trainer</span>
                  <span className="inline-block bg-fe-teal bg-opacity-10 text-fe-teal px-3 py-1 rounded-full text-sm">Structural Engineering Expert</span>
                  <span className="inline-block bg-fe-teal bg-opacity-10 text-fe-teal px-3 py-1 rounded-full text-sm">Professional Engineer</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-fe-orange font-medium">Training Advantages</span>
            <h2 className="text-3xl font-bold text-fe-blue mt-2 mb-4">Why Choose Our Training Programs</h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Discover the benefits of enhancing your engineering skills with our specialized training courses.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {trainingBenefits.map((benefit, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-lg shadow-md text-center hover:transform hover:-translate-y-1 transition-transform duration-300"
              >
                <div className="mx-auto bg-fe-blue bg-opacity-5 p-4 rounded-full inline-flex mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-fe-blue mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
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
              Enhance Your Engineering Skills Today
            </h2>
            <p className="text-gray-100 text-lg mb-8 max-w-2xl mx-auto">
              Whether you're an individual professional or representing an organization, our training programs can help you achieve your career development goals.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                to="/contact" 
                className="button-primary bg-white text-fe-blue hover:bg-gray-100"
              >
                Inquire About Training Programs
              </Link>
              <Link 
                to="/services" 
                className="button-secondary border-2 border-white text-white hover:bg-white hover:text-fe-blue"
              >
                View All Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default StructuralTraining;
