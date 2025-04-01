
import React from 'react';
import PageLayout from '@/components/layouts/PageLayout';
import { Wrench, Shield, Timer, CheckCircle, Settings } from 'lucide-react';
import { Link } from 'react-router-dom';

const SteelFabrication = () => {
  // Services features
  const features = [
    {
      title: "Experienced Fabrication Team",
      description: "At Finite Element Designs Limited, our fabrication team consists of highly trained and experienced professionals who are committed to delivering excellence in every project. With years of expertise in steel fabrication, our team possesses the technical know-how and attention to detail required to ensure that your structural components are fabricated to the highest standards of quality and precision.",
      icon: <Settings className="h-10 w-10 text-fe-teal" />,
      image: "https://images.unsplash.com/photo-1565166843795-2500004c126a?q=80&w=1170&auto=format&fit=crop"
    },
    {
      title: "Customized Solutions",
      description: "We understand that every project is unique, which is why we offer customized fabrication solutions tailored to your specific requirements. Whether you need standard structural beams and columns or intricate architectural features, our team works closely with you to develop bespoke fabrication solutions that meet your design intent, budget, and timeline.",
      icon: <Wrench className="h-10 w-10 text-fe-teal" />,
      image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=1170&auto=format&fit=crop"
    },
    {
      title: "Quality Assurance",
      description: "Quality is at the forefront of everything we do at Finite Element Designs Limited. From the selection of materials to the final inspection of finished components, we adhere to stringent quality control processes to ensure that our steel fabrication meets or exceeds industry standards and codes. Our commitment to quality assurance guarantees that your fabricated components are built to last, withstand environmental factors, and perform reliably under demanding conditions.",
      icon: <CheckCircle className="h-10 w-10 text-fe-teal" />,
      image: "https://images.unsplash.com/photo-1533558545376-85a58e2b9581?q=80&w=1174&auto=format&fit=crop"
    },
    {
      title: "Compliance and Safety",
      description: "Safety is paramount in steel fabrication, and we prioritize compliance with relevant safety regulations and standards to protect our employees, clients, and the environment. Our fabrication processes are conducted with strict adherence to safety protocols, and we continuously invest in training and education to ensure that our team remains up-to-date on the latest safety practices and procedures.",
      icon: <Shield className="h-10 w-10 text-fe-teal" />,
      image: "https://images.unsplash.com/photo-1473621038790-b778b4750efe?q=80&w=1172&auto=format&fit=crop"
    },
    {
      title: "Timely Delivery",
      description: "At Finite Element Designs Limited, we understand the importance of timely project delivery. Our streamlined fabrication processes, combined with efficient project management and logistics, enable us to meet even the tightest deadlines without compromising on quality. Whether you require just-in-time delivery or phased fabrication schedules, you can rely on us to deliver your steel components on time and within budget.",
      icon: <Timer className="h-10 w-10 text-fe-teal" />,
      image: "https://images.unsplash.com/photo-1506976785307-8732e854ad03?q=80&w=1169&auto=format&fit=crop"
    }
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
              Steel <span className="text-fe-teal">Fabrication</span>
            </h1>
            <p className="text-gray-200 text-lg max-w-2xl">
              Precision steel fabrication services for construction, industrial, and commercial applications, delivered with quality craftsmanship.
            </p>
          </div>
        </div>
      </section>
      
      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-fe-blue mb-6">Premium Steel Fabrication Services</h2>
              <p className="text-gray-700 mb-6">
                Finite Element Designs Limited is your trusted partner for premium steel fabrication services, delivering precision, quality, and compliance with the highest industry standards and codes. Our dedication to excellence ensures that your structural components and assemblies are meticulously crafted to meet your exact design specifications, resulting in superior performance, durability, and aesthetic appeal.
              </p>
              <p className="text-gray-700">
                Our facilities are designed to handle projects of varying complexities and scales. From cutting and welding to shaping and finishing, our skilled fabricators utilize the latest tools and techniques to produce steel components with exceptional accuracy and efficiency.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1547637589-f54c34f5d7a4?q=80&w=1170&auto=format&fit=crop" 
                alt="Steel Fabrication" 
                className="w-full h-full object-cover" 
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Features */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-fe-blue mb-12 text-center">Our Fabrication Capabilities</h2>
          
          <div className="space-y-16">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className={`bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 card-hover ${
                  index % 2 === 0 ? '' : 'lg:flex-row-reverse'
                }`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="p-8">
                    <div className="bg-fe-blue bg-opacity-10 p-4 inline-block rounded-lg mb-6">
                      {feature.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-fe-blue mb-4">{feature.title}</h3>
                    <p className="text-gray-700">{feature.description}</p>
                  </div>
                  <div className="h-64 lg:h-auto">
                    <img 
                      src={feature.image} 
                      alt={feature.title} 
                      className="w-full h-full object-cover" 
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Fabrication Process */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-fe-blue mb-10 text-center">Our Fabrication Process</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { stage: "Design & Engineering", description: "Collaborative design and engineering phase to optimize fabrication" },
              { stage: "Material Selection", description: "Careful selection of high-quality materials that meet project specifications" },
              { stage: "Cutting & Forming", description: "Precision cutting and forming of steel components using advanced equipment" },
              { stage: "Welding & Assembly", description: "Expert welding and assembly by certified professionals" },
              { stage: "Surface Treatment", description: "Surface preparation and finishing for durability and aesthetics" },
              { stage: "Quality Control", description: "Rigorous inspection and testing to ensure compliance with standards" }
            ].map((step, index) => (
              <div 
                key={index} 
                className="bg-gray-50 p-6 rounded-lg border-l-4 border-fe-teal relative"
              >
                <div className="absolute top-3 right-3 bg-fe-teal text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold">
                  {index + 1}
                </div>
                <h3 className="text-lg font-bold text-fe-blue mb-2">{step.stage}</h3>
                <p className="text-gray-700 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Project Gallery */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-fe-blue mb-10 text-center">Recent Fabrication Projects</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { image: "https://images.unsplash.com/photo-1565166843795-2500004c126a?q=80&w=1170&auto=format&fit=crop", title: "Industrial Steel Framework" },
              { image: "https://images.unsplash.com/photo-1506976785307-8732e854ad03?q=80&w=1169&auto=format&fit=crop", title: "Commercial Building Structure" },
              { image: "https://images.unsplash.com/photo-1547637589-f54c34f5d7a4?q=80&w=1170&auto=format&fit=crop", title: "Steel Bridge Components" }
            ].map((project, index) => (
              <div 
                key={index} 
                className="relative overflow-hidden rounded-lg group"
              >
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="p-4">
                    <h3 className="text-white font-bold">{project.title}</h3>
                  </div>
                </div>
              </div>
            ))}
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
              Need Custom Steel Fabrication?
            </h2>
            <p className="text-gray-100 text-lg mb-8 max-w-2xl mx-auto">
              Contact us today to discuss your steel fabrication requirements and receive a detailed quote for your project.
            </p>
            <Link 
              to="/contact" 
              className="bg-white text-fe-teal px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition-all"
            >
              Request a Quote
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default SteelFabrication;
