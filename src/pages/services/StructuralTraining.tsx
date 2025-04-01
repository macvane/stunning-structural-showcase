
import React from 'react';
import PageLayout from '@/components/layouts/PageLayout';
import { BookOpen, Users, PenTool, BarChart4, Award, BookCheck, Building, Ruler, Wand2, AreaChart } from 'lucide-react';

const StructuralTraining = () => {
  // Training programs data
  const trainingPrograms = [
    {
      id: 'structural-analysis',
      title: 'Structural Analysis Fundamentals',
      description: 'A comprehensive introduction to structural analysis principles, covering topics such as load tracing, stress analysis, and structural behavior.',
      icon: <BookOpen className="h-8 w-8 text-fe-teal" />,
      modules: [
        'Introduction to Structural Engineering',
        'Load Tracing and Distribution',
        'Stress and Strain Analysis',
        'Structural Behavior under Load',
        'Analysis of Determinate Structures'
      ]
    },
    {
      id: 'steel-design',
      title: 'Steel Design Essentials',
      description: 'An in-depth exploration of steel design concepts, including material properties, connection design, and member sizing according to industry standards.',
      icon: <PenTool className="h-8 w-8 text-fe-teal" />,
      modules: [
        'Steel Material Properties',
        'Tension Member Design',
        'Compression Member Design',
        'Beam Design',
        'Connection Design'
      ]
    },
    {
      id: 'concrete-design',
      title: 'Reinforced Concrete Design',
      description: 'A detailed study of reinforced concrete design principles, covering topics such as flexural design, shear design, and detailing requirements.',
      icon: <Building className="h-8 w-8 text-fe-teal" />,
      modules: [
        'Concrete Material Properties',
        'Flexural Design of Beams',
        'Shear Design of Beams',
        'Column Design',
        'Detailing Requirements'
      ]
    },
    {
      id: 'bim-for-structures',
      title: 'BIM for Structural Engineers',
      description: 'A practical guide to using Building Information Modeling (BIM) software for structural design and analysis, enhancing collaboration and project coordination.',
      icon: <Ruler className="h-8 w-8 text-fe-teal" />,
      modules: [
        'Introduction to BIM',
        'Structural Modeling in BIM Software',
        'Collaboration and Coordination',
        'Analysis and Design Integration',
        'Documentation and Reporting'
      ]
    },
    {
      id: 'seismic-design',
      title: 'Seismic Design Principles',
      description: 'An overview of seismic design considerations, including earthquake loading, structural dynamics, and performance-based design approaches.',
      icon: <Wand2 className="h-8 w-8 text-fe-teal" />,
      modules: [
        'Introduction to Earthquakes',
        'Seismic Loading',
        'Structural Dynamics',
        'Performance-Based Design',
        'Seismic Detailing'
      ]
    },
    {
      id: 'advanced-analysis',
      title: 'Advanced Structural Analysis',
      description: 'An exploration of advanced analysis techniques, such as finite element analysis and non-linear analysis, for complex structural systems.',
      icon: <AreaChart className="h-8 w-8 text-fe-teal" />,
      modules: [
        'Introduction to Finite Element Analysis',
        'Non-Linear Analysis',
        'Dynamic Analysis',
        'Buckling Analysis',
        'Advanced Modeling Techniques'
      ]
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
              Enhance your skills and knowledge in structural engineering with our comprehensive training programs, designed for professionals and students alike.
            </p>
          </div>
        </div>
      </section>
      
      {/* Training Programs Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 reveal-on-scroll">
            <span className="text-fe-orange font-medium">Our Programs</span>
            <h2 className="text-3xl md:text-4xl font-bold text-fe-blue mt-2 mb-6">
              Comprehensive Training Modules
            </h2>
            <p className="text-gray-700">
              We offer a variety of training programs to help you master structural engineering principles and practices, from fundamental concepts to advanced techniques.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trainingPrograms.map((program, index) => (
              <div 
                key={program.id} 
                className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl reveal-on-scroll"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="bg-fe-blue bg-opacity-10 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  {program.icon}
                </div>
                <h3 className="text-xl font-medium text-fe-blue mb-3">{program.title}</h3>
                <p className="text-gray-600 mb-4">{program.description}</p>
                
                <h4 className="text-lg font-semibold text-gray-700 mb-2">Modules:</h4>
                <ul className="list-disc list-inside text-gray-600">
                  {program.modules.map((module, i) => (
                    <li key={i} className="mb-1">{module}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12 reveal-on-scroll">
            <span className="text-fe-orange font-medium">Why Choose Us</span>
            <h2 className="text-3xl md:text-4xl font-bold text-fe-blue mt-2 mb-6">
              Benefits of Our Training Programs
            </h2>
            <p className="text-gray-700">
              Gain a competitive edge in the structural engineering field with our expert-led training programs, designed to enhance your skills and career prospects.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl reveal-on-scroll">
              <Award className="h-8 w-8 text-fe-teal mb-4" />
              <h3 className="text-xl font-medium text-fe-blue mb-3">Industry-Recognized Certification</h3>
              <p className="text-gray-600">Earn a certification that validates your expertise and enhances your professional credibility.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl reveal-on-scroll" style={{ animationDelay: '100ms' }}>
              <Users className="h-8 w-8 text-fe-teal mb-4" />
              <h3 className="text-xl font-medium text-fe-blue mb-3">Expert Instructors</h3>
              <p className="text-gray-600">Learn from experienced structural engineers and industry professionals who are passionate about teaching.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl reveal-on-scroll" style={{ animationDelay: '200ms' }}>
              <BookCheck className="h-8 w-8 text-fe-teal mb-4" />
              <h3 className="text-xl font-medium text-fe-blue mb-3">Comprehensive Curriculum</h3>
              <p className="text-gray-600">Our training programs cover a wide range of topics, ensuring you gain a thorough understanding of structural engineering principles.</p>
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
          <div className="max-w-4xl mx-auto text-center reveal-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Elevate Your Skills?
            </h2>
            <p className="text-gray-100 text-lg mb-8 max-w-2xl mx-auto">
              Enroll in our structural engineering training programs today and take your career to the next level. Contact us to learn more about our course offerings and enrollment process.
            </p>
            <a 
              href="/contact" 
              className="button-primary bg-white text-fe-blue hover:bg-gray-100"
            >
              Explore Training Programs
            </a>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default StructuralTraining;
