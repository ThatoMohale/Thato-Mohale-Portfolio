import React, { useRef, useEffect, useState, useContext } from 'react';
import KiteIcon from './icons/KiteIcon';
import { ThemeContext } from '../contexts/ThemeContext';

const TRAIL_COUNT = 10;
const DOT_SIZE = 8;
const EASING = 0.2;

const KiteCursor: React.FC = () => {
  const { theme } = useContext(ThemeContext);
  const kiteRef = useRef<HTMLDivElement>(null);
  const dotsRef = useRef<(HTMLDivElement | null)[]>([]);
  const points = useRef(Array(TRAIL_COUNT).fill({ x: 0, y: 0 }).map(() => ({ x: 0, y: 0 })));
  const target = useRef({ x: 0, y: 0 });
  const animationFrameId = useRef<number>(0);

  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      target.current.x = e.clientX;
      target.current.y = e.clientY;

      if (!isVisible) setIsVisible(true);
      
      const targetElement = e.target as Element;
      setIsHovering(!!targetElement.closest('a, button, [role="button"]'));
    };
    
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove);
    document.documentElement.addEventListener('mouseenter', handleMouseEnter);
    document.documentElement.addEventListener('mouseleave', handleMouseLeave);

    const animate = () => {
      const leader = points.current[0];
      leader.x += (target.current.x - leader.x) * EASING;
      leader.y += (target.current.y - leader.y) * EASING;

      if (kiteRef.current) {
        kiteRef.current.style.transform = `translate(${leader.x}px, ${leader.y}px)`;
      }

      for (let i = 1; i < TRAIL_COUNT; i++) {
        const prev = points.current[i - 1];
        const curr = points.current[i];
        curr.x += (prev.x - curr.x) * EASING;
        curr.y += (prev.y - curr.y) * EASING;
        
        const dot = dotsRef.current[i - 1];
        if (dot) {
          dot.style.transform = `translate(${curr.x}px, ${curr.y}px)`;
        }
      }
      animationFrameId.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.documentElement.removeEventListener('mouseenter', handleMouseEnter);
      document.documentElement.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId.current);
    };
  }, [isVisible]);

  const kiteColor = theme === 'light' ? 'text-black' : 'text-white';
  const dotColor = theme === 'light' ? 'bg-black' : 'bg-white';
  const kiteFill = isHovering ? 'none' : 'currentColor';
  const kiteStrokeWidth = isHovering ? (theme === 'light' ? 2 : 4) : 0;


  return (
    <div className={`hidden md:block fixed top-0 left-0 w-0 h-0 pointer-events-none z-[9999] transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      {/* Kite Icon */}
      <div 
        ref={kiteRef} 
        className={`absolute -top-4 -left-4 transition-all duration-200 ${isHovering ? 'scale-150' : 'scale-100'}`}
      >
        <KiteIcon 
          className={`w-8 h-8 -rotate-45 transition-all duration-200 ${kiteColor}`}
          fill={kiteFill}
          stroke="currentColor"
          strokeWidth={kiteStrokeWidth}
        />
      </div>

      {/* Tail Dots */}
      {[...Array(TRAIL_COUNT - 1)].map((_, index) => {
        const scale = (TRAIL_COUNT - (index + 1)) / TRAIL_COUNT;
        return (
          <div
            key={index}
            // FIX: Changed ref callback to use a block statement to ensure it returns void and fix TypeScript error.
            ref={el => { dotsRef.current[index] = el; }}
            className={`absolute rounded-full ${dotColor}`}
            style={{
              width: DOT_SIZE * scale,
              height: DOT_SIZE * scale,
              top: -(DOT_SIZE * scale) / 2,
              left: -(DOT_SIZE * scale) / 2,
              opacity: scale * 0.7,
            }}
          />
        );
      })}
    </div>
  );
};

export default KiteCursor;