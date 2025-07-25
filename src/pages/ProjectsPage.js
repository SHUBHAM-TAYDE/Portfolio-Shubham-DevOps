import React from 'react';
import { Rocket, Cloud, HardDrive, Shield, Server, Briefcase, Globe } from 'lucide-react'; // Import necessary icons

const ProjectsPage = () => {
  const projects = [
    {
      title: 'Automated CI/CD Pipeline for Microservices',
      description: 'Designed and implemented a robust CI/CD pipeline using Jenkins, Docker, and Kubernetes for a microservices architecture, significantly reducing deployment time and improving reliability.',
      technologies: ['Jenkins', 'Docker', 'Kubernetes', 'Git', 'Shell Scripting', 'Prometheus'],
      link: '#', // Placeholder link
      icon: <Rocket size={24} className="text-teal-400" />
    },
    {
      title: 'Infrastructure as Code with Terraform & Ansible',
      description: 'Managed cloud infrastructure (AWS VPC, EC2, RDS) using Terraform and automated application deployments with Ansible, ensuring consistency and idempotency across environments.',
      technologies: ['Terraform', 'Ansible', 'AWS', 'YAML', 'Python'],
      link: '#', // Placeholder link
      icon: <Cloud size={24} className="text-blue-400" />
    },
    {
      title: 'Centralized Logging & Monitoring with ELK Stack',
      description: 'Set up a comprehensive logging and monitoring solution using Elasticsearch, Logstash, and Kibana (ELK) to provide real-time insights into application performance and system health.',
      technologies: ['Elasticsearch', 'Logstash', 'Kibana', 'Prometheus', 'Grafana', 'Fluentd'],
      link: '#', // Placeholder link
      icon: <HardDrive size={24} className="text-red-400" />
    },
    {
      title: 'DevSecOps Integration for Web Application',
      description: 'Integrated security practices into the CI/CD pipeline, including static code analysis (SAST), dynamic application security testing (DAST), and dependency scanning.',
      technologies: ['SonarQube', 'OWASP ZAP', 'Trivy', 'GitLab CI', 'Vault'],
      link: '#', // Placeholder link
      icon: <Shield size={24} className="text-gray-400" />
    },
    {
      title: 'Kubernetes Cluster Management & Optimization',
      description: 'Managed and optimized Kubernetes clusters on various cloud providers, focusing on cost efficiency, resource utilization, and high availability.',
      technologies: ['Kubernetes', 'Helm', 'kubectl', 'Prometheus', 'Grafana', 'Cloud Native'],
      link: '#', // Placeholder link
      icon: <Server size={24} className="text-purple-400" />
    },
    {
      title: 'Cloud Cost Optimization & Governance',
      description: 'Implemented strategies and tools for cloud cost management, resource tagging, and policy enforcement to optimize spending and ensure governance across cloud environments.',
      technologies: ['AWS Cost Explorer', 'CloudWatch', 'Azure Cost Management', 'GCP Billing', 'Policy as Code'],
      link: '#', // Placeholder link
      icon: <Briefcase size={24} className="text-yellow-400" />
    },
  ];

  return (
    <section className="py-12 px-4 bg-gray-900 rounded-xl shadow-2xl border border-gray-700">
      <h2 className="text-4xl font-bold text-center text-teal-400 mb-10 drop-shadow-md">My Key Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-800 p-7 rounded-lg shadow-xl hover:shadow-blue-500/20 transition-all duration-300 ease-in-out transform hover:scale-105 border border-gray-700 hover:border-blue-600 flex flex-col"
          >
            <div className="flex items-center mb-5">
              {project.icon}
              <h3 className="text-2xl font-semibold text-gray-200 ml-4">{project.title}</h3>
            </div>
            <p className="text-gray-300 mb-5 flex-grow leading-relaxed">{project.description}</p>
            <div className="mb-5">
              <span className="font-semibold text-teal-300 text-lg">Technologies:</span>
              <div className="flex flex-wrap mt-3">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-gray-700 text-gray-200 text-sm px-4 py-2 rounded-full mr-2 mb-2 border border-gray-600 hover:bg-gray-600 transition-colors duration-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition-all duration-300 ease-in-out transform hover:scale-105 self-start shadow-md hover:shadow-lg"
            >
              View Details <Globe className="ml-3" size={18} />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsPage;

