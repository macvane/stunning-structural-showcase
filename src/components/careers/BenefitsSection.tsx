
import React from 'react';
import { CheckCircle2, GraduationCap, Heart, TrendingUp } from 'lucide-react';

interface Benefit {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const BenefitsSection: React.FC = () => {
  const benefits: Benefit[] = [
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

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 reveal-on-scroll">
          <span className="text-fe-light-blue font-medium">Employee Benefits</span>
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
  );
};

export default BenefitsSection;
