import React from 'react';
import { Link } from 'react-router-dom'; // React Router के लिए

const ErrorPage = ({ 
  statusCode = 404, 
  message = "Page Not Found",
  details = "The page you are looking for might have been removed, had its name changed, or is temporarily unavailable."
}) => {
  return (
    // Main Container: Full viewport height, centered content
    <div className="flex items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="text-center p-6 sm:p-10 max-w-lg mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-2xl">
        
        {/* Status Code (Large and BOLD) */}
        <h1 className="text-9xl font-extrabold text-red-600 dark:text-red-500 mb-4 tracking-wider">
          {statusCode}
        </h1>
        
        {/* Error Message */}
        <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
          {message}
        </h2>
        
        {/* Details/Description */}
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
          {details}
        </p>
        
        {/* Home Button (using React Router's Link) */}
        <Link 
          to="/" 
          className="inline-block px-6 py-3 text-lg font-medium text-white bg-indigo-600 rounded-lg shadow-md hover:bg-indigo-700 transition duration-300 ease-in-out transform hover:scale-105"
        >
          Go to Home
        </Link>
        
        {/* You can add a 'Contact Support' button too, if needed */}
        {/* <a 
          href="/contact" 
          className="inline-block ml-4 px-6 py-3 text-lg font-medium text-indigo-600 bg-white border border-indigo-600 rounded-lg shadow-md hover:bg-indigo-50 transition duration-300 ease-in-out"
        >
          Contact Support
        </a> */}
      </div>
    </div>
  );
};

export default ErrorPage;