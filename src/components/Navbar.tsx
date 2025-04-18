
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import AnimatedLogo from './ui/AnimatedLogo';
import { Menu, X, ChevronDown } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();

  // Navigation links - reordered to put Services after Home
  const navLinks = [
    { name: 'Home', path: '/' },
    // Services dropdown is now handled separately and positioned after Home
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'About', path: '/about' },
    { name: 'Careers', path: '/careers' },
    { name: 'Contact', path: '/contact' },
  ];

  // Services links
  const serviceLinks = [
    { name: 'Civil & Structural Engineering', path: '/services/civil-structural-engineering' },
    { name: 'Structural Engineering Training', path: '/services/structural-training' },
    { name: 'Structural Engineering Consultancy', path: '/services/structural-consultancy' },
    { name: 'Project Management', path: '/services/project-management' },
    { name: 'Steel Fabrication', path: '/services/steel-fabrication' },
    { name: 'Large Format Printing', path: '/services/large-format-printing' },
    { name: 'Design Build', path: '/services/design-build' },
  ];

  // Check if we've scrolled down
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  // Check if current location is a services page
  const isServicesPage = location.pathname.startsWith('/services');

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white bg-opacity-90 backdrop-blur-md shadow-md py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center z-20">
            <AnimatedLogo />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {/* Home link */}
            <Link
              to="/"
              className={`relative px-3 py-2 text-sm font-medium transition-colors duration-300 hover:text-fe-teal ${
                location.pathname === "/" 
                  ? 'text-fe-teal' 
                  : isScrolled ? 'text-fe-dark-gray' : 'text-white'
              }`}
            >
              Home
              {location.pathname === "/" && (
                <span className="absolute bottom-0 left-0 h-0.5 w-full bg-fe-teal transform transition-transform duration-300" />
              )}
            </Link>
            
            {/* Services Dropdown - positioned after Home */}
            <DropdownMenu>
              <DropdownMenuTrigger 
                className={`relative px-3 py-2 text-sm font-medium transition-colors duration-300 hover:text-fe-teal focus:outline-none flex items-center ${
                  isServicesPage
                    ? 'text-fe-teal' 
                    : isScrolled ? 'text-fe-dark-gray' : 'text-white'
                }`}
              >
                Services <ChevronDown className="ml-1 h-4 w-4" />
                {isServicesPage && (
                  <span className="absolute bottom-0 left-0 h-0.5 w-full bg-fe-teal transform transition-transform duration-300" />
                )}
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="bg-white p-2 rounded-md shadow-lg w-72 z-50">
                {serviceLinks.map((service) => (
                  <DropdownMenuItem key={service.path} className="focus:bg-gray-100 rounded-md">
                    <Link 
                      to={service.path} 
                      className="w-full py-2 px-1 block text-fe-dark-gray hover:text-fe-teal"
                    >
                      {service.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
                <DropdownMenuItem className="focus:bg-gray-100 rounded-md">
                  <Link 
                    to="/services" 
                    className="w-full py-2 px-1 block text-fe-teal font-medium"
                  >
                    View All Services
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
            {/* Remaining navigation links */}
            {navLinks.slice(1).map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative px-3 py-2 text-sm font-medium transition-colors duration-300 hover:text-fe-teal ${
                  location.pathname === link.path 
                    ? 'text-fe-teal' 
                    : isScrolled ? 'text-fe-dark-gray' : 'text-white'
                }`}
              >
                {link.name}
                {location.pathname === link.path && (
                  <span className="absolute bottom-0 left-0 h-0.5 w-full bg-fe-teal transform transition-transform duration-300" />
                )}
              </Link>
            ))}
            
            <Link 
              to="/contact" 
              className="ml-2 button-primary text-sm"
            >
              Get In Touch
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden z-20"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className={`h-6 w-6 ${isScrolled ? 'text-fe-dark-gray' : 'text-white'}`} />
            ) : (
              <Menu className={`h-6 w-6 ${isScrolled ? 'text-fe-dark-gray' : 'text-white'}`} />
            )}
          </button>

          {/* Mobile Menu - Fixed this section */}
          <div 
            className={`fixed inset-0 bg-fe-blue bg-opacity-95 flex flex-col justify-start md:hidden transition-opacity duration-300 pt-24  ${
              isMobileMenuOpen ? 'opacity-100 z-10 h-screen' : 'opacity-0 pointer-events-none '
            }`}
          >
            <nav className="flex flex-col items-center space-y-6 py-8 overflow-y-auto w-full">
              {/* Home link */}
              <Link
                to="/"
                className={`text-xl font-medium ${
                  location.pathname === "/" ? 'text-fe-teal' : 'text-white'
                }`}
              >
                Home
              </Link>
              
              {/* Mobile Services Dropdown */}
              <div className="relative w-full flex flex-col items-center">
                <button
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className={`text-xl font-medium flex items-center ${isServicesPage ? 'text-fe-teal' : 'text-white'}`}
                >
                  Services <ChevronDown className={`ml-1 h-5 w-5 transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isServicesOpen && (
                  <div className="mt-4 w-full flex flex-col items-center space-y-4 max-h-60 overflow-y-auto pb-2">
                    {serviceLinks.map((service) => (
                      <Link
                        key={service.path}
                        to={service.path}
                        className="text-lg text-gray-200 hover:text-fe-teal"
                      >
                        {service.name}
                      </Link>
                    ))}
                    <Link
                      to="/services"
                      className="text-lg text-fe-teal font-medium"
                    >
                      View All Services
                    </Link>
                  </div>
                )}
              </div>
              
              {/* Remaining nav links */}
              {navLinks.slice(1).map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-xl font-medium ${
                    location.pathname === link.path ? 'text-fe-teal' : 'text-white'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              
              <Link 
                to="/contact" 
                className="mt-4 button-primary"
              >
                Get In Touch
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
