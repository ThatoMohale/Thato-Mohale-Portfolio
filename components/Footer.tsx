import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-white dark:bg-black border-t border-gray-200 dark:border-gray-800 py-6 text-center">
      <p className="text-gray-400 dark:text-gray-500 text-sm">
        &copy; {currentYear} Thato Mohale. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;