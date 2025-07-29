import React from 'react';
import { Helmet } from 'react-helmet-async';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center">
      <Helmet>
        <title>404 - Page Not Found | Robin Allen Portfolio</title>
        <meta name="description" content="The page you're looking for doesn't exist." />
      </Helmet>
      <div className="text-center px-4">
        <h1 className="text-6xl font-bold text-pink-500 mb-4">404</h1>
        <p className="text-xl text-white mb-8">Oops! The page you're looking for doesn't exist.</p>
        <a
          href="/"
          className="inline-block px-6 py-3 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition-colors"
        >
          Return Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
