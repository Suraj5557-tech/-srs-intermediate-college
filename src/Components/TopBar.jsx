import React from 'react';

const TopBar = () => {
  return (
    <div className="bg-red-700 text-white text-sm py-2 px-4 flex flex-col md:flex-row justify-between items-center">
      <div className="flex items-center space-x-4 mb-2 md:mb-0">
        <span><i className="fa-solid fa-phone mr-1"></i> Helpline: 9918585358, 9721401140, 9450087755</span>
        <span className="hidden md:inline">|</span>
        <span className="hidden md:inline"><i className="fa-solid fa-location-dot mr-1"></i> त्रिकौलिया (शिवनगर) खुटहन, जौनपुर (उ.प्र.)</span>
      </div>
      <div className="bg-yellow-400 text-red-900 font-bold px-3 py-1 rounded text-xs animate-pulse">
        🚨 ADMISSION OPEN (2026-27) - Nursery to XII
      </div>
    </div>
  );
};

export default TopBar;