import React, { useState, useEffect } from 'react';

const Hero: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger the animation shortly after the component mounts
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center text-center relative overflow-hidden bg-gray-50 dark:bg-black">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_rgba(0,0,0,0.03)_0%,_transparent_50%)] dark:bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.03)_0%,_transparent_50%)]"></div>

      <div className="z-10 px-4">
        <h1 className={`
          text-4xl sm:text-5xl md:text-7xl font-black text-black dark:text-white uppercase tracking-wider mb-4 
          transition-all duration-700 ease-out delay-200
          ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}
        `}>
          Thato Mohale
        </h1>
        <p className={`
          text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-300 font-medium mb-8 
          transition-all duration-700 ease-out delay-300
          ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}
        `}>
          AI/ML Enthusiast & Aspiring Data Analyst
        </p>
        <p className={`
          text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-10 
          transition-all duration-700 ease-out delay-500
          ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}
        `}>
            Bridging data analysis with AI-driven innovation.
        </p>
        <a 
          href="https://github.com/ThatoMohale"
          target="_blank"
          rel="noopener noreferrer"
          className={`
            inline-block border border-black dark:border-white text-black dark:text-white font-bold py-3 px-8 rounded-full 
            hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transform hover:scale-105
            transition-all duration-700 ease-out delay-700
            ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}
          `}
        >
          View My Work
        </a>
      </div>
    </section>
  );
};

export default Hero;