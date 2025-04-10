
import React, { useState } from 'react';
import PageLayout from '@/components/layouts/PageLayout';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';
import emailjs from '@emailjs/browser';

const Contact = () => {
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    services: [] as string[]
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  // Service options
  const serviceOptions = [
    'Civil & Structural Engineering',
    'Structural Engineering Training',
    'Structural Engineering Consultancy',
    'Project Management',
    'Steel Fabrication',
    'Large Format Printing',
    'Design Build',
    'Other'
  ];

  // Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle checkbox change
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    
    if (checked) {
      setFormData({
        ...formData,
        services: [...formData.services, value]
      });
    } else {
      setFormData({
        ...formData,
        services: formData.services.filter(service => service !== value)
      });
    }
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
  
    const formDataToSend = new FormData();
    
    formDataToSend.append('fullName', formData.name);
    formDataToSend.append('email', formData.email);
    formDataToSend.append('phone', formData.phone);
    formDataToSend.append('subject', formData.subject);
    formDataToSend.append('message', formData.message);
    formDataToSend.append('services', formData.services.join(', '));
    formDataToSend.append('sheet', 'Sheet2'); // Specify Sheet2 for contact submissions
    formDataToSend.append('targetSheet', 'Sheet2'); // Add an alternative parameter name that the script might be looking for
    
    const scriptURL = 'https://script.google.com/macros/s/AKfycby7foLssvGgEnk3_3zVoYoaJa499OEblhFgqEBD8022wSMbIyUo-W5Sy4zb5ArUT-xM/exec';
    
    fetch(scriptURL, { 
      method: 'POST', 
      body: formDataToSend,
      mode: 'no-cors'
    })
    .then(() => {
      toast({
        title: 'Message Sent Successfully',
        description: "Thank you for contacting us. We'll get back to you shortly.",
      });
  
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        services: []
      });
    })
    .catch(() => {
      toast({
        title: 'Message Failed to Send',
        description: 'Please try again later or contact us directly.',
        variant: 'destructive'
      });
    })
    .finally(() => {
      setIsSubmitting(false);
    });
  };

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
              Contact <span className="text-fe-orange">Us</span>
            </h1>
            <p className="text-gray-200 text-lg max-w-2xl">
              Get in touch with our team to discuss your structural engineering needs, request a consultation, or learn more about our services.
            </p>
          </div>
        </div>
      </section>
      
      {/* Contact Info & Form */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <div className="bg-gray-50 p-8 rounded-lg shadow-md reveal-on-scroll">
                <h2 className="text-2xl font-bold text-fe-blue mb-6">Contact Information</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 text-fe-orange mr-4 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-lg font-medium text-fe-blue mb-1">Main Office</h3>
                      <p className="text-gray-700">
                      Deep Blue Building, 2nd Floor Room 32, <br />
                      Kahawa Wendani, Along Thika Road
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone className="h-6 w-6 text-fe-orange mr-4 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-lg font-medium text-fe-blue mb-1">Phone</h3>
                      <p className="text-gray-700">
                        <a href="tel:+14155550123" className="hover:text-fe-teal transition-colors">
                          (+254) 772-041-005
                        </a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Mail className="h-6 w-6 text-fe-orange mr-4 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-lg font-medium text-fe-blue mb-1">Email</h3>
                      <p className="text-gray-700">
                        <a href="mailto:info@finiteelementdesignsltd.com" className="hover:text-fe-teal transition-colors">
                          info@finiteelementdesignsltd.com
                        </a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Clock className="h-6 w-6 text-fe-orange mr-4 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-lg font-medium text-fe-blue mb-1">Business Hours</h3>
                      <p className="text-gray-700">
                        Monday - Friday: 8:00 AM - 6:00 PM<br />
                        Saturday & Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <h3 className="text-lg font-medium text-fe-blue mb-4">Connect With Us</h3>
                  <div className="flex space-x-4">
                    <a 
                      href="#" 
                      className="bg-white p-2 rounded-full shadow-md text-fe-blue hover:text-fe-orange transition-colors duration-300"
                      aria-label="Facebook"
                    >
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                      </svg>
                    </a>
                    <a 
                      href="#" 
                      className="bg-white p-2 rounded-full shadow-md text-fe-blue hover:text-fe-orange transition-colors duration-300"
                      aria-label="Twitter"
                    >
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    </a>
                    <a 
                      href="#" 
                      className="bg-white p-2 rounded-full shadow-md text-fe-blue hover:text-fe-orange transition-colors duration-300"
                      aria-label="LinkedIn"
                    >
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </a>
                    <a 
                      href="#" 
                      className="bg-white p-2 rounded-full shadow-md text-fe-blue hover:text-fe-orange transition-colors duration-300"
                      aria-label="Instagram"
                    >
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="lg:col-span-2 reveal-on-scroll" style={{ animationDelay: '200ms' }}>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-fe-blue mb-6">Send Us a Message</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-gray-700 font-medium">Name <span className="text-red-500">*</span></label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-fe-teal"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-gray-700 font-medium">Email <span className="text-red-500">*</span></label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-fe-teal"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-gray-700 font-medium">Phone</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-fe-teal"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-gray-700 font-medium">Subject <span className="text-red-500">*</span></label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-fe-teal"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-gray-700 font-medium">Services of Interest</label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {serviceOptions.map((service, index) => (
                        <div key={index} className="flex items-center">
                          <input
                            type="checkbox"
                            id={`service-${index}`}
                            name="services"
                            value={service}
                            checked={formData.services.includes(service)}
                            onChange={handleCheckboxChange}
                            className="rounded text-fe-teal focus:ring-fe-teal"
                          />
                          <label htmlFor={`service-${index}`} className="ml-2 text-gray-700">
                            {service}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-gray-700 font-medium">Message <span className="text-red-500">*</span></label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-fe-teal"
                    />
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="button-primary flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <span>Sending...</span>
                    ) : (
                      <>
                        <Send className="mr-2 h-5 w-5" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12 reveal-on-scroll">
            <h2 className="text-3xl font-bold text-fe-blue mb-4">
              Visit Our Office
            </h2>
            <p className="text-gray-700">
              We're conveniently located in downtown San Francisco. Stop by during business hours to meet our team and discuss your project in person.
            </p>
          </div>
          
          <div className="rounded-lg overflow-hidden shadow-lg reveal-on-scroll">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.9484194113184!2d36.921742674182774!3d-1.1964756355329225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f3fba2970841f%3A0x27284ed0bb076d86!2sMagunas%20Supermarket%20Kahawa%20Wendani!5e0!3m2!1sen!2ske!4v1743518900775!5m2!1sen!2ske" 
              className="w-full h-[60vh]"  
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-fe-teal">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center reveal-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Need Urgent Assistance?
            </h2>
            <p className="text-white text-lg mb-8 max-w-2xl mx-auto opacity-90">
              For time-sensitive matters or immediate support, give us a call. Our team is ready to help you with your structural engineering needs.
            </p>
            <a 
              href="tel:+254 772 041005" 
              className="button-primary bg-white text-fe-teal hover:bg-gray-100"
            >
              <Phone className="mr-2 h-5 w-5" /> Call (254) 772-041-005
            </a>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Contact;
