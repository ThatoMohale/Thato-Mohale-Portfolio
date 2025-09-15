import React from 'react';

const KiteIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 64 64" 
    fill="currentColor" 
    {...props}
  >
    <path d="M32 0L64 32L32 64L0 32Z" />
  </svg>
);

export default KiteIcon;