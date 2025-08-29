// src/pages/NotFoundPage.jsx
import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      
      <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full text-center">
          <div className="mb-8">
            <h1 className="text-9xl font-bold text-purple-600">404</h1>
            <div className="text-6xl mb-4">📦</div>
          </div>
          
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Oops! Shipment Not Found
          </h2>
          
          <p className="text-gray-600 mb-8">
            The page you're looking for seems to have been delivered to the wrong address. 
            Let's get you back on track!
          </p>
          
          <div className="space-y-4">
            <Link
              to="/"
              className="block w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-6 rounded-md transition-colors"
            >
              Back to Home
            </Link>
            
            <Link
              to="/track"
              className="block w-full bg-white hover:bg-gray-50 text-purple-600 border-2 border-purple-600 font-medium py-3 px-6 rounded-md transition-colors"
            >
              Track a Shipment
            </Link>
          </div>
          
          <div className="mt-8 text-sm text-gray-500">
            <p>Error Code: 404 | Page Not Found</p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default NotFoundPage;

