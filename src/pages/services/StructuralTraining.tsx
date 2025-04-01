
import React from 'react';
import PageLayout from '@/components/layouts/PageLayout';
import { BookOpen, AreaChart, PenTool, Users, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const StructuralTraining = () => {
  // Training programs
  const trainingPrograms = [
    {
      title: "Prokon Software Training",
      description: "We conduct Prokon software training sessions, certified by Prokon International, aimed at enhancing the proficiency of engineers in East and Central Africa. Prokon software is renowned for its comprehensive suite of tools for structural analysis, design, and detailing.",
      icon: <AreaChart className="h-10 w-10 text-fe-teal" />,
      image: "https://images.unsplash.com/photo-1544531585-9847b68c8c86?q=80&w=1170&auto=format&fit=crop"
    },
    {
      title: "Structural Modelling in 3D",
      description: "Finite Element Designs Limited specializes in 3D structural modelling. This advanced training equips engineers with the skills needed to create accurate and detailed 3D models of structural systems, enabling them to visualize and analyze projects with greater precision and efficiency.",
      icon: <PenTool className="h-10 w-10 text-fe-teal" />,
      image: "https://images.unsplash.com/photo-1584531979583-18895b2506bf?q=80&w=1171&auto=format&fit=crop"
    },
    {
      title: "Structural Detailing using Padds",
      description: "Finite Element Designs Limited offers training in Parametric Drawing and Detailing System (Padds), a powerful software tool for structural detailing. Engineers learn how to leverage Padds to create precise and detailed drawings of structural components.",
      icon: <BookOpen className="h-10 w-10 text-fe-teal" />,
      image: "https://images.unsplash.com/photo-1586936893354-362ad6ae47ba?q=80&w=1170&auto=format&fit=crop"
    },
    {
      title: "Project Management Training",
      description: "We provide comprehensive training programs in project management, both in-person and online, to equip engineers with the essential skills needed to successfully manage engineering projects from inception to completion.",
      icon: <Users className="h-10 w-10 text-fe-teal" />,
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1170&auto=format&fit=crop"
    },
    {
      title: "Assistance with Engineering Board Registration",
      description: "We offer support and guidance to graduate engineers preparing for registration with the Engineers Board of Kenya. Through personalized coaching and preparatory workshops, Eng. Phares O. Atai helps engineers navigate the registration process.",
      icon: <Award className="h-10 w-10 text-fe-teal" />,
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1170&auto=format&fit=crop"
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
              Structural Engineering <span className="text-fe-teal">Training</span>
            </h1>
            <p className="text-gray-200 text-lg max-w-2xl">
              Comprehensive training programs designed to develop professional expertise in structural engineering principles and practices.
            </p>
          </div>
        </div>
      </section>
      
      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-fe-blue mb-6">Expert Engineering Training</h2>
              <p className="text-gray-700 mb-6">
                Finite element Designs limited offers a wide range of trainings in the field of civil and structural engineering. Eng. Phares O. Atai, the lead trainer is certified by Prokon International, brings unparalleled expertise to the field of engineering training and certification in East and Central Africa.
              </p>
              <p className="text-gray-700 mb-6">
                We specialize in imparting essential skills and knowledge to engineers and structural engineering firms, particularly focusing on the utilization of cutting-edge software and industry best practices.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1590402494682-cd3fb53b1f70?q=80&w=1170&auto=format&fit=crop" 
                alt="Engineering Training" 
                className="w-full h-full object-cover" 
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Training Programs Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-fe-blue mb-4">Our Training Programs</h2>
            <p className="text-gray-700 max-w-3xl mx-auto">
              We offer a comprehensive range of training programs designed to enhance the skills and knowledge of engineering professionals in various aspects of structural engineering.
            </p>
          </div>
          
          <div className="space-y-12">
            {trainingPrograms.map((program, index) => (
              <div 
                key={index} 
                className={`bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 ${
                  index % 2 === 0 ? '' : 'lg:flex-row-reverse'
                }`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="p-8">
                    <div className="bg-fe-blue bg-opacity-10 p-4 inline-block rounded-lg mb-6">
                      {program.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-fe-blue mb-4">{program.title}</h3>
                    <p className="text-gray-700">{program.description}</p>
                  </div>
                  <div className="h-64 lg:h-auto">
                    <img 
                      src={program.image} 
                      alt={program.title} 
                      className="w-full h-full object-cover" 
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Testimonial Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-fe-blue bg-opacity-5 p-8 rounded-lg border border-fe-teal border-opacity-20">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-24 h-24 rounded-full overflow-hidden flex-shrink-0">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=987&auto=format&fit=crop"
                  alt="Testimonial"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="text-gray-700 italic mb-4">
                  "The Prokon training program at Finite Element Designs has transformed our approach to structural analysis. The practical skills we gained have significantly improved our efficiency and accuracy in project delivery."
                </p>
                <div>
                  <p className="font-bold text-fe-blue">John Mutisya</p>
                  <p className="text-gray-600 text-sm">Senior Structural Engineer, ABC Construction Ltd</p>
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
              Enhance Your Engineering Skills Today
            </h2>
            <p className="text-gray-100 text-lg mb-8 max-w-2xl mx-auto">
              Whether you're an individual professional or representing an organization, our training programs can help you achieve your career development goals.
            </p>
            <Link 
              to="/contact" 
              className="bg-white text-fe-teal px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition-all"
            >
              Inquire About Training Programs
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default StructuralTraining;
