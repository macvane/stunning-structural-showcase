
import React from 'react';

const AnimatedLogo: React.FC = () => {
  return (
    <div className="flex items-center">
      <img 
        src="/logo.jpg" 
        alt="Finite Element Designs Ltd Logo" 
        className="h-12 sm:h-14 w-auto hover:scale-110 transition-transform duration-500 shadow-lg rounded-md"
      />
    </div>
  );
};

export default AnimatedLogo;
