
import React, { useEffect, useRef } from 'react';
import CareerPosition from '@/components/ui/CareerPosition';

export interface JobOpening {
  id: string;
  title: string;
  location: string;
  type: 'Full-time' | 'Part-time' | 'Contract' | 'Remote';
  description: string;
}

const JobOpeningsSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const jobOpenings: JobOpening[] = [
    {
      id: 'senior-structural-engineer',
      title: 'Senior Structural Engineer',
      location: 'Nairobi, Kenya',
      type: 'Full-time',
      description: 'We are seeking an experienced Senior Structural Engineer to lead complex projects from concept to completion. The ideal candidate will have expertise in advanced analysis techniques and a track record of successful project delivery.'
    },
    {
      id: 'structural-engineer',
      title: 'Civil Engineer',
      location: 'Nairobi, Kenya',
      type: 'Full-time',
      description: 'Join our team as a Civil Engineer responsible for analyzing and designing structural systems for various projects. You\'ll work closely with senior engineers and contribute to innovative design solutions.'
    },
    {
      id: 'bim-specialist',
      title: 'Office Assistant',
      location: 'Nairobi, Kenya',
      type: 'Full-time',
      description: 'Seeking a detail-oriented and organized Office Assistant to handle administrative tasks, support daily operations, and ensure smooth office functioning.'
    },
    {
      id: 'project-engineer',
      title: 'Steel Fabricator',
      location: 'Nairobi, Kenya',
      type: 'Full-time',
      description: 'As a Steel Fabricator, you will cut, weld, and assemble metal components, interpret blueprints, and ensure high-quality, precise fabrication in a fast-paced environment.'
    },
    {
      id: 'structural-designer',
      title: 'Driver',
      location: 'Nairobi, Kenya',
      type: 'Full-time',
      description: 'We are seeking a detail-oriented Structural Designer to prepare structural drawings and models, assist with calculations, and contribute to design documentation.'
    },
    {
      id: 'engineering-intern',
      title: 'Engineering Intern',
      location: 'Multiple Locations',
      type: 'Part-time',
      description: 'Gain valuable experience as an Engineering Intern at Finite Element Designs. You\'ll learn from experienced engineers, assist with real projects, and develop practical skills in structural engineering.'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div ref={sectionRef} className="text-center max-w-3xl mx-auto mb-16 opacity-0 transform translate-y-4">
          <span className="text-fe-light-blue font-medium">Open Positions</span>
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
              type={job.type}
              description={job.description}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default JobOpeningsSection;
