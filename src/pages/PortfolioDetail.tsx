
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import PageLayout from '@/components/layouts/PageLayout';
import { ArrowLeft, MapPin } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const getProjectData = (projectId: string) => {
  const allProjects = [
    {
      id: '1',
      title: 'Azure Tower',
      category: 'Commercial',
      location: 'San Francisco, CA',
      imageUrl: 'https://i.pinimg.com/736x/0e/1b/d3/0e1bd3613b49cab584ce34ca41d9e346.jpg',
      images: [
        'https://i.pinimg.com/736x/0e/1b/d3/0e1bd3613b49cab584ce34ca41d9e346.jpg',
        'https://i.pinimg.com/736x/df/a3/f8/dfa3f87709c249a483d716e46e9baf16.jpg',
        'https://i.pinimg.com/736x/38/e8/2b/38e82bc517c607692a8e929558c80324.jpg'
      ],
      description: 'A 35-story commercial tower featuring cutting-edge sustainable design and state-of-the-art office spaces. The structural system employs a composite steel frame with concrete core, designed to optimize floor space while providing exceptional seismic performance.',
      completionDate: 'March 2023',
      client: 'Pacific Development Group',
      scope: 'Full structural engineering services including design, analysis, and construction support.',
      keyFeatures: [
        'LEED Platinum certified design',
        'Innovative lateral force resisting system',
        'Reduced carbon footprint through material selection',
        'Floor vibration analysis for sensitive tenant equipment'
      ],
      challenges: 'The site\'s proximity to a seismic fault line required special consideration in the structural design. Additionally, the client\'s request for column-free corner offices presented unique structural challenges that were solved through innovative transfer beam systems.',
      results: 'The project was delivered on schedule and within budget, earning recognition for its innovative structural solutions. The building has achieved 95% occupancy within six months of completion.'
    },
    {
      id: '2',
      title: 'Riverfront Bridge',
      category: 'Infrastructure',
      location: 'Portland, OR',
      imageUrl: 'https://i.pinimg.com/736x/43/c6/9b/43c69bd5ad7050899887aa4d8b611809.jpg',
      images: [
        'https://i.pinimg.com/736x/43/c6/9b/43c69bd5ad7050899887aa4d8b611809.jpg',
        'https://i.pinimg.com/736x/28/3d/ff/283dffc3cd14a04a408b509abaa54c08.jpg',
        'https://i.pinimg.com/736x/42/49/b1/4249b1466fbe8aab9411240b80b2432a.jpg'
      ],
      description: 'A 450-foot cable-stayed pedestrian bridge connecting two vibrant neighborhoods across the river. The innovative design features a slender deck supported by asymmetric cables, creating both a functional crossing and an architectural landmark.',
      completionDate: 'August 2022',
      client: 'City of Portland',
      scope: 'Structural design, analysis, and construction oversight.',
      keyFeatures: [
        'Asymmetric cable-stayed design',
        'Vibration-damping technology',
        'LED integrated lighting system',
        'Weather-resistant deck materials'
      ],
      challenges: 'Construction over an active waterway presented significant logistical challenges. Environmental restrictions limited construction methods and timing. The iconic design required precision engineering to ensure stability under dynamic pedestrian loads and wind forces.',
      results: 'The bridge has become a city landmark, featured in tourism materials, and has increased pedestrian traffic between the previously disconnected neighborhoods by over 200%.'
    },
    {
      id: '3',
      title: 'Science Innovation Center',
      category: 'Institutional',
      location: 'Boston, MA',
      imageUrl: 'https://i.pinimg.com/736x/84/18/09/841809fbb44ad69ef93da6bffebfb02e.jpg',
      description: 'A cutting-edge research facility designed to foster collaboration between academic and industry scientists. The building incorporates long-span structural systems to create flexible, column-free laboratory spaces.',
      completionDate: 'January 2023',
      client: 'Massachusetts Institute of Science',
      scope: 'Comprehensive structural engineering services from concept through construction.'
    },
    {
      id: '4',
      title: 'Skyline Residences',
      category: 'Residential',
      location: 'Chicago, IL',
      imageUrl: 'https://i.pinimg.com/736x/3c/42/37/3c4237d030e8cdf4777b42cc7c59bd65.jpg',
      description: 'A luxury residential tower with 220 units featuring cantilevered balconies and a unique shifting floor plate design. The structural system was carefully optimized to accommodate the architectural vision while maintaining cost efficiency.',
      completionDate: 'May 2022',
      client: 'Urban Living Developers',
      scope: 'Full structural engineering services and construction administration.'
    },
    {
      id: '5',
      title: 'Manufacturing Facility',
      category: 'Industrial',
      location: 'Detroit, MI',
      imageUrl: 'https://i.pinimg.com/736x/42/49/b1/4249b1466fbe8aab9411240b80b2432a.jpg',
      description: 'A state-of-the-art manufacturing facility with 120,000 square feet of production space. The structural design incorporates long-span trusses to create column-free manufacturing areas with overhead crane systems throughout.',
      completionDate: 'September 2021',
      client: 'American Manufacturing Inc.',
      scope: 'Structural design, analysis, and construction support services.'
    },
    {
      id: '6',
      title: 'Harbor Point Tower',
      category: 'Commercial',
      location: 'New York, NY',
      imageUrl: 'https://i.pinimg.com/736x/df/a3/f8/dfa3f87709c249a483d716e46e9baf16.jpg',
      description: 'A 42-story mixed-use tower with retail, office, and residential components. The structural system features a concrete core with steel outrigger system to control building drift while maximizing usable floor area.',
      completionDate: 'July 2023',
      client: 'Harbor Development LLC',
      scope: 'Complete structural engineering services from concept through construction.'
    },
    {
      id: '7',
      title: 'Ocean View Apartments',
      category: 'Residential',
      location: 'Miami, FL',
      imageUrl: 'https://i.pinimg.com/736x/38/e8/2b/38e82bc517c607692a8e929558c80324.jpg',
      description: 'A luxury beachfront residential complex with 175 units across three buildings. The structural design addresses challenging coastal conditions, including hurricane-force winds and corrosive environment.',
      completionDate: 'April 2022',
      client: 'Coastal Properties Group',
      scope: 'Full structural engineering services including specialized wind engineering analysis.'
    },
    {
      id: '8',
      title: 'Coastal Highway Bridge',
      category: 'Infrastructure',
      location: 'Seattle, WA',
      imageUrl: 'https://i.pinimg.com/736x/28/3d/ff/283dffc3cd14a04a408b509abaa54c08.jpg',
      description: 'A 1,200-foot span bridge carrying six lanes of traffic over a sensitive marine environment. The structural solution utilized post-tensioned concrete box girders to achieve the required spans while minimizing environmental impact.',
      completionDate: 'November 2022',
      client: 'Washington State Department of Transportation',
      scope: 'Structural design, analysis, and construction phase services.'
    },
    {
      id: '9',
      title: 'University Research Center',
      category: 'Institutional',
      location: 'Austin, TX',
      imageUrl: 'https://i.pinimg.com/736x/ea/08/a0/ea08a08ce9eb06dd1151916b12ce90a3.jpg',
      description: 'A 85,000 square foot research facility featuring specialized laboratories and collaborative spaces. The structural design accommodates vibration-sensitive equipment and flexible layout requirements.',
      completionDate: 'February 2023',
      client: 'University of Texas',
      scope: 'Comprehensive structural engineering services including specialized vibration analysis.'
    }
  ];

  return allProjects.find(project => project.id === projectId) || null;
};

const PortfolioDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [project, setProject] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  
  useEffect(() => {
    if (id) {
      const projectData = getProjectData(id);
      setProject(projectData);
      setLoading(false);
    }
  }, [id]);
  
  if (loading) {
    return (
      <PageLayout>
        <div className="container mx-auto px-4 pt-32 pb-20">
          <div className="flex items-center justify-center h-64">
            <div className="text-xl text-gray-600">Loading project details...</div>
          </div>
        </div>
      </PageLayout>
    );
  }
  
  if (!project) {
    return (
      <PageLayout>
        <div className="container mx-auto px-4 pt-32 pb-20">
          <div className="flex flex-col items-center justify-center h-64">
            <div className="text-xl text-gray-600 mb-4">Project not found</div>
            <Link to="/portfolio" className="button-secondary">
              Back to Portfolio
            </Link>
          </div>
        </div>
      </PageLayout>
    );
  }
  
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
          <div className="flex items-center space-x-2 text-gray-200 mb-4">
            <Link to="/portfolio" className="flex items-center hover:text-white transition-colors">
              <ArrowLeft className="h-4 w-4 mr-1" />
              Back to Portfolio
            </Link>
          </div>
          
          <div className="max-w-3xl">
            <span className="text-fe-orange font-medium">{project.category}</span>
            <h1 className="text-white text-4xl md:text-5xl font-bold mb-4">
              {project.title}
            </h1>
            <div className="flex items-center text-gray-200">
              <MapPin className="h-5 w-5 mr-2 text-fe-light-teal" />
              {project.location}
            </div>
          </div>
        </div>
      </section>
      
      {/* Project Details */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Project Image Carousel and Description */}
            <div className="lg:col-span-2 reveal-on-scroll">
              {/* Image Carousel */}
              <div className="mb-8 rounded-lg overflow-hidden shadow-lg">
                <Carousel className="w-full">
                  <CarouselContent>
                    {project.images?.map((image: string, index: number) => (
                      <CarouselItem key={index}>
                        <div className="p-1">
                          <div className="overflow-hidden rounded-lg">
                            <img 
                              src={image} 
                              alt={`${project.title} - Image ${index + 1}`}
                              className="w-full h-[400px] object-cover"
                            />
                          </div>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <div className="flex justify-center mt-4">
                    <CarouselPrevious className="relative mr-4 translate-y-0 left-0" />
                    <CarouselNext className="relative ml-4 translate-y-0 right-0" />
                  </div>
                </Carousel>
              </div>
              
              <div className="mt-8">
                <h2 className="text-2xl font-bold text-fe-blue mb-4">Project Overview</h2>
                <p className="text-gray-700 mb-6">{project.description}</p>
                
                {project.keyFeatures && (
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-fe-blue mb-3">Key Features</h3>
                    <ul className="list-disc pl-5 space-y-1">
                      {project.keyFeatures.map((feature: string, index: number) => (
                        <li key={index} className="text-gray-700">{feature}</li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {project.challenges && (
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-fe-blue mb-3">Challenges</h3>
                    <p className="text-gray-700">{project.challenges}</p>
                  </div>
                )}
                
                {project.results && (
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-fe-blue mb-3">Results</h3>
                    <p className="text-gray-700">{project.results}</p>
                  </div>
                )}
              </div>
            </div>
            
            {/* Project Info Sidebar */}
            <div className="lg:col-span-1">
              <Card className="shadow-md reveal-on-scroll" style={{ animationDelay: '200ms' }}>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-fe-blue mb-4">Project Details</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-gray-500">Category</p>
                      <p className="font-medium">{project.category}</p>
                    </div>
                    
                    <div>
                      <p className="text-sm text-gray-500">Location</p>
                      <p className="font-medium">{project.location}</p>
                    </div>
                    
                    <div>
                      <p className="text-sm text-gray-500">Completed</p>
                      <p className="font-medium">{project.completionDate}</p>
                    </div>
                    
                    <div>
                      <p className="text-sm text-gray-500">Client</p>
                      <p className="font-medium">{project.client}</p>
                    </div>
                    
                    <div>
                      <p className="text-sm text-gray-500">Scope of Work</p>
                      <p className="font-medium">{project.scope}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <div className="mt-8 reveal-on-scroll" style={{ animationDelay: '400ms' }}>
                <h3 className="text-xl font-semibold text-fe-blue mb-4">Contact Us</h3>
                <p className="text-gray-700 mb-6">
                  Interested in learning more about this project or have a similar project to discuss?
                </p>
                <Link 
                  to="/contact" 
                  className="button-primary w-full text-center"
                >
                  Get in Touch
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default PortfolioDetail;
