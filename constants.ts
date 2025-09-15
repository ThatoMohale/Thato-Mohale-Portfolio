import React from 'react';
import type { Project, Skill, NavLink, Certificate, SkillItem } from './types';

// Category Icons
import CodeIcon from './components/icons/CodeIcon';
import BrainCircuitIcon from './components/icons/BrainCircuitIcon';
import CloudIcon from './components/icons/CloudIcon';
import ShieldCheckIcon from './components/icons/ShieldCheckIcon';

// Certificate Icons
import AsuIcon from './components/icons/AsuIcon';
import AwsIcon from './components/icons/AwsIcon';
import DeepLearningAiIcon from './components/icons/DeepLearningAiIcon';
import GoogleCloudIcon from './components/icons/GoogleCloudIcon';
import IbmIcon from './components/icons/IbmIcon';
import IntelIcon from './components/icons/IntelIcon';
import JohnsHopkinsIcon from './components/icons/JohnsHopkinsIcon';
import MicrosoftIcon from './components/icons/MicrosoftIcon';

// Individual Skill Icons
import PythonIcon from './components/icons/PythonIcon';
import JavaScriptIcon from './components/icons/JavaScriptIcon';
import SqlIcon from './components/icons/SqlIcon';
import TypeScriptIcon from './components/icons/TypeScriptIcon';
import TensorFlowIcon from './components/icons/TensorFlowIcon';
import PyTorchIcon from './components/icons/PyTorchIcon';
import ScikitLearnIcon from './components/icons/ScikitLearnIcon';
import PandasIcon from './components/icons/PandasIcon';
import NumpyIcon from './components/icons/NumpyIcon';
import AzureIcon from './components/icons/AzureIcon';
import GitIcon from './components/icons/GitIcon';
import DockerIcon from './components/icons/DockerIcon';
import GlobeAltIcon from './components/icons/GlobeAltIcon';
import ServerStackIcon from './components/icons/ServerStackIcon';


export const NAV_LINKS: NavLink[] = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Education', href: '#education' },
  { name: 'Certificates', href: '#certificates' },
  { name: 'Contact', href: '#contact' },
];

export const SKILLS_DATA: Skill[] = [
  {
    name: 'Programming',
    icon: CodeIcon,
    items: [
      { name: 'Python', icon: PythonIcon },
      { name: 'JavaScript', icon: JavaScriptIcon },
      { name: 'SQL', icon: SqlIcon },
      { name: 'TypeScript', icon: TypeScriptIcon },
    ],
  },
  {
    name: 'AI/ML',
    icon: BrainCircuitIcon,
    items: [
      { name: 'TensorFlow', icon: TensorFlowIcon },
      { name: 'PyTorch', icon: PyTorchIcon },
      { name: 'Scikit-learn', icon: ScikitLearnIcon },
      { name: 'Pandas', icon: PandasIcon },
      { name: 'NumPy', icon: NumpyIcon },
    ],
  },
  {
    name: 'Cloud/DevOps',
    icon: CloudIcon,
    items: [
      { name: 'Azure', icon: AzureIcon },
      { name: 'AWS (basics)', icon: AwsIcon },
      { name: 'Git', icon: GitIcon },
      { name: 'Docker', icon: DockerIcon },
    ],
  },
  {
    name: 'IT',
    icon: ShieldCheckIcon,
    items: [
      { name: 'Networking', icon: GlobeAltIcon },
      { name: 'Security', icon: ShieldCheckIcon },
      { name: 'Systems Administration', icon: ServerStackIcon },
    ],
  },
];

export const PROJECTS_DATA: Project[] = [
  {
    title: 'AI Fundamentals Chatbot',
    description: 'An interactive AI educational chatbot that serves as a knowledge assistant for AI fundamentals, guiding users through core concepts.',
    tags: ['AI', 'Chatbot', 'Education', 'Landbot'],
    imageUrl: 'https://picsum.photos/seed/ai-education/800/600',
    liveUrl: 'https://landbot.online/v3/H-3058570-4RW9OUQIQ6GZC9I1/index.html',
    repoUrl: 'https://github.com/ThatoMohale/Sentiment-Analysis.git',
  },
  {
    title: 'Sentiment Analysis App',
    description: 'A web application that analyzes the sentiment of user-provided text, classifying it as positive, negative, or neutral using natural language processing.',
    tags: ['AI/ML', 'NLP', 'React', 'Vercel'],
    imageUrl: 'https://picsum.photos/seed/sentiment-graph/800/600',
    liveUrl: 'https://sentiment-analysis-wine-kappa.vercel.app/',
    repoUrl: 'https://github.com/ThatoMohale/Sentiment-Analysis.git',
  },
  {
    title: 'Intelligent Resume Generator',
    description: 'An intelligent resume generation system that creates customized, ATS-friendly resumes based on user inputs to enhance job applications.',
    tags: ['AI', 'ATS', 'Resume', 'Web App'],
    imageUrl: 'https://picsum.photos/seed/smart-resume/800/600',
    liveUrl: 'https://white-teressa-30.tiiny.site/',
    repoUrl: 'https://github.com/ThatoMohale/resume',
  },
];

export const CERTIFICATES_DATA: Certificate[] = [
  {
    name: 'AI Essentials',
    issuer: 'Intel & Coursera',
    date: 'Aug 2025',
    url: 'https://coursera.org/verify/54C1E7PXDK7K',
    icon: IntelIcon,
  },
  {
    name: 'AI For Everyone',
    issuer: 'DeepLearning.AI & Coursera',
    date: 'Aug 2025',
    url: 'https://coursera.org/verify/4YO1T6QY3XYF',
    icon: DeepLearningAiIcon,
  },
  {
    name: 'AI Foundations: Prompt Engineering with ChatGPT',
    issuer: 'Arizona State University & Coursera',
    date: 'Aug 2025',
    url: 'https://coursera.org/verify/R6Y02W3GRNA6',
    icon: AsuIcon,
  },
  {
    name: 'Building AI Powered Chatbots Without Programming',
    issuer: 'IBM & Coursera',
    date: 'Aug 2025',
    url: 'https://coursera.org/verify/2CKPEHK19NGR',
    icon: IbmIcon,
  },
  {
    name: 'Artificial Intelligence Essentials V2',
    issuer: 'IBM & Coursera',
    date: 'Aug 2025',
    url: 'https://www.credly.com/badges/d7329f4d-6a07-44b8-b603-6b0f0d2cec0c',
    icon: IbmIcon,
  },
  {
    name: 'Artificial Intelligence on Microsoft Azure',
    issuer: 'Microsoft & Coursera',
    date: 'Sep 2025',
    url: 'https://coursera.org/verify/VJS54GS9FVFV',
    icon: MicrosoftIcon,
  },
  {
    name: 'Generative AI with Large Language Models',
    issuer: 'DeepLearning.AI & AWS',
    date: 'Aug 2025',
    url: 'https://coursera.org/verify/M1YSBYDS4L27',
    icon: AwsIcon,
  },
  {
    name: 'Introduction to Artificial Intelligence (AI)',
    issuer: 'IBM & Coursera',
    date: 'Aug 2025',
    url: 'https://coursera.org/verify/Y8CF61IOX54F',
    icon: IbmIcon,
  },
  {
    name: 'Introduction to Generative AI',
    issuer: 'Google Cloud & Coursera',
    date: 'Aug 2025',
    url: 'https://coursera.org/verify/3P5NRCA2Z2D8',
    icon: GoogleCloudIcon,
  },
  {
    name: 'Introduction to Responsible AI',
    issuer: 'Google Cloud & Coursera',
    date: 'Aug 2025',
    url: 'https://coursera.org/verify/FGAQZ7MFBO4J',
    icon: GoogleCloudIcon,
  },
  {
    name: 'Trustworthy AI: Managing Bias, Ethics, and Accountability',
    issuer: 'Johns Hopkins University & Coursera',
    date: 'Aug 2025',
    url: 'https://coursera.org/verify/XNTXUR6FY34A',
    icon: JohnsHopkinsIcon,
  },
];