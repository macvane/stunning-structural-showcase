
import React from 'react';
import PageLayout from '@/components/layouts/PageLayout';
import { Printer, FileDigit, ClockIcon, Sparkles, RefreshCw, Users, CheckSquare } from 'lucide-react';
import { Link } from 'react-router-dom';

const LargeFormatPrinting = () => {
  // Services
  const services = [
    {
      title: "Precision and Detail",
      description: "Our Prograft Tx 3000 large format printer delivers exceptional precision and detail, ensuring that your architectural and structural drawings are reproduced with utmost clarity and accuracy. From intricate design elements to fine lines and annotations, our printing capabilities capture every detail with precision.",
      icon: <Sparkles className="h-10 w-10 text-fe-teal" />
    },
    {
      title: "Versatility and Flexibility",
      description: "With the ability to print on a wide range of media types and sizes, our large format printing services offer unparalleled versatility and flexibility to accommodate diverse project requirements. Whether you need oversized blueprints, detailed renderings, or full-color presentations, our Prograft Tx 3000 printer can handle it all.",
      icon: <RefreshCw className="h-10 w-10 text-fe-teal" />
    },
    {
      title: "Customized Solutions",
      description: "At Finite Element Designs Limited, we understand that every project is unique, which is why we offer customized printing solutions tailored to your specific needs and preferences. Whether you require high-resolution prints for client presentations, durable prints for on-site reference, or archival prints for long-term documentation.",
      icon: <FileDigit className="h-10 w-10 text-fe-teal" />
    },
    {
      title: "Fast Turnaround Times",
      description: "We recognize the importance of timely project delivery, which is why we prioritize fast turnaround times for our large format printing services. Our efficient printing processes, combined with streamlined project management and logistics, ensure that your prints are produced quickly and efficiently without compromising on quality.",
      icon: <ClockIcon className="h-10 w-10 text-fe-teal" />
    },
    {
      title: "Quality Assurance",
      description: "Quality is our top priority at Finite Element Designs Limited, and we take great care to ensure that every print meets the highest standards of quality and consistency. From color accuracy and print resolution to media durability and finish, our rigorous quality assurance processes guarantee that your prints are produced to the highest industry standards.",
      icon: <CheckSquare className="h-10 w-10 text-fe-teal" />
    },
    {
      title: "Professional Expertise",
      description: "Backed by a team of experienced printing professionals, we offer unparalleled expertise and support to ensure that your printing experience is seamless and hassle-free. Whether you need assistance with file preparation, print customization, or technical troubleshooting, our knowledgeable team is here to provide you with expert guidance and support every step of the way.",
      icon: <Users className="h-10 w-10 text-fe-teal" />
    }
  ];

  // Printing options
  const printingOptions = [
    "Architectural blueprints",
    "Engineering drawings",
    "Construction documents",
    "Project renderings",
    "Marketing materials",
    "Design boards",
    "Site plans",
    "Structural details"
  ];

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
              Large Format <span className="text-fe-teal">Printing</span>
            </h1>
            <p className="text-gray-200 text-lg max-w-2xl">
              High-quality large format printing services for architectural plans, engineering drawings, construction documents, and more.
            </p>
          </div>
        </div>
      </section>
      
      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-fe-blue bg-opacity-10 p-4 inline-block rounded-lg mb-6">
                <Printer className="h-12 w-12 text-fe-teal" />
              </div>
              <h2 className="text-3xl font-bold text-fe-blue mb-6">Cutting-Edge Large Format Printing</h2>
              <p className="text-gray-700 mb-6">
                Finite Element Designs Limited presents our cutting-edge Prograft Tx 3000 large format printing services, tailored to meet the specific needs of architects, engineers, and construction professionals. With our state-of-the-art printing technology and commitment to quality, we offer unparalleled printing solutions for architectural and structural drawings, plans, and blueprints.
              </p>
              <p className="text-gray-700">
                Our services facilitate documentation and visualization for projects of all sizes and complexities, ensuring your technical documents are reproduced with exceptional clarity and precision.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://i.pinimg.com/736x/0b/87/ac/0b87acc27f218a8a9d00c4c9be369842.jpg" 
                alt="Large Format Printer" 
                className="w-full h-full object-cover" 
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-fe-blue mb-12 text-center">Our Printing Services</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 card-hover"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="bg-fe-blue bg-opacity-10 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-fe-blue mb-3">{service.title}</h3>
                <p className="text-gray-700">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Printing Options */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-fe-blue mb-10 text-center">What We Print</h2>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {printingOptions.map((option, index) => (
                <div 
                  key={index} 
                  className="bg-fe-blue bg-opacity-5 p-4 rounded-lg text-center hover:bg-opacity-10 transition-colors duration-300 border-b-2 border-fe-teal"
                >
                  <p className="text-fe-blue font-medium">{option}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Pricing and Sizes */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-fe-blue mb-10 text-center">Available Sizes and Media</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-fe-blue mb-4">Standard Sizes</h3>
              <ul className="space-y-2">
                <li className="flex items-center justify-between border-b pb-2">
                  <span className="text-gray-700">A0 (841 × 1189 mm)</span>
                  <span className="text-fe-teal font-medium">Available</span>
                </li>
                <li className="flex items-center justify-between border-b pb-2">
                  <span className="text-gray-700">A1 (594 × 841 mm)</span>
                  <span className="text-fe-teal font-medium">Available</span>
                </li>
                <li className="flex items-center justify-between border-b pb-2">
                  <span className="text-gray-700">A2 (420 × 594 mm)</span>
                  <span className="text-fe-teal font-medium">Available</span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-gray-700">Custom sizes available upon request</span>
                  <span className="text-fe-teal font-medium">✓</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-fe-blue mb-4">Media Types</h3>
              <ul className="space-y-2">
                <li className="flex items-center justify-between border-b pb-2">
                  <span className="text-gray-700">Standard Bond Paper</span>
                  <span className="text-fe-teal font-medium">Available</span>
                </li>
                <li className="flex items-center justify-between border-b pb-2">
                  <span className="text-gray-700">Heavy Bond Paper</span>
                  <span className="text-fe-teal font-medium">Available</span>
                </li>
                <li className="flex items-center justify-between border-b pb-2">
                  <span className="text-gray-700">Photo Paper (Matte/Glossy)</span>
                  <span className="text-fe-teal font-medium">Available</span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-gray-700">Specialty Media</span>
                  <span className="text-fe-teal font-medium">Upon Request</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-fe-teal relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
            <pattern id="pattern-circles" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="5" fill="none" stroke="white" strokeWidth="1"/>
            </pattern>
            <rect width="100%" height="100%" fill="url(#pattern-circles)" />
          </svg>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Need Professional Printing Services?
            </h2>
            <p className="text-gray-100 text-lg mb-8 max-w-2xl mx-auto">
              Choose Finite Element Designs Limited for superior large format printing services that combine precision, versatility, and reliability. Contact us today to learn more about our printing capabilities.
            </p>
            <Link 
              to="/contact" 
              className="bg-white text-fe-teal px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition-all"
            >
              Get a Printing Quote
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default LargeFormatPrinting;
