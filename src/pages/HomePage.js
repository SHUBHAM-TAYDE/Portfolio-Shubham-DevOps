import React from 'react';
import { Cloud, Briefcase, Users, Rss, Globe } from 'lucide-react'; // Import necessary icons

const HomePage = ({ navigateTo }) => {
  const sections = [
    {
      title: 'Latest Posts',
      description: 'Read my insights and articles on DevOps, Cloud, and related technologies.',
      icon: <Rss size={40} className="text-teal-400" />,
      page: 'posts'
    },
    {
      title: 'Featured Projects',
      description: 'Dive into real-world projects where I\'ve applied DevOps principles to automate, optimize, and secure infrastructure and applications.',
      icon: <Briefcase size={40} className="text-blue-400" />,
      page: 'projects'
    },
    {
      title: 'About Me',
      description: 'Learn about my journey as a DevOps Engineer and my role as a Community Lead at TrainWithShubham, fostering growth and knowledge sharing.',
      icon: <Users size={40} className="text-purple-400" />,
      page: 'about'
    },
  ];

  return (
    <section className="py-12 px-4">
      {/* Hero Section */}
      <div className="relative flex flex-col items-center justify-center min-h-[calc(100vh-280px)] py-12 px-4 bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl shadow-2xl overflow-hidden border border-gray-700 mb-12 text-center">
        {/* Background Grid/Pattern for DevOps feel */}
        <div className="absolute inset-0 z-0 opacity-10" style={{
          backgroundImage: 'linear-gradient(to right, #374151 1px, transparent 1px), linear-gradient(to bottom, #374151 1px, transparent 1px)',
          backgroundSize: '20px 20px'
        }}></div>
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-transparent via-gray-900/10 to-gray-900/30"></div>

        {/* Personal Image */}
        <div className="relative z-10 mb-8 animate-fadeInDown">
          <img
            src="https://raw.githubusercontent.com/SHUBHAM-TAYDE/Portfolio-shubham/main/portfolio/assets/images/shubham%20linkdin.jpeg.jpg"
            alt="Shubham's Personal Image"
            className="rounded-full border-4 border-teal-500 shadow-2xl w-48 h-48 object-cover transform hover:scale-105 transition-transform duration-500 ease-in-out ring-4 ring-blue-500/50"
            onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/200x200/1F2937/9CA3AF?text=Image+Error"; }}
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-10">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-gray-100 mb-4 animate-fadeInUp drop-shadow-lg">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Shubham</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 animate-fadeInUp delay-100">
            <span className="text-teal-400 font-bold">{'>'}</span> Network Engineer | DevOps Community Lead @ <span className="text-blue-400 font-semibold">TrainWithShubham</span>
          </p>
        </div>
      </div>

      {/* Section Overview (Row-wise) */}
      <div className="bg-gray-900 rounded-xl shadow-2xl border border-gray-700 py-12 px-4">
        <h2 className="text-4xl font-bold text-center text-teal-400 mb-10 drop-shadow-md">Quick Tour of My Portfolio</h2>
        <div className="flex flex-col space-y-8">
          {sections.map((section, index) => (
            <div
              key={index}
              className="bg-gray-800 p-7 rounded-lg shadow-xl hover:shadow-teal-500/20 transition-all duration-300 ease-in-out transform hover:-translate-y-2 border border-gray-700 hover:border-teal-600 flex flex-col md:flex-row items-center md:items-start text-center md:text-left"
            >
              <div className="mb-4 md:mb-0 md:mr-6 flex-shrink-0">{section.icon}</div>
              <div className="flex-grow">
                <h3 className="text-2xl font-semibold text-gray-200 mb-3">{section.title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{section.description}</p>
                <button
                  onClick={() => navigateTo(section.page)}
                  className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-5 rounded-full transition-all duration-300 ease-in-out transform hover:scale-105 shadow-md hover:shadow-lg"
                >
                  Go to {section.page.charAt(0).toUpperCase() + section.page.slice(1)}
                  <Globe className="ml-2" size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomePage;

