import React from 'react';
import type { SVGProps } from 'react';

const Logo: React.FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 100 25" 
    fill="currentColor"
    {...props}
  >
    <text
      x="50%"
      y="50%"
      dominantBaseline="middle"
      textAnchor="middle"
      fontSize="24"
      fontWeight="bold"
      letterSpacing="2"
      fontFamily="Times New Roman, serif"
    >
      T.K.M
    </text>
  </svg>
);

export default Logo;