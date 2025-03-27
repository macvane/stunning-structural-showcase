
import React from 'react';
import PageLayout from '@/components/layouts/PageLayout';
import CareerPosition from '@/components/ui/CareerPosition';
import { CheckCircle2, GraduationCap, Heart, TrendingUp } from 'lucide-react';

const Careers = () => {
  // Benefits
  const benefits = [
    {
      icon: <TrendingUp className="h-8 w-8 text-fe-teal" />,
      title: 'Professional Growth',
      description: 'Continuous learning opportunities, mentorship programs, and career advancement pathways.'
    },
    {
      icon: <Heart className="h-8 w-8 text-fe-teal" />,
      title: 'Health & Wellness',
      description: 'Comprehensive health insurance, wellness programs, and work-life balance initiatives.'
    },
    {
      icon: <GraduationCap className="h-8 w-8 text-fe-teal" />,
      title: 'Education Support',
      description: 'Tuition assistance, professional certification support, and ongoing training.'
    },
    {
      icon: <CheckCircle2 className="h-8 w-8 text-fe-teal" />,
      title: 'Competitive Compensation',
      description: 'Salary packages, performance bonuses, and retirement plans.'
    }
  ];

  // Job Openings
  const jobOpenings = [
    {
      id: 'senior-structural-engineer',
      title: 'Senior Structural Engineer',
      location: 'San Francisco, CA',
      type: 'Full-time',
      salaryRange: '$110,000 - $140,000/year',
      description: 'We are seeking an experienced Senior Structural Engineer to lead complex projects from concept to completion. The ideal candidate will have expertise in advanced analysis techniques and a track record of successful project delivery.'
    },
    {
      id: 'structural-engineer',
      title: 'Structural Engineer',
      location: 'Boston, MA',
      type: 'Full-time',
      salaryRange: '$85,000 - $110,000/year',
      description: 'Join our team as a Structural Engineer responsible for analyzing and designing structural systems for various projects. You\'ll work closely with senior engineers and contribute to innovative design solutions.'
    },
    {
      id: 'bim-specialist',
      title: 'BIM Specialist',
      location: 'Remote',
      type: 'Full-time',
      salaryRange: '$75,000 - $95,000/year',
      description: 'We\'re looking for a Building Information Modeling (BIM) Specialist to enhance our 3D modeling capabilities. You\'ll develop and maintain BIM standards, create detailed structural models, and coordinate with other disciplines.'
    },
    {
      id: 'project-engineer',
      title: 'Project Engineer',
      location: 'Chicago, IL',
      type: 'Full-time',
      salaryRange: '$70,000 - $90,000/year',
      description: 'As a Project Engineer, you\'ll support project managers in delivering structural engineering projects, prepare calculations, develop drawings, and coordinate with clients and contractors.'
    },
    {
      id: 'structural-designer',
      title: 'Structural Designer',
      location: 'New York, NY',
      type: 'Full-time',
      salaryRange: '$65,000 - $85,000/year',
      description: 'We are seeking a detail-oriented Structural Designer to prepare structural drawings and models, assist with calculations, and contribute to design documentation.'
    },
    {
      id: 'engineering-intern',
      title: 'Engineering Intern',
      location: 'Multiple Locations',
      type: 'Part-time',
      salaryRange: '$25 - $30/hour',
      description: 'Gain valuable experience as an Engineering Intern at Finite Element Designs. You\'ll learn from experienced engineers, assist with real projects, and develop practical skills in structural engineering.'
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
              Join Our <span className="text-fe-orange">Team</span>
            </h1>
            <p className="text-gray-200 text-lg max-w-2xl">
              Discover exciting career opportunities at Finite Element Designs and become part of a team dedicated to innovation, excellence, and making a positive impact through structural engineering.
            </p>
          </div>
        </div>
      </section>
      
      {/* Why Join Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="reveal-on-scroll">
              <img 
                src="/lovable-uploads/850ee037-d3e1-429c-adb4-1eb8ac43182c.png" 
                alt="Team collaboration" 
                className="w-full h-auto rounded-lg shadow-xl" 
              />
            </div>
            
            <div className="reveal-on-scroll" style={{ animationDelay: '300ms' }}>
              <span className="text-fe-orange font-medium">Why Join Us</span>
              <h2 className="text-3xl md:text-4xl font-bold text-fe-blue mt-2 mb-6">
                Build Your Career with Us
              </h2>
              
              <p className="text-gray-700 mb-6">
                At Finite Element Designs, we believe our greatest asset is our people. We foster a collaborative, inclusive, and innovative work environment where talented engineers can grow professionally while contributing to meaningful projects that shape our built environment.
              </p>
              
              <p className="text-gray-700 mb-6">
                Join our team of passionate professionals who are committed to excellence in structural engineering. You'll have opportunities to work on diverse, challenging projects, develop your skills, and advance your career while making a tangible impact.
              </p>
              
              <div className="mt-8">
                <h3 className="text-xl font-semibold text-fe-blue mb-4">What We Look For:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-fe-orange mr-2 mt-1">●</span>
                    <span className="text-gray-700">Passion for structural engineering and design</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-fe-orange mr-2 mt-1">●</span>
                    <span className="text-gray-700">Creative problem-solving abilities</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-fe-orange mr-2 mt-1">●</span>
                    <span className="text-gray-700">Commitment to technical excellence</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-fe-orange mr-2 mt-1">●</span>
                    <span className="text-gray-700">Collaborative mindset and team orientation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-fe-orange mr-2 mt-1">●</span>
                    <span className="text-gray-700">Drive for continuous learning and improvement</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 reveal-on-scroll">
            <span className="text-fe-orange font-medium">Employee Benefits</span>
            <h2 className="text-3xl md:text-4xl font-bold text-fe-blue mt-2 mb-6">
              Why You'll Love Working Here
            </h2>
            <p className="text-gray-700">
              We offer a comprehensive benefits package designed to support your professional growth, well-being, and work-life balance.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className="bg-white p-8 rounded-lg shadow-md flex items-start reveal-on-scroll"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="mr-5 mt-1 bg-fe-blue bg-opacity-10 p-3 rounded-full">
                  {benefit.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-fe-blue mb-3">{benefit.title}</h3>
                  <p className="text-gray-700">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Current Openings */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 reveal-on-scroll">
            <span className="text-fe-orange font-medium">Open Positions</span>
            <h2 className="text-3xl md:text-4xl font-bold text-fe-blue mt-2 mb-6">
              Current Job Openings
            </h2>
            <p className="text-gray-700">
              Explore our available positions and find the perfect opportunity to contribute your talents and advance your career.
            </p>
          </div>
          
          <div className="space-y-8">
            {jobOpenings.map((job, index) => (
              <CareerPosition
                key={job.id}
                id={job.id}
                title={job.title}
                location={job.location}
                type={job.type as any}
                salaryRange={job.salaryRange}
                description={job.description}
                delay={index * 100}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Application Process */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 reveal-on-scroll" style={{ animationDelay: '300ms' }}>
              <span className="text-fe-orange font-medium">How to Apply</span>
              <h2 className="text-3xl md:text-4xl font-bold text-fe-blue mt-2 mb-6">
                Our Application Process
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-fe-teal rounded-full w-8 h-8 flex items-center justify-center text-white font-bold flex-shrink-0 mt-0.5 mr-4">1</div>
                  <div>
                    <h3 className="text-lg font-semibold text-fe-blue mb-2">Application Review</h3>
                    <p className="text-gray-700">Submit your application online. Our team will review your qualifications and experience carefully.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-fe-teal rounded-full w-8 h-8 flex items-center justify-center text-white font-bold flex-shrink-0 mt-0.5 mr-4">2</div>
                  <div>
                    <h3 className="text-lg font-semibold text-fe-blue mb-2">Initial Interview</h3>
                    <p className="text-gray-700">Selected candidates will be invited for an initial interview to discuss your background and interest in the position.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-fe-teal rounded-full w-8 h-8 flex items-center justify-center text-white font-bold flex-shrink-0 mt-0.5 mr-4">3</div>
                  <div>
                    <h3 className="text-lg font-semibold text-fe-blue mb-2">Technical Assessment</h3>
                    <p className="text-gray-700">Depending on the role, you may be asked to complete a technical assessment or case study to demonstrate your skills.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-fe-teal rounded-full w-8 h-8 flex items-center justify-center text-white font-bold flex-shrink-0 mt-0.5 mr-4">4</div>
                  <div>
                    <h3 className="text-lg font-semibold text-fe-blue mb-2">Final Interview</h3>
                    <p className="text-gray-700">Meet with team leaders and potential colleagues to learn more about the role and our company culture.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-fe-teal rounded-full w-8 h-8 flex items-center justify-center text-white font-bold flex-shrink-0 mt-0.5 mr-4">5</div>
                  <div>
                    <h3 className="text-lg font-semibold text-fe-blue mb-2">Offer & Onboarding</h3>
                    <p className="text-gray-700">Successful candidates will receive an offer and begin our comprehensive onboarding process.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2 reveal-on-scroll">
              <img 
                src="/lovable-uploads/aeb304dd-e51e-4c82-87d5-1d997a4858d0.png" 
                alt="Application process" 
                className="w-full h-auto rounded-lg shadow-xl" 
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-fe-orange">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center reveal-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              No Suitable Openings?
            </h2>
            <p className="text-white text-lg mb-8 max-w-2xl mx-auto opacity-90">
              We're always interested in connecting with talented professionals. Submit your resume for future opportunities, and we'll contact you when a suitable position becomes available.
            </p>
            <a 
              href="/contact" 
              className="button-primary bg-white text-fe-orange hover:bg-gray-100"
            >
              Submit Your Resume
            </a>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Careers;
