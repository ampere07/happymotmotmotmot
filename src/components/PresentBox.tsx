import React from 'react';

interface PresentBoxProps {
  isOpened: boolean;
  onClick: () => void;
}

const PresentBox: React.FC<PresentBoxProps> = ({ isOpened, onClick }) => {
  return (
    <div className="flex items-center justify-center">
      <div 
        className="relative cursor-pointer transform hover:scale-105 transition-transform duration-300"
        onClick={onClick}
      >
        {/* Present Box Base */}
        <div className="relative">
          {/* Box Body */}
          <div className="w-32 h-32 md:w-40 md:h-40 bg-gradient-to-br from-red-500 to-red-700 rounded-lg shadow-2xl transform-gpu">
            {/* Box Sides for 3D Effect */}
            <div className="absolute top-0 right-0 w-4 h-full bg-red-800 rounded-r-lg transform skew-y-12 origin-bottom"></div>
            <div className="absolute bottom-0 left-0 w-full h-4 bg-red-800 rounded-b-lg transform skew-x-12 origin-right"></div>
          </div>

          {/* Ribbon Horizontal */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-6 h-full bg-gradient-to-b from-yellow-400 to-yellow-600 shadow-lg"></div>
          
          {/* Ribbon Vertical */}
          <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-full h-6 bg-gradient-to-r from-yellow-400 to-yellow-600 shadow-lg"></div>

          {/* Present Box Lid */}
          <div 
            className={`absolute -top-2 left-0 w-32 h-8 md:w-40 md:h-10 bg-gradient-to-br from-red-400 to-red-600 rounded-lg shadow-xl transition-all duration-1000 transform-gpu ${
              isOpened ? '-translate-y-16 rotate-12 opacity-70' : ''
            }`}
          >
            {/* Lid 3D Effects */}
            <div className="absolute top-0 right-0 w-4 h-full bg-red-700 rounded-r-lg transform skew-y-12 origin-bottom"></div>
            <div className="absolute bottom-0 left-0 w-full h-2 bg-red-700 rounded-b-lg transform skew-x-12 origin-right"></div>
            
            {/* Bow on Lid */}
            <div className="absolute top-1 left-1/2 transform -translate-x-1/2">
              <div className="w-8 h-4 bg-gradient-to-br from-yellow-300 to-yellow-500 rounded-full relative">
                {/* Bow Wings */}
                <div className="absolute -left-2 top-0 w-4 h-4 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full transform rotate-45"></div>
                <div className="absolute -right-2 top-0 w-4 h-4 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full transform -rotate-45"></div>
                {/* Bow Center */}
                <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-yellow-600 rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Inside Glow Effect */}
          {isOpened && (
            <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-20 h-20 bg-gradient-radial from-yellow-300 via-pink-300 to-transparent rounded-full animate-pulse opacity-80"></div>
          )}
        </div>

        {/* Sparkle Effects Around Box */}
        <div className="absolute -top-4 -left-4 w-2 h-2 bg-yellow-300 rounded-full animate-ping delay-300"></div>
        <div className="absolute -top-2 right-2 w-1 h-1 bg-pink-300 rounded-full animate-ping delay-700"></div>
        <div className="absolute bottom-2 -left-2 w-1.5 h-1.5 bg-red-300 rounded-full animate-ping delay-1000"></div>
        <div className="absolute -bottom-3 right-4 w-2 h-2 bg-yellow-400 rounded-full animate-ping delay-500"></div>
      </div>
    </div>
  );
};

export default PresentBox;