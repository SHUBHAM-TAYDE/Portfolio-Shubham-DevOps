import React from 'react';
import { Globe } from 'lucide-react'; // Import Globe icon

const PostsPage = () => {
  const posts = [
    {
      title: 'Understanding Kubernetes Deployments',
      date: 'July 20, 2024',
      snippet: 'A deep dive into how Kubernetes Deployments work, best practices for managing your applications, and common pitfalls to avoid.',
      link: '#',
    },
    {
      title: 'Automating Cloud Infrastructure with Terraform',
      date: 'July 15, 2024',
      snippet: 'Learn the fundamentals of Infrastructure as Code using Terraform to provision and manage resources across various cloud providers.',
      link: '#',
    },
    {
      title: 'CI/CD with GitHub Actions: A Practical Guide',
      date: 'July 10, 2024',
      snippet: 'Setting up continuous integration and continuous deployment pipelines using GitHub Actions for efficient and automated software delivery.',
      link: '#',
    },
  ];

  return (
    <section className="py-12 px-4 bg-gray-900 rounded-xl shadow-2xl border border-gray-700">
      <h2 className="text-4xl font-bold text-center text-teal-400 mb-10 drop-shadow-md">My Latest Posts</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post, index) => (
          <div
            key={index}
            className="bg-gray-800 p-7 rounded-lg shadow-xl hover:shadow-teal-500/20 transition-all duration-300 ease-in-out transform hover:-translate-y-2 border border-gray-700 hover:border-teal-600 flex flex-col"
          >
            <h3 className="text-2xl font-semibold text-gray-200 mb-3">{post.title}</h3>
            <p className="text-sm text-gray-400 mb-4">{post.date}</p>
            <p className="text-gray-300 mb-6 flex-grow leading-relaxed">{post.snippet}</p>
            <a
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-5 rounded-full transition-all duration-300 ease-in-out transform hover:scale-105 shadow-md hover:shadow-lg self-start"
            >
              Read More <Globe className="ml-2" size={18} />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PostsPage;

