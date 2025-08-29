import React from "react";
import { Link } from "react-router-dom";
import warehouseImage from "../../assets/warehouse.jpg";

const HeroSection = () => {
  return (
    <div className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block bg-purple-100 text-purple-800 px-4 py-1 rounded-full text-sm font-semibold mb-4">
              Trusted by Industry Leaders
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Revolutionizing Logistics with{' '}
              <span className="text-purple-800">AI Intelligence</span>
            </h1>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              LogiTrack empowers both parcel receivers and service providers with 
              intelligent tracking solutions. From quick shipment tracking to advanced 
              AI-powered predictions, we're transforming how logistics works.
            </p>
            
            {/* Value Propositions */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-700 font-medium">Real-time Tracking for All</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                  <span className="text-purple-600 text-sm">🤖</span>
                </div>
                <span className="text-gray-700 font-medium">AI Predictions (Registered)</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-700 font-medium">No Login Required</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-700 font-medium">24/7 Support</span>
              </div>
            </div>

            {/* Updated CTA Strategy with Contact Us */}
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/track"
                  className="inline-block bg-purple-800 hover:bg-purple-700 text-white px-8 py-3 rounded-md font-medium transition-colors shadow-md text-center"
                >
                  Track Shipment
                </Link>
                <Link
                  to="/contact"
                  className="inline-block border-2 border-purple-800 text-purple-800 hover:bg-purple-50 px-8 py-3 rounded-md font-medium transition-colors text-center"
                >
                  Contact Us
                </Link>
              </div>
              
              {/* Secondary Actions */}
             
              
              <p className="text-sm text-gray-500 italic text-center">
                Start with free tracking, upgrade for AI-powered insights • Enterprise solutions available
              </p>
            </div>
          </div>
          
          <div className="lg:pl-8">
            <div className="relative">
              <img
                src={warehouseImage}
                alt="Modern warehouse with AI technology showcasing LogiTrack's advanced logistics solutions"
                className="w-full h-auto rounded-lg shadow-lg"
              />
              {/* Overlay Stats */}
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-lg font-bold text-purple-800">98%</div>
                      <div className="text-xs text-gray-600">Accuracy</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-purple-800">2M+</div>
                      <div className="text-xs text-gray-600">Tracked</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-purple-800">45%</div>
                      <div className="text-xs text-gray-600">Cost Saved</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
