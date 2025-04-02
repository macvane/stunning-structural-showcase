
import React from 'react';
import CareerPosition from '@/components/ui/CareerPosition';

export interface JobOpening {
  id: string;
  title: string;
  location: string;
  type: 'Full-time' | 'Part-time' | 'Contract' | 'Remote';
  salaryRange: string;
  description: string;
}

const JobOpeningsSection: React.FC = () => {
  const jobOpenings: JobOpening[] = [
    {
      id: 'senior-structural-engineer',
      title: 'Senior Structural Engineer',
      location: 'San Francisco, CA',
      type: 'Full-time',
      salaryRange: '',
      description: 'We are seeking an experienced Senior Structural Engineer to lead complex projects from concept to completion. The ideal candidate will have expertise in advanced analysis techniques and a track record of successful project delivery.'
    },
    {
      id: 'structural-engineer',
      title: 'Structural Engineer',
      location: 'Boston, MA',
      type: 'Full-time',
      salaryRange: '',
      description: 'Join our team as a Structural Engineer responsible for analyzing and designing structural systems for various projects. You\'ll work closely with senior engineers and contribute to innovative design solutions.'
    },
    {
      id: 'bim-specialist',
      title: 'BIM Specialist',
      location: 'Remote',
      type: 'Full-time',
      salaryRange: '',
      description: 'We\'re looking for a Building Information Modeling (BIM) Specialist to enhance our 3D modeling capabilities. You\'ll develop and maintain BIM standards, create detailed structural models, and coordinate with other disciplines.'
    },
    {
      id: 'project-engineer',
      title: 'Project Engineer',
      location: 'Chicago, IL',
      type: 'Full-time',
      salaryRange: '',
      description: 'As a Project Engineer, you\'ll support project managers in delivering structural engineering projects, prepare calculations, develop drawings, and coordinate with clients and contractors.'
    },
    {
      id: 'structural-designer',
      title: 'Structural Designer',
      location: 'New York, NY',
      type: 'Full-time',
      salaryRange: '',
      description: 'We are seeking a detail-oriented Structural Designer to prepare structural drawings and models, assist with calculations, and contribute to design documentation.'
    },
    {
      id: 'engineering-intern',
      title: 'Engineering Intern',
      location: 'Multiple Locations',
      type: 'Part-time',
      salaryRange: '',
      description: 'Gain valuable experience as an Engineering Intern at Finite Element Designs. You\'ll learn from experienced engineers, assist with real projects, and develop practical skills in structural engineering.'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 reveal-on-scroll">
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
              salaryRange={job.salaryRange}
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
