
import React from 'react';
import { Link } from 'react-router-dom';

const ProjectsSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
          <div className="max-w-2xl reveal-on-scroll">
            <span className="text-fe-orange font-medium">Featured Projects</span>
            <h2 className="text-3xl md:text-4xl font-bold text-fe-blue mt-2 mb-4">
              Our Recent Work
            </h2>
            <p className="text-gray-700">
              Explore our portfolio of innovative structural engineering projects that showcase our expertise and commitment to excellence.
            </p>
          </div>
          
          <Link 
            to="/portfolio" 
            className="button-primary mt-6 md:mt-0 reveal-on-scroll"
            style={{ animationDelay: '200ms' }}
          >
            View All Projects
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="reveal-on-scroll">
            <div className="group block relative rounded-lg overflow-hidden shadow-lg h-80">
              <img 
                src="/assets/Projects/KEY WEST APARTMENTS/DSC06700.JPG" 
                alt="Commercial high-rise project" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-fe-blue via-transparent to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-0 p-6 text-white">
                <span className="text-sm font-medium uppercase tracking-wider text-fe-light-teal">Residential</span>
                <h3 className="text-xl font-semibold mt-1 transition-transform duration-300 group-hover:translate-x-2">Key West Apartments</h3>
                <p className="text-sm text-gray-200">Key West, NA</p>
              </div>
            </div>
          </div>
          
          <div className="reveal-on-scroll" style={{ animationDelay: '200ms' }}>
            <div className="group block relative rounded-lg overflow-hidden shadow-lg h-80">
              <img 
                src="/v2 projects/image10.jpg" 
                alt="Bridge engineering project" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-fe-blue via-transparent to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-0 p-6 text-white">
                <span className="text-sm font-medium uppercase tracking-wider text-fe-light-teal">Residential</span>
                <h3 className="text-xl font-semibold mt-1 transition-transform duration-300 group-hover:translate-x-2">Residential Home</h3>
                <p className="text-sm text-gray-200">Mwihoko, Kiambu</p>
              </div>
            </div>
          </div>
          
          <div className="reveal-on-scroll" style={{ animationDelay: '400ms' }}>
            <div className="group block relative rounded-lg overflow-hidden shadow-lg h-80">
              <img 
                src="/v2 projects/image3.jpg" 
                alt="Institutional building project" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-fe-blue via-transparent to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-0 p-6 text-white">
                <span className="text-sm font-medium uppercase tracking-wider text-fe-light-teal">Residential</span>
                <h3 className="text-xl font-semibold mt-1 transition-transform duration-300 group-hover:translate-x-2">Otuke Residential Home</h3>
                <p className="text-sm text-gray-200">Wool Avenue, Kilimani</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
