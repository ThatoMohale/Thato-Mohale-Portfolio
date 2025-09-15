import React, { useRef } from 'react';
import type { Skill } from '../types';
import { SKILLS_DATA } from '../constants';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const SkillCard: React.FC<{ skill: Skill; index: number }> = ({ skill, index }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  // Use the hook to track visibility. The animation will trigger once when the card is 10% visible.
  const isVisible = useIntersectionObserver(cardRef, { threshold: 0.1 }, true);
  
  const Icon = skill.icon;
  
  return (
    <div 
      ref={cardRef}
      className={`bg-white dark:bg-zinc-900 p-6 rounded-lg border border-gray-200 dark:border-gray-800 transition-all duration-500 ease-out transform hover:-translate-y-2 shadow-md hover:shadow-lg dark:shadow-black/20 dark:hover:shadow-black/40 ${
        isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-5 scale-95'
      }`}
      // Apply a staggered delay based on the card's index for a pleasing effect
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="flex items-center mb-4 text-gray-700 dark:text-gray-300">
        <span className="w-8 h-8">
          <Icon />
        </span>
        <h3 className="text-xl font-bold text-black dark:text-white ml-3">{skill.name}</h3>
      </div>
      <ul className="space-y-3">
        {skill.items.map((item) => {
          const ItemIcon = item.icon;
          return (
            <li key={item.name} className="flex items-center text-gray-600 dark:text-gray-300">
              <ItemIcon className="w-5 h-5 mr-3 text-gray-500 dark:text-gray-400 shrink-0" />
              <span>{item.name}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 md:py-28 bg-gray-50 dark:bg-black">
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-black dark:text-white">Technical Skills</h2>
        <div className="h-1 w-24 bg-gray-300 dark:bg-gray-700 mx-auto mt-4"></div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {SKILLS_DATA.map((skill, index) => (
          <SkillCard key={skill.name} skill={skill} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Skills;