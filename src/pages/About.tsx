
import React from 'react';
import PageLayout from '@/components/layouts/PageLayout';
import TeamMember from '@/components/ui/TeamMember';
import { Award, Lightbulb, Users, Clock, CheckCircle2, Trophy } from 'lucide-react';

const About = () => {
  // Core values
  const coreValues = [
    {
      icon: <CheckCircle2 className="h-10 w-10 text-fe-teal" />,
      title: 'Excellence',
      description: 'We strive for excellence in every aspect of our work, delivering high-quality solutions that exceed expectations.'
    },
    {
      icon: <Lightbulb className="h-10 w-10 text-fe-teal" />,
      title: 'Innovation',
      description: 'We embrace innovative approaches to solve complex engineering challenges, pushing the boundaries of conventional thinking.'
    },
    {
      icon: <Users className="h-10 w-10 text-fe-teal" />,
      title: 'Collaboration',
      description: 'We believe in the power of collaboration, working closely with clients and project teams to achieve shared goals.'
    },
    {
      icon: <Clock className="h-10 w-10 text-fe-teal" />,
      title: 'Timeliness',
      description: 'We respect deadlines and deliver our services promptly, ensuring projects stay on schedule and within budget.'
    }
  ];

  // Team members
  const teamMembers = [
    {
      name: 'Eng. Phares O. Atai C.E',
      position: 'Founder & CEO',
      bio: 'With over 25 years of structural engineering experience, Dr. Mitchell leads our team with a focus on innovation and excellence. He holds a Ph.D. in Structural Engineering from MIT.',
      imageUrl: '/assets/Officials/atai.jpg',
      email: 'james.mitchell@finiteelementdesigns.com',
      linkedin: 'https://linkedin.com'
    },
    {
      name: 'Eng. Sharon J. Kimatui P.E',
      position: 'Civil & Structural Engineer',
      bio: 'Dr. Chen specializes in seismic design and has led numerous high-profile projects across earthquake-prone regions. She brings analytical precision and creative problem-solving to every challenge.',
      imageUrl: '/assets/Officials/sharon.jpg',
      email: 'sarah.chen@finiteelementdesigns.com',
      linkedin: 'https://linkedin.com'
    },
    {
      name: 'Eng. Esther K. Momanyi',
      position: 'Assistant Structural Engineer',
      bio: 'Michael oversees our technical operations and advanced analysis. With expertise in FEA and computational modeling, he ensures our designs meet the highest technical standards.',
      imageUrl: '/assets/Officials/esther.jpg',
      email: 'michael.rodriguez@finiteelementdesigns.com',
      linkedin: 'https://linkedin.com'
    },
    {
      name: 'Rose N. Mukono',
      position: 'Assistant Structural Engineer',
      bio: 'Leading our R&D initiatives, Dr. Wilson bridges academic research with practical applications. She focuses on developing innovative structural systems and sustainable design methods.',
      imageUrl: '/assets/Officials/rose.jpg',
      email: 'emma.wilson@finiteelementdesigns.com',
      linkedin: 'https://linkedin.com'
    },
    {
      name: 'Rose N. Mukono',
      position: 'Assistant Structural Engineer',
      bio: 'David excels in managing complex projects, ensuring they stay on schedule and within budget. His attention to detail and communication skills make him invaluable to our team.',
      imageUrl: '/lovable-uploads/c97d473d-c21e-4f90-a301-9a7e031326b3.png',
      email: 'david.thompson@finiteelementdesigns.com',
      linkedin: 'https://linkedin.com'
    },
    {
      name: 'Lisa Patel',
      position: 'BIM Manager',
      bio: 'Lisa leads our Building Information Modeling team, implementing cutting-edge tools and workflows for visualization and coordination, enhancing project delivery and client satisfaction.',
      imageUrl: '/lovable-uploads/c97d473d-c21e-4f90-a301-9a7e031326b3.png',
      email: 'lisa.patel@finiteelementdesigns.com',
      linkedin: 'https://linkedin.com'
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
              About <span className="text-fe-orange">Us</span>
            </h1>
            <p className="text-gray-200 text-lg max-w-2xl">
              Learn about our company's history, our team of talented engineers, and the values that drive our commitment to excellence in structural engineering.
            </p>
          </div>
        </div>
      </section>
      
      {/* Company Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="reveal-on-scroll">
              <img 
                src="/lovable-uploads/aeb304dd-e51e-4c82-87d5-1d997a4858d0.png" 
                alt="Finite Element Designs headquarters" 
                className="w-full h-auto rounded-lg shadow-xl" 
              />
            </div>
            
            <div className="reveal-on-scroll" style={{ animationDelay: '300ms' }}>
              <span className="text-fe-orange font-medium">Our Story</span>
              <h2 className="text-3xl md:text-4xl font-bold text-fe-blue mt-2 mb-6">
                Engineering Innovation Since 2015
              </h2>
              
              <p className="text-gray-700 mb-6">
              Finite Element Designs Limited is a registered engineering consultancy in Kenya, specializing in civil and structural projects with utmost integrity and expertise.
              </p>
              
              <p className="text-gray-700 mb-6">
              Founded in 2015 and led by Eng. Phares Orina Atai, the firm excels in advanced design methods using technologies like Prokon software and Finite Element Analysis, delivering projects such as Rugsan Mall and Uplands Premium Dairies.
              </p>
              
              <p className="text-gray-700">
              Committed to innovation and excellence, the company also provides training and workshops for emerging engineers, serving as an accredited Prokon trainer for East and Central Africa.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-md reveal-on-scroll">
              <div className="bg-fe-blue bg-opacity-10 p-4 inline-block rounded-lg mb-6">
                <Award className="h-10 w-10 text-fe-teal" />
              </div>
              <h3 className="text-2xl font-bold text-fe-blue mb-4">Our Mission</h3>
              <p className="text-gray-700">
              Our mission is to provide top-tier design, construction, and engineering training while upholding the highest standards of professionalism and integrity. We are dedicated to empowering the construction industry by developing engineering talent, driving innovation, and integrating cutting-edge technology. With a commitment to excellence, we strive to shape a more advanced, efficient, and globally competitive industry.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md reveal-on-scroll" style={{ animationDelay: '200ms' }}>
              <div className="bg-fe-blue bg-opacity-10 p-4 inline-block rounded-lg mb-6">
                <Trophy className="h-10 w-10 text-fe-teal" />
              </div>
              <h3 className="text-2xl font-bold text-fe-blue mb-4">Our Vision</h3>
              <p className="text-gray-700">
              To be a world-leading company in engineering design, technological innovation, engineering management, steel fabrication and training in the construction industry.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 reveal-on-scroll">
            <span className="text-fe-orange font-medium">What Drives Us</span>
            <h2 className="text-3xl md:text-4xl font-bold text-fe-blue mt-2 mb-6">
              Our Core Values
            </h2>
            <p className="text-gray-700">
              These fundamental principles guide our approach to every project and interaction, shaping our culture and driving our pursuit of excellence.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {coreValues.map((value, index) => (
              <div 
                key={index} 
                className="bg-gray-50 p-8 rounded-lg flex items-start reveal-on-scroll"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="mr-5 mt-1">
                  {value.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-fe-blue mb-3">{value.title}</h3>
                  <p className="text-gray-700">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 reveal-on-scroll">
            <span className="text-fe-orange font-medium">Our People</span>
            <h2 className="text-3xl md:text-4xl font-bold text-fe-blue mt-2 mb-6">
              Meet Our Leadership Team
            </h2>
            <p className="text-gray-700">
              Our team of experienced and passionate engineers brings diverse expertise and a shared commitment to delivering exceptional results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {teamMembers.map((member, index) => (
              <TeamMember
                key={index}
                name={member.name}
                position={member.position}
                bio={member.bio}
                imageUrl={member.imageUrl}
                email={member.email}
                linkedin={member.linkedin}
                delay={index * 100}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-20 bg-fe-teal">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 reveal-on-scroll">
              <div className="text-4xl font-bold text-white mb-2">2015</div>
              <p className="text-white opacity-80">Year Founded</p>
            </div>
            <div className="text-center p-6 reveal-on-scroll" style={{ animationDelay: '100ms' }}>
              <div className="text-4xl font-bold text-white mb-2">45+</div>
              <p className="text-white opacity-80">Team Members</p>
            </div>
            <div className="text-center p-6 reveal-on-scroll" style={{ animationDelay: '200ms' }}>
              <div className="text-4xl font-bold text-white mb-2">20+</div>
              <p className="text-white opacity-80">Industry Partners</p>
            </div>
            <div className="text-center p-6 reveal-on-scroll" style={{ animationDelay: '300ms' }}>
              <div className="text-4xl font-bold text-white mb-2">1</div>
              <p className="text-white opacity-80">Office Location</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center reveal-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold text-fe-blue mb-6">
              Join Our Growing Team
            </h2>
            <p className="text-gray-700 text-lg mb-8 max-w-2xl mx-auto">
              We're always looking for talented and passionate engineers to join our team. Explore current opportunities and become part of our innovation journey.
            </p>
            <a 
              href="/careers" 
              className="button-primary"
            >
              View Current Openings
            </a>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default About;
