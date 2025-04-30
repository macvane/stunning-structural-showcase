import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import PageLayout from '@/components/layouts/PageLayout';
import { MapPin, Clock, ArrowLeft, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import JobDetailHero from '@/components/careers/JobDetailHero';

// Define the JobOpening interface at the top of the file
export interface JobOpening {
  id: string;
  title: string;
  location: string;
  type: string;
  description: string;
}

// Job data - moved from the component to make it cleaner
const jobOpenings: JobOpening[] = [
  {
    id: 'senior-structural-engineer',
    title: 'Senior Structural Engineer',
    location: 'Nairobi, Kenya',
    type: 'Full-time',
    description: 'Lead structural engineering projects, mentor junior staff, and ensure design quality and code compliance for complex buildings and infrastructure.',
  },
  {
    id: 'structural-engineer',
    title: 'Structural Engineer',
    location: 'Nairobi, Kenya',
    type: 'Full-time',
    description: 'Design structural systems for buildings and infrastructure, prepare calculations and drawings, and coordinate with other disciplines.',
  },
  {
    id: 'bim-specialist',
    title: 'BIM Specialist',
    location: 'Nairobi, Kenya',
    type: 'Full-time',
    description: 'Create and manage detailed BIM models, coordinate with design teams, and implement BIM standards and protocols.',
  },
  {
    id: 'project-engineer',
    title: 'Project Engineer',
    location: 'Nairobi, Kenya',
    type: 'Full-time',
    description: 'Coordinate engineering tasks, assist with project planning, monitor progress, and ensure compliance with codes and requirements.',
  },
  {
    id: 'structural-designer',
    title: 'Structural Designer',
    location: 'Nairobi, Kenya',
    type: 'Full-time',
    description: 'Create detailed structural drawings, assist engineers with calculations, and prepare specifications and quantity takeoffs.',
  },
  {
    id: 'engineering-intern',
    title: 'Engineering Intern',
    location: 'Nairobi, Kenya',
    type: 'Part-time',
    description: 'Assist engineers with calculations and drawings, learn structural engineering principles, and gain practical experience on real projects.',
  }
];

const jobResponsibilities: Record<string, string[]> = {
  'senior-structural-engineer': [
    'Lead the structural design of complex buildings and infrastructure projects',
    'Review and approve structural calculations and drawings',
    'Mentor junior engineers and provide technical guidance',
    'Collaborate with architects and other disciplines to resolve design issues',
    'Conduct site visits to monitor construction and address field issues',
    'Develop and implement quality assurance procedures'
  ],
  'structural-engineer': [
    'Perform structural analysis and calculations for various building systems',
    'Prepare structural designs and construction drawings',
    'Coordinate with other disciplines to integrate structural elements',
    'Participate in design meetings and present technical solutions',
    'Review shop drawings and respond to RFIs during construction',
    'Assist with construction administration tasks'
  ],
  'bim-specialist': [
    'Create and maintain detailed 3D BIM models of structural systems',
    'Establish and enforce BIM standards and protocols',
    'Coordinate structural models with architectural and MEP systems',
    'Generate construction documents from BIM models',
    'Train staff on BIM software and best practices',
    'Resolve modeling conflicts and optimize workflows'
  ],
  'project-engineer': [
    'Coordinate engineering tasks between design team, clients, and contractors',
    'Assist with project planning, scheduling, and resource allocation',
    'Monitor project progress and prepare status reports',
    'Support the preparation of proposals and contract documents',
    'Attend client meetings and site visits to gather information',
    'Ensure compliance with codes, standards, and project requirements'
  ],
  'structural-designer': [
    'Develop detailed structural drawings using CAD and BIM software',
    'Create structural details and connections designs',
    'Assist engineers with calculations and analysis',
    'Prepare material specifications and quantity takeoffs',
    'Support document production and quality control',
    'Coordinate drawing sets and maintain drawing registers'
  ],
  'engineering-intern': [
    'Assist with basic engineering calculations and drawings',
    'Support senior engineers with research and data collection',
    'Learn and apply structural engineering principles to real projects',
    'Help prepare presentations and reports',
    'Participate in design meetings to gain project experience',
    'Document project information and maintain files'
  ]
};

const jobQualifications: Record<string, string[]> = {
  'senior-structural-engineer': [
    'Bachelor\'s or Master\'s degree in Civil/Structural Engineering',
    'Professional Engineering (PE) license required',
    '8+ years of structural engineering experience',
    'Expertise in designing various structural systems and materials',
    'Advanced knowledge of structural analysis software',
    'Experience leading projects and mentoring junior staff',
    'Excellent communication and problem-solving skills'
  ],
  'structural-engineer': [
    'Bachelor\'s or Master\'s degree in Civil/Structural Engineering',
    'Professional Engineering (PE) license or EIT certification',
    '3-7 years of structural engineering experience',
    'Proficiency in structural analysis and design software',
    'Knowledge of building codes and design standards',
    'Experience with various structural materials and systems',
    'Good communication and teamwork skills'
  ],
  'bim-specialist': [
    'Bachelor\'s degree in Engineering, Architecture, or related field',
    '3+ years experience with 3D BIM modeling for structures',
    'Advanced proficiency with Revit, Tekla, or similar BIM software',
    'Understanding of structural systems and construction documentation',
    'Experience with clash detection and model coordination',
    'Knowledge of BIM standards and protocols',
    'Good communication and training skills'
  ],
  'project-engineer': [
    'Bachelor\'s degree in Civil/Structural Engineering',
    '2-5 years of engineering or construction experience',
    'Understanding of project management principles',
    'Familiarity with construction processes and documentation',
    'Good organizational and time management skills',
    'Proficiency with MS Office and project management software',
    'Excellent communication and client relation skills'
  ],
  'structural-designer': [
    'Associate\'s or Bachelor\'s degree in Engineering or related field',
    '2+ years experience with structural drafting or design',
    'Proficiency with CAD and BIM software',
    'Knowledge of structural systems and construction details',
    'Understanding of construction documentation and standards',
    'Attention to detail and quality control',
    'Good communication and teamwork skills'
  ],
  'engineering-intern': [
    'Currently pursuing a degree in Civil/Structural Engineering',
    'Basic understanding of structural engineering principles',
    'Familiarity with CAD software',
    'Strong academic record and eagerness to learn',
    'Good analytical and problem-solving skills',
    'Ability to follow instructions and work in a team',
    'Excellent communication skills'
  ]
};

const JobDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [job, setJob] = useState<JobOpening | null>(null);
  
  useEffect(() => {
    if (!id) return;
    
    // Find the job with the matching ID
    const foundJob = jobOpenings.find((j) => j.id === id);
    
    if (foundJob) {
      setJob(foundJob);
    }
  }, [id]);

  if (!job) {
    return (
      <PageLayout>
        <div className="container mx-auto px-4 py-20">
          <div className="text-center">
            <h2 className="text-2xl font-bold">Loading job details...</h2>
          </div>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      <JobDetailHero 
        title={job.title} 
        location={job.location} 
        type={job.type}
      />

      <div className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <Button 
            variant="ghost" 
            className="mb-6 flex items-center text-fe-blue" 
            onClick={() => navigate('/careers')}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Careers
          </Button>
          
          <div className="bg-white rounded-lg shadow-md p-8 mb-8 animate-fade-in">
            <div className="prose max-w-none mb-8">
              <h2 className="text-xl font-semibold text-fe-blue mb-4">Overview</h2>
              <p className="text-gray-700 mb-6">{job.description}</p>
              
              <h2 className="text-xl font-semibold text-fe-blue mb-4">Key Responsibilities</h2>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                {jobResponsibilities[job.id]?.map((responsibility, index) => (
                  <li key={index} className="text-gray-700">{responsibility}</li>
                ))}
              </ul>
              
              <h2 className="text-xl font-semibold text-fe-blue mb-4">Qualifications</h2>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                {jobQualifications[job.id]?.map((qualification, index) => (
                  <li key={index} className="text-gray-700">{qualification}</li>
                ))}
              </ul>
              
              <h2 className="text-xl font-semibold text-fe-blue mb-4">What We Offer</h2>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li className="text-gray-700">Competitive salary and benefits package</li>
                <li className="text-gray-700">Professional development opportunities</li>
                <li className="text-gray-700">Collaborative and innovative work environment</li>
                <li className="text-gray-700">Work on diverse and challenging projects</li>
                <li className="text-gray-700">Flexible work arrangements</li>
                <li className="text-gray-700">Health and wellness programs</li>
              </ul>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Button 
                className="button-primary flex items-center justify-center"
                onClick={() => navigate(`/careers/apply/${job.id}`)}
              >
                <FileText className="mr-2 h-5 w-5" />
                Apply for this Position
              </Button>
              <Button 
                variant="outline" 
                className="button-secondary"
                onClick={() => {
                  window.location.href = `mailto:finiteelementdesignsltd@gmail.com?subject=Job Inquiry: ${job.title}`;
                }}
              >
                Email Us About This Position
              </Button>
            </div>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-6 border border-gray-200 animate-fade-in">
            <h3 className="text-lg font-semibold text-fe-blue mb-3">How to Apply</h3>
            <p className="text-gray-700 mb-4">
              Submit your application through our online form or email us directly at finiteelementdesignsltd@gmail.com. 
              Please include your resume, cover letter, and any relevant portfolio materials.
            </p>
            <p className="text-gray-700 text-sm">
              Finite Element Designs is an equal opportunity employer. We celebrate diversity and are committed to creating 
              an inclusive environment for all employees.
            </p>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default JobDetail;
