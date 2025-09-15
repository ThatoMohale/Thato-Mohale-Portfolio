import React from 'react';

const EducationItem: React.FC<{ degree: string; period: string; last?: boolean }> = ({ degree, period, last = false }) => (
  <div className="relative pl-8 sm:pl-10">
    {!last && <div className="absolute left-3 top-3 -bottom-3 w-0.5 bg-gray-300 dark:bg-gray-700"></div>}
    <div className="absolute left-0 top-1.5 w-6 h-6 bg-gray-100 dark:bg-gray-800 rounded-full border-4 border-white dark:border-black flex items-center justify-center">
      <div className="w-2 h-2 bg-gray-500 dark:bg-gray-400 rounded-full"></div>
    </div>
    <h3 className="text-xl font-semibold text-black dark:text-white">{degree}</h3>
    <p className="text-gray-500 dark:text-gray-400 mt-1">{period}</p>
  </div>
);

const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 md:py-28 bg-gray-50 dark:bg-black">
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-black dark:text-white">Education</h2>
        <div className="h-1 w-24 bg-gray-300 dark:bg-gray-700 mx-auto mt-4"></div>
      </div>
      <div className="max-w-2xl mx-auto space-y-12">
        <EducationItem
          degree="IIE Bachelor of Information Technology In Business Systems"
          period="2022 - 2024"
        />
        <EducationItem
          degree="IIE Higher Certificate In Information Technology in Support Systems"
          period="2021"
          last={true}
        />
      </div>
    </section>
  );
};

export default Education;