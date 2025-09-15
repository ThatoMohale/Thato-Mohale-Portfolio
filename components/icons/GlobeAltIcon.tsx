import React from 'react';

const GlobeAltIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.23 9.75h17.54M3.23 14.25h17.54M9.75 3.23c1.78-.93 3.86-.93 5.64 0" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 20.77c-1.78.93-3.86.93-5.64 0" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.23a13.435 13.435 0 0 0-3.32 6.52M14.25 3.23a13.435 13.435 0 0 1 3.32 6.52M9.75 20.77a13.435 13.435 0 0 1-3.32-6.52M14.25 20.77a13.435 13.435 0 0 0 3.32-6.52" />
  </svg>
);

export default GlobeAltIcon;