import React from 'react';

const SqlIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 12c0-3.313 4.03-6 9-6s9 2.687 9 6-4.03 6-9 6-9-2.687-9-6Z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 6v6c0 3.313 4.03 6 9 6s9-2.687 9-6V6" />
  </svg>
);

export default SqlIcon;