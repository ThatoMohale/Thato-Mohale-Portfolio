import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-white dark:bg-black">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-black dark:text-white">About Me</h2>
        <div className="h-1 w-24 bg-gray-300 dark:bg-gray-700 mx-auto mt-4"></div>
      </div>
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-10">
        <div className="relative bg-white p-2 rounded-2xl shadow-2xl">
          <img src="PortfolioPage.jpg" 
                alt="My pic" 
                className="w-80 h-96 object-cover rounded-xl shadow-lg"/>
                </div>
        <div className="md:w-2/3 text-center md:text-left">
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            I am Thato Mohale, an AI/ML enthusiast and aspiring Data Analyst passionate about uncovering insights from data. With a strong foundation in programming and hands-on experience in AI-driven projects, I bring a unique combination of technical depth and analytical thinking to deliver solutions that optimize business operations and empower decision-making. My journey is fueled by a constant curiosity to translate complex data into actionable strategies and create measurable impact through technology.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
