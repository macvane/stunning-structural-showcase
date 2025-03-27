
import React from 'react';

const AnimatedLogo: React.FC = () => {
  return (
    <div className="flex items-center">
      <div className="flex flex-col items-start">
        <h1 className="text-xl font-bold font-display text-fe-orange sm:text-2xl">
          <span className="text-fe-teal">Finite</span> Element
        </h1>
        <p className="text-xs uppercase tracking-wider text-fe-blue font-medium">
          Designs Ltd
        </p>
      </div>
    </div>
  );
};

export default AnimatedLogo;
