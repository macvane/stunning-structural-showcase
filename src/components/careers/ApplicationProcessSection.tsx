
import React from 'react';

const ApplicationProcessSection: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 reveal-on-scroll" style={{ animationDelay: '300ms' }}>
            <span className="text-fe-light-blue font-medium">How to Apply</span>
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
              src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=1170&auto=format&fit=crop" 
              alt="Application process" 
              className="w-full h-auto rounded-lg shadow-xl" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApplicationProcessSection;
