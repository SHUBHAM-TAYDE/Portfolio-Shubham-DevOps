import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Import the main App component

// Create a root and render the App component into the DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

