import React, { useState, useEffect } from 'react';
import { NAV_LINKS } from '../constants';
import Logo from './Logo';
import { useActiveSection } from '../hooks/useActiveSection';
import ThemeSwitcher from './ThemeSwitcher';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // This hook tracks which section is currently visible on the screen.
  // The root margin is adjusted to trigger the "active" state when a section is near the top of the viewport.
  const activeSection = useActiveSection(NAV_LINKS.map(l => l.href.substring(1)), { rootMargin: '-20% 0px -80% 0px' });


  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    if (!href) return;

    const targetElement = document.querySelector(href);
    if (targetElement) {
      const headerElement = document.querySelector('header');
      const headerOffset = headerElement ? headerElement.offsetHeight : 72; // Default offset if header not found

      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }

    // Close the mobile menu if it's open
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 dark:bg-black/80 backdrop-blur-sm shadow-lg dark:shadow-zinc-800' : 'bg-transparent'}`}>
      <div className="container mx-auto flex items-center justify-between px-6 md:px-12 py-4">
        <a 
          href="#" 
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="block transition-opacity duration-300 hover:opacity-80" 
          aria-label="Homepage"
        >
          <Logo className="h-8 w-auto text-black dark:text-white" />
        </a>

        <div className="flex items-center space-x-4">
            <nav className="hidden md:flex items-center space-x-2">
            {NAV_LINKS.map((link) => {
                const isActive = link.href === `#${activeSection}`;
                return (
                <a 
                    key={link.name} 
                    href={link.href} 
                    onClick={handleNavClick}
                    className={`relative px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                    isActive 
                        ? 'text-black dark:text-white' 
                        : 'text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white hover:bg-gray-100 dark:hover:bg-zinc-800'
                    }`}
                >
                    {link.name}
                    {isActive && (
                    <span className="absolute bottom-[-2px] left-1/2 w-1.5 h-1.5 -translate-x-1/2 rounded-full bg-black dark:bg-white transition-opacity duration-300"></span>
                    )}
                </a>
                );
            })}
            </nav>
            <ThemeSwitcher />
            <div className="md:hidden">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-gray-600 dark:text-gray-300 focus:outline-none" aria-label="Toggle mobile menu">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
                </svg>
            </button>
            </div>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white/90 dark:bg-zinc-900/90 backdrop-blur-sm">
          <nav className="flex flex-col items-center space-y-4 py-4">
            {NAV_LINKS.map((link) => {
              const isActive = link.href === `#${activeSection}`;
              return (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={handleNavClick}
                  className={`font-medium text-lg transition-all duration-300 ${
                    isActive ? 'text-black dark:text-white scale-110' : 'text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;