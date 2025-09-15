import React from 'react';
import type { Project } from '../types';
import GithubIcon from './icons/GithubIcon';
import ExternalLinkIcon from './icons/ExternalLinkIcon';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const { title, description, tags, imageUrl, liveUrl, repoUrl } = project;

  return (
    <div className="bg-white dark:bg-zinc-900 rounded-lg overflow-hidden group border border-gray-200 dark:border-gray-800 hover:border-gray-400 dark:hover:border-gray-600 transition-all duration-300 flex flex-col shadow-lg dark:shadow-black/40 hover:shadow-xl dark:hover:shadow-zinc-800/60 transform hover:-translate-y-1">
      <div className="relative overflow-hidden h-48">
        <img src={imageUrl} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
        
        {/* Title visible when not hovered */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4 group-hover:opacity-0 transition-opacity duration-300" aria-hidden="true">
             <h3 className="text-xl font-bold text-white">{title}</h3>
        </div>

        {/* Hover Overlay with details */}
        <div className="absolute inset-0 bg-white/80 dark:bg-black/80 backdrop-blur-sm p-4 flex flex-col justify-center items-center text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <h3 className="text-xl font-bold text-black dark:text-white mb-2">{title}</h3>
          <p className="text-gray-700 dark:text-gray-300 text-sm mb-4 line-clamp-3">{description}</p>
          <div className="flex justify-center space-x-4 mt-2">
            <a href={repoUrl} target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors" aria-label="GitHub Repository">
              <GithubIcon className="w-7 h-7" />
            </a>
            <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors" aria-label="Live Demo">
              <ExternalLinkIcon className="w-7 h-7" />
            </a>
          </div>
        </div>
      </div>
      
      <div className="p-4 flex-grow flex flex-col justify-end">
        <div className="flex flex-wrap gap-2">
          {tags.map(tag => (
            <span key={tag} className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs font-semibold px-2.5 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;