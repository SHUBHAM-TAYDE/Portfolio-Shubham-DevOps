import React from 'react';
import { Mail, Linkedin, Twitter, Github } from 'lucide-react'; // Import social media icons

const Footer = () => {
  return (
    <footer className="bg-gray-900 py-8 px-6 mt-12 shadow-inner-2xl border-t border-teal-700/30">
      <div className="container mx-auto text-center text-gray-400">
        <p className="mb-6 text-lg">&copy; {new Date().getFullYear()} Shubham. All rights reserved.</p>
        <div className="flex justify-center space-x-8">
          <a href="mailto:your.email@example.com" className="hover:text-teal-400 transition-colors duration-300 transform hover:scale-110" aria-label="Email">
            <Mail size={28} />
          </a>
          <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400 transition-colors duration-300 transform hover:scale-110" aria-label="LinkedIn">
            <Linkedin size={28} />
          </a>
          <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400 transition-colors duration-300 transform hover:scale-110" aria-label="Twitter">
            <Twitter size={28} />
          </a>
          <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400 transition-colors duration-300 transform hover:scale-110" aria-label="GitHub">
            <Github size={28} />
          </a>
        </div>
        <p className="mt-6 text-sm text-gray-500">Built with <span className="text-red-500">&hearts;</span> and a passion for DevOps.</p>
      </div>
    </footer>
  );
};

export default Footer;

