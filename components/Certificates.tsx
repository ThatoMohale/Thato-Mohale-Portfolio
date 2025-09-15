import React, { useRef } from 'react';
import type { Certificate } from '../types';
import { CERTIFICATES_DATA } from '../constants';
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import ExternalLinkIcon from './icons/ExternalLinkIcon';

const CertificateCard: React.FC<{ cert: Certificate; index: number }> = ({ cert, index }) => {
  const cardRef = useRef<HTMLAnchorElement>(null);
  const isVisible = useIntersectionObserver(cardRef, { threshold: 0.1 }, true);
  
  const Icon = cert.icon;

  return (
    <a
      ref={cardRef}
      href={cert.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`group block bg-white dark:bg-zinc-900 p-4 md:p-6 rounded-lg border border-gray-200 dark:border-gray-800 transition-all duration-500 ease-out transform hover:-translate-y-2 shadow-md hover:shadow-lg dark:shadow-black/20 dark:hover:shadow-black/40 ${
        isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-5 scale-95'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div>
        <div className="flex items-start justify-between">
          <div className="flex items-center mr-4">
            <span className="p-2 bg-gray-100 dark:bg-gray-800 rounded-full mr-4 shrink-0">
              <Icon className="w-7 h-7 text-gray-600 dark:text-gray-300" />
            </span>
            <div>
              <h3 className="text-lg font-bold text-black dark:text-white leading-tight">{cert.name}</h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm">{cert.issuer}</p>
            </div>
          </div>
          <ExternalLinkIcon className="w-5 h-5 text-gray-400 dark:text-gray-500 group-hover:text-black dark:group-hover:text-white transition-colors duration-300 shrink-0 mt-1" />
        </div>
      </div>
      <p className="text-right text-sm text-gray-400 dark:text-gray-500 mt-4">{cert.date}</p>
    </a>
  );
};


const Certificates: React.FC = () => {
  return (
    <section id="certificates" className="py-20 md:py-28 bg-white dark:bg-black">
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-black dark:text-white">Certifications</h2>
        <div className="h-1 w-24 bg-gray-300 dark:bg-gray-700 mx-auto mt-4"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {CERTIFICATES_DATA.map((cert, index) => (
          <CertificateCard key={cert.name} cert={cert} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Certificates;