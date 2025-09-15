import React from 'react';

export interface SkillItem {
  name: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
}

export interface Skill {
  name: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  items: SkillItem[];
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  liveUrl: string;
  repoUrl: string;
}

export interface NavLink {
  name: string;
  href: string;
}

export interface Certificate {
  name: string;
  issuer: string;
  date: string;
  url: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
}