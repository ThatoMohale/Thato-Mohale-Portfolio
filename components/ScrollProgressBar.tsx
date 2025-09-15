import React, { useState, useEffect } from 'react';

const ScrollProgressBar: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = () => {
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    
    // Prevent division by zero and ensure progress is 0 if there's no scrollbar
    const progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
    setScrollProgress(progress);
  };

  useEffect(() => {
    // Add event listener with passive option for better performance
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Calculate initial progress in case the page is reloaded at a scrolled position
    handleScroll();

    // Cleanup by removing the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    // The progress bar container is fixed at the top with a high z-index to be above other elements like the header
    <div className="fixed top-0 left-0 right-0 h-1 w-full bg-transparent z-[60]" role="progressbar" aria-valuenow={scrollProgress} aria-valuemin={0} aria-valuemax={100} aria-label="Page scroll progress">
      <div 
        className="h-full bg-black dark:bg-white transition-all duration-150 ease-out" 
        style={{ 
            width: `${scrollProgress}%`,
        }}
      ></div>
    </div>
  );
};

export default ScrollProgressBar;