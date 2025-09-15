import { useState, useEffect, RefObject } from 'react';

interface ObserverOptions {
  root?: Element | null;
  rootMargin?: string;
  threshold?: number | number[];
}

/**
 * Custom hook that tracks the intersection of a DOM element with the viewport.
 * @param elementRef - A React ref object pointing to the element to observe.
 * @param options - Configuration for the Intersection Observer.
 * @param triggerOnce - If true, the observer will unobserve the target after the first intersection.
 * @returns {boolean} - True if the element is intersecting, false otherwise.
 */
const useIntersectionObserver = (
  elementRef: RefObject<Element>,
  options: ObserverOptions,
  triggerOnce: boolean = true
): boolean => {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIntersecting(true);
          if (triggerOnce) {
            observer.unobserve(entry.target);
          }
        } else if (!triggerOnce) {
          setIntersecting(false);
        }
      },
      options
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [elementRef, options, triggerOnce]);

  return isIntersecting;
};

export default useIntersectionObserver;
