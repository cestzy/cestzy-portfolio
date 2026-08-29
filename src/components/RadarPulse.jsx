import React from 'react';

const RadarPulse = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 flex items-center justify-center">
      <div className="relative w-[300px] h-[300px] flex items-center justify-center">
        <span className="sonar-ring" style={{ '--i': 0 }} />
        <span className="sonar-ring" style={{ '--i': 1 }} />
        <span className="sonar-ring" style={{ '--i': 2 }} />
        <span className="sonar-ring" style={{ '--i': 3 }} />
      </div>
    </div>
  );
};

export default RadarPulse;