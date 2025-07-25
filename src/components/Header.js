import React from 'react';
import { Cloud } from 'lucide-react'; // Import Cloud icon

const Header = ({ navigateTo, currentPage }) => {
  const navItems = [
    { name: 'Home', page: 'home' },
    { name: 'Posts', page: 'posts' },
    { name: 'Projects', page: 'projects' },
    { name: 'About', page: 'about' },
  ];

  return (
    <header className="bg-gray-900 shadow-2xl py-4 px-6 sticky top-0 z-50 border-b border-teal-700/30">
      <nav className="container mx-auto flex justify-between items-center">
        {/* Logo/Brand Name */}
        <div className="text-2xl font-extrabold text-teal-400 flex items-center">
          <Cloud className="mr-2 text-blue-500 animate-pulse-slow" size={32} />
          Shubham's DevOps Hub
        </div>
        {/* Navigation Links */}
        <ul className="flex space-x-6">
          {navItems.map((item) => (
            <li key={item.page}>
              <button
                onClick={() => navigateTo(item.page)}
                className={`text-lg font-semibold relative group transition-all duration-300 ease-in-out
                  ${currentPage === item.page ? 'text-teal-400' : 'text-gray-300 hover:text-teal-300'}
                  focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50 pb-1`}
              >
                {item.name}
                <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-teal-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out ${currentPage === item.page ? 'scale-x-100' : ''}`}></span>
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;

