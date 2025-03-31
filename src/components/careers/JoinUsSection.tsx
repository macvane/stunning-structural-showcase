
import React from 'react';

const JoinUsSection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="reveal-on-scroll">
            <img 
              src="/assets/construction-team.jpg" 
              alt="Team collaboration" 
              className="w-full h-auto rounded-lg shadow-xl" 
            />
          </div>
          
          <div className="reveal-on-scroll" style={{ animationDelay: '300ms' }}>
            <span className="text-fe-light-blue font-medium">Why Join Us</span>
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
                  <span className="text-fe-light-teal mr-2 mt-1">●</span>
                  <span className="text-gray-700">Passion for structural engineering and design</span>
                </li>
                <li className="flex items-start">
                  <span className="text-fe-light-teal mr-2 mt-1">●</span>
                  <span className="text-gray-700">Creative problem-solving abilities</span>
                </li>
                <li className="flex items-start">
                  <span className="text-fe-light-teal mr-2 mt-1">●</span>
                  <span className="text-gray-700">Commitment to technical excellence</span>
                </li>
                <li className="flex items-start">
                  <span className="text-fe-light-teal mr-2 mt-1">●</span>
                  <span className="text-gray-700">Collaborative mindset and team orientation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-fe-light-teal mr-2 mt-1">●</span>
                  <span className="text-gray-700">Drive for continuous learning and improvement</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinUsSection;
