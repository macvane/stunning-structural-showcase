
import React from 'react';
import { Link } from 'react-router-dom';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="reveal-on-scroll">
            <img 
              src="https://i.pinimg.com/736x/9d/22/10/9d22102447131a3279fa020654de9bd5.jpg" 
              alt="Construction engineer reviewing plans" 
              className="w-full h-auto md:h-[34rem] rounded-lg shadow-xl object-cover object-top" 
            />
          </div>
          
          <div className="reveal-on-scroll" style={{ animationDelay: '300ms' }}>
            <span className="text-fe-orange font-medium">About Our Company</span>
            <h2 className="text-3xl md:text-4xl font-bold text-fe-blue mt-2 mb-6">
              Engineering Excellence Since 2015
            </h2>
            
            <p className="text-gray-700 mb-6">
              At Finite Element Designs Ltd, we combine innovative engineering approaches with technical precision to deliver outstanding structural solutions for our clients worldwide. Our team of experienced engineers works tirelessly to ensure each project meets the highest standards of safety, efficiency, and sustainability.
            </p>
            
            <p className="text-gray-700 mb-8">
              With expertise spanning residential, commercial, industrial, and infrastructure projects, we pride ourselves on tackling complex engineering challenges and transforming them into elegant, functional structures that stand the test of time.
            </p>
            
            <div className="flex flex-wrap gap-4 ">
              <Link to="/about" className="button-primary w-full md:w-auto">
                Learn More About Us
              </Link>
              <Link to="/contact" className="button-secondary w-full md:w-auto">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
