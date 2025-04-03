
import React from 'react';
import { Link } from 'react-router-dom';
import { Quote } from 'lucide-react';
import TestimonialCard from '../ui/TestimonialCard';

const TestimonialsSection = () => {
  // Testimonials data
  const testimonials = [
    {
      quote: "Finite Element Designs Ltd delivered beyond our expectations. Their structural design was innovative and cost-effective, resulting in a project that was completed ahead of schedule.",
      author: "James Wilson",
      position: "Project Manager",
      company: "Construct International",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop",
    },
    {
      quote: "The team's technical expertise and attention to detail throughout our complex infrastructure project was exceptional. Their solutions were both elegant and practical.",
      author: "Sarah Odhiambo",
      position: "Director of Operations",
      company: "Nairobi Urban Development",
      rating: 5,
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=300&h=300&fit=crop",
    },
    {
      quote: "Working with Finite Element Designs has been a game-changer for our residential development projects. Their structural designs are not only sound but also innovative and cost-effective.",
      author: "David Muthoni",
      position: "CEO",
      company: "Eastlands Homes Ltd",
      rating: 4,
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&h=300&fit=crop",
    },
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gray-50 opacity-50"></div>
      <div className="absolute -left-32 top-32 w-64 h-64 rounded-full bg-fe-light-teal/10"></div>
      <div className="absolute -right-32 bottom-32 w-64 h-64 rounded-full bg-fe-orange/10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
          <div className="max-w-2xl reveal-on-scroll">
            <span className="text-fe-orange font-medium">Client Testimonials</span>
            <h2 className="text-3xl md:text-4xl font-bold text-fe-blue mt-2 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-gray-700">
              Don't just take our word for it. Hear from clients who have experienced our commitment to excellence and innovative engineering solutions.
            </p>
          </div>
          
          <Quote 
            className="h-16 w-16 text-fe-light-teal/20 mt-6 md:mt-0 reveal-on-scroll"
            style={{ animationDelay: '200ms' }}
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard 
              key={testimonial.author}
              quote={testimonial.quote}
              author={testimonial.author}
              position={testimonial.position}
              company={testimonial.company}
              rating={testimonial.rating}
              image={testimonial.image}
              variant={index === 1 ? 'featured' : 'default'}
              delay={index * 150}
            />
          ))}
        </div>
        
        <div className="mt-16 text-center reveal-on-scroll">
          <Link to="/contact" className="button-primary">
            Get in Touch
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
