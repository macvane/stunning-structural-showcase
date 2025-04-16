import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '@/components/layouts/PageLayout';
import ProjectCard from '@/components/ui/ProjectCard';

const Portfolio = () => {
  // Filter categories
  const categories = [
    'All',
    'Commercial',
    'Residential',
    'Industrial',
    'Institutional',
    'Infrastructure'
  ];

  const [activeFilter, setActiveFilter] = useState('All');
  const [visibleStats, setVisibleStats] = useState(false);
  const statsRef = useRef(null);
  const [projectsCount, setProjectsCount] = useState(0);
  const [yearsCount, setYearsCount] = useState(0);
  const [engineersCount, setEngineersCount] = useState(0);

  // Projects data
  const projects = [
    {
      id: '1',
      title: 'Key West Apartments',
      category: 'Residential',
      location: 'Key West, NA',
      imageUrl: 'assets/Projects/KEY WEST APARTMENTS/DSC06699.JPG'
    },
    {
      id: '2',
      title: 'Hays Suites Hotel',
      category: 'Real Estate',
      location: 'Kilimani, Wool Avenue',
      imageUrl: '/v2 projects/image8.jpg'
    },
    {
      id: '3',
      title: 'Wool Avenue Hotel',
      category: 'Institutional',
      location: 'Kilimani, Wool Avenue',
      imageUrl: '/v2 projects/image13.jpg'
    },
    {
      id: '4',
      title: 'Cradle Hotel',
      category: 'Recreational',
      location: 'Kakuma, Turkana',
      imageUrl: '/v2 projects/image18.jpg'
    },
    {
      id: '5',
      title: 'Residential at Kiambu',
      category: 'Residential',
      location: 'Mwihoko, Kiambu',
      imageUrl: '/v2 projects/image10.jpg'
    },
    {
      id: '6',
      title: 'Affordable Housing Inspection',
      category: 'Residential',
      location: 'Alego, Usonga',
      imageUrl: '/v2 projects/image22.jpg'
    },
    {
      id: '7',
      title: 'Residential Home',
      category: 'Residential',
      location: ' Kagwe, Githinguri',
      imageUrl: '/v2 projects/image11.jpg'
    },
    {
      id: '8',
      title: 'Raft Foundation Works',
      category: 'Infrastructure',
      location: 'Cornerstone SDA Church, Nairobi',
      imageUrl: '/v2 projects/image28.jpg'
    },
    {
      id: '9',
      title: 'Otuke Residential Home',
      category: 'Residential',
      location: 'Otuke, Uganda',
      imageUrl: '/v2 projects/image30.jpg'
    },
    {
      id: '10',
      title: 'Hays Suites Hotel',
      category: 'Residential',
      location: 'Wool Avenue, Kilimani',
      imageUrl: '/v2 projects/image6.jpg'
    },
    {
      id: '11',
      title: 'Imperial Suites',
      category: 'Residential',
      location: 'Ruiru, Kiambu',
      imageUrl: '/v2 projects/image23.jpg'
    },
    {
      id: '12',
      title: 'Residential Home',
      category: 'Residential',
      location: 'Mwihoko, Kiambu',
      imageUrl: '/v2 projects/image25.jpg'
    },
    {
      id: '13',
      title: 'Residential Home',
      category: 'Residential',
      location: 'Nairobi',
      imageUrl: '/v2 projects/image35.jpg'
    },
    {
      id: '14',
      title: 'Lenana Residential Buildings',
      category: 'Residential',
      location: 'Lenana, Nairobi',
      imageUrl: '/v2 projects/image32.JPG'
    },
    {
      id: '15',
      title: 'Cradle Hotel',
      category: 'Commercial',
      location: 'Kakuma, Turkana',
      imageUrl: '/v2 projects/image17.jpg'
    }

  ];

  // Filter logic
  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  // Counter animation effect
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisibleStats(true);
        }
      },
      { threshold: 0.1 }
    );
    
    if (statsRef.current) {
      observer.observe(statsRef.current);
    }
    
    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, []);

  // Increment counters
  useEffect(() => {
    if (!visibleStats) return;
    
    const projectsTarget = 150;
    const yearsTarget = 10;
    const engineersTarget = 30;
    const duration = 2000; // 2 seconds
    const frameDuration = 1000 / 60; // 60fps
    const totalFrames = Math.round(duration / frameDuration);
    
    let projectsFrame = 0;
    let yearsFrame = 0;
    let engineersFrame = 0;
    
    const projectsCounter = setInterval(() => {
      projectsFrame++;
      const progress = projectsFrame / totalFrames;
      setProjectsCount(Math.floor(progress * projectsTarget));
      
      if (projectsFrame === totalFrames) {
        clearInterval(projectsCounter);
        setProjectsCount(projectsTarget);
      }
    }, frameDuration);
    
    const yearsCounter = setInterval(() => {
      yearsFrame++;
      const progress = yearsFrame / totalFrames;
      setYearsCount(Math.floor(progress * yearsTarget));
      
      if (yearsFrame === totalFrames) {
        clearInterval(yearsCounter);
        setYearsCount(yearsTarget);
      }
    }, frameDuration);
    
    const engineersCounter = setInterval(() => {
      engineersFrame++;
      const progress = engineersFrame / totalFrames;
      setEngineersCount(Math.floor(progress * engineersTarget));
      
      if (engineersFrame === totalFrames) {
        clearInterval(engineersCounter);
        setEngineersCount(engineersTarget);
      }
    }, frameDuration);
    
    return () => {
      clearInterval(projectsCounter);
      clearInterval(yearsCounter);
      clearInterval(engineersCounter);
    };
  }, [visibleStats]);

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
              Our <span className="text-fe-orange">Portfolio</span>
            </h1>
            <p className="text-gray-200 text-lg max-w-2xl">
              Explore our diverse range of structural engineering projects, demonstrating our expertise, innovation, and commitment to excellence across various sectors.
            </p>
          </div>
        </div>
      </section>
      
      {/* Portfolio Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center mb-12 reveal-on-scroll">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-5 py-2 mx-2 my-2 rounded-full transition-all duration-300 ${
                  activeFilter === category
                    ? 'bg-fe-teal text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                onClick={() => setActiveFilter(category)}
              >
                {category}
              </button>
            ))}
          </div>
          
          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="block group overflow-hidden rounded-lg shadow-md reveal-on-scroll"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={project.imageUrl} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-fe-blue via-transparent to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300"></div>
                  
                  <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                    <span className="text-sm font-medium uppercase tracking-wider text-fe-light-teal mb-2">{project.category}</span>
                    <h3 className="text-xl font-semibold mb-1 transition-transform duration-300 group-hover:translate-x-2">{project.title}</h3>
                    <p className="text-sm text-gray-200">{project.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* No Results Message */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-xl text-gray-600">No projects found in this category.</h3>
              <button
                className="mt-4 button-secondary"
                onClick={() => setActiveFilter('All')}
              >
                Show All Projects
              </button>
            </div>
          )}
        </div>
      </section>
      
      {/* Stats Section */}
      <section ref={statsRef} className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8">
            <div className="text-center p-6 reveal-on-scroll">
              <div className="text-4xl font-bold text-fe-teal mb-2">{projectsCount}+</div>
              <p className="text-gray-700">Projects Completed</p>
            </div>
            <div className="text-center p-6 reveal-on-scroll" style={{ animationDelay: '100ms' }}>
              <div className="text-4xl font-bold text-fe-teal mb-2">{yearsCount}+</div>
              <p className="text-gray-700">Years of Experience</p>
            </div>
            <div className="text-center p-6 reveal-on-scroll" style={{ animationDelay: '200ms' }}>
              <div className="text-4xl font-bold text-fe-teal mb-2">{engineersCount}+</div>
              <p className="text-gray-700">Professional Engineers</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 relative bg-fe-blue">
        <div className="absolute inset-0 opacity-10">
          <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
            <pattern id="pattern-grid" width="30" height="30" patternUnits="userSpaceOnUse">
              <path d="M 30 0 L 0 0 0 30" fill="none" stroke="white" strokeWidth="1"/>
            </pattern>
            <rect width="100%" height="100%" fill="url(#pattern-grid)" />
          </svg>
        </div>
        
        <div className="container relative z-10 mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center reveal-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-gray-200 text-lg mb-8 max-w-2xl mx-auto">
              Contact us today to discuss how our structural engineering expertise can bring your vision to life, delivering innovative and efficient solutions.
            </p>
            <Link 
              to="/contact" 
              className="button-primary bg-white text-fe-blue hover:bg-gray-100"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Portfolio;
