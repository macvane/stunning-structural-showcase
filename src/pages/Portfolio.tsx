
import React, { useState } from 'react';
import PageLayout from '@/components/layouts/PageLayout';
import ProjectCard from '@/components/ui/ProjectCard';
import { Link } from 'react-router-dom';

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

  // Projects data
  const projects = [
    {
      id: '1',
      title: 'Azure Tower',
      category: 'Commercial',
      location: 'San Francisco, CA',
      imageUrl: 'https://i.pinimg.com/736x/0e/1b/d3/0e1bd3613b49cab584ce34ca41d9e346.jpg'
    },
    {
      id: '2',
      title: 'Riverfront Bridge',
      category: 'Infrastructure',
      location: 'Portland, OR',
      imageUrl: 'https://i.pinimg.com/736x/43/c6/9b/43c69bd5ad7050899887aa4d8b611809.jpg'
    },
    {
      id: '3',
      title: 'Science Innovation Center',
      category: 'Institutional',
      location: 'Boston, MA',
      imageUrl: 'https://i.pinimg.com/736x/84/18/09/841809fbb44ad69ef93da6bffebfb02e.jpg'
    },
    {
      id: '4',
      title: 'Skyline Residences',
      category: 'Residential',
      location: 'Chicago, IL',
      imageUrl: 'https://i.pinimg.com/736x/3c/42/37/3c4237d030e8cdf4777b42cc7c59bd65.jpg'
    },
    {
      id: '5',
      title: 'Manufacturing Facility',
      category: 'Industrial',
      location: 'Detroit, MI',
      imageUrl: 'https://i.pinimg.com/736x/42/49/b1/4249b1466fbe8aab9411240b80b2432a.jpg'
    },
    {
      id: '6',
      title: 'Harbor Point Tower',
      category: 'Commercial',
      location: 'New York, NY',
      imageUrl: 'https://i.pinimg.com/736x/df/a3/f8/dfa3f87709c249a483d716e46e9baf16.jpg'
    },
    {
      id: '7',
      title: 'Ocean View Apartments',
      category: 'Residential',
      location: 'Miami, FL',
      imageUrl: 'https://i.pinimg.com/736x/38/e8/2b/38e82bc517c607692a8e929558c80324.jpg'
    },
    {
      id: '8',
      title: 'Coastal Highway Bridge',
      category: 'Infrastructure',
      location: 'Seattle, WA',
      imageUrl: 'https://i.pinimg.com/736x/28/3d/ff/283dffc3cd14a04a408b509abaa54c08.jpg'
    },
    {
      id: '9',
      title: 'University Research Center',
      category: 'Institutional',
      location: 'Austin, TX',
      imageUrl: 'https://i.pinimg.com/736x/ea/08/a0/ea08a08ce9eb06dd1151916b12ce90a3.jpg'
    }
  ];

  // Filter projects based on active category
  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

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
              <ProjectCard
                key={project.id}
                id={project.id}
                title={project.title}
                category={project.category}
                location={project.location}
                imageUrl={project.imageUrl}
                delay={index * 100}
              />
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
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8">
            <div className="text-center p-6 reveal-on-scroll">
              <div className="text-4xl font-bold text-fe-teal mb-2">150+</div>
              <p className="text-gray-700">Projects Completed</p>
            </div>
            <div className="text-center p-6 reveal-on-scroll" style={{ animationDelay: '100ms' }}>
              <div className="text-4xl font-bold text-fe-teal mb-2">10+</div>
              <p className="text-gray-700">Years of Experience</p>
            </div>
            <div className="text-center p-6 reveal-on-scroll" style={{ animationDelay: '200ms' }}>
              <div className="text-4xl font-bold text-fe-teal mb-2">30+</div>
              <p className="text-gray-700">Professional Engineers</p>
            </div>
            {/* <div className="text-center p-6 reveal-on-scroll" style={{ animationDelay: '300ms' }}>
              <div className="text-4xl font-bold text-fe-teal mb-2">15</div>
              <p className="text-gray-700">Design Awards</p>
            </div> */}
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
