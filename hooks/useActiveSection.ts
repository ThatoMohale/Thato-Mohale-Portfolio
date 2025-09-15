import { useState, useEffect, useRef } from 'react';

interface ObserverOptions {
  root?: Element | null;
  rootMargin?: string;
  threshold?: number | number[];
}

/**
 * Custom hook to track which section is currently active in the viewport.
 * @param sectionIds - An array of element IDs to observe.
 * @param options - Configuration for the Intersection Observer.
 * @returns {string} - The ID of the currently active section.
 */
export const useActiveSection = (
  sectionIds: string[],
  options: ObserverOptions
): string => {
  const [activeSection, setActiveSection] = useState('');
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Cleanup previous observer if it exists
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    // Create a new observer
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    // Observe all the sections
    const currentObserver = observerRef.current;
    sectionIds.forEach(id => {
      const element = document.getElementById(id);
      if (element) {
        currentObserver.observe(element);
      }
    });

    // Cleanup on unmount
    return () => {
      if (currentObserver) {
        currentObserver.disconnect();
      }
    };
  }, [sectionIds, options]); // Re-run effect if sectionIds or options change

  return activeSection;
};