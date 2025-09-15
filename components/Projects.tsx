import React from 'react';
import ProjectCard from './ProjectCard';
import { PROJECTS_DATA } from '../constants';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 md:py-28 bg-white dark:bg-black">
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-black dark:text-white">Featured Projects</h2>
        <div className="h-1 w-24 bg-gray-300 dark:bg-gray-700 mx-auto mt-4"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS_DATA.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;