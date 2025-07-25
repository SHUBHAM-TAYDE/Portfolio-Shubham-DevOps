import React from 'react';
import { Award, Briefcase, Zap, Users, Mail, Download, Settings, ArrowRight } from 'lucide-react'; // Import necessary icons

const AboutPage = () => {
  const experienceData = [
    {
      date: 'SEPTEMBER 2023 - PRESENT',
      title: 'Network Engineer',
      company: 'Bhartiya Jain Sanghatana',
      description: 'Intern, Align DevOps and Cloud strategies with client needs, ensuring agile and impactful solutions that evolve with industry trends.',
      bullet: <Settings size={18} className="text-teal-400" />
    },
    {
      date: 'MAY 2025 - PRESENT',
      title: 'DevOps Community Volunteer',
      company: 'Trainwithshubham',
      description: 'Responsible for mobile front-end development of e-commerce platform.',
      bullet: <Users size={18} className="text-orange-400" />
    },
    {
      date: 'MARCH 2022 - SEPTEMBER 2023',
      title: 'System Administrator',
      company: 'Shro System (Client Location : Bhartiya Jain Sanghatana)',
      description: 'Managed and maintained IT infrastructure, ensuring system stability, security, and optimal performance for various client operations.',
      bullet: <ArrowRight size={18} className="text-blue-400" />
    },
  ];

  const expertiseAreas = [
    'Cloud Infrastructure (AWS, Azure, GCP)',
    'CI/CD Pipelines & Automation',
    'Containerization & Orchestration (Docker, Kubernetes)',
    'Infrastructure as Code (Terraform, Ansible)',
    'Monitoring & Logging Solutions',
    'DevSecOps Practices',
    'Scripting & Programming (Python, Bash, Go)',
    'System Administration & Networking',
  ];

  return (
    <section className="py-12 px-4 bg-gray-900 rounded-xl shadow-2xl border border-gray-700">
      <h2 className="text-4xl font-bold text-center text-teal-400 mb-10 drop-shadow-md">About Me</h2>

      <div className="flex flex-col space-y-12">

        {/* Section 1: About Me (Personal Content) */}
        <div className="bg-gray-800 p-8 rounded-lg shadow-xl border border-gray-700">
          <h3 className="text-3xl font-semibold text-gray-200 mb-5 flex items-center">
            <Award className="mr-4 text-yellow-400" size={36} /> Who I Am
          </h3>
          <p className="text-gray-300 leading-relaxed text-lg mb-4">
            I am a passionate and results-driven DevOps Engineer with a strong background in building scalable, reliable, and efficient systems. My journey in technology has been driven by a curiosity for how things work and a desire to automate repetitive tasks to empower development teams. I thrive in dynamic environments where I can apply my skills in cloud architecture, CI/CD, containerization, and infrastructure as code to solve complex problems and deliver robust solutions.
          </p>
          <p className="text-gray-300 leading-relaxed text-lg">
            Beyond the technical aspects, I am deeply committed to fostering a collaborative culture and sharing knowledge. As a community lead, I enjoy connecting with fellow engineers, mentoring aspiring professionals, and contributing to the growth of the DevOps ecosystem.
          </p>
        </div>

        {/* Section 2: Experience (No vertical line) */}
        <div className="bg-gray-800 p-8 rounded-lg shadow-xl border border-gray-700">
          <h3 className="text-3xl font-bold text-gray-200 mb-6 drop-shadow-md">My Experience</h3>
          <div className="relative space-y-8">
            {experienceData.map((exp, index) => (
              <div key={index} className="flex items-start">
                {/* Bullet Icon/Circle */}
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-700 border border-gray-500 z-10 flex items-center justify-center shadow-md mr-4">
                  {exp.bullet}
                </div>
                <div className="flex-grow">
                  <p className="text-sm text-gray-400 font-medium mb-1">{exp.date}</p>
                  <h4 className="text-xl font-semibold text-gray-100 mb-1">{exp.title}</h4>
                  <p className="text-md text-teal-300 mb-2">{exp.company}</p>
                  <p className="text-gray-300 leading-relaxed">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 3: My Expertise */}
        <div className="bg-gray-800 p-8 rounded-lg shadow-xl border border-gray-700">
          <h3 className="text-3xl font-semibold text-gray-200 mb-6 flex items-center">
            <Zap className="mr-4 text-purple-400" size={36} /> My Expertise
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-lg text-gray-300">
            {expertiseAreas.map((area, index) => (
              <div key={index} className="flex items-center">
                <span className="text-teal-400 mr-3">•</span> {area}
              </div>
            ))}
          </div>
          <p className="text-gray-300 leading-relaxed text-lg mt-6">
            I continuously expand my knowledge in these areas to stay at the forefront of DevOps and cloud innovation.
          </p>
        </div>

        {/* TrainWithShubham Community Section */}
        <div className="bg-gray-800 p-8 rounded-lg shadow-xl border border-gray-700">
          <h3 className="text-3xl font-semibold text-gray-200 mb-5 flex items-center">
            <Users className="mr-4 text-purple-400" size={36} /> TrainWithShubham Community Lead
          </h3>
          <p className="text-gray-300 leading-relaxed text-lg mb-4">
            As a Community Lead for <span className="text-teal-400 font-semibold">TrainWithShubham</span>, I am dedicated to empowering aspiring and experienced DevOps professionals. Our community focuses on:
          </p>
          <ul className="list-none text-gray-300 space-y-3 mb-6">
            <li className="flex items-center text-lg"><span className="text-blue-400 mr-3">•</span> Sharing knowledge and best practices in DevOps and Cloud technologies.</li>
            <li className="flex items-center text-lg"><span className="text-blue-400 mr-3">•</span> Mentoring individuals through hands-on projects and real-world scenarios.</li>
            <li className="flex items-center text-lg"><span className="text-blue-400 mr-3">•</span> Fostering a collaborative environment for learning and growth.</li>
            <li className="flex items-center text-lg"><span className="text-blue-400 mr-3">•</span> Organizing workshops, webinars, and study groups.</li>
          </ul>
          <p className="text-gray-300 leading-relaxed text-lg">
            My role involves curating content, organizing events, and building a supportive network where members can thrive. Join us to accelerate your DevOps journey!
          </p>
          <a
            href="#" // Placeholder link for the community
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 px-6 rounded-full transition-all duration-300 ease-in-out transform hover:scale-105 mt-6 shadow-md hover:shadow-lg"
          >
            Visit TrainWithShubham <Globe className="ml-3" size={18} />
          </a>
        </div>

        {/* New Section: Let's Connect */}
        <div className="bg-gray-800 p-8 rounded-lg shadow-xl border border-gray-700 text-center">
          <h3 className="text-3xl font-semibold text-gray-200 mb-6 flex items-center justify-center">
            <Mail className="mr-4 text-green-400" size={36} /> Let's Connect
          </h3>
          <p className="text-gray-300 leading-relaxed text-lg mb-8">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out!
          </p>
          <a
            href="/assets/resume.pdf" // Updated path to resume
            download="Shubham_Resume.pdf"
            className="inline-flex items-center justify-center bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-75"
          >
            Download My Resume <Download className="ml-3" size={20} />
          </a>
        </div>

      </div>
    </section>
  );
};

export default AboutPage;

