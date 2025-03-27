
import React from 'react';

const AnimatedLogo: React.FC = () => {
  return (
    <div className="flex items-center">
      <img 
        src="https://finiteelementdesignsltd.com/static/media/logo.2f82c28ccf13b404368d.jpg" 
        alt="Finite Element Designs Ltd Logo" 
        className="h-12 sm:h-14 w-auto hover:scale-105 transition-transform duration-300"
      />
    </div>
  );
};

export default AnimatedLogo;
