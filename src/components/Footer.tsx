
import React from 'react';
import { Link } from 'react-router-dom';
import AnimatedLogo from './ui/AnimatedLogo';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-fe-blue text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo and About */}
          <div className="space-y-4">
            <div className="bg-white inline-block p-2 rounded-md">
              <AnimatedLogo />
            </div>
            <p className="mt-4 text-sm text-gray-300 max-w-xs">
              Leading structural engineering solutions with precision, innovation, and excellence.
            </p>
            <div className="flex space-x-4 pt-4">
              <a href="#" className="text-gray-300 hover:text-fe-orange transition-colors duration-300">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-fe-orange transition-colors duration-300">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-fe-orange transition-colors duration-300">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-fe-orange transition-colors duration-300">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-300 hover:text-fe-orange transition-colors duration-300">Home</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-fe-orange transition-colors duration-300">Services</Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-gray-300 hover:text-fe-orange transition-colors duration-300">Portfolio</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-fe-orange transition-colors duration-300">About Us</Link>
              </li>
              <li>
                <Link to="/careers" className="text-gray-300 hover:text-fe-orange transition-colors duration-300">Careers</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-fe-orange transition-colors duration-300">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Our Services</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/services#structural-design" className="text-gray-300 hover:text-fe-orange transition-colors duration-300">Structural Design</Link>
              </li>
              <li>
                <Link to="/services#finite-element-analysis" className="text-gray-300 hover:text-fe-orange transition-colors duration-300">Finite Element Analysis</Link>
              </li>
              <li>
                <Link to="/services#building-information-modeling" className="text-gray-300 hover:text-fe-orange transition-colors duration-300">Building Information Modeling</Link>
              </li>
              <li>
                <Link to="/services#seismic-engineering" className="text-gray-300 hover:text-fe-orange transition-colors duration-300">Seismic Engineering</Link>
              </li>
              <li>
                <Link to="/services#construction-support" className="text-gray-300 hover:text-fe-orange transition-colors duration-300">Construction Support</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="mr-3 h-5 w-5 text-fe-orange flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">Deep Blue Building, 2nd Floor Room 32,<br />Kahawa Wendani, Along Thika Road</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-3 h-5 w-5 text-fe-orange flex-shrink-0" />
                <a href="tel:+14155550123" className="text-gray-300 hover:text-fe-orange transition-colors duration-300">
                  (254) 772-041-005
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="mr-3 h-5 w-5 text-fe-orange flex-shrink-0" />
                <a href="mailto:info@finiteelementdesignsltd.com" className="text-gray-300 hover:text-fe-orange transition-colors duration-300">
                  info@finiteelementdesignsltd.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-700">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-center items-center">
            <p className="text-sm text-center text-gray-400">
              &copy; {new Date().getFullYear()} Finite Element Designs Ltd. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
