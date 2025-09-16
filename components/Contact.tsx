import React from 'react';
import EmailIcon from './icons/EmailIcon';
import LinkedInIcon from './icons/LinkedInIcon';
import GithubIcon from './icons/GithubIcon';
import DocumentDownloadIcon from './icons/DocumentDownloadIcon';

const Contact: React.FC = () => {
  // FIX: Store the component type instead of the element to avoid React.cloneElement and its typing issues.
  const contactLinks = [
    { name: 'Email', Icon: EmailIcon, href: 'mailto:11mohale02@gmail.com' },
    { name: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/thato-mohale-44384124b' },
    { name: 'GitHub', Icon: GithubIcon, href: 'https://github.com/ThatoMohale' },
    { name: 'Resume', Icon: DocumentDownloadIcon, href: 'Thato_Mohale_Capaciti_CV.docx', download: true },
  ];

  return (
    <section id="contact" className="py-20 md:py-28 bg-gray-50 dark:bg-black">
      <div className="text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-black dark:text-white">Contact Me</h2>
        <div className="h-1 w-24 bg-gray-300 dark:bg-gray-700 mx-auto mt-4"></div>
        <p className="mt-6 text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of an innovative team.
        </p>
        <div className="flex justify-center items-center space-x-6 sm:space-x-8 mt-12">
          {contactLinks.map(link => {
            // FIX: Render the icon as a component and pass props directly.
            // This is cleaner and more type-safe than React.cloneElement.
            const Icon = link.Icon;
            return (
              <a 
                key={link.name} 
                href={link.href} 
                target="_blank" 
                rel="noopener noreferrer"
                download={link.download}
                aria-label={link.name}
                className="text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-transform duration-300 hover:scale-125"
              >
                <Icon className='w-8 h-8 sm:w-10 sm:h-10' />
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Contact;
