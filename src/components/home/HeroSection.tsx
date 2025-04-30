
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

import Image1 from '/v2 projects/image36.jpg';
import Image2 from '/v2 projects/image18.jpg';
import Image3 from '/v2 projects/image22.jpg';

const slides = [
  {
    image: Image1,
    title: "Building Structures with Precision & Innovation",
    subtitle: "Leading structural engineering solutions for complex challenges, delivering excellence in every project."
  },
  {
    image: Image2,
    title: "Driving Efficiency Through Smart Building Practices",
    subtitle: "Committed to Precision, Innovation, and Sustainable Results"
  },
  {
    image: Image3,
    title: "Shaping the Future with Knowledge & Innovation",
    subtitle: "Training Talent. Advancing Standards."
  }
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  
  // Handle automatic slideshow
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    
    return () => clearInterval(interval);
  }, [isAutoPlaying]);
  
  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    // Resume auto-playing after user interaction
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };
  
  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
    // Resume auto-playing after user interaction
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };
  
  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
    // Resume auto-playing after user interaction
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };
  
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div 
          key={index}
          className={cn(
            "absolute inset-0 transition-opacity duration-1000 ease-in-out",
            currentSlide === index ? "opacity-100 z-10" : "opacity-0 z-0"
          )}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>
          
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center transform scale-105 transition-transform duration-10000 ease-out"
            style={{
              backgroundImage: `url(${slide.image})`,
              transform: currentSlide === index ? "scale(1.05)" : "scale(1)",
            }}
          ></div>
          
          {/* Content */}
          <div className="absolute inset-0 flex items-center z-20 bg-fe-blue bg-opacity-40">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center text-white">
                <h1 
                  className={cn(
                    "text-white text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in opacity-0",
                    currentSlide === index ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"
                  )}
                >
                  {slide.title}
                </h1>
                <p 
                  className={cn(
                    "text-gray-200 text-lg md:text-xl mb-8 animate-fade-in opacity-0",
                    currentSlide === index ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"
                  )}
                >
                  {slide.subtitle}
                </p>
                <div 
                  className={cn(
                    "flex gap-4 justify-center transition-all duration-1000 delay-500 transform",
                    currentSlide === index ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"
                  )}
                >
                   <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in opacity-0" style={{ animationDelay: '900ms' }}>
            <Link to="/services" className="button-primary">
              Explore Our Services
            </Link>
            <Link to="/portfolio" className="button-secondary border-white text-white hover:bg-white hover:text-fe-blue">
              View Our Projects
            </Link>
          </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
      
      {/* Navigation Arrows */}
      <button 
        onClick={goToPrevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-black bg-opacity-30 text-white p-2 rounded-full hover:bg-opacity-50 transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>
      <button 
        onClick={goToNextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-black bg-opacity-30 text-white p-2 rounded-full hover:bg-opacity-50 transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>
      
      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-0 right-0 z-30 flex justify-center gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={cn(
              "w-3 h-3 rounded-full transition-all duration-300",
              currentSlide === index ? "bg-white w-6" : "bg-white bg-opacity-50 hover:bg-opacity-75"
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
