import React, { useState } from 'react';
import Header from './components/Header'; // Import Header component
import Footer from './components/Footer'; // Import Footer component
import HomePage from './pages/HomePage';     // Import HomePage
import PostsPage from './pages/PostsPage';   // Import PostsPage
import ProjectsPage from './pages/ProjectsPage'; // Import ProjectsPage
import AboutPage from './pages/AboutPage';   // Import AboutPage

// Main App component that handles routing and renders different pages
const App = () => {
  const [currentPage, setCurrentPage] = useState('home'); // State to manage current page

  // Function to navigate between pages
  const navigateTo = (page) => {
    setCurrentPage(page);
  };

  // Render the current page based on the currentPage state
  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage navigateTo={navigateTo} />;
      case 'posts':
        return <PostsPage />;
      case 'projects':
        return <ProjectsPage />;
      case 'about':
        return <AboutPage />;
      default:
        return <HomePage navigateTo={navigateTo} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 to-gray-800 text-gray-100 font-inter flex flex-col">
      {/* Header component for navigation */}
      <Header navigateTo={navigateTo} currentPage={currentPage} />
      {/* Main content area */}
      <main className="flex-grow container mx-auto px-4 py-8">
        {renderPage()}
      </main>
      {/* Footer component */}
      <Footer />
    </div>
  );
};

export default App;

